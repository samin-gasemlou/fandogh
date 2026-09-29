// آدرس واقعی سایت را بعد از خرید دامنه در NEXT_PUBLIC_SITE_URL (روی Vercel) تنظیم کن.
// تا قبل از آن، خودش از دامنه‌ی خودکار Vercel یا localhost استفاده می‌کند — نیازی به ادیت دستی کد نیست.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
