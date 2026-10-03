"use client";

import { useEffect, useRef } from "react";
import { useScrollLoop, requestTick } from "./useScrollLoop";
import { ditherLum } from "@/components/plates/dither";
import { BEAT } from "./events";

/* The field: one fixed, low-res canvas of Atkinson-dithered cobalt ink with
   transparent darks. Its brightness is keyed to scroll position so ink rises
   into Prizes until the screen is solid cobalt, then drains before People. */
type Blob = [x: number, y: number, r: number, v: number];
type State = { o: number; b: number; blobs: Blob[] };
type Key = [section: string, anchor: number, state: State];

const KEYS: Key[] = [
  ["hero", .2, { o: .34, b: .04, blobs: [[.85, .25, .45, .75], [.10, .95, .35, .35]] }],
  ["about", .5, { o: .28, b: .02, blobs: [[.95, .55, .35, .55], [.05, .15, .25, .25]] }],
  ["plates", .5, { o: .20, b: 0, blobs: [[0, .5, .25, .45], [1, .1, .2, .2]] }],
  ["schedule", .85, { o: .30, b: .10, blobs: [[.8, 1, .6, .8], [.2, 1.1, .5, .6]] }],
  ["prizes", .15, { o: 1, b: 1, blobs: [[.5, .5, .1, 1], [.5, .5, .1, 1]] }],
  ["prizes", .7, { o: 1, b: 1, blobs: [[.5, .5, .1, 1], [.5, .5, .1, 1]] }],
  ["people", .06, { o: .30, b: .10, blobs: [[.2, 0, .6, .8], [.8, -.1, .5, .6]] }],
  ["ledger", .5, { o: .26, b: .02, blobs: [[.95, .45, .3, .5], [0, .9, .25, .3]] }],
  ["faq", .5, { o: .22, b: 0, blobs: [[0, .7, .3, .4], [.9, .1, .2, .25]] }],
  ["register", .6, { o: .40, b: .06, blobs: [[.8, .55, .5, .85], [.2, .2, .3, .4]] }],
];

const W = 200;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * (3 - 2 * t);

function mix(a: State, b: State, t: number): State {
  return {
    o: lerp(a.o, b.o, t),
    b: lerp(a.b, b.b, t),
    blobs: a.blobs.map((p, i) => p.map((v, j) => lerp(v, b.blobs[i][j], t)) as Blob),
  };
}

export default function Field() {
  const ref = useRef<HTMLCanvasElement>(null);
  const geo = useRef({ ys: [] as number[], vh: 1, h: 1, ok: false });
  const last = useRef("");
  const flash = useRef(false);

  const fail = () => {
    document.documentElement.classList.add("no-field");
    geo.current.ok = false;
  };

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let t = 0;
    const measure = () => {
      try {
        const vw = window.innerWidth, vh = window.innerHeight;
        const h = Math.max(1, Math.round((W * vh) / vw));
        if (canvas.width !== W || canvas.height !== h) {
          canvas.width = W;
          canvas.height = h;
          last.current = "";
        }
        const ys = KEYS.map(([id, a]) => {
          const el = document.getElementById(id);
          if (!el) return NaN;
          const r = el.getBoundingClientRect();
          return r.top + window.scrollY + r.height * a;
        });
        geo.current = { ys, vh, h, ok: ys.every((y) => !Number.isNaN(y)) };
        requestTick();
      } catch {
        fail();
      }
    };
    const schedule = () => {
      clearTimeout(t);
      t = window.setTimeout(measure, 120);
    };
    measure();
    window.addEventListener("resize", schedule);
    const ro = new ResizeObserver(schedule);
    const main = document.querySelector("main");
    if (main) ro.observe(main);
    const onBeat = () => {
      flash.current = true;
      last.current = "";
      requestTick();
      window.setTimeout(() => { last.current = ""; requestTick(); }, 90);
    };
    window.addEventListener(BEAT, onBeat);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", schedule);
      window.removeEventListener(BEAT, onBeat);
      ro.disconnect();
    };
  }, []);

  useScrollLoop((scrollY) => {
    const canvas = ref.current;
    const g = geo.current;
    if (!canvas || !g.ok) return;
    try {
      const p = scrollY + g.vh / 2;
      let s: State;
      if (flash.current) {
        flash.current = false;
        s = { o: 1, b: 1, blobs: KEYS[0][2].blobs };
      } else if (p <= g.ys[0]) s = KEYS[0][2];
      else if (p >= g.ys[g.ys.length - 1]) s = KEYS[KEYS.length - 1][2];
      else {
        let i = 0;
        while (g.ys[i + 1] < p) i++;
        const span = g.ys[i + 1] - g.ys[i];
        s = mix(KEYS[i][2], KEYS[i + 1][2], span > 0 ? smooth((p - g.ys[i]) / span) : 1);
      }
      const key = `${s.o.toFixed(3)}|${s.b.toFixed(3)}|${s.blobs.flat().map((v) => v.toFixed(3)).join(",")}`;
      if (key === last.current) return;
      last.current = key;
      render(canvas, s);
    } catch {
      fail();
    }
  });

  return <canvas ref={ref} className="field" aria-hidden="true" />;
}

function render(canvas: HTMLCanvasElement, s: State) {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no 2d context");
  const w = canvas.width, h = canvas.height, m = Math.max(w, h);
  const L = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let v = s.b * 255;
      for (const [bx, by, br, bv] of s.blobs) {
        const dx = (x / w - bx) * (w / m), dy = (y / h - by) * (h / m);
        const f = Math.max(0, 1 - Math.hypot(dx, dy) / br);
        v += bv * 255 * smooth(f);
      }
      // same darkening curve as the plates
      L[y * w + x] = 255 * Math.pow(Math.min(255, v) / 255, 1.9);
    }
  }
  const img = ctx.createImageData(w, h);
  ditherLum(L, w, h, img.data, null);
  ctx.putImageData(img, 0, 0);
  canvas.style.opacity = String(s.o);
}
