"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading, SpecimenKey, LeaderLine, ParallaxLayer, WatercolorPlate, useFadeRise, useSectionReveal } from "@/components/sections/design-system";
import { HorizonLine } from "@/components/sections/graphics";
import DitherField from "@/components/sections/dither-field";

const judgingCriteria = [
  { name: "Idea", detail: "Did the proposal address the theme? Was it innovative? Could it be deployed for real-world impact?" },
  { name: "Implementation", detail: "Does the solution work? How technically challenging was the build?" },
  { name: "Design", detail: "Did the team put thought into UX? How well designed is the interface?" },
  { name: "Presentation", detail: "Does the presentation clearly define and address the problem statement?" },
];

function CriterionItem({ index, name, detail, isLast }: { index: number; name: string; detail: string; isLast: boolean }) {
  const motionProps = useFadeRise(index * 0.08);
  return (
    <motion.div
      {...motionProps}
      className={`group min-w-0 py-7 sm:px-8 sm:py-0 first:sm:pl-0 last:sm:pr-0 ${
        isLast ? "" : "border-b border-rule sm:border-b-0"
      }`}
    >
      <SpecimenKey index={index} />
      <LeaderLine className="mt-2 w-8" />
      <h3 className="type-title !text-xl mt-2 break-words text-rubric-light">{name}</h3>
      <p className="type-body mt-2 leading-relaxed text-paper-dim">{detail}</p>
    </motion.div>
  );
}

const PrizesSection = () => {
  const prizeMotion = useFadeRise(0.1);
  const labelMotion = useFadeRise();
  const sectionReveal = useSectionReveal();

  return (
    <section id="prizes" className="blue-ground relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40">
      <DitherField className="absolute inset-0 h-full w-full" color="255,255,255" />
      {/* SF watercolor pass — Ferry Building + Embarcadero, no art yet (see
          sf-watercolor-prompts.md). */}
      <WatercolorPlate src="/plates/watercolor/prizes-ferry-building.jpg" presence={0.3} maskPosition="50% 40%" />

      {/* Cohesive SF-scene pass — the bay horizon continuing from V1's pier,
          the same convention repeating through Sponsors and FAQ toward the
          bridge silhouette in the footer. */}
      <ParallaxLayer range={4} className="opacity-50">
        <HorizonLine className="absolute bottom-6 h-6 w-full" />
      </ParallaxLayer>

      <motion.div {...sectionReveal} className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="What you can win" title="Prizes" align="right" />

        <motion.div
          {...prizeMotion}
          className="mt-16 flex flex-col items-center border-t border-b border-rule py-10 text-center sm:mt-20 sm:py-14"
        >
          {/* Polyhedron wireframe removed (remove-decorative-svg-and-fix-
              spacing-prompt.md) — the old Leonardo/Pacioli construction
              doesn't fit the current direction. Definition kept in
              graphics.tsx, unused. */}
          {/* No specific tier/breakdown anymore — just the total pool, since
              individual prize amounts and categories haven't been finalized. */}
          <p className="type-display text-paper">$100,000+ in prizes</p>
          <p className="type-body mx-auto mt-4 max-w-xl leading-relaxed text-paper-dim">
            More prizes are coming soon — stay tuned for announcements on Devpost and in the
            DSH Hacks Discord.
          </p>
          {/* bg-rubric would be invisible here — the section's own fill IS
              that blue now — so this inverts to the white-fill/blue-text
              pairing the brief asks for, reusing bg-paper/text-ink rather
              than a new button style since --color-paper/--color-ink are
              already remapped to white/blue in this section's scope. */}
          <a
            href="https://dsh-hacks-v2.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-8 py-3.5 type-meta text-ink transition-opacity hover:opacity-90"
          >
            See prizes on Devpost
          </a>
        </motion.div>

        <motion.p {...labelMotion} className="type-meta mt-16 text-paper-dim sm:mt-20">
          Judged on four components
        </motion.p>
        <div className="mt-6 grid grid-cols-1 border-t border-rule sm:grid-cols-4 sm:divide-x sm:divide-rule">
          {judgingCriteria.map((c, i) => (
            <CriterionItem key={c.name} index={i} name={c.name} detail={c.detail} isLast={i === judgingCriteria.length - 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PrizesSection;
