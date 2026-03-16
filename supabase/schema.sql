-- ============================================================
-- Delta Life Insurance - Supabase Database Schema & RLS
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- 1. Contact Inquiries Table
create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- 2. District Offices Table
create table if not exists public.district_offices (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  city text not null,
  address text not null,
  full_address text not null,
  phone1 text not null,
  phone2 text,
  latitude double precision not null,
  longitude double precision not null,
  image_url text,
  is_hq boolean not null default false,
  created_at timestamptz not null default now()
);

-- ============================================================
-- Row Level Security (RLS) Policies
-- ============================================================

alter table public.contact_inquiries enable row level security;
alter table public.district_offices enable row level security;

-- Allow anonymous visitors to submit contact forms
create policy "Allow anonymous insert on contact_inquiries"
  on public.contact_inquiries for insert to anon with check (true);

-- Only admins can read contact submissions
create policy "Allow admin select on contact_inquiries"
  on public.contact_inquiries for select to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- Allow anyone to read office locations
create policy "Allow public select on district_offices"
  on public.district_offices for select to anon, authenticated using (true);

-- Only admins can manage offices
create policy "Allow admin insert on district_offices"
  on public.district_offices for insert to authenticated
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "Allow admin update on district_offices"
  on public.district_offices for update to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "Allow admin delete on contact_inquiries"
  on public.contact_inquiries for delete to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create policy "Allow admin delete on district_offices"
  on public.district_offices for delete to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- ============================================================
-- Seed Data: Delta Life District Offices in Georgia
-- ============================================================

insert into public.district_offices (name, city, address, full_address, phone1, phone2, latitude, longitude, image_url, is_hq) values
  ('Albany Office',       'Albany',       '2101 Dawson Rd',              '2101 Dawson Rd, Albany, GA 31707',                '(229) 439-7021', null, 31.602,   -84.184,  '/assets/offices/albany.jpg',      false),
  ('Atlanta Office',      'Atlanta',      '4370 Peachtree Rd NE Ste 500','4370 Peachtree Rd NE Ste 500, Atlanta, GA 30319','404-231-2111',   null, 33.8485,  -84.3635, '/assets/offices/atlanta.jpg',     true),
  ('Augusta Office',      'Augusta',      '1212 West Medical Park Rd',   '1212 West Medical Park Rd, Augusta, GA 30909',   '(706) 798-3244', null, 33.455,   -82.046,  '/assets/offices/augusta.jpg',     false),
  ('Douglas Office',      'Douglas',      '810 North Madison Ave',       '810 North Madison Ave, Douglas, GA 31533',       '(912) 384-3932', null, 31.509,   -82.851,  '/assets/offices/douglas.jpg',     false),
  ('Dublin Office',       'Dublin',       '120 Oak Street',              '120 Oak Street, Dublin, GA 31021',               '(478) 272-1312', null, 32.539,   -82.923,  '/assets/offices/dublin.jpg',      false),
  ('Macon Office',        'Macon',        '1314 Hardeman Ave',           '1314 Hardeman Ave, Macon, GA 31201',             '(478) 745-7961', null, 32.846,   -83.652,  '/assets/offices/macon.jpg',       false),
  ('Savannah Office',     'Savannah',     '2231 E Victory Dr',           '2231 E Victory Dr, Savannah, GA 31414',          '(912) 354-0996', null, 32.041,   -81.066,  '/assets/offices/savannah.jpg',    false),
  ('Thomasville Office',  'Thomasville',  '444 E Jackson St',            '444 E Jackson St, Thomasville, GA 31792',        '(229) 226-9390', null, 30.835,   -83.98,   '/assets/offices/thomasville.jpg', false);
