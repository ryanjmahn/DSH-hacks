"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/components/sections/design-system";

/* Beat 1 — The Frontispiece. A 16th-century engraved title page rebuilt as an
   event masthead: title inside a drawn portico, imprint on the plinth,
   printer's device at the foot.

   Motion (§8 effect 1 — on load, not scroll): the arch springs outward from
   its apex down both pilasters, ~1400ms; then the contents fade up in the
   brief's order — attribution → wordmark → theme → date → venue → CTA, 400ms
   each, 80ms stagger. prefers-reduced-motion shows everything drawn.

   Height 92vh so the CTA and deadline sit above the fold at 1440×900 and
   390×844. Clean --paper, no plate. Below 768px the pilasters drop; the arch
   curve and plinth rule stay. */

const ARCH_MS = 1.4;

const Portico = ({ animate }: { animate: boolean }) => {
  const draw = (delay: number) =>
    animate
      ? { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: ARCH_MS, delay, ease: EASE_OUT } }
      : {};
  return (
    <svg
      viewBox="0 0 1000 420"
      className="absolute inset-x-0 top-0 h-full w-full pointer-events-none"
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
    >
      <g stroke="var(--color-rule)" fill="none" strokeWidth="1.5">
        {/* arch — two halves sharing an apex, springing outward together */}
        <motion.path d="M 500 -160 A 280 280 0 0 0 220 120" {...draw(0)} />
        <motion.path d="M 500 -160 A 280 280 0 0 1 780 120" {...draw(0)} />
        <motion.line x1="180" y1="118" x2="820" y2="118" className="hidden md:block" {...draw(0.5)} />
        <motion.line x1="220" y1="120" x2="220" y2="400" className="hidden md:block" {...draw(0.5)} />
        <motion.line x1="780" y1="120" x2="780" y2="400" className="hidden md:block" {...draw(0.5)} />
        <motion.line
          x1="196" y1="400" x2="244" y2="400" className="hidden md:block"
          initial={animate ? { opacity: 0 } : undefined}
          animate={animate ? { opacity: 1 } : undefined}
          transition={animate ? { duration: 0.3, delay: ARCH_MS } : undefined}
        />
        <motion.line
          x1="756" y1="400" x2="804" y2="400" className="hidden md:block"
          initial={animate ? { opacity: 0 } : undefined}
          animate={animate ? { opacity: 1 } : undefined}
          transition={animate ? { duration: 0.3, delay: ARCH_MS } : undefined}
        />
      </g>
      {/* compass-construction arcs — the geometry behind the arch */}
      <g stroke="var(--color-rule)" fill="none" strokeWidth="1" opacity="0.5">
        <motion.circle cx="500" cy="120" r="280" {...draw(0.2)} />
        <motion.path d="M 360 120 A 140 140 0 0 1 640 120" {...draw(0.4)} />
      </g>
    </svg>
  );
};

const Ornament = () => (
  <div className="relative flex w-full max-w-[16rem] items-center justify-center" aria-hidden="true">
    <span className="h-px w-full bg-rule" />
    <span className="absolute h-2 w-2 rotate-45 bg-ink" />
  </div>
);

const venueItems = ["Online", "Global", "Ages 13+", "100% Free"];

export default function FrontispieceSection() {
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;

  const up = (delay: number) =>
    animate
      ? { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay, ease: EASE_OUT } }
      : {};

  return (
    <section
      id="frontispiece"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-paper px-6 py-20 text-ink sm:px-8"
    >
      <Portico animate={animate} />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.p {...up(0.35)} className="type-meta text-ink-soft text-[clamp(0.625rem,1.5vh,0.8125rem)]">
          DeltaForge Hacks &times; NXT Horizon &times; STEMise
        </motion.p>

        <motion.h1 {...up(0.43)} className="type-display mt-3 text-ink text-[clamp(1.75rem,6vh,3.25rem)] sm:mt-4">
          DSH Hacks
          <br />
          V2
        </motion.h1>

        <motion.div {...up(0.51)} className="mt-3 w-full max-w-[16rem] sm:mt-4">
          <Ornament />
        </motion.div>

        <motion.p {...up(0.59)} className="type-eyebrow mt-3 text-ink text-[clamp(0.9375rem,2vh,1.25rem)] sm:mt-4">
          AI &times; Healthcare
        </motion.p>

        <motion.p {...up(0.67)} className="type-mega mt-3 text-ink text-[clamp(3.25rem,12vh,7rem)] sm:mt-5">
          Nov 7 2026
        </motion.p>

        <div className="mt-6 flex w-full max-w-2xl flex-col items-center border-t border-rule pt-4 sm:mt-8 sm:pt-5">
          <motion.div
            {...up(0.75)}
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 type-meta text-ink-soft text-[clamp(0.625rem,1.4vh,0.8125rem)]"
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
            className="mt-4 inline-flex items-center gap-2 bg-rubric px-8 py-3 type-meta text-paper transition-colors hover:bg-rubric-deep text-[clamp(0.6875rem,1.5vh,0.8125rem)] sm:py-3.5"
          >
            Register on Devpost
          </motion.a>

          <motion.p {...up(0.83)} className="type-eyebrow mt-3 text-ink-soft text-[clamp(0.875rem,1.8vh,1.0625rem)]">
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
