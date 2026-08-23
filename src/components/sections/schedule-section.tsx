"use client";

import React from "react";
import { motion } from "framer-motion";
import { MuralHeading, DNAHelix, Diamonds } from "@/components/sections/mural-art";

const linkClass = "text-[#eeda9f] font-bold underline underline-offset-4 hover:text-[#f2e9d8] transition-colors";

const scheduleItems: { title: string; detail: React.ReactNode; color: string }[] = [
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
    color: "#83d3c4",
  },
  {
    title: "Workshops",
    detail: (
      <>
        Workshops from industry professionals are continuously posted on the DSH Hacks{" "}
        <a href="https://www.youtube.com/@DSHHacks" target="_blank" rel="noopener noreferrer" className={linkClass}>YouTube channel</a>.
      </>
    ),
    color: "#eecd7f",
  },
  {
    title: "Hacking Period",
    detail: "Build your AI × Healthcare project solo or with your team. Projects must be original and built during the hackathon period.",
    color: "#e8836f",
  },
  {
    title: "Submission Deadline",
    detail: "November 7, 2026 at 11:45pm PST. Submit your prototype, demo video, one-page description, and code on Devpost.",
    color: "#8fa3f0",
  },
  {
    title: "Judging & Winners",
    detail: "Projects are judged on Idea, Implementation, Design, and Presentation. Winners are announced on Devpost.",
    color: "#f2e9d8",
  },
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="relative overflow-hidden bg-[#1a2153] text-[#f2e9d8] py-20 sm:py-28">
      <DNAHelix className="absolute right-[2%] top-1/2 -translate-y-1/2 w-24 sm:w-32 pointer-events-none opacity-90" />
      <Diamonds className="absolute -right-2 top-4 w-16 pointer-events-none opacity-40 hidden lg:block" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <MuralHeading title="Schedule" />
        </motion.div>

        <div className="mt-14 max-w-3xl">
          {scheduleItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-10 pb-10 last:pb-0"
            >
              {/* timeline rail */}
              {i < scheduleItems.length - 1 && (
                <span className="absolute left-[9px] top-6 bottom-0 w-0.5 bg-[#f2e9d8]/20" />
              )}
              <span
                className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-[#1a2153]"
                style={{ backgroundColor: item.color, boxShadow: `0 0 0 2px ${item.color}` }}
              />
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="mt-2 text-base sm:text-lg text-[#f2e9d8]/75 leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          href="https://dsh-hacks-v2.devpost.com/rules"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-10 items-center gap-2 border-2 border-[#83d3c4] text-[#83d3c4] px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-[#83d3c4] hover:text-[#1a2153] transition-all"
        >
          View Full Rules
        </motion.a>
      </div>
    </section>
  );
};

export default ScheduleSection;
