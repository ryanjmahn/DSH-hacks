"use client";

import { useEffect } from "react";

/* Marks each .sheet with .in as it enters the viewport; CSS draws its lines
   and lifts its title. Sheets already on screen at mount are marked at once so
   nothing flickers. [data-count] numbers count up the first time their sheet
   comes in. Reduced motion: everything is shown drawn, no counting. */
function countUp(el: HTMLElement) {
  const final = el.textContent ?? "";
  const m = final.match(/^(\D*)([\d,]+)(.*)$/);
  if (!m) return;
  const target = Number(m[2].replace(/,/g, ""));
  const t0 = performance.now();
  const step = (t: number) => {
    const k = Math.min(1, (t - t0) / 900);
    const v = Math.round(target * (1 - Math.pow(1 - k, 3)));
    el.textContent = k < 1 ? `${m[1]}${v.toLocaleString("en-US")}${m[3]}` : final;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sheets = Array.from(document.querySelectorAll<HTMLElement>(".sheet"));
    const vh = window.innerHeight;
    for (const s of sheets) {
      const r = s.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) s.classList.add("in");
    }
    document.documentElement.classList.add("reveal");
    const io = new IntersectionObserver(
      (es) => {
        for (const e of es) {
          if (!e.isIntersecting) continue;
          const s = e.target as HTMLElement;
          s.classList.add("in");
          s.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
          io.unobserve(s);
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    sheets.filter((s) => !s.classList.contains("in")).forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return null;
}
