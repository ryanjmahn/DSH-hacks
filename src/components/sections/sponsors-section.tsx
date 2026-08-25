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
    <section id="sponsors" className="relative bg-plaster-shade coffer-texture text-umber py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Who supports us" title="Sponsors" align="center" className="mx-auto" />

        <motion.p {...introMotion} className="type-body text-umber-soft mt-8 mb-14 sm:mb-16 mx-auto max-w-2xl text-center leading-relaxed">
          Interested in supporting DSH Hacks? Reach out to us on Discord or email the hackathon
          manager via{" "}
          <a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="text-sienna hover:text-umber underline underline-offset-4">
            Devpost
          </a>{" "}
          to learn about sponsorship opportunities.
        </motion.p>

        <motion.div {...gridMotion} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-rule">
          {sponsors.map(({ name, logo, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center border-r border-b border-rule py-10 px-6 bg-plaster"
            >
              <Image
                src={logo}
                alt={name}
                width={140}
                height={48}
                className="object-contain max-h-12 w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              {/* ochre hairline beneath — wipes in on hover once the motion
                  pass lands; static color/opacity transition for now */}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ochre scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" aria-hidden="true" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
