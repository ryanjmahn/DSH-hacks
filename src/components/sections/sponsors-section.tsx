"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading, ParallaxLayer, WatercolorPlate, useFadeRise } from "@/components/sections/design-system";
import { HorizonLine } from "@/components/sections/graphics";

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
    <section id="sponsors" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40">
      {/* SF watercolor pass — Financial District skyline, no art yet (see
          sf-watercolor-prompts.md). */}
      <WatercolorPlate src="/plates/watercolor/sponsors-downtown-skyline.jpg" presence={0.3} maskPosition="50% 35%" />

      <ParallaxLayer range={4} className="opacity-50">
        <HorizonLine className="absolute bottom-6 h-6 w-full" />
      </ParallaxLayer>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
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

        {/* Even card grid on the --ink-alt surface, per the revamp brief —
            echoes a portfolio-grid treatment rather than a flat logo strip. */}
        <motion.div {...gridMotion} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {sponsors.map(({ name, logo, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-texture flex items-center justify-center rounded-lg border border-rule bg-ink-alt px-6 py-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-paper-dim hover:shadow-[0_10px_28px_-12px_rgba(124,147,255,0.35)]"
              aria-label={name}
            >
              {/* On the dark ground: grayscale + invert so dark wordmarks
                  read as pale silhouettes. Hover only lifts the opacity —
                  no colour change. */}
              <Image
                src={logo}
                alt={name}
                width={150}
                height={32}
                className="h-auto max-h-8 w-auto max-w-[150px] object-contain opacity-70 transition-all duration-[250ms] [filter:grayscale(1)_invert(var(--invert-on-dark))] hover:opacity-100"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
