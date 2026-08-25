"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/* Shared building blocks for the sitewide redesign (hero excluded — it has its
   own bespoke markup and is signed off). Every section below the hero composes
   its heading, numbered lists, and stat numerals from these so the site reads
   as one system rather than a collection of one-off sections. */

/* Part 6's specified curve — used across every entry animation sitewide so
   motion reads as one system. Nothing bouncy, no library-default easings. */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function useFadeRise(delay = 0) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return { initial: undefined, whileInView: undefined, viewport: undefined, transition: undefined };
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, delay, ease: EASE_OUT },
  };
}

/** Eyebrow (serif italic) + display-caps heading. The recurring pattern that
 *  makes every section read as the same designed system.
 *
 *  Motion (Part 6, effect 3 — "sets the page rhythm"): the eyebrow fades in
 *  first; 150ms later the heading slides up from behind a clip mask rather
 *  than just fading, so it reads as being revealed, not appearing. */
export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "right" | "center";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const alignClass = align === "right" ? "text-right items-end" : align === "center" ? "text-center items-center" : "text-left items-start";

  // Observed on the wrapper, not the heading itself: the heading's own
  // *hidden* state is translated 110% out of place, which can itself drop
  // its visible ratio below the trigger threshold — a chicken-and-egg loop
  // where the transform meant to reveal it stops it from ever being seen.
  // The wrapper's geometry is untouched by the child's transform, so it's
  // a stable, predictable trigger.
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={cn("flex flex-col", alignClass, className)}>
      <motion.p
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4, ease: EASE_OUT }}
        className="type-eyebrow text-sienna"
      >
        {eyebrow}
      </motion.p>
      <div className="overflow-hidden">
        <motion.h2
          initial={reduceMotion ? undefined : { y: "110%" }}
          animate={reduceMotion ? undefined : { y: inView ? "0%" : "110%" }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
          className="type-display text-ink mt-1"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}

/** "01/" style numeral prefix for sequential content — schedule steps, judging
 *  criteria, workshop rows. Used in at least three sections per the brief.
 *  Mono, ochre — lapis stays reserved for the primary CTA and one accent per
 *  section, never spent on a repeating list marker. */
export function Numeral({ n, className }: { n: number; className?: string }) {
  return (
    <span className={cn("type-numeral select-none", className)}>
      {String(n).padStart(2, "0")}/
    </span>
  );
}

/** "a." "b." "c." specimen key — a distinct marker from Numeral, for
 *  catalogue/exhibit-style lists (V1 Recap's winning projects) rather than
 *  sequential steps. Same mono/ochre treatment, letter instead of digit. */
export function SpecimenKey({ index, className }: { index: number; className?: string }) {
  const letter = String.fromCharCode(97 + index); // 0 -> a, 1 -> b, ...
  return (
    <span className={cn("type-numeral select-none", className)}>
      {letter}.
    </span>
  );
}

/** Oversized statistic — the visual furniture of the site. */
/** Splits "$30K+" into {prefix:"$", target:30, suffix:"K+", hasComma:false},
 *  "1,294" into {prefix:"", target:1294, suffix:"", hasComma:true}, etc. —
 *  the digits run is what animates; everything else is fixed decoration
 *  reapplied around it every frame. Comma formatting only applies to
 *  intermediate frames if the *original* string used one, so a target like
 *  "1300+" (no comma) never briefly grows one mid-count. */
function parseStatValue(value: string) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  return { prefix, suffix, hasComma: numStr.includes(","), target: parseInt(numStr.replace(/,/g, ""), 10) };
}

const COUNT_UP_MS = 1200;

