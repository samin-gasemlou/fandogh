# Fandogh Landing Page

Landing page for **فندق** — an RTL Persian children’s learning brand.

## Stack

- Next.js 16.3.6 (Active LTS at the time this project was created)
- React 19.2
- TypeScript
- Next App Router
- CSS-only 3D/soft-depth visual system (no heavy WebGL dependency)
- IntersectionObserver scroll reveal

## Routes

- `/` — main landing page
- `/privacy` — privacy policy starter
- `/terms` — terms starter
- `/sitemap.xml`
- `/robots.txt`
- `/api/waitlist` — server-side waitlist endpoint

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## راه‌اندازی Supabase (ذخیره‌ی واقعی لیست انتظار)

1. یک حساب رایگان در [supabase.com](https://supabase.com) بساز و یک پروژه‌ی جدید بزن.
2. برو به **SQL Editor** و محتوای فایل `supabase/schema.sql` را اجرا کن تا جدول `waitlist` ساخته شود.
3. برو به **Project Settings → API** و این دو مقدار را کپی کن:
   - **Project URL** → در `.env.local` به‌صورت `SUPABASE_URL=...`
   - **service_role key** (نه anon key) → به‌صورت `SUPABASE_SERVICE_ROLE_KEY=...`
4. یک فایل `.env.local` (کنار `.env.example`) بساز و این دو مقدار را داخلش بگذار.
5. `npm run dev` را دوباره اجرا کن؛ از این به بعد هر ثبت‌نام واقعی در جدول `waitlist` ذخیره می‌شود و از داشبورد Supabase (بخش Table Editor) قابل مشاهده و خروجی CSV است.
6. موقع دیپلوی روی Vercel، همین دو متغیر را در **Project Settings → Environment Variables** هم اضافه کن؛ وگرنه در پروداکشن دوباره فقط لاگ می‌گیرد و ذخیره نمی‌کند.

اگر این دو متغیر تنظیم نشده باشند، `app/api/waitlist/route.ts` خودش تشخیص می‌دهد و به‌جای خطا دادن، فقط در کنسول لاگ می‌کند — یعنی در توسعه‌ی محلی بدون Supabase هم فرم خراب نمی‌شود.

شماره موبایل `unique` است؛ اگر کسی دوباره همان شماره را بفرستد، پیام «قبلاً ثبت شده» نمایش داده می‌شود نه خطا.

## Waitlist persistence

The endpoint validates input, applies a simple per-process rate limit, and rejects the honeypot field. When `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` are set, leads are persisted to the `waitlist` table (see `supabase/schema.sql`). Without them, it falls back to logging only, so local dev never breaks.

For production at scale, move rate limiting to a shared store such as Redis/Upstash or a provider-level WAF/rate limit.

## Security

`next.config.ts` adds baseline security headers including CSP, HSTS, X-Content-Type-Options, frame protection, Referrer-Policy, and Permissions-Policy. Input is validated server-side. Secrets belong in environment variables and must never be committed.

## Brand assets

- `public/brand/logo.png`
- `public/brand/fandogh-character.png`

These are the generated Fandogh brand assets supplied during the design phase.
