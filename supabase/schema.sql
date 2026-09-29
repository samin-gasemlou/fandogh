-- این کوئری را یک‌بار داخل Supabase → SQL Editor اجرا کن.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  parent_name text not null,
  phone text not null unique,
  grade text not null,
  email text,
  created_at timestamptz not null default now()
);

-- چون از service role key (سمت سرور) برای درج استفاده می‌کنیم، خواندن/نوشتن عمومی از سمت مرورگر لازم نیست.
alter table public.waitlist enable row level security;
