"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { SectionHeading, useFadeRise, useSectionReveal } from "@/components/sections/design-system";

/* Confirmed V2 judge affiliations. Microsoft AI and PayPal were dropped —
   neither ever got a valid logo file (Microsoft_AI_Logo.png's content
   turned out to be a mislabeled placeholder graphic, PayPal's was never
   uploaded at all) — re-add them once real assets land in public/. */
const judges: { name: string; href: string; logo: string }[] = [
  { name: "Apple",      href: "https://www.apple.com/",             logo: "/pro-apple.svg" },
  { name: "Amazon",     href: "https://www.amazon.com/",            logo: "/amazon.svg" },
  { name: "AWS",        href: "https://aws.amazon.com/",            logo: "/pro-amazon-web-services.svg" },
  { name: "Meta",       href: "https://about.meta.com/",            logo: "/pro-meta.svg" },
  { name: "IBM",        href: "https://www.ibm.com/",               logo: "/pro-ibm.svg" },
  { name: "JPMorgan",   href: "https://www.jpmorganchase.com/",     logo: "/pro-j-p-morgan.svg" },
  { name: "Cisco",      href: "https://www.cisco.com/",             logo: "/pro-cisco.svg" },
  { name: "Google",     href: "https://www.google.com/",            logo: "/pro-google.svg" },
  { name: "T-Mobile",   href: "https://www.t-mobile.com/",          logo: "/pro-t-mobile.svg" },
  { name: "University of Oxford", href: "https://www.ox.ac.uk/",   logo: "/University_of_Oxford.svg" },
  { name: "Y Combinator", href: "https://www.ycombinator.com/",    logo: "/yc-logo.png" },
  { name: "Goldman Sachs", href: "https://www.goldmansachs.com/",  logo: "/goldman-sachs-2.svg" },
  { name: "Accenture",  href: "https://www.accenture.com/",        logo: "/Accenture.svg" },
  { name: "Oracle",     href: "https://www.oracle.com/",           logo: "/pro-oracle.svg" },
  { name: "Capital One", href: "https://www.capitalone.com/",      logo: "/pro-capital-one.svg" },
  { name: "Paramount",  href: "https://www.paramount.com/",        logo: "/pro-paramount.svg" },
  { name: "Visa",       href: "https://www.visa.com/",             logo: "/pro-visa.svg" },
];

/* Fixed-width slot per logo (rather than each mark just taking its own
   content width) — mirrors what Sponsors gets for free from its CSS Grid's
   equal-width cells. Without this, a narrow mark (Y Combinator's lone "Y",
   Apple's glyph) sits in a much smaller box than a wide wordmark (Amazon,
   T-Mobile), so the *visual* gap between adjacent logos varies wildly even
   though every item has identical padding. Centering each logo inside the
   same fixed width makes the rhythm between logos consistent regardless of
   each one's own aspect ratio. */
function JudgeMark({ name, href, logo }: { name: string; href: string; logo: string }) {
  const [imgError, setImgError] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-[110px] shrink-0 items-center justify-center py-2 sm:w-[130px]"
      aria-label={name}
    >
      {imgError ? (
        <span className="type-title !text-base text-paper opacity-90 transition-all duration-[250ms] hover:scale-105 hover:opacity-100 sm:!text-lg">
          {name}
        </span>
      ) : (
        // Real brand colors, not the old monochrome/invert treatment — full
        // opacity so color reads true, brightening only via hover scale.
        // loading="eager": these sit inside a continuously-scrolling track,
        // so Next's default lazy-load (IntersectionObserver-gated) was
        // fetching/decoding each logo right as it scrolled into the masked
        // view — the jank the marquee was reported for. All 20 are tiny
        // local files, so loading them all up front costs nothing.
        <Image
          src={logo}
          alt={name}
          width={130}
          height={32}
          loading="eager"
          decoding="async"
          onError={() => setImgError(true)}
          className="h-auto max-h-8 w-auto max-w-full object-contain transition-transform duration-[250ms] hover:scale-105"
        />
      )}
    </a>
  );
}

/* No DitherField/WatercolorPlate here — same call Workshops/Register/Footer
   make right below: with Sponsors directly above already running the dot
   texture, adding it here too reads as noise rather than accent. There's
   also no ninth SF-landmark plate planned for this slot (see
   sf-watercolor-prompts.md's fixed set of 8), so this stays a plain blue
   ground like Register. */
const JudgesSection = () => {
  const introMotion = useFadeRise(0.1);
  const gridMotion = useFadeRise(0.16);
  const sectionReveal = useSectionReveal();
  const reduceMotion = useReducedMotion();

  return (
    <section id="judges" className="blue-ground relative overflow-hidden bg-ink py-10 text-paper sm:py-12 lg:py-14">
      <motion.div {...sectionReveal} className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Who evaluates your work" title="Judges From" />

        <motion.p {...introMotion} className="type-body mb-5 mt-4 max-w-2xl leading-relaxed text-paper-dim sm:mb-6">
          Interested in judging DSH Hacks? Reach out to us on Discord or email the hackathon
          manager via{" "}
          <a
            href="https://dsh-hacks-v2.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rubric-light underline decoration-rule-dark underline-offset-4 transition-colors hover:text-paper hover:decoration-paper"
          >
            Devpost
          </a>{" "}
          to learn about judging opportunities.
        </motion.p>

        <div className="border-t border-rule-dark" />
      </motion.div>

      {/* Rotating logo strip — full-bleed within the section so the edge
          fade (marquee-mask) reads as the row dissolving into the section's
          own blue fill rather than a hard-edged box. Reduced motion falls
          back to a single centered, non-scrolling, wrapping row instead of
          the looping track. */}
      <motion.div {...gridMotion} className="relative z-10 mt-5 sm:mt-6">
        {reduceMotion ? (
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 sm:px-8">
            {judges.map((j) => (
              <JudgeMark key={j.name} {...j} />
            ))}
          </div>
        ) : (
          <div className="marquee-mask overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-x-4 sm:gap-x-6">
              {[...judges, ...judges].map((j, i) => (
                <JudgeMark key={`${j.name}-${i}`} {...j} />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default JudgesSection;
