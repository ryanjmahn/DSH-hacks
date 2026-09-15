"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { EASE_OUT } from "@/components/sections/design-system";

/* Beat 1 — The Frontispiece. A 16th-century engraved title page rebuilt as an
   event masthead. The framing element is a bleached architectural background
   cropped from the upper vault of Raphael's School of Athens (P1 in
   CREDITS.md) — architecture only, above the figures, so it reads as
   Renaissance space rather than the specific painting.

   Motion (§8 effect 1): content fades up in the brief's order — attribution →
   wordmark → theme → date → venue → CTA, 400ms / 80ms stagger. The vault
   scales 1.0 → 1.03 across the section's scroll range (scroll-linked, rAF via
   framer's useScroll), so it opens very slightly as you move down. Both gate
   behind prefers-reduced-motion.

   Height 92vh so the CTA and deadline sit above the fold at 1440×900 and
   390×844. Below 768px a tighter vault crop keeps the coffering readable. */

const Vault = ({ scale }: { scale: MotionValue<number> | undefined }) => (
  <motion.div
    className="pointer-events-none absolute inset-0 opacity-[0.26]"
    style={{
      ...(scale ? { scale } : {}),
      WebkitMaskImage:
        "radial-gradient(ellipse 92% 86% at 50% 40%, black 0%, black 30%, transparent 82%)",
      maskImage:
        "radial-gradient(ellipse 92% 86% at 50% 40%, black 0%, black 30%, transparent 82%)",
    }}
    aria-hidden="true"
  >
    {/* negative impression on the dark ground: the baked file is high-contrast
        grayscale lifted toward white; invert(1) makes it white coffering on
        black — reads far better than the positive over the inverted ground */}
    <picture>
      <source media="(min-width: 768px)" srcSet="/plates/frontispiece-vault-desktop.avif" type="image/avif" />
      <source media="(min-width: 768px)" srcSet="/plates/frontispiece-vault-desktop.webp" type="image/webp" />
      <source media="(min-width: 768px)" srcSet="/plates/frontispiece-vault-desktop.jpg" />
      <source srcSet="/plates/frontispiece-vault-mobile.avif" type="image/avif" />
      <source srcSet="/plates/frontispiece-vault-mobile.webp" type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/plates/frontispiece-vault-mobile.jpg"
        alt=""
        className="h-full w-full object-cover [filter:invert(var(--invert-on-dark))]"
        style={{ objectPosition: "50% 30%" }}
      />
    </picture>
  </motion.div>
);

const Ornament = () => (
  <div className="relative flex w-full max-w-[16rem] items-center justify-center" aria-hidden="true">
    <span className="h-px w-full bg-rule" />
    <span className="absolute h-2 w-2 rotate-45 bg-paper-dim" />
  </div>
);

const venueItems = ["Online", "Global", "Ages 13+", "100% Free"];

export default function FrontispieceSection() {
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const vaultScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  const up = (delay: number) =>
    animate
      ? { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay, ease: EASE_OUT } }
      : {};

  return (
    <section
      ref={sectionRef}
      id="frontispiece"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-ink px-6 py-20 text-paper sm:px-8"
    >
      <Vault scale={reduceMotion ? undefined : vaultScale} />
      <div className="grain-overlay" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.p {...up(0.35)} className="type-meta text-paper-dim !text-[clamp(0.625rem,1.5vh,0.8125rem)]">
          DeltaForge Hacks &times; NXT Horizon &times; STEMise
        </motion.p>

        <motion.h1 {...up(0.43)} className="type-display mt-3 text-paper !text-[clamp(1.75rem,6vh,3.25rem)] sm:mt-4">
          DSH Hacks
          <br />
          V2
        </motion.h1>

        <motion.div {...up(0.51)} className="mt-3 w-full max-w-[16rem] sm:mt-4">
          <Ornament />
        </motion.div>

        <motion.p {...up(0.59)} className="type-eyebrow mt-3 text-rubric-light !text-[clamp(0.9375rem,2vh,1.25rem)] sm:mt-4">
          AI &times; Healthcare
        </motion.p>

        <motion.p {...up(0.67)} className="type-mega mt-3 text-paper !text-[clamp(3.25rem,12vh,7rem)] sm:mt-5">
          Nov 7 2026
        </motion.p>

        <div className="mt-6 flex w-full max-w-2xl flex-col items-center border-t border-rule pt-4 sm:mt-8 sm:pt-5">
          <motion.div
            {...up(0.75)}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 type-meta text-paper-dim !text-[clamp(0.625rem,1.4vh,0.8125rem)]"
          >
            {venueItems.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span className="h-3 w-px bg-rule" aria-hidden="true" />}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </motion.div>

          <motion.a
            {...up(0.83)}
            href="https://dsh-hacks-v2.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-rubric px-8 py-3 type-meta text-paper transition-colors hover:bg-rubric-deep !text-[clamp(0.6875rem,1.5vh,0.8125rem)] sm:py-3.5"
          >
            Register on Devpost
          </motion.a>

          <motion.p {...up(0.83)} className="type-eyebrow mt-3 text-paper-dim !text-[clamp(0.875rem,1.8vh,1.0625rem)]">
            Submissions close November 7
          </motion.p>

          <motion.div {...up(0.83)}>
            <Image
              src="/dsh-logo-circle.png"
              alt="DSH Hacks"
              width={24}
              height={24}
              className="mt-4 object-contain opacity-70"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
