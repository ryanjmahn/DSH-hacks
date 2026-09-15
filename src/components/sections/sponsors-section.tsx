"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading, ParallaxLayer, WatercolorPlate, useFadeRise, useSectionReveal } from "@/components/sections/design-system";
import { HorizonLine } from "@/components/sections/graphics";
import DitherField from "@/components/sections/dither-field";

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
  const sectionReveal = useSectionReveal();

  return (
    <section id="sponsors" className="blue-ground relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40">
      <DitherField className="absolute inset-0 h-full w-full" color="255,255,255" />
      {/* SF watercolor pass — Financial District skyline, no art yet (see
          sf-watercolor-prompts.md). */}
      <WatercolorPlate src="/plates/watercolor/sponsors-downtown-skyline.jpg" presence={0.3} maskPosition="50% 35%" />

      <ParallaxLayer range={4} className="opacity-50">
        <HorizonLine className="absolute bottom-6 h-6 w-full" />
      </ParallaxLayer>

      <motion.div {...sectionReveal} className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
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

        {/* No more white chip behind each logo — the logos are white marks
            floating directly on the section's blue fill instead. brightness(0)
            then invert(1) collapses any color to solid black, then flips it
            to white; works because these files were specifically keyed out
            to a transparent background (see the note above), so only the
            mark itself goes white and the transparency is untouched. */}
        <motion.div {...gridMotion} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {sponsors.map(({ name, logo, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-8"
              aria-label={name}
            >
              <Image
                src={logo}
                alt={name}
                width={150}
                height={32}
                className="h-auto max-h-8 w-auto max-w-[150px] object-contain opacity-80 transition-all duration-[250ms] [filter:brightness(0)_invert(1)] hover:scale-105 hover:opacity-100"
              />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SponsorsSection;
