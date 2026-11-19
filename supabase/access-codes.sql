-- Root & Simmer: access codes for the self-guided walk guide and Friend of Lincolnville invitations.
-- Run once in the Supabase SQL editor (after setup.sql). Safe to run again.
--
-- Rules (Kimberly, November 2026):
--   * Every membership gets 3 walk-guide codes a year to share; visitors buy a walk code for $15.
--   * Every homeowner membership gets 3 Friend of Lincolnville invitation codes a year ($50/yr Friend membership).
--   * A walk code is for one guest and expires (default: 3 days after first use).
--   * A Friend invitation code works once and expires 60 days after it is issued.

create table if not exists public.access_codes (
  code text primary key,
  kind text not null check (kind in ('walk', 'friend')),
  -- who the code came from: a member (their yearly allowance) or a sale/admin issue (null)
  issued_by uuid references public.members (id) on delete set null,
  source text not null default 'member' check (source in ('member', 'purchase', 'admin')),
  issued_to_name text,
  issued_to_email text,
  issued_at timestamptz not null default now(),
  -- an unused code stops working after this date
  expires_at timestamptz not null default (now() + interval '60 days'),
  -- walk codes: set when the guest first opens the guide; access then lasts access_days
  first_used_at timestamptz,
  access_days int not null default 3,
  -- friend codes: the member account created with it
  used_by uuid references public.members (id) on delete set null,
  revoked boolean not null default false,
  note text
);

create index if not exists access_codes_issued_by on public.access_codes (issued_by, kind, issued_at);

alter table public.access_codes enable row level security;

-- Members see the codes they issued; admins see everything.
drop policy if exists "members read codes they issued" on public.access_codes;
create policy "members read codes they issued" on public.access_codes for select
  using (issued_by = (select auth.uid()) or (select public.is_admin()));

-- Only admins write directly. Members get codes through the site's server code (service role),
-- which checks the yearly allowance of 3 per kind before issuing.
drop policy if exists "admins manage codes" on public.access_codes;
create policy "admins manage codes" on public.access_codes for all
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- How many codes of a kind a member has issued in the last 12 months (for the allowance of 3).
create or replace function public.codes_issued_this_year(member uuid, code_kind text) returns int
  language sql stable security definer set search_path = public as $$
  select count(*)::int from public.access_codes
  where issued_by = member and kind = code_kind and source = 'member' and issued_at > now() - interval '12 months';
$$;
