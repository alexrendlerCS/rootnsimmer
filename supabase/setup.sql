-- Root & Simmer members' area: run once in the Supabase dashboard (SQL Editor -> New query -> paste -> Run).
-- Safe to run again: everything is "if not exists" / "or replace".

-- Members: one row per person Kimberly adds. Nobody signs up on their own.
create table if not exists public.members (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null unique,
  full_name text,
  role text not null default 'member' check (role in ('member', 'admin')),
  active boolean not null default true,
  home_parcels text[] not null default '{}',   -- City parcel numbers (STRAP) of the member's home(s), for the map
  member_since date not null default current_date,
  created_at timestamptz not null default now()
);

-- Documents: shared with every member, or private to one member. Archived, never deleted.
create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  description text,
  storage_path text not null unique,
  file_name text,
  size_bytes bigint,
  visibility text not null check (visibility in ('shared', 'private')),
  member_id uuid references public.members (id) on delete set null,
  archived boolean not null default false,
  replaces uuid references public.documents (id),
  created_at timestamptz not null default now(),
  constraint private_needs_member check (visibility = 'shared' or member_id is not null)
);
create index if not exists documents_member_idx on public.documents (member_id);

create or replace function public.is_active_member() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.members m where m.id = auth.uid() and m.active);
$$;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.members m where m.id = auth.uid() and m.active and m.role = 'admin');
$$;

-- Row level security: members read only what they may see. All changes go through the website's server
-- (secret key), so there are no insert/update/delete policies for the public key.
alter table public.members enable row level security;
alter table public.documents enable row level security;

drop policy if exists "members read self" on public.members;
create policy "members read self" on public.members for select
  using (id = (select auth.uid()) or (select public.is_admin()));

drop policy if exists "members read their documents" on public.documents;
create policy "members read their documents" on public.documents for select
  using (
    (select public.is_admin())
    or (not archived and (
      (visibility = 'shared' and (select public.is_active_member()))
      or (visibility = 'private' and member_id = (select auth.uid()))
    ))
  );

-- Private file storage. No storage policies on purpose: only the website's server can read or write,
-- and it hands members short-lived links after checking what they may see.
insert into storage.buckets (id, name, public, file_size_limit)
values ('member-files', 'member-files', false, 52428800)
on conflict (id) do nothing;
