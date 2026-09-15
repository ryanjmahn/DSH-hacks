"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading, StatNumeral, ParallaxLayer, WatercolorPlate, useFadeRise, useSectionReveal } from "@/components/sections/design-system";
import { HillContours, FogLines } from "@/components/sections/graphics";
import DitherField from "@/components/sections/dither-field";
import ParticleImage from "@/components/sections/particle-image";

const statsData = [
  { value: "1290+", label: "Past competitors" },
  { value: "80+", label: "Countries" },
  { value: "$35K+", label: "Prizes distributed" },
  { value: "10+", label: "Sponsors" },
  { value: "80+", label: "Professional judges" },
];

const AboutSection = () => {
  const copyMotion = useFadeRise(0.1);
  const quoteMotion = useFadeRise(0.18);
  const sectionReveal = useSectionReveal();

  return (
    <section id="about" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40">
      {/* DitherField, reused from Countdown, as an ambient texture for the
          Golden Gate Bridge photo's section — same section-wide placement
          as Countdown (rather than boxed behind the image itself) since the
          photo is fully opaque and object-cover'd to its own box, so
          anything placed exactly behind it would be entirely hidden; here
          it shows through the surrounding negative space instead. */}
      <DitherField className="absolute inset-0 h-full w-full" color="61,79,224" />

      {/* Cohesive SF-scene pass — a fog bank drifting across hills at the
          section's lower edge, the same thin linework as About's own traced
          skeleton plate. Continues the scenery into V1's pier/horizon below. */}
      {/* SF watercolor pass — Painted Ladies silhouette, no art yet (see
          sf-watercolor-prompts.md). The hills/fog line-art below stays as
          the live background until the file exists. */}
      <WatercolorPlate src="/plates/watercolor/about-painted-ladies.jpg" presence={0.35} maskPosition="65% 55%" />

      <ParallaxLayer range={4} className="opacity-60">
        <HillContours className="absolute bottom-0 h-40 w-full" />
      </ParallaxLayer>
      <ParallaxLayer range={7} className="opacity-70">
        <FogLines className="absolute bottom-0 h-44 w-full" />
      </ParallaxLayer>

      <motion.div {...sectionReveal} className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Who we are" title="About" />

        <div className="mt-14 grid items-start gap-12 sm:mt-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.p {...copyMotion} className="type-body leading-relaxed text-paper">
              DSH Hacks is a free, global, online hackathon open to students aged 13+, hosted
              collaboratively by three youth-led organizations:{" "}
              <span className="font-medium text-rubric-light">DeltaForge Hacks</span>,{" "}
              <span className="font-medium text-rubric-light">NXT Horizon</span>, and{" "}
              <span className="font-medium text-rubric-light">STEMise</span>.
            </motion.p>

            <motion.blockquote
              {...quoteMotion}
              className="type-quote my-10 border-t border-b border-rule py-7 text-rubric-light"
            >
              AI &times; Healthcare: transforming healthcare access through AI.
            </motion.blockquote>

            <motion.p {...copyMotion} className="type-body leading-relaxed text-paper-dim">
              Identify a real healthcare problem and build an AI-powered app, website, or system
              that tackles it. Any skill level welcome. From diagnostic tools tackling global
              disease burdens, to patient-care platforms improving access and outcomes, to
              AI-powered systems reimagining how we detect, treat, and manage illness. Work solo
              or in a team, and use AI to lower the barrier for ambitious ideas. Low/no-code welcome.
            </motion.p>
          </div>

          {/* Golden Gate Bridge tower crop, rendered as a particle/halftone
              field rather than a flat photo (about-golden-gate-particles
              prompt) — the same tight tower crop originally made for the
              Frontispiece before that section moved to the Transamerica
              Pyramid instead. Dots sample the photo's own color, so it stays
              recognizable while reading as "formed," not just displayed;
              same "engraved stipple" language as DitherField above, just
              image-driven. This slot had no border/frame of its own to
              preserve, so only the content changes. */}
          <div className="flex aspect-[3/4] items-center justify-center lg:h-full lg:min-h-[520px]">
            <ParticleImage
              src="/plates/about-bridge-tower.jpg"
              className="h-full w-full"
              objectPosition="50% 40%"
            />
          </div>
        </div>

        {/* 5 stats now (was 4) — the old per-item border math was hand-tuned
            for an exact 2/4-column split and didn't generalize. divide-x/
            divide-y sidesteps that: full-width stacked rows on mobile,
            one undivided 5-up row from sm: up, so there's no wrapping
            column edge to get wrong. */}
        <div className="mt-20 grid grid-cols-1 divide-y divide-rule border-t border-b border-rule sm:mt-28 sm:grid-cols-5 sm:divide-x sm:divide-y-0">
          {statsData.map((stat, i) => (
            <div key={stat.label} className="min-w-0 px-4 py-8 sm:px-6">
              <StatNumeral value={stat.value} label={stat.label} tone="paper" numeralClassName="type-display !text-[clamp(1.875rem,4vw,3rem)]" delay={i * 0.08} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
