"use client";

import React from "react";
import { motion } from "framer-motion";
import { MuralHeading, Vessels, Sparkle } from "@/components/sections/mural-art";

const judgingCriteria = [
  { name: "Idea", detail: "Did the proposal address the theme? Was it innovative? Could it be deployed for real-world impact?", color: "#e8836f" },
  { name: "Implementation", detail: "Does the solution work? How technically challenging was the build?", color: "#83d3c4" },
  { name: "Design", detail: "Did the team put thought into UX? How well designed is the interface?", color: "#eecd7f" },
  { name: "Presentation", detail: "Does the presentation clearly define and address the problem statement?", color: "#8fa3f0" },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="relative overflow-hidden bg-[#1a2153] text-[#f2e9d8] py-20 sm:py-28">
      <Vessels className="absolute -left-10 top-6 w-64 sm:w-80 pointer-events-none opacity-90" />
      <Sparkle className="absolute right-[8%] top-20 w-5 animate-twinkle pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="flex justify-end">
          <MuralHeading title="Prizes" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 mx-auto max-w-2xl rounded-3xl bg-[#222a63] border-2 border-[#eecd7f] p-10 text-center animate-bob-slow"
        >
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#eeda9f]">Winner</h3>
          <p className="mt-4 text-xl sm:text-2xl font-bold text-[#f2e9d8]">
            $100 Cash + $100 AoPS Gift Card
          </p>
          <p className="mt-4 text-base text-[#f2e9d8]/70">
            More prize announcements will be posted on Devpost and in the DSH Hacks Discord. Stay tuned!
          </p>
          <a
            href="https://dsh-hacks-v2.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-6 items-center gap-2 bg-[#e2574c] text-[#f2e9d8] px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-[#e8836f] transition-all"
          >
            See Prizes on Devpost
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center text-sm font-bold uppercase tracking-[0.25em] text-[#f2e9d8]/60"
        >
          Judged on four components
        </motion.p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {judgingCriteria.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl bg-[#222a63] p-6 border-t-4 hover:-translate-y-1 transition-transform duration-300"
              style={{ borderColor: c.color }}
            >
              <h4 className="text-lg font-bold uppercase tracking-wide" style={{ color: c.color }}>{c.name}</h4>
              <p className="mt-2 text-sm text-[#f2e9d8]/70 leading-relaxed">{c.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
