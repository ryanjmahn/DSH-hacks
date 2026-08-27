"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading, StatNumeral, EngravedLineDraw, useFadeRise } from "@/components/sections/design-system";

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
    <section id="about" className="relative bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Who we are" title="About" tone="ink" />

        <div className="mt-14 grid items-start gap-12 sm:mt-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.p {...copyMotion} className="type-body leading-relaxed text-ink">
              DSH Hacks is a free, global, online hackathon open to students aged 13+, hosted
              collaboratively by three youth-led organizations:{" "}
              <span className="font-medium text-ink">DeltaForge Hacks</span>,{" "}
              <span className="font-medium text-ink">NXT Horizon</span>, and{" "}
              <span className="font-medium text-ink">STEMise</span>.
            </motion.p>

            <motion.blockquote
              {...quoteMotion}
              className="type-quote my-10 border-t border-b border-rule py-7 text-ink"
            >
              AI &times; Healthcare: transforming healthcare access through AI.
            </motion.blockquote>

            <motion.p {...copyMotion} className="type-body leading-relaxed text-ink-soft">
              Identify a real healthcare problem and build an AI-powered app, website, or system
              that tackles it. Any skill level welcome. From diagnostic tools tackling global
              disease burdens, to patient-care platforms improving access and outcomes, to
              AI-powered systems reimagining how we detect, treat, and manage illness. Work solo
              or in a team, and use AI to lower the barrier for ambitious ideas. Low/no-code welcome.
            </motion.p>
          </div>

          {/* the skeleton leaning on a classical tomb, after Vesalius (M2) —
              anatomy posed against architecture in one plate, the redesign's
              thesis in one image. Traced to a hairline line-draw (§5B), built
              on scroll entry (§8 effect 4). */}
          <div className="flex aspect-[3/4] items-center justify-center lg:h-full lg:min-h-[520px]">
            <EngravedLineDraw src="/artwork/traced/about-line.svg" className="h-full w-full" />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 border-t border-b border-rule sm:mt-28 sm:grid-cols-4">
          {statsData.map((stat, i) => (
            <div
              key={stat.label}
              className={`min-w-0 px-4 py-8 sm:px-8 ${i % 2 === 0 ? "border-r border-rule sm:border-r" : ""} ${
                i < 2 ? "border-b border-rule sm:border-b-0" : ""
              } ${i % 4 !== 0 ? "sm:border-l" : ""} sm:border-r-0`}
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
