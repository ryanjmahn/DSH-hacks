"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading, Numeral, NodeMarker, LeaderLine, useFadeRise } from "@/components/sections/design-system";

const linkClass = "text-sienna underline underline-offset-4 hover:text-umber transition-colors";

const scheduleItems: { title: string; detail: React.ReactNode }[] = [
  {
    title: "Registration Open",
    detail: (
      <>
        Sign up free on{" "}
        <a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>Devpost</a>{" "}
        and join the{" "}
        <a href="https://discord.gg/3HgSzbYPx5" target="_blank" rel="noopener noreferrer" className={linkClass}>Discord</a>{" "}
        to find teammates.
      </>
    ),
  },
  {
    title: "Workshops",
    detail: (
      <>
        Workshops from industry professionals are continuously posted on the DSH Hacks{" "}
        <a href="https://www.youtube.com/@DSHHacks" target="_blank" rel="noopener noreferrer" className={linkClass}>YouTube channel</a>.
      </>
    ),
  },
  {
    title: "Hacking Period",
    detail: "Build your AI × Healthcare project solo or with your team. Projects must be original and built during the hackathon period.",
  },
  {
    title: "Submission Deadline",
    detail: "November 7, 2026 at 11:45pm PST. Submit your prototype, demo video, one-page description, and code on Devpost.",
  },
  {
    title: "Judging & Winners",
    detail: "Projects are judged on Idea, Implementation, Design, and Presentation. Winners are announced on Devpost.",
  },
];

function ScheduleRow({
  index,
  title,
  detail,
  isLast,
}: {
  index: number;
  title: string;
  detail: React.ReactNode;
  isLast: boolean;
}) {
  const motionProps = useFadeRise(index * 0.06);
  return (
    <motion.div
      {...motionProps}
      className={`group relative grid grid-cols-[4rem_1fr] gap-x-5 sm:gap-x-8 pb-10 pl-3 -ml-3 ${isLast ? "" : "border-b border-rule"} pt-8 first:pt-0`}
    >
      {/* spine — centered under the fixed-width numeral column, so it always
          lines up with the node marker regardless of digit width */}
      {!isLast && (
        <span className="absolute left-11 top-16 bottom-0 w-px bg-rule" aria-hidden="true" />
      )}

      {/* effect 8: left hairline thickens to 2px ochre on row hover */}
      <span
        className="absolute left-0 top-2 bottom-10 w-px bg-rule group-hover:w-0.5 group-hover:bg-ochre transition-all duration-300"
        aria-hidden="true"
      />

      <div className="w-16 shrink-0 flex flex-col items-center gap-3 pt-1">
        <Numeral n={index + 1} />
        <NodeMarker />
      </div>

      <div>
        <LeaderLine className="w-8 mb-2" />
        <h3 className="type-title text-umber">{title}</h3>
        <p className="type-body text-umber-soft mt-3 leading-relaxed">{detail}</p>
      </div>
    </motion.div>
  );
}

const ScheduleSection = () => {
  const ctaMotion = useFadeRise(0.1);

  return (
    <section id="schedule" className="relative bg-plaster text-umber py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="What to expect" title="Schedule" />

        <div className="mt-16 sm:mt-20 max-w-3xl sm:ml-[6vw]">
          {scheduleItems.map((item, i) => (
            <ScheduleRow
              key={item.title}
              index={i}
              title={item.title}
              detail={item.detail}
              isLast={i === scheduleItems.length - 1}
            />
          ))}
        </div>

        <motion.a
          {...ctaMotion}
          href="https://dsh-hacks-v2.devpost.com/rules"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wipe inline-flex mt-14 sm:ml-[6vw] items-center gap-2 border border-umber text-umber px-8 py-3.5 type-meta"
        >
          View Full Rules
          <ExternalLink className="w-3.5 h-3.5" />
        </motion.a>
      </div>
    </section>
  );
};

export default ScheduleSection;
