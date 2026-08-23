"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <section id="sponsors" className="bg-white py-16 text-[#26262e] sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-6 mb-10">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#4f56e5] text-4xl font-bold text-white sm:h-24 sm:w-24 sm:text-5xl">3</div>
            <h2 className="text-5xl font-light tracking-tight sm:text-7xl">Sponsors</h2>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12 max-w-4xl">
          <p className="text-lg sm:text-xl text-[#4a4a55] leading-relaxed">
            Interested in supporting DSH Hacks V2? Reach out to us on Discord or email the hackathon manager via{" "}
            <a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="text-[#4046d4] hover:text-[#3a41cc] underline transition-colors">Devpost</a>{" "}
            to learn about sponsorship opportunities.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {sponsors.map(({ name, logo, href }) => (
              <a
                key={name}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center rounded-2xl bg-[#10112e] border border-[#e3e5f2] hover:border-[#4f56e5]/60 hover:bg-[#191a3e] transition-all py-8 px-6"
              >
                {logo ? (
                  <Image src={logo} alt={name} width={160} height={60} className="object-contain max-h-[60px] w-auto" />
                ) : (
                  <span className="text-white text-xl font-semibold tracking-tight">{name}</span>
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
