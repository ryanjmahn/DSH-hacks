"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/* Shared building blocks for the sitewide redesign (hero excluded — it has its
   own bespoke markup and is signed off). Every section below the hero composes
   its heading, numbered lists, and stat numerals from these so the site reads
   as one system rather than a collection of one-off sections. */

export function useFadeRise(delay = 0) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return { initial: undefined, whileInView: undefined, viewport: undefined, transition: undefined };
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  };
}

/** Eyebrow (serif italic) + display-caps heading. The recurring pattern that
 *  makes every section read as the same designed system. */
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
  const motionProps = useFadeRise();
  const alignClass = align === "right" ? "text-right items-end" : align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <motion.div {...motionProps} className={cn("flex flex-col", alignClass, className)}>
      <p className="type-eyebrow text-brand">{eyebrow}</p>
      <h2 className="type-display text-ink mt-1">{title}</h2>
    </motion.div>
  );
}

/** "01/" style numeral prefix for sequential content — schedule steps, judging
 *  criteria, workshop rows. Used in at least three sections per the brief. */
export function Numeral({ n, className }: { n: number; className?: string }) {
  return (
    <span className={cn("type-numeral select-none", className)}>
      {String(n).padStart(2, "0")}
      <span className="text-brand">/</span>
    </span>
  );
}

/** Oversized statistic — the visual furniture of the site. */
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
  return (
    <motion.div {...motionProps} className={cn("flex flex-col", className)}>
      <span className="type-display text-ink tabular-nums">{value}</span>
      <span className="type-meta text-ink-muted mt-2">{label}</span>
    </motion.div>
  );
}

/** Bleached anatomical/botanical plate — same treatment as the hero, scaled
 *  down: desaturated, feathered radial mask, no bounding box, fine grain.
 *  Never sits directly behind body copy at a density that hurts contrast. */
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
        {grain && <div className="grain-overlay" />}
      </div>
    </div>
  );
}

/** Small indigo node marker for timeline-style lists. Rationed — one accent
 *  device per section, alongside at most one CTA. */
export function NodeMarker({ className }: { className?: string }) {
  return (
    <span
      className={cn("block w-2.5 h-2.5 rounded-full bg-brand ring-4 ring-paper", className)}
      aria-hidden="true"
    />
  );
}
