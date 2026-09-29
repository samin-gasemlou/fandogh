"use client";

import { useEffect, useState } from "react";

export default function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    function update() {
      raf = 0;
      const nearBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight < 760;
      setVisible(window.scrollY > window.innerHeight * 0.65 && !nearBottom);
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <a href="#waitlist" className={`mobile-cta ${visible ? "is-visible" : ""}`}>
      <span className="mobile-cta-icon">🌰</span>
      همین الان عضو لیست انتظار شو
    </a>
  );
}
