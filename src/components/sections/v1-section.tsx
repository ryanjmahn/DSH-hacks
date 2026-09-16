"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading, StatNumeral, SpecimenKey, LeaderLine, ParallaxLayer, WatercolorPlate, useFadeRise, useSectionReveal } from "@/components/sections/design-system";
import { PierPilings, HorizonLine } from "@/components/sections/graphics";
import ParticleImage from "@/components/sections/particle-image";

const v1Stats = [
  { value: "1,294", label: "Hackers registered" },
  { value: "283", label: "Projects submitted" },
  { value: "80", label: "Countries" },
  { value: "8", label: "Prize categories" },
];

const v1Winners = [
  { name: "lily-memo", detail: "Turns notes, PDFs, and lectures into AI-generated explanations, diagrams, and quiz sets." },
  { name: "Yachay Lab", detail: "The free virtual STEM lab for every student who never had one." },
  { name: "SciSim", detail: "AI-powered virtual science lab with chemistry, physics, and biology simulations." },
];

/* Palace of Fine Arts watercolor, with the Golden Gate Bridge visible behind
   the rotunda (v1-recap-bg-replacement-prompt.md) — now rendered as a
   particle/halftone field (particle-image.tsx), same bolder tuning as
   Frontispiece/Hero, rather than a flat photo. Same mask geometry and
   right-weighted framing as the original crop so the architecture backs the
   left-aligned content rather than sitting centred under it. Kept in full
   color — the watercolor's warm dome and blue sky are the point.
   object-position is tuned to this image specifically (50% 38%) so the dome
   and bridge towers both stay in the visible crop rather than cropping down
   to just sky above or the reflecting pool below. Presence dialed to 0.55
   (this section has no scrim/gradient like Frontispiece/Hero do, and the
   mask's opaque core is unusually large here, so the dot field needs its
   own opacity cap to keep the stat numbers and winner list legible where
   the mask doesn't fade it out on its own). */
const PalaceWatercolor = () => (
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.55]"
    aria-hidden="true"
    style={{
      WebkitMaskImage: "radial-gradient(ellipse 85% 90% at 78% 32%, black 0%, black 34%, transparent 82%)",
      maskImage: "radial-gradient(ellipse 85% 90% at 78% 32%, black 0%, black 34%, transparent 82%)",
    }}
  >
    <ParticleImage
      src="/plates/v1-palace-desktop.jpg"
      className="h-full w-full"
      objectPosition="50% 38%"
      stride={5}
      contrast={0.7}
      saturate={1.4}
      lightCutoff={0.96}
    />
    {/* Scrim added — the stats/winner list sit directly on the dot field with
        no gradient like Frontispiece/Hero have, and bright dot clusters
        behind the paper-colored text were washing out contrast. Same flat
        ink scrim Frontispiece uses over its particle image. */}
    <div className="absolute inset-0 bg-ink/50" />
  </div>
);

function WinnerRow({ index, name, detail, isLast }: { index: number; name: string; detail: string; isLast: boolean }) {
  const motionProps = useFadeRise(index * 0.08);
  return (
    <motion.div
      {...motionProps}
      className={`group grid grid-cols-[auto_1fr] gap-x-5 py-7 sm:gap-x-8 ${isLast ? "" : "border-b border-rule"}`}
    >
      <SpecimenKey index={index} />
      <div>
        <LeaderLine className="mb-2 w-8" />
        <h3 className="type-title text-paper">{name}</h3>
        <p className="type-body mt-2 leading-relaxed text-paper">{detail}</p>
      </div>
    </motion.div>
  );
}

const V1Section = () => {
  const introMotion = useFadeRise(0.1);
  const ctaMotion = useFadeRise(0.1);
  const winnersLabelMotion = useFadeRise();
  const sectionReveal = useSectionReveal();

  return (
    <section id="v1" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40">
      <PalaceWatercolor />
      <div className="grain-overlay" />

      {/* SF watercolor pass — Coit Tower / Telegraph Hill, no art yet (see
          sf-watercolor-prompts.md). The Arcade plate + pier line-art below
          stay as the live background until the file exists. */}
      <WatercolorPlate src="/plates/watercolor/v1-coit-tower.jpg" presence={0.35} maskPosition="30% 40%" />

      {/* Cohesive SF-scene pass — the existing truss/architecture treatment
          extended into a pier/dock silhouette with the bay horizon beyond it,
          continuing from About's hills above and into Schedule below. */}
      <ParallaxLayer range={3} className="opacity-50">
        <PierPilings className="absolute bottom-0 h-24 w-full" />
      </ParallaxLayer>
      <ParallaxLayer range={5} className="opacity-60">
        <HorizonLine className="absolute bottom-6 h-6 w-full" />
      </ParallaxLayer>

      <motion.div {...sectionReveal} className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="May 20 – June 15, 2026 · AI × STEM Education" title="V1 Recap" />

        <motion.p {...introMotion} className="type-body mt-8 max-w-2xl leading-relaxed text-paper">
          Our first hackathon brought together students from around the world to build AI
          products for STEM education, judged by engineers from Microsoft, Apple, Amazon, Meta,
          and PayPal. V2 is building on that momentum.
        </motion.p>

        <div className="mt-14 grid grid-cols-2 border-t border-b border-rule sm:mt-16 sm:grid-cols-4">
          {v1Stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`min-w-0 px-4 py-8 sm:px-8 ${i < 2 ? "border-b border-rule sm:border-b-0" : ""} ${
                i % 2 === 0 ? "border-r border-rule" : ""
              } ${i % 4 !== 0 ? "sm:border-l" : ""} sm:border-r-0`}
            >
              <StatNumeral
                value={stat.value}
                label={stat.label}
                tone="paper"
                numeralClassName="type-display !text-[clamp(1.875rem,4vw,3rem)]"
                labelClassName="text-paper"
                delay={i * 0.06}
              />
            </div>
          ))}
        </div>

        <motion.p {...winnersLabelMotion} className="type-meta mt-16 text-paper sm:mt-20">
          Winning projects included
        </motion.p>
        <div className="mt-4 max-w-3xl">
          {v1Winners.map((w, i) => (
            <WinnerRow key={w.name} index={i} name={w.name} detail={w.detail} isLast={i === v1Winners.length - 1} />
          ))}
        </div>

        <motion.div {...ctaMotion} className="mt-14 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://dsh-hacks-v1.devpost.com/project-gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wipe inline-flex items-center justify-center gap-2 rounded-full border border-paper px-8 py-3.5 type-meta text-paper"
          >
            Browse all 283 projects
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://dsh-hacks-v1.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 type-meta text-paper underline decoration-rule-dark underline-offset-4 transition-colors hover:decoration-paper"
          >
            V1 on Devpost
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default V1Section;
