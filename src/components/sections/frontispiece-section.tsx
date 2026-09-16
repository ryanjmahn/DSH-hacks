"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { EASE_OUT, useSectionReveal } from "@/components/sections/design-system";
import ParticleImage from "@/components/sections/particle-image";

/* Beat 1 — The Frontispiece. Event masthead over an aerial watercolor of the
   Transamerica Pyramid, bay and hills behind it (frontispiece-transamerica-
   prompt.md). Supersedes an earlier plan that reused a tighter crop of the
   Hero's Golden Gate Bridge photo here — that read as the same image twice
   scrolling from this section into the Hero, so this section now gets its
   own distinct SF landmark instead while staying in the same watercolor
   treatment/palette family. The pyramid's strong vertical line is centered
   behind the title block, echoing how the old vault's arch was centered.

   Legibility: unlike the Hero (content only in the lower two-thirds, so a
   bottom-anchored gradient is enough), this section's content — and the
   fixed Navbar from HeroSection, which overlaps the top of this section
   too — spans its full height. A flat translucent scrim over the whole
   image keeps the title block and nav legible everywhere rather than only
   in one band; this source has more contrast (clear blue sky, a sharp
   pyramid edge) than the pale engraving it originally replaced, so the
   scrim sits a bit heavier than a first pass at this would need.

   Motion (§8 effect 1): content fades up in the brief's order — attribution →
   wordmark → theme → date → venue → CTA, 400ms / 80ms stagger. The photo
   scales 1.0 → 1.03 across the section's scroll range (scroll-linked, rAF via
   framer's useScroll), so it opens very slightly as you move down. Both gate
   behind prefers-reduced-motion.

   Height 92vh so the CTA and deadline sit above the fold at 1440×900 and
   390×844. */

const TransamericaPyramid = ({ scale }: { scale: MotionValue<number> | undefined }) => (
  <motion.div
    className="pointer-events-none absolute inset-0"
    style={scale ? { scale } : undefined}
    aria-hidden="true"
  >
    {/* Particle/halftone rendering, same treatment as About's bridge photo
        (particle-image.tsx) — dots sample the pyramid photo's own color
        rather than a flat <img>. Tuned bolder than About's defaults: tighter
        stride (denser dots), a contrast gamma that fills out midtones so the
        pyramid's silhouette stays solid/defined instead of speckly, and a
        saturation boost so the color reads clearly at a glance — a flat
        photo opacity was fighting the dot field's own gaps and the scrim
        below, so full opacity plus a lighter scrim (down from /60) carries
        legibility instead of dimming the image itself. */}
    <div
      className="absolute inset-0"
      style={{
        WebkitMaskImage:
          "radial-gradient(ellipse 92% 86% at 50% 40%, black 0%, black 30%, transparent 82%)",
        maskImage:
          "radial-gradient(ellipse 92% 86% at 50% 40%, black 0%, black 30%, transparent 82%)",
      }}
    >
      <ParticleImage
        src="/plates/frontispiece-pyramid-desktop.jpg"
        className="h-full w-full"
        objectPosition="43% 38%"
        stride={5}
        contrast={0.7}
        saturate={1.4}
        lightCutoff={0.96}
      />
    </div>
    {/* flat scrim (not a directional gradient like the Hero's) since the
        centered title block and the fixed nav both sit over the image's
        full height here, not just its lower portion */}
    <div className="absolute inset-0 bg-ink/46" />
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
  const pyramidScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  const up = (delay: number) =>
    animate
      ? { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay, ease: EASE_OUT } }
      : {};

  const sectionReveal = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      id="frontispiece"
      className="ink-max relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-ink px-6 py-20 text-paper sm:px-8"
    >
      <TransamericaPyramid scale={reduceMotion ? undefined : pyramidScale} />
      <div className="grain-overlay" />

      <motion.div {...sectionReveal} className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.p {...up(0.35)} className="type-meta text-paper !text-[clamp(0.625rem,1.5vh,0.8125rem)]">
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
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 type-meta text-paper !text-[clamp(0.625rem,1.4vh,0.8125rem)]"
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
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-rubric px-8 py-3 type-meta text-ink transition-colors hover:bg-rubric-deep !text-[clamp(0.6875rem,1.5vh,0.8125rem)] sm:py-3.5"
          >
            Register on Devpost
          </motion.a>

          <motion.p {...up(0.83)} className="type-eyebrow mt-3 text-paper !text-[clamp(0.875rem,1.8vh,1.0625rem)]">
            Submissions close November 7, 2026 at 11:45pm PST
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
      </motion.div>
    </section>
  );
}
