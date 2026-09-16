"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/* Particle/halftone image (about-golden-gate-particles prompt) — renders a
   photo as a field of small dots instead of a flat <img>, in the same
   "engraved stipple" spirit as DitherField elsewhere on the site (see that
   file's own comment: "Dithering is engraved stipple by another name").
   The difference is what drives each cell: DitherField sends simplex noise
   through a threshold, this samples the actual photo and turns luminance
   into dot radius — classic halftone printing, done in true color instead
   of a single ink so the source image stays recognizable.

   - Two canvases: an offscreen one the photo is drawn into once (using the
     same object-fit:cover + object-position math CSS would use, so the
     crop matches what an <img> with those props would show), sampled via
     getImageData at a grid stride; and the visible one, which only ever
     draws small circles — never touches the raw pixels again.
   - Entrance: on scroll into view, each dot grows from radius 0 to its
     target radius with a small randomized per-dot delay, so the photo
     visibly assembles rather than popping in at once — the same "build,
     don't just appear" motion language as EngravedLineDraw's stroke
     draw-in and ECGPulse's dash reveal. Runs once, via requestAnimationFrame,
     then stops — no continuous animation once assembled (unlike DitherField,
     which keeps drifting), since there's nothing left to animate.
   - prefers-reduced-motion: skips straight to the fully-assembled frame. */

const MAX_RADIUS_FACTOR = 0.72; // relative to stride/2 — lets dark dots overlap slightly for solid coverage
const REVEAL_MS = 1400;
// Each dot's own grow animation is short (was 700ms, tied 1:1 to the stagger
// spread) — with every dot easing over the same long window as the stagger
// itself, nearly the entire particle set (tens of thousands of dots on a
// hero-sized image) was "active" and getting a fresh beginPath/arc/fill
// every single frame for almost the whole reveal, which is what actually
// showed up as jank. Shortening the per-dot window to a fast pop while
// keeping the same total REVEAL_MS/stagger spread turns this into a real
// sweeping wave — only the dots inside a ~180ms band of the sweep are ever
// drawn on a given frame, not the whole field at once.
const GROW_MS = 180;
const MAX_STAGGER_MS = REVEAL_MS - GROW_MS;
const REVEAL_FRAME_MS = 1000 / 45; // caps redraws during the reveal — the ease-out over 1.4s doesn't need native 90-120hz

interface Particle {
  x: number;
  y: number;
  r: number;
  color: string;
  delay: number;
  settled: boolean;
}

function coverDraw(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number,
  posX: number,
  posY: number
) {
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const drawW = img.naturalWidth * scale;
  const drawH = img.naturalHeight * scale;
  const dx = (w - drawW) * posX;
  const dy = (h - drawH) * posY;
  ctx.drawImage(img, dx, dy, drawW, drawH);
}

export default function ParticleImage({
  src,
  className,
  objectPosition = "50% 50%",
  alt = "",
  stride = 7,
  saturate = 1,
  contrast = 1,
  lightCutoff = 0.93,
}: {
  src: string;
  className?: string;
  objectPosition?: string;
  alt?: string;
  /** px between dot centers, in the offscreen sample space — lower = denser/more defined. */
  stride?: number;
  /** >1 pushes each dot's color away from gray toward its original hue, for more evident color. */
  saturate?: number;
  /** gamma applied to darkness before it sets radius — <1 fills out midtones for a bolder, more solid shape. */
  contrast?: number;
  /** luminance above this renders nothing (keeps open sky/background empty, not a faint grid). */
  lightCutoff?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const [posXStr, posYStr] = objectPosition.split(" ");
    const posX = (parseFloat(posXStr) || 50) / 100;
    const posY = (parseFloat(posYStr ?? posXStr) || 50) / 100;

    let cancelled = false;
    let raf = 0;
    let particles: Particle[] = [];
    let dpr = 1;
    let cssW = 0;
    let cssH = 0;

    const img = new window.Image();
    img.decoding = "async";
    img.src = src;

    // Rows processed per animation frame while sampling the photo into
    // particles. This loop can run 15-20k+ iterations for a hero-sized
    // image, and running it all in one synchronous pass was the actual
    // source of visible jank — a single ~50-80ms blocking task landing
    // right on img.onload, sometimes for two above-the-fold images back to
    // back. Chunking it across frames keeps every task short enough that
    // the browser never drops a frame building it, at the cost of the
    // particle field taking a few extra frames (well under 100ms total) to
    // finish sampling before its reveal can start.
    const ROWS_PER_CHUNK = 24;

    const buildParticles = (done: () => void) => {
      const rect = container.getBoundingClientRect();
      cssW = Math.max(1, Math.round(rect.width));
      cssH = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;

      // Sample at CSS resolution — we only need per-cell color, not a
      // high-res raster, since output is dots, not the photo itself.
      const off = document.createElement("canvas");
      off.width = cssW;
      off.height = cssH;
      const offCtx = off.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;
      coverDraw(offCtx, img, cssW, cssH, posX, posY);
      const { data } = offCtx.getImageData(0, 0, cssW, cssH);

      const maxR = (stride / 2) * MAX_RADIUS_FACTOR;
      const rows: number[] = [];
      for (let y = stride / 2; y < cssH; y += stride) rows.push(y);
      const next: Particle[] = [];
      let rowIndex = 0;

      const processChunk = () => {
        if (cancelled) return;
        const end = Math.min(rowIndex + ROWS_PER_CHUNK, rows.length);
        for (; rowIndex < end; rowIndex++) {
          const y = rows[rowIndex];
          for (let x = stride / 2; x < cssW; x += stride) {
            const i = (Math.floor(y) * cssW + Math.floor(x)) * 4;
            let r = data[i];
            let g = data[i + 1];
            let b = data[i + 2];
            const a = data[i + 3];
            if (a < 16) continue;
            const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
            if (luminance > lightCutoff) continue;
            if (saturate !== 1) {
              const gray = luminance * 255;
              r = Math.max(0, Math.min(255, gray + (r - gray) * saturate));
              g = Math.max(0, Math.min(255, gray + (g - gray) * saturate));
              b = Math.max(0, Math.min(255, gray + (b - gray) * saturate));
            }
            const darkness = Math.pow(1 - luminance, contrast);
            next.push({
              x,
              y,
              r: Math.max(0.4, maxR * darkness),
              color: `rgb(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)})`,
              delay: Math.random() * MAX_STAGGER_MS,
              settled: false,
            });
          }
        }
        if (rowIndex < rows.length) {
          raf = requestAnimationFrame(processChunk);
        } else {
          particles = next;
          done();
        }
      };
      processChunk();
    };

    // Cached once rather than re-fetched every frame — getContext is cheap
    // per-call, but the reveal loop can run 80+ times, and there's no reason
    // to pay it more than once.
    const ctx = canvas.getContext("2d");

    // Not cleared here — canvas.width/height (set in buildParticles) already
    // resets the bitmap to blank once, and every dot's radius only ever
    // grows, so a later, larger draw at the same center/color fully covers
    // its own earlier frame. That means a settled dot (already painted at
    // its final radius) needs no further work at all — skipping it is what
    // makes the per-frame cost shrink as the reveal progresses instead of
    // redrawing the entire field, settled or not, on every single frame.
    const drawFrame = (t: number) => {
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      for (const p of particles) {
        if (p.settled) continue;
        let scale = 1;
        if (t !== Infinity) {
          const local = Math.max(0, Math.min(1, (t - p.delay) / GROW_MS));
          scale = 1 - Math.pow(1 - local, 3); // ease-out cubic
        }
        if (scale <= 0) continue;
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r * scale, 0, Math.PI * 2);
        ctx.fill();
        if (scale >= 1) p.settled = true;
      }
    };

    const runReveal = () => {
      if (reduceMotion) {
        drawFrame(Infinity);
        return;
      }
      const start = performance.now();
      let lastDraw = 0;
      const loop = (now: number) => {
        const elapsed = now - start;
        if (elapsed - lastDraw >= REVEAL_FRAME_MS) {
          lastDraw = elapsed;
          drawFrame(elapsed);
        }
        if (elapsed < REVEAL_MS) {
          raf = requestAnimationFrame(loop);
        } else {
          drawFrame(Infinity);
        }
      };
      raf = requestAnimationFrame(loop);
    };

    let observer: IntersectionObserver | null = null;

    const onReady = () => {
      if (cancelled) return;
      buildParticles(() => {
        if (cancelled) return;
        drawFrame(0);
        observer = new IntersectionObserver(
          (entries) => {
            if (!entries[0].isIntersecting) return;
            runReveal();
            observer?.disconnect();
          },
          { threshold: 0.2 }
        );
        observer.observe(container);
      });
    };

    if (img.complete) onReady();
    else img.onload = onReady;

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [src, objectPosition, reduceMotion, stride, saturate, contrast, lightCutoff]);

  return (
    <div ref={containerRef} className={className}>
      <canvas ref={canvasRef} className="h-full w-full" role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : "true"} />
    </div>
  );
}
