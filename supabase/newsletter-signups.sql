-- Root & Simmer: the newsletter sign-up list (www.rootnsimmer.com/newsletter).
-- Run once in the Supabase SQL editor. Safe to run again.
-- The website writes here on the server with the secret key; nobody can read or write it from the browser.

create table if not exists public.newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null unique, -- saved in lower case by the website
  interests text[] not null default '{}',
  created_at timestamptz not null default now()
);

-- One row per email address: a second sign-up updates the name and interests instead of adding a duplicate.

-- Row level security on, with no public policies: only the server (secret key) can use the table.
alter table public.newsletter_signups enable row level security;
