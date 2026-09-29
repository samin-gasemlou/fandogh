"use client";

import { FormEvent, useState } from "react";

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "خطایی پیش آمد.");
      setStatus("ok");
      setMessage("عالیه! اطلاعاتت ثبت شد. وقتی فندق آماده‌ی شروع باشد باخبرت می‌کنیم. 🌱");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "ثبت اطلاعات انجام نشد. دوباره تلاش کن.");
    }
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="parentName">نام شما</label>
          <input id="parentName" name="parentName" required maxLength={80} placeholder="مثلاً سارا" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="phone">شماره موبایل</label>
          <input id="phone" name="phone" required inputMode="tel" maxLength={15} placeholder="09xxxxxxxxx" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="grade">سن یا پایه‌ی کودک</label>
          <select id="grade" name="grade" defaultValue="" required>
            <option value="" disabled>انتخاب کنید</option>
            <option value="k1">مهدکودک · ۳ تا ۴ ساله</option>
            <option value="k2">پیش‌دبستانی · ۵ تا ۶ ساله</option>
            <option value="1">اول دبستان · ۶ تا ۷ ساله</option>
            <option value="2">دوم دبستان · ۷ تا ۸ ساله</option>
            <option value="3">سوم دبستان · ۸ تا ۹ ساله</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="email">ایمیل <span>(اختیاری)</span></label>
          <input id="email" name="email" type="email" maxLength={160} placeholder="you@example.com" autoComplete="email" />
        </div>
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">وب‌سایت</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>با ثبت اطلاعات، با <a href="/privacy" style={{ textDecoration: "underline" }}>حریم خصوصی</a> فندق موافقم.</span>
      </label>
      <button className="btn btn-primary btn-large" type="submit" disabled={status === "loading"} style={{ width: "100%" }}>
        {status === "loading" ? "در حال ثبت…" : "می‌خوام زودتر با فندق آشنا بشم"}
      </button>
      {message && <div className={`form-msg ${status === "ok" ? "ok" : "err"}`} role="status">{message}</div>}
    </form>
  );
}
