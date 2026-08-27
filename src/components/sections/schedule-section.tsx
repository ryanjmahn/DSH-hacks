"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading, Numeral, Helix, useFadeRise } from "@/components/sections/design-system";

const linkClass =
  "text-ink underline underline-offset-4 decoration-rule hover:text-rubric-deep hover:decoration-rubric-deep transition-colors";

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
      className={`group relative grid grid-cols-[3.5rem_1fr] gap-x-5 sm:gap-x-8 pb-10 pl-4 -ml-4 ${
        isLast ? "" : "border-b border-rule"
      } pt-8 first:pt-0`}
    >
      {/* left hairline — thickens to 2px --rubric on row hover (§8). The helix
          spine to the left is the section's other rubric spend; only ever one
          of the two markers is lit, so hovering a row keeps the viewport at two
          blue elements at most. */}
      <span
        className="absolute left-0 top-2 bottom-10 w-px bg-rule transition-all duration-300 group-hover:w-0.5 group-hover:bg-rubric"
        aria-hidden="true"
      />

      <div className="pt-1">
        <Numeral n={index + 1} />
      </div>

      <div>
        <h3 className="type-title text-ink">{title}</h3>
        <p className="type-body text-ink-soft mt-3 leading-relaxed">{detail}</p>
      </div>
    </motion.div>
  );
}

const ScheduleSection = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const ctaMotion = useFadeRise(0.1);

  return (
    <section id="schedule" className="relative bg-paper text-ink py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="What to expect" title="Schedule" />

        {/* the numbered list and its spine. The helix is a spine for the steps
            only — it starts where the list starts, not behind the heading —
            and collapses to nothing below lg (the list reads fine without it). */}
        <div ref={listRef} className="relative mt-16 sm:mt-20 max-w-3xl lg:pl-16">
          <Helix targetRef={listRef} count={scheduleItems.length} />
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
          className="btn-wipe inline-flex mt-14 lg:ml-16 items-center gap-2 border border-ink text-ink px-8 py-3.5 type-meta"
        >
          View Full Rules
          <ExternalLink className="w-3.5 h-3.5" />
        </motion.a>
      </div>
    </section>
  );
};

export default ScheduleSection;
