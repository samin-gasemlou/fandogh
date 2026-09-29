import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// این کلاینت فقط سمت سرور (داخل route.ts) استفاده می‌شود، هیچ‌وقت به مرورگر ارسال نمی‌شود.
// اگر متغیرهای محیطی تنظیم نشده باشند، null برمی‌گردد و route.ts به‌جای خطا دادن، لاگ می‌کند.
export const supabaseAdmin = url && serviceKey ? createClient(url, serviceKey, { auth: { persistSession: false } }) : null;
