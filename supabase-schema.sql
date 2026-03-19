-- Supabase SQL Editor mein chalao: evisa records table + public read, authenticated write

create table if not exists public.evisa_records (
  id uuid primary key default gen_random_uuid(),
  passport_number text not null default '',
  visa_number text not null default '',
  application_code text not null default '',
  status text not null default 'Pending',
  pdf_data_url text,
  buffered boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.evisa_records enable row level security;

-- Sab log (Track/Verify) records read kar sakte hain
create policy "evisa_records_select"
  on public.evisa_records for select
  using (true);

-- Sirf authenticated users (admin) insert/update/delete kar sakte hain
create policy "evisa_records_insert"
  on public.evisa_records for insert
  to authenticated
  with check (true);

create policy "evisa_records_update"
  on public.evisa_records for update
  to authenticated
  using (true)
  with check (true);

create policy "evisa_records_delete"
  on public.evisa_records for delete
  to authenticated
  using (true);
