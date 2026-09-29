import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteUrl } from "@/lib/site";

// فونت تیتر/برند: بالو بهایجان ۲ — گرد، بازیگوش و دوستانه، مناسب یک ماسکات بچگانه
// فایل به‌صورت لوکال (self-hosted) سرو می‌شود تا هیچ وابستگی‌ای به دسترسی فونت‌های گوگل نداشته باشیم.
const balooBhaijaan = localFont({
  src: "../public/fonts/BalooBhaijaan2-Variable.woff2",
  weight: "400 800",
  variable: "--font-heading",
  display: "swap"
});

// فونت متن: وزیرمتن — خوانا، مدرن و استاندارد برای بدنه‌ی متن فارسی
const vazirmatn = localFont({
  src: "../public/fonts/Vazirmatn-Variable.woff2",
  weight: "100 900",
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "فندق | یادگیری و رشد برای کوچولوهای کنجکاو",
  description: "فندق، دنیای یادگیری و رشد برای کودکان ۳ تا ۹ ساله (مهدکودک تا سوم دبستان)؛ آموزش، خلاقیت و مهارت‌های زندگی با یک دوست کنجکاو.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "فندق | یادگیری و رشد",
    description: "یاد بگیر، کشف کن، رشد کن.",
    type: "website",
    locale: "fa_IR"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fff6e7"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={`${balooBhaijaan.variable} ${vazirmatn.variable}`}>
      <body>{children}</body>
    </html>
  );
}