export function StatNumeral({
  value,
  label,
  className,
  delay = 0,
}: {
  value: string;
  label: string;
  className?: string;
  delay?: number;
}) {
  const motionProps = useFadeRise(delay);
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  // Server-rendered value is the real, final string from the start — this is
  // the bug fix the brief calls for. The count-up below only ever plays
  // AFTER that correct value has already painted; it's a bonus flourish on
  // top of already-correct markup, never the thing standing in for it.
  const [display, setDisplay] = useState(value);
  const parsed = parseStatValue(value);

  useEffect(() => {
    if (!inView || reduceMotion || !parsed) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_UP_MS);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      const current = Math.floor(eased * parsed.target);
      const numStr = parsed.hasComma ? current.toLocaleString("en-US") : String(current);
      setDisplay(`${parsed.prefix}${numStr}${parsed.suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value); // land on the exact original string, no rounding drift
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion]);

  return (
    <motion.div {...motionProps} className={cn("flex flex-col", className)}>
      <span ref={ref} className="type-display text-ink tabular-nums">{display}</span>
      <span className="type-meta text-ink-muted mt-2">{label}</span>
    </motion.div>
  );
}

/** Bleached anatomical/architectural plate — same treatment as Beat 2, scaled
 *  down: desaturated, feathered radial mask, no bounding box, plaster mottling
 *  (not uniform grain — Part 1's processing pipeline). Never sits directly
 *  behind body copy at a density that hurts contrast. */
export function BleachedPlate({
  srcBase,
  alt = "",
  className,
  maskPosition = "50% 42%",
  presence = 0.35,
  grain = true,
}: {
  srcBase: string;
  alt?: string;
  className?: string;
  maskPosition?: string;
  presence?: number;
  grain?: boolean;
}) {
  // Radii + transparent-stop are tuned so full transparency lands well inside
  // the box on every axis (~30% margin) — otherwise the "stain" reads as a box.
  const mask = `radial-gradient(ellipse 55% 55% at ${maskPosition}, black 0%, black 15%, transparent 62%)`;
  return (
    <div className={cn("relative overflow-hidden pointer-events-none", className)} aria-hidden={alt === ""}>
      {/* grain lives inside the masked layer so it fades with the plate instead
          of tinting the whole rectangular box — an unmasked sibling here is
          what caused a faint but very real "box" around the feathered image. */}
      <div
        className="absolute inset-0"
        style={{ opacity: presence, WebkitMaskImage: mask, maskImage: mask }}
      >
        <picture>
          <source srcSet={`${srcBase}.webp`} type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${srcBase}.jpg`}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(1) contrast(0.82) brightness(1.3)" }}
          />
        </picture>
        {grain && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "var(--plaster-texture-svg)", mixBlendMode: "multiply", opacity: Math.min(1, 0.16 / presence) }}
          />
        )}
      </div>
    </div>
  );
}

/** Engraved line-draw (Part 6, effect 4) — About and Register only, two
 *  instances, per the brief. Fetches a potrace-traced, svgo-optimized SVG
 *  (see public/artwork/traced/, CREDITS.md for provenance), strips potrace's
 *  default fill in favor of an ochre stroke, then measures each top-level
 *  path's own length and animates stroke-dashoffset from full to zero on
 *  entry — staggered per path so the engraving visibly builds rather than
 *  snapping in at once. Replaces the raster BleachedPlate for these two
 *  sections specifically; every other plate on the site stays photographic. */
export function EngravedLineDraw({
  src,
  className,
  durationMs = 1500,
  staggerMs = 90,
}: {
  src: string;
  className?: string;
  durationMs?: number;
  staggerMs?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [markup, setMarkup] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((r) => r.text())
      .then((text) => { if (!cancelled) setMarkup(text); });
    return () => { cancelled = true; };
  }, [src]);

  // Everything below lives in ONE effect, deliberately not driven by any
  // state that changes on scroll (like framer-motion's useInView would).
  // An earlier version split "prime the paths" and "trigger the reveal"
  // across two effects, the second gated on a useInView boolean — but that
  // boolean flipping re-renders this component, and dangerouslySetInnerHTML
  // re-injects the raw markup on that re-render, wiping every style the
  // first effect had set. The IntersectionObserver here is plain DOM API,
  // not React state, so it can fire without ever causing a re-render.
  useEffect(() => {
    if (!markup || !containerRef.current) return;
    const root = containerRef.current;
    const svgEl = root.querySelector("svg");
    svgEl?.setAttribute("preserveAspectRatio", "xMidYMid slice");

    const paths = Array.from(root.querySelectorAll("path"));
    paths.forEach((p) => {
      const el = p as SVGPathElement;
      const len = el.getTotalLength();
      el.style.fill = "none";
      el.style.stroke = "var(--color-ochre)";
      el.style.strokeWidth = "1";
      el.style.strokeOpacity = "0.6";
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = reduceMotion ? "0" : `${len}`;
    });

    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        paths.forEach((p, i) => {
          const el = p as SVGPathElement;
          el.style.transition = `stroke-dashoffset ${durationMs}ms cubic-bezier(0.16,1,0.3,1) ${i * staggerMs}ms`;
          el.style.strokeDashoffset = "0";
        });
        observer.disconnect();
      },
      { threshold: 0.25 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [markup, reduceMotion, durationMs, staggerMs]);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none [&_svg]:w-full [&_svg]:h-full", className)}
      aria-hidden="true"
      dangerouslySetInnerHTML={markup ? { __html: markup } : undefined}
    />
  );
}

/** Small ochre node marker for timeline-style lists — Schedule's spine markers,
 *  per the brief. Lapis is never spent here; it stays reserved for CTAs. */
export function NodeMarker({ className }: { className?: string }) {
  return (
    <span
      className={cn("block w-2.5 h-2.5 rounded-full bg-ochre ring-4 ring-paper", className)}
      aria-hidden="true"
    />
  );
}
