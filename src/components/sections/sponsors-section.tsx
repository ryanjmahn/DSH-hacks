"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading, useFadeRise } from "@/components/sections/design-system";

const sponsors: { name: string; logo: string; href: string }[] = [
  { name: "CodeCrafters Forum",   logo: "/codecrafters-logo.png", href: "https://codecrafters.io/" },
  { name: "Featherless AI",       logo: "/featherless-logo.png",  href: "https://featherless.ai/" },
  { name: "relay.app",            logo: "/relay-logo.png",        href: "https://relay.app/" },
  { name: "Crackd",               logo: "/crackd-logo.png",       href: "https://www.crackd.one/" },
  { name: "Aniko",                logo: "/aniko-logo.png",        href: "https://www.aniko.ai/" },
  { name: "CleanShot",            logo: "/cleanshot-logo.png",    href: "https://cleanshot.com/" },
  { name: "Ideavo",               logo: "/ideavo-logo.png",       href: "https://ideavo.ai/" },
  { name: "Iteration Machine",    logo: "/iterationmachine-logo.png", href: "https://iterationmachine.com/" },
  { name: "LLM.API",              logo: "/llmapi-logo.png",       href: "https://llmapi.com/" },
  { name: "InterviewBuddy",       logo: "/interviewbuddy-logo.png", href: "https://interviewbuddy.net/" },
  { name: "AoPS",                 logo: "/aops-logo.png",         href: "https://artofproblemsolving.com/" },
  { name: "HowtoHackathon",       logo: "/howtohackathon-logo.png", href: "https://www.howtohackathon.org/" },
  { name: "Devswarm",             logo: "/devswarm-logo.png",     href: "https://devswarm.ai/" },
];

const SponsorsSection = () => {
  const introMotion = useFadeRise(0.1);
  const gridMotion = useFadeRise(0.16);

  return (
    <section id="sponsors" className="relative bg-paper-alt coffer-texture py-24 text-ink sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Who supports us" title="Sponsors" align="center" tone="ink" className="mx-auto" />

        <motion.p
          {...introMotion}
          className="type-body mx-auto mb-14 mt-8 max-w-2xl text-center leading-relaxed text-ink-soft sm:mb-16"
        >
          Interested in supporting DSH Hacks? Reach out to us on Discord or email the hackathon
          manager via{" "}
          <a
            href="https://dsh-hacks-v2.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-ink"
          >
            Devpost
          </a>{" "}
          to learn about sponsorship opportunities.
        </motion.p>

        <motion.div
          {...gridMotion}
          className="grid grid-cols-2 border-l border-t border-rule sm:grid-cols-3 lg:grid-cols-4"
        >
          {sponsors.map(({ name, logo, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center border-b border-r border-rule bg-paper px-6 py-10"
            >
              <Image
                src={logo}
                alt={name}
                width={140}
                height={48}
                className="max-h-12 w-auto object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
              {/* --rubric hairline wiping in beneath on hover (§7) */}
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-rubric transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
