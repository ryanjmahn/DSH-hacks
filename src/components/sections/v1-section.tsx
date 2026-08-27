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

/* §5C — the one place colour appears. Framed content, not a background wash:
   a hairline --rule frame with generous white margin inside, a real caption
   beneath (serif italic + mono plate number). Fades up 16px on entry, 600ms,
   100ms stagger — no line-draw, no parallax, no hover. Finished objects. */
const plates = [
  {
    num: "PLATE I",
    src: "/plates/v1-plate-1",
    caption: "A gentian (Gentiana). Hand-coloured line engraving after S. Edwards, The Botanical Magazine no. 491, 1800.",
    alt: "A hand-coloured engraving of a gentian plant with star-shaped deep-blue flowers, red-tinged calyces and a bare root, on aged paper.",
  },
  {
    num: "PLATE II",
    src: "/plates/v1-plate-2",
    caption: "A gentian (Gentiana). Hand-coloured line engraving by F. Sansom, Curtis's Botanical Magazine no. 723, 1803.",
    alt: "A hand-coloured engraving of a gentian with clustered trumpet-shaped ultramarine flowers and narrow grey-green leaves, on aged paper.",
  },
];

function PlateFigure({ plate, index }: { plate: (typeof plates)[number]; index: number }) {
  // bespoke motion per §8.6 — plates only fade + rise 16px, no line-draw/parallax/hover
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="border border-rule bg-paper p-4 sm:p-6">
        <picture>
          <source media="(min-width: 768px)" srcSet={`${plate.src}-desktop.webp`} type="image/webp" />
          <source media="(min-width: 768px)" srcSet={`${plate.src}-desktop.jpg`} />
          <source srcSet={`${plate.src}-mobile.webp`} type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${plate.src}-mobile.jpg`} alt={plate.alt} loading="lazy" className="block w-full" />
        </picture>
      </div>
      <figcaption className="mt-4">
        <span className="type-meta text-ink-soft">{plate.num}</span>
        <p className="type-eyebrow mt-1 text-ink-soft">{plate.caption}</p>
      </figcaption>
    </motion.figure>
  );
}

function WinnerRow({ index, name, detail, isLast }: { index: number; name: string; detail: string; isLast: boolean }) {
  const motionProps = useFadeRise(index * 0.08);
  return (
    <motion.div
      {...motionProps}
      className={`group grid grid-cols-[auto_1fr] gap-x-5 py-7 sm:gap-x-8 ${isLast ? "" : "border-b border-rule"}`}
    >
      <SpecimenKey index={index} className="text-ink-soft" />
      <div>
        <LeaderLine className="mb-2 w-8" />
        <h3 className="type-title text-ink">{name}</h3>
        <p className="type-body mt-2 leading-relaxed text-ink-soft">{detail}</p>
      </div>
    </motion.div>
  );
}

const V1Section = () => {
  const introMotion = useFadeRise(0.1);
  const ctaMotion = useFadeRise(0.1);
  const winnersLabelMotion = useFadeRise();
  const platesLabelMotion = useFadeRise();

  return (
    <section id="v1" className="relative bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="May 20 – June 15, 2026 · AI × STEM Education" title="V1 Recap" tone="ink" />

        <motion.p {...introMotion} className="type-body mt-8 max-w-2xl leading-relaxed text-ink-soft">
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
              <StatNumeral value={stat.value} label={stat.label} numeralClassName="type-display !text-[clamp(1.875rem,4vw,3rem)]" delay={i * 0.06} />
            </div>
          ))}
        </div>

        <motion.p {...winnersLabelMotion} className="type-meta mt-16 text-ink-soft sm:mt-20">
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
            className="btn-wipe inline-flex items-center justify-center gap-2 border border-ink px-8 py-3.5 type-meta text-ink"
          >
            Browse all 283 projects
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://dsh-hacks-v1.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 type-meta text-ink-soft underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
          >
            V1 on Devpost
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        {/* the plate section closes V1 Recap (§5C) */}
        <motion.p {...platesLabelMotion} className="type-meta mt-20 text-ink-soft sm:mt-28">
          From the archive
        </motion.p>
        <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {plates.map((plate, i) => (
            <PlateFigure key={plate.num} plate={plate} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default V1Section;
