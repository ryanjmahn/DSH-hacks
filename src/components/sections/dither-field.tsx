"use client";

import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { useReducedMotion } from "framer-motion";

/* Dither field (§5D) — the Countdown section's graphic, on the inverted ground.
   Dithering is engraved stipple by another name: continuous tone faked with
   discrete marks, so it belongs here rather than as a bolted-on effect.

   - Canvas, not DOM. Thousands of cells; one fillRect loop, no per-cell
     objects, no shadow/blur.
   - Square cells ~10px, 2px gap, recomputed on resize.
   - Cell value = 3D simplex noise at (col*0.06, row*0.06, t*0.0004). The slow
     time axis makes clusters drift and dissolve rather than flicker.
   - Hard threshold: below THRESHOLD renders nothing, so the field is isolated
     clusters with empty space between them, not a uniform wash. Tuned to
     ~15-20% of cells lit.
   - 5 quantised opacity steps (0.10-0.45) against the ink ground — never
     continuous opacity; snapping to levels is what reads as dithering.
   - 30fps frame limiter. Paused off-screen (IntersectionObserver) and on
     visibilitychange. prefers-reduced-motion: one static frame, no loop.

   In dev it logs the lit fraction and rolling mean draw time once a second. */

const CELL = 10;
const GAP = 2;
const STRIDE = CELL + GAP;
const THRESHOLD = 0.645; // on the 0..1 remapped noise value — tuned to ~15-20% lit
const STEPS = 5;
const FRAME_MS = 1000 / 30;

// --paper (#FCFCFA) at the 5 quantised alphas, precomputed
const FILLS = Array.from({ length: STEPS }, (_, i) => {
  const a = 0.1 + (0.45 - 0.1) * (i / (STEPS - 1));
  return `rgba(252,252,250,${a.toFixed(3)})`;
});

export default function DitherField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const noise3D = createNoise3D();
    let cols = 0;
    let rows = 0;
    let dpr = 1;
    let raf = 0;
    let last = 0;
    let onScreen = true;
    let visible = !document.hidden;

    // dev instrumentation
    let acc = 0;
    let frames = 0;
    let logAt = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      cols = Math.ceil(rect.width / STRIDE);
      rows = Math.ceil(rect.height / STRIDE);
    };

    const draw = (t: number) => {
      const t0 = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const s = STRIDE * dpr;
      const c = CELL * dpr;
      const z = t * 0.0004;
      let lit = 0;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const v = (noise3D(col * 0.06, row * 0.06, z) + 1) * 0.5;
          if (v < THRESHOLD) continue;
          let step = Math.floor(((v - THRESHOLD) / (1 - THRESHOLD)) * STEPS);
          if (step >= STEPS) step = STEPS - 1;
          ctx.fillStyle = FILLS[step];
          ctx.fillRect(col * s, row * s, c, c);
          lit++;
        }
      }

      if (process.env.NODE_ENV !== "production") {
        acc += performance.now() - t0;
        frames++;
        if (t - logAt > 1000) {
          const total = cols * rows;
          // eslint-disable-next-line no-console
          console.log(
            `[dither] ${cols}×${rows}=${total} cells · lit ${((lit / total) * 100).toFixed(1)}% · draw ${(acc / frames).toFixed(2)}ms/frame`
          );
          acc = 0;
          frames = 0;
          logAt = t;
        }
      }
    };

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (!onScreen || !visible) return;
      if (t - last < FRAME_MS) return;
      last = t;
      draw(t);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      visible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);

    let resizeRaf = 0;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        resize();
        if (reduceMotion) draw(0);
      });
    };
    window.addEventListener("resize", onResize);

    resize();
    if (reduceMotion) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(resizeRaf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
