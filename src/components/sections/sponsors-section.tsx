"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MuralHeading, Arcs } from "@/components/sections/mural-art";

const sponsors: { name: string; logo: string | null; href: string }[] = [
  { name: "CodeCrafters Forum",   logo: "/codecrafters-logo.png", href: "https://codecrafters.io/" },
  { name: "Featherless AI",       logo: "/featherless-logo.png",  href: "https://featherless.ai/" },
  { name: "relay.app",            logo: "/relay-logo.png",        href: "https://relay.app/" },
  { name: "Crackd",               logo: "/crackd-logo.png",       href: "https://www.crackd.one/" },
  { name: "Aniko",                logo: "/aniko-logo.png",        href: "https://www.aniko.ai/" },
  { name: "CleanShot",            logo: null,                     href: "https://cleanshot.com/" },
  { name: "Ideavo",               logo: "/ideavo-logo.png",       href: "https://ideavo.ai/" },
  { name: "Iteration Machine",    logo: null,                     href: "#" },
  { name: "LLM.API",              logo: "/llmapi-logo.png",       href: "#" },
  { name: "InterviewBuddy",       logo: "/interviewbuddy-logo.png", href: "https://interviewbuddy.net/" },
  { name: "AoPS",                 logo: "/aops-logo.png",         href: "https://artofproblemsolving.com/" },
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="relative overflow-hidden bg-[#1a2153] text-[#f2e9d8] py-20 sm:py-28">
      <Arcs className="absolute inset-x-0 bottom-0 w-full h-72 pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="flex justify-center">
          <MuralHeading title="Sponsors" center />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 mb-12 mx-auto max-w-3xl text-center text-lg sm:text-xl text-[#f2e9d8]/75 leading-relaxed"
        >
          Interested in supporting DSH Hacks? Reach out to us on Discord or email the hackathon manager via{" "}
          <a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="text-[#eecd7f] font-bold hover:underline">Devpost</a>{" "}
          to learn about sponsorship opportunities.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {sponsors.map(({ name, logo, href }, i) => (
              <a
                key={name}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center rounded-3xl bg-[#12173f] border-2 hover:-translate-y-1 transition-all duration-300 py-8 px-6"
                style={{ borderColor: ["#e8836f", "#83d3c4", "#eecd7f", "#5a77e6", "#f2e9d8"][i % 5] + "55" }}
              >
                {logo ? (
                  <Image src={logo} alt={name} width={160} height={60} className="object-contain max-h-[60px] w-auto" />
                ) : (
                  <span className="text-[#f2e9d8] text-xl font-bold tracking-tight">{name}</span>
                )}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
