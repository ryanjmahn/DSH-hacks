"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading, StatNumeral, BleachedPlate, useFadeRise } from "@/components/sections/design-system";

const statsData = [
  { value: "1300+", label: "Past competitors" },
  { value: "70+", label: "Countries" },
  { value: "$30K+", label: "Prizes distributed" },
  { value: "10+", label: "Sponsors" },
];

const AboutSection = () => {
  const copyMotion = useFadeRise(0.1);
  const quoteMotion = useFadeRise(0.18);

  return (
    <section id="about" className="relative bg-paper text-ink py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Who we are" title="About" />

        <div className="mt-14 sm:mt-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <motion.p {...copyMotion} className="type-body text-ink leading-relaxed">
              DSH Hacks is a free, global, online hackathon open to students aged 13+, hosted
              collaboratively by three youth-led organizations: <span className="text-brand font-medium">DeltaForge Hacks</span>,{" "}
              <span className="text-brand font-medium">NXT Horizon</span>, and <span className="text-brand font-medium">STEMise</span>.
            </motion.p>

            <motion.blockquote {...quoteMotion} className="type-quote text-ink border-t border-b border-rule py-7 my-10">
              AI × Healthcare: transforming healthcare access through AI.
            </motion.blockquote>

            <motion.p {...copyMotion} className="type-body text-ink-muted leading-relaxed">
              Identify a real healthcare problem and build an AI-powered app, website, or system
              that tackles it. Any skill level welcome. From diagnostic tools tackling global
              disease burdens, to patient-care platforms improving access and outcomes, to
              AI-powered systems reimagining how we detect, treat, and manage illness. Work solo
              or in a team, and use AI to lower the barrier for ambitious ideas. Low/no-code welcome.
            </motion.p>
          </div>

          <BleachedPlate
            srcBase="/plates/about-desktop"
            className="aspect-[3/4] lg:h-full lg:min-h-[520px]"
            presence={0.35}
            maskPosition="50% 38%"
          />
        </div>

        <div className="mt-20 sm:mt-28 grid grid-cols-2 sm:grid-cols-4 border-t border-b border-rule">
          {statsData.map((stat, i) => (
            <div
              key={stat.label}
              className={`min-w-0 px-4 sm:px-8 py-8 ${i % 2 === 0 ? "border-r border-rule sm:border-r" : ""} ${i < 2 ? "border-b sm:border-b-0 border-rule" : ""} ${i % 4 !== 0 ? "sm:border-l" : ""} sm:border-r-0`}
            >
              <StatNumeral value={stat.value} label={stat.label} delay={i * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
