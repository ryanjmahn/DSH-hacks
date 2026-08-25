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

function WinnerRow({ index, name, detail, isLast }: { index: number; name: string; detail: string; isLast: boolean }) {
  const motionProps = useFadeRise(index * 0.08);
  return (
    <motion.div
      {...motionProps}
      className={`group grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-8 py-7 ${isLast ? "" : "border-b border-rule"}`}
    >
      <SpecimenKey index={index} />
      <div>
        <LeaderLine className="w-8 mb-2" />
        <h3 className="type-title text-umber">{name}</h3>
        <p className="type-body text-umber-soft mt-2 leading-relaxed">{detail}</p>
      </div>
    </motion.div>
  );
}

const V1Section = () => {
  const introMotion = useFadeRise(0.1);
  const ctaMotion = useFadeRise(0.1);
  const winnersLabelMotion = useFadeRise();

  return (
    <section id="v1" className="relative bg-plaster-shade coffer-texture text-umber py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="May 20 – June 15, 2026 · AI × STEM Education" title="V1 Recap" />

        <motion.p {...introMotion} className="type-body text-umber-soft mt-8 max-w-2xl leading-relaxed">
          Our first hackathon brought together students from around the world to build AI
          products for STEM education, judged by engineers from Microsoft, Apple, Amazon, Meta,
          and PayPal. V2 is building on that momentum.
        </motion.p>

        <div className="mt-14 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 border-t border-b border-rule">
          {v1Stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`min-w-0 px-4 sm:px-8 py-8 ${i < 2 ? "border-b sm:border-b-0 border-rule" : ""} ${i % 2 === 0 ? "border-r border-rule" : ""} ${i % 4 !== 0 ? "sm:border-l" : ""} sm:border-r-0`}
            >
              <StatNumeral value={stat.value} label={stat.label} delay={i * 0.06} />
            </div>
          ))}
        </div>

        <motion.p {...winnersLabelMotion} className="type-meta text-umber-soft mt-16 sm:mt-20">
          Winning projects included
        </motion.p>
        <div className="mt-4 max-w-3xl">
          {v1Winners.map((w, i) => (
            <WinnerRow key={w.name} index={i} name={w.name} detail={w.detail} isLast={i === v1Winners.length - 1} />
          ))}
        </div>

        <motion.div {...ctaMotion} className="mt-14 flex flex-col sm:flex-row gap-4">
          <a
            href="https://dsh-hacks-v1.devpost.com/project-gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wipe inline-flex items-center justify-center gap-2 border border-umber text-umber px-8 py-3.5 type-meta"
          >
            Browse all 283 projects
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://dsh-hacks-v1.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-umber-soft px-8 py-3.5 type-meta underline underline-offset-4 decoration-rule hover:text-sienna hover:decoration-sienna transition-colors"
          >
            V1 on Devpost
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default V1Section;
