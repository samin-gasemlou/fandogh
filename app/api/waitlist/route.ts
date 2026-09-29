import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { supabaseAdmin } from "@/lib/supabase";

const phonePattern = /^(?:09\d{9}|\+989\d{9}|00989\d{9})$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 160) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  if (!checkRateLimit(ip)) return NextResponse.json({ message: "تعداد درخواست‌ها زیاد است. چند دقیقه بعد دوباره امتحان کن." }, { status: 429 });

  try {
    const body = await request.json();
    const parentName = clean(body.parentName, 80);
    const phone = clean(body.phone, 20).replace(/[\s-]/g, "");
    const grade = clean(body.grade, 2);
    const email = clean(body.email, 160).toLowerCase();
    const website = clean(body.website, 100);
    const consent = body.consent === "yes";

    if (website) return NextResponse.json({ ok: true });
    if (parentName.length < 2 || !phonePattern.test(phone) || !["k1","k2","1","2","3"].includes(grade) || !consent) {
      return NextResponse.json({ message: "لطفاً اطلاعات ضروری را درست وارد کن." }, { status: 400 });
    }
    if (email && !emailPattern.test(email)) return NextResponse.json({ message: "ایمیل واردشده معتبر نیست." }, { status: 400 });

    if (supabaseAdmin) {
      const { error } = await supabaseAdmin.from("waitlist").insert({
        parent_name: parentName,
        phone,
        grade,
        email: email || null
      });
      if (error) {
        // شماره‌ی تکراری یا خطای دیتابیس — برای کاربر پیام مناسب برمی‌گردانیم، جزئیات را فقط لاگ می‌کنیم.
        console.error("WAITLIST_DB_ERROR", error.message);
        if (error.code === "23505") {
          return NextResponse.json({ message: "این شماره قبلاً ثبت شده. به‌زودی خبرت می‌کنیم! 🌱" }, { status: 409 });
        }
        return NextResponse.json({ message: "ثبت اطلاعات انجام نشد. دوباره تلاش کن." }, { status: 500 });
      }
    } else {
      // حالت توسعه‌ی محلی: تا SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY تنظیم نشده، فقط لاگ می‌کنیم تا فرم کار کند.
      console.warn("SUPABASE not configured — lead logged only, not persisted.");
      console.info("WAITLIST_LEAD", { parentName, phoneLast4: phone.slice(-4), grade, hasEmail: Boolean(email), createdAt: new Date().toISOString() });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "درخواست نامعتبر است." }, { status: 400 });
  }
}
