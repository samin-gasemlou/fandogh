"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#ages", label: "برای چه سنی؟" },
  { href: "#why", label: "چرا فندق؟" },
  { href: "#world", label: "دنیای فندق" },
  { href: "#parents", label: "برای والدین" },
  { href: "#faq", label: "سؤالات" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="nav">
      <div className="container">
        <div className="nav-inner">
          <a className="brand" href="/" aria-label="فندق">
            <span className="brand-mark">
              <img src="/brand/logo-mark.png" alt="فندق" width={64} height={64} />
            </span>
            <span className="brand-text">
              فندق<small>یادگیری و رشد</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="ناوبری اصلی">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary nav-cta" href="#waitlist">
              عضویت در لیست انتظار
            </a>
            <button
              type="button"
              className={`menu-btn ${open ? "is-open" : ""}`}
              aria-label={open ? "بستن منو" : "باز کردن منو"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="منوی موبایل"
      >
        <nav className="mobile-menu-links" aria-label="ناوبری موبایل">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary btn-large" href="#waitlist" onClick={() => setOpen(false)}>
          عضویت در لیست انتظار ←
        </a>
      </div>

      <button
        type="button"
        className={`mobile-menu-backdrop ${open ? "is-open" : ""}`}
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
