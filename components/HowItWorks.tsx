"use client";

import { useEffect, useRef, useState } from "react";
import Tilt from "./Tilt";

const steps = [
  { title: "یادگیری کوتاه و جذاب", text: "ویدیو، داستان یا فعالیت کوتاه برای شروع." },
  { title: "تمرین تعاملی", text: "کودک یادگیری را با عمل کردن ادامه می‌دهد." },
  { title: "تحلیل پاسخ و اشتباه", text: "سیستم از پاسخ‌ها سرنخ‌های یادگیری می‌سازد." },
  { title: "قدم بعدی متناسب با کودک", text: "مسیر بعدی بر اساس سن، سطح و نیاز کودک تنظیم می‌شود." }
];

export default function HowItWorks() {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;
    function update() {
      raf = 0;
      const el = wrap.current;
      if (!el || !mq.matches) return;
      const r = el.getBoundingClientRect();
      const total = Math.max(1, r.height - window.innerHeight);
      const p = Math.min(1, Math.max(0, -r.top / total));
      el.style.setProperty("--how-p", p.toFixed(3));
      setActive(Math.min(steps.length - 1, Math.floor(p * steps.length)));
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  function choose(i: number) {
    const el = wrap.current;
    const pinned = window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)").matches;
    if (el && pinned) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      const total = el.offsetHeight - window.innerHeight;
      window.scrollTo({ top: top + ((i + 0.5) / steps.length) * total, behavior: "smooth" });
    } else {
      setActive(i);
    }
  }

  return (
    <div ref={wrap} className="how-scroll" id="how">
      <div className="how-sticky">
        <div className="container split">
          <div className="how-copy">
            <span className="eyebrow"><i className="eyebrow-dot" /> فندق‌یار</span>
            <h2 className="h2">یک همراه که<br />کودک را می‌شناسد.</h2>
            <p className="lead">فندق‌یار قرار نیست فقط جواب بدهد. از مسیر یادگیری کودک یاد می‌گیرد کجا راحت است، کجا گیر می‌کند و تمرین بعدی چطور باید باشد.</p>
            <div className="steps">
              {steps.map((s, i) => (
                <button
                  type="button"
                  key={s.title}
                  className={`step ${i === active ? "is-active" : ""} ${i < active ? "is-done" : ""}`}
                  aria-current={i === active}
                  onClick={() => choose(i)}
                >
                  <span className="step-num">{i + 1}</span>
                  <span className="step-body"><strong>{s.title}</strong><small>{s.text}</small></span>
                </button>
              ))}
            </div>
          </div>

          <div className="learning-board-wrap">
            <Tilt max={5} lift={16}>
            <div className="learning-board" aria-label="نمونه‌ای از محیط یادگیری فندق" aria-live="polite">
              <div className="board-top"><span>ریاضی · شمردن تا ۵</span><div className="progress"><i style={{ width: `${(active + 1) * 25}%` }} /></div></div>

              <div className="board-stack">
                <div className={`board-panel ${active === 0 ? "is-active" : ""}`}>
                  <div className="lesson-card">
                    <div className="panel-tag">📖 داستان کوتاه</div>
                    <div className="apple-row"><span>🍎</span><span>🍎</span><span>🍎</span></div>
                    <div className="question">فندق امروز ۳ تا سیب پیدا کرده!<br />بیا با هم بشماریمشون.</div>
                    <div className="audio"><b>▶</b><i /><small>۰:۲۰</small></div>
                  </div>
                </div>
                <div className={`board-panel ${active === 1 ? "is-active" : ""}`}>
                  <div className="lesson-card">
                    <div className="panel-tag">🎯 تمرین</div>
                    <div className="question">فندق ۳ تا سیب دارد 🍎<br />اگر ۲ سیب دیگر پیدا کند، چندتا دارد؟</div>
                    <div className="options"><div className="option">۴ 🍎</div><div className="option active">۵ 🍎</div><div className="option">۶ 🍎</div><div className="option">۳ 🍎</div></div>
                  </div>
                </div>
                <div className={`board-panel ${active === 2 ? "is-active" : ""}`}>
                  <div className="lesson-card">
                    <div className="panel-tag">🔍 تحلیل</div>
                    <div className="question">آفرین! 🎉 جواب درست بود.</div>
                    <div className="mini-report">
                      <div><span>دقت</span><i style={{ ["--w" as string]: "80%" } as React.CSSProperties} /></div>
                      <div><span>سرعت</span><i style={{ ["--w" as string]: "64%" } as React.CSSProperties} /></div>
                      <div><span>اعتمادبه‌نفس</span><i style={{ ["--w" as string]: "72%" } as React.CSSProperties} /></div>
                    </div>
                  </div>
                </div>
                <div className={`board-panel ${active === 3 ? "is-active" : ""}`}>
                  <div className="lesson-card">
                    <div className="panel-tag">🚀 قدم بعدی</div>
                    <div className="question">آماده‌ای برای ماجراجویی بعدی؟</div>
                    <div className="next-chips"><span>🧩 بازی الگوهای رنگی</span><span>📖 قصه‌ی فندق و ۶ سیب</span></div>
                  </div>
                </div>
              </div>
              <div className="tiny-orbit" />
            </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}
