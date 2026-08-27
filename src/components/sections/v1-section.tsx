"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading, StatNumeral, SpecimenKey, LeaderLine, useFadeRise } from "@/components/sections/design-system";

const v1Stats = [
  { value: "1,294", label: "Hackers registered" },
  { value: "283", label: "Projects submitted" },
  { value: "70+", label: "Countries" },
  { value: "8", label: "Prize categories" },
];

const v1Winners = [
  { name: "lily-memo", detail: "Turns notes, PDFs, and lectures into AI-generated explanations, diagrams, and quiz sets." },
  { name: "Yachay Lab", detail: "The free virtual STEM lab for every student who never had one." },
  { name: "SciSim", detail: "AI-powered virtual science lab with chemistry, physics, and biology simulations." },
];

/* A second crop of the same School of Athens source as the Frontispiece — a
   side pier and the angled coffering of the aisle, so the two sections read as
   two views of one continuous space. Treatment matches the hero exactly:
   baked high-contrast grayscale, CSS invert(1) to white line on the dark
   ground, feathered on every edge, no box, shared paper grain. Lands at 0.22
   — a touch lower than the hero, since this sits behind the winners list, not
   behind display type. Weighted to the upper right so the architecture frames
   the left-aligned content rather than sitting centred under it. */
const Arcade = () => (
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.22]"
    aria-hidden="true"
    style={{
      WebkitMaskImage: "radial-gradient(ellipse 85% 90% at 78% 32%, black 0%, black 24%, transparent 80%)",
      maskImage: "radial-gradient(ellipse 85% 90% at 78% 32%, black 0%, black 24%, transparent 80%)",
    }}
  >
    <picture>
      <source media="(min-width: 768px)" srcSet="/plates/v1-arcade-desktop.avif" type="image/avif" />
      <source media="(min-width: 768px)" srcSet="/plates/v1-arcade-desktop.webp" type="image/webp" />
      <source media="(min-width: 768px)" srcSet="/plates/v1-arcade-desktop.jpg" />
      <source srcSet="/plates/v1-arcade-mobile.avif" type="image/avif" />
      <source srcSet="/plates/v1-arcade-mobile.webp" type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/plates/v1-arcade-mobile.jpg"
        alt=""
        loading="lazy"
        className="h-full w-full object-cover [filter:invert(1)]"
        style={{ objectPosition: "90% 12%" }}
      />
    </picture>
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
        <p className="type-body mt-2 leading-relaxed text-paper-dim">{detail}</p>
      </div>
    </motion.div>
  );
}

const V1Section = () => {
  const introMotion = useFadeRise(0.1);
  const ctaMotion = useFadeRise(0.1);
  const winnersLabelMotion = useFadeRise();

  return (
    <section id="v1" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <Arcade />
      <div className="grain-overlay" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="May 20 – June 15, 2026 · AI × STEM Education" title="V1 Recap" />

        <motion.p {...introMotion} className="type-body mt-8 max-w-2xl leading-relaxed text-paper-dim">
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
                delay={i * 0.06}
              />
            </div>
          ))}
        </div>

        <motion.p {...winnersLabelMotion} className="type-meta mt-16 text-paper-dim sm:mt-20">
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
            className="btn-wipe inline-flex items-center justify-center gap-2 border border-paper px-8 py-3.5 type-meta text-paper"
          >
            Browse all 283 projects
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://dsh-hacks-v1.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 type-meta text-paper-dim underline decoration-rule-dark underline-offset-4 transition-colors hover:text-paper hover:decoration-paper"
          >
            V1 on Devpost
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default V1Section;
