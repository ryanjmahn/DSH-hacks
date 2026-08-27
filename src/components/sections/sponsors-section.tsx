"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading, useFadeRise } from "@/components/sections/design-system";

/* Fixed logos: cleanshot / relay had icon tiles cropped off; aniko's lilac
   box was keyed out to transparent. See public/*-logo-clean.png. */
const sponsors: { name: string; logo: string; href: string }[] = [
  { name: "CodeCrafters Forum",   logo: "/codecrafters-logo.png",       href: "https://codecrafters.io/" },
  { name: "Featherless AI",       logo: "/featherless-logo.png",        href: "https://featherless.ai/" },
  { name: "relay.app",            logo: "/relay-logo-clean.png",        href: "https://relay.app/" },
  { name: "Crackd",               logo: "/crackd-logo.png",             href: "https://www.crackd.one/" },
  { name: "Aniko",                logo: "/aniko-logo-clean.png",        href: "https://www.aniko.ai/" },
  { name: "CleanShot",            logo: "/cleanshot-logo-clean.png",    href: "https://cleanshot.com/" },
  { name: "Ideavo",               logo: "/ideavo-logo.png",             href: "https://ideavo.ai/" },
  { name: "Iteration Machine",    logo: "/iterationmachine-logo.png",   href: "https://iterationmachine.com/" },
  { name: "LLM.API",              logo: "/llmapi-logo.png",             href: "https://llmapi.com/" },
  { name: "InterviewBuddy",       logo: "/interviewbuddy-logo.png",     href: "https://interviewbuddy.net/" },
  { name: "AoPS",                 logo: "/aops-logo.png",               href: "https://artofproblemsolving.com/" },
  { name: "HowtoHackathon",       logo: "/howtohackathon-logo.png",     href: "https://www.howtohackathon.org/" },
  { name: "Devswarm",             logo: "/devswarm-logo.png",           href: "https://devswarm.ai/" },
];

const SponsorsSection = () => {
  const introMotion = useFadeRise(0.1);
  const gridMotion = useFadeRise(0.16);

  return (
    <section id="sponsors" className="relative bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Who supports us" title="Sponsors" />

        <motion.p {...introMotion} className="type-body mb-14 mt-8 max-w-2xl leading-relaxed text-paper-dim sm:mb-16">
          Interested in supporting DSH Hacks? Reach out to us on Discord or email the hackathon
          manager via{" "}
          <a
            href="https://dsh-hacks-v2.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rubric-light underline decoration-rule-dark underline-offset-4 transition-colors hover:text-paper hover:decoration-paper"
          >
            Devpost
          </a>{" "}
          to learn about sponsorship opportunities.
        </motion.p>

        {/* Separation from whitespace only — no cells, no borders, no grid.
            flex-wrap + centred justification so the final row centres its
            remaining items rather than orphaning one on the left. */}
        <motion.div {...gridMotion} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {sponsors.map(({ name, logo, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-[200px] items-center justify-center px-6 py-8"
              aria-label={name}
            >
              {/* On the dark ground: invert + grayscale at rest so dark
                  wordmarks read as pale silhouettes; true colour on hover. */}
              <Image
                src={logo}
                alt={name}
                width={150}
                height={32}
                className="h-auto max-h-8 w-auto max-w-[150px] object-contain opacity-70 transition-all duration-[250ms] [filter:grayscale(1)_invert(1)] hover:opacity-100 hover:[filter:grayscale(0)_invert(0)]"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
