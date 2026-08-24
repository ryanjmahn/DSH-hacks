"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { MuralHeading, Sparkle, Ribbon } from "@/components/sections/mural-art";

const v1Stats = [
  { value: "1,294", label: "Hackers Registered", color: "#e8836f" },
  { value: "283", label: "Projects Submitted", color: "#83d3c4" },
  { value: "70+", label: "Countries", color: "#eecd7f" },
  { value: "8", label: "Prize Categories", color: "#8fa3f0" },
];

const v1Winners = [
  { name: "lily-memo", detail: "Turns notes, PDFs, and lectures into AI-generated explanations, diagrams, and quiz sets" },
  { name: "Yachay Lab", detail: "The free virtual STEM lab for every student who never had one" },
  { name: "SciSim", detail: "AI-powered virtual science lab with chemistry, physics, and biology simulations" },
];

const V1Section = () => {
  return (
    <section id="v1" className="relative overflow-hidden bg-[#12173f] text-[#f2e9d8] py-20 sm:py-28">
      <Ribbon className="absolute -top-8 -right-16 w-[380px] opacity-60 pointer-events-none -scale-x-100" />
      <Sparkle className="absolute left-[8%] top-16 w-5 animate-twinkle pointer-events-none" />
      <Sparkle className="absolute right-[12%] bottom-16 w-4 animate-twinkle pointer-events-none" color="#f2e9d8" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
          <MuralHeading title="V1 Recap" center />
          <p className="mt-6 text-lg font-bold uppercase tracking-[0.25em] text-[#f2e9d8]/70 text-center">
            May 20 to June 15, 2026 · AI × STEM Education
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 mx-auto max-w-3xl text-center text-lg sm:text-xl text-[#f2e9d8]/80 leading-relaxed"
        >
          Our first hackathon brought together students from around the world to build AI products for STEM education,
          judged by engineers from Microsoft, Apple, Amazon, Meta, and PayPal. V2 is building on that momentum.
        </motion.p>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {v1Stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl bg-[#1a2153] p-8 text-center border-2 hover:-translate-y-1 transition-all duration-300"
              style={{ borderColor: stat.color }}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-3 tabular-nums" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-[#f2e9d8]/75">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center text-sm font-bold uppercase tracking-[0.25em] text-[#f2e9d8]/60"
        >
          Winning projects included
        </motion.p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {v1Winners.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl bg-[#1a2153] p-6 border-t-4 border-[#eecd7f] hover:-translate-y-1 transition-transform duration-300"
            >
              <h4 className="text-lg font-bold text-[#eeda9f]">{w.name}</h4>
              <p className="mt-2 text-sm text-[#f2e9d8]/70 leading-relaxed">{w.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="https://dsh-hacks-v1.devpost.com/project-gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#eecd7f] text-[#eecd7f] px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-[#eecd7f] hover:text-[#1a2153] transition-all"
          >
            Browse All 283 Projects
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://dsh-hacks-v1.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#83d3c4] text-[#83d3c4] px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-[#83d3c4] hover:text-[#1a2153] transition-all"
          >
            V1 on Devpost
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default V1Section;
