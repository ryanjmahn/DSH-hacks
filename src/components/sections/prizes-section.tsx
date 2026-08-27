"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading, SpecimenKey, LeaderLine, useFadeRise } from "@/components/sections/design-system";
import { Polyhedron } from "@/components/sections/graphics";

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
      <h3 className="type-title mt-2 break-words text-paper">{name}</h3>
      <p className="type-body mt-2 leading-relaxed text-paper-dim">{detail}</p>
    </motion.div>
  );
}

const PrizesSection = () => {
  const prizeMotion = useFadeRise(0.1);
  const labelMotion = useFadeRise();

  return (
    <section id="prizes" className="relative bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="What you can win" title="Prizes" align="right" />

        <motion.div
          {...prizeMotion}
          className="mt-16 flex flex-col items-center border-t border-b border-rule py-10 text-center sm:mt-20 sm:py-14"
        >
          {/* Leonardo / Pacioli wireframe polyhedron — one per tier, static (§5D) */}
          <Polyhedron kind="rhombicuboctahedron" size={132} className="mb-6" />
          <p className="type-eyebrow text-paper-dim">Winner</p>
          <p className="type-display mt-2 text-paper">$100 + $100 AoPS</p>
          <p className="type-body mx-auto mt-4 max-w-xl leading-relaxed text-paper-dim">
            $100 cash plus a $100 AoPS gift card. More prize announcements will be posted on
            Devpost and in the DSH Hacks Discord. Stay tuned!
          </p>
          <a
            href="https://dsh-hacks-v2.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-rubric px-8 py-3.5 type-meta text-paper transition-colors hover:bg-rubric-deep"
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
      </div>
    </section>
  );
};

export default PrizesSection;
