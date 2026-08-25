"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading, Numeral, useFadeRise } from "@/components/sections/design-system";

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
      className={`min-w-0 py-7 sm:py-0 sm:px-8 first:sm:pl-0 last:sm:pr-0 ${isLast ? "" : "border-b sm:border-b-0 border-rule"}`}
    >
      <Numeral n={index + 1} />
      <h3 className="font-display font-bold uppercase tracking-tight text-lg sm:text-xl text-ink mt-3 break-words">{name}</h3>
      <p className="type-body text-ink-muted mt-2 leading-relaxed">{detail}</p>
    </motion.div>
  );
}

const PrizesSection = () => {
  const prizeMotion = useFadeRise(0.1);
  const labelMotion = useFadeRise();

  return (
    <section id="prizes" className="relative bg-paper text-ink py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="What you can win" title="Prizes" align="right" />

        <motion.div {...prizeMotion} className="mt-16 sm:mt-20 border-t border-b border-rule py-10 sm:py-14 text-center">
          <p className="type-eyebrow text-brand">Winner</p>
          <p className="type-display text-ink mt-2">$100 + $100 AoPS</p>
          <p className="type-body text-ink-muted mt-4 max-w-xl mx-auto leading-relaxed">
            $100 cash plus a $100 AoPS gift card. More prize announcements will be posted on
            Devpost and in the DSH Hacks Discord. Stay tuned!
          </p>
          <a
            href="https://dsh-hacks-v2.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-8 items-center gap-2 bg-brand text-paper px-8 py-3.5 type-meta hover:bg-brand-deep transition-colors"
          >
            See prizes on Devpost
          </a>
        </motion.div>

        <motion.p {...labelMotion} className="type-meta text-ink-muted mt-16 sm:mt-20">
          Judged on four components
        </motion.p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 border-t border-rule sm:divide-x sm:divide-rule">
          {judgingCriteria.map((c, i) => (
            <CriterionItem key={c.name} index={i} name={c.name} detail={c.detail} isLast={i === judgingCriteria.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
