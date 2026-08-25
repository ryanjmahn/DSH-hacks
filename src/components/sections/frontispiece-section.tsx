"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* A 16th-century engraved title page, rebuilt as a modern event masthead.
   Static — no motion here yet; the arch draw-in and staggered fade-up land
   in the motion pass once every section is built. Height is 92vh (not
   100vh) so the CTA and deadline are guaranteed visible without scrolling
   at both 1440×900 and 390×844 — verified by screenshot, not assumed. */

const Portico = () => (
  <svg
    viewBox="0 0 1000 420"
    className="absolute inset-x-0 top-0 w-full h-full pointer-events-none"
    preserveAspectRatio="xMidYMin slice"
    aria-hidden="true"
  >
    <g stroke="var(--color-ochre)" strokeOpacity="0.4" fill="none" strokeWidth="1.5">
      {/* pilasters — dropped below md, per the brief: don't scale the full
          architecture down, it turns into a smudge */}
      <line x1="220" y1="120" x2="220" y2="400" className="hidden md:inline" />
      <line x1="780" y1="120" x2="780" y2="400" className="hidden md:inline" />
      <line x1="196" y1="400" x2="244" y2="400" className="hidden md:inline" />
      <line x1="756" y1="400" x2="804" y2="400" className="hidden md:inline" />
      {/* entablature */}
      <line x1="180" y1="118" x2="820" y2="118" className="hidden md:inline" />
      {/* the arch itself — kept at every breakpoint */}
      <path d="M 220 120 A 280 280 0 0 1 780 120" />
    </g>
  </svg>
);

const Ornament = () => (
  <div className="relative flex items-center justify-center w-full max-w-xs mx-auto" aria-hidden="true">
    <span className="h-px w-full bg-ochre/50" />
    <span className="absolute w-2.5 h-2.5 bg-ochre rotate-45" />
  </div>
);

const venueItems = ["Online", "Global", "Ages 13+", "100% Free"];

export default function FrontispieceSection() {
  return (
    <section
      id="frontispiece"
      className="relative min-h-[92vh] flex flex-col items-center justify-center bg-plaster text-umber overflow-hidden px-6 py-20 sm:px-8"
    >
      <Portico />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">
        <p className="type-meta text-umber-soft text-[clamp(0.625rem,1.5vh,0.8125rem)]">
          DeltaForge Hacks × NXT Horizon × STEMise
        </p>

        {/* wordmark — smaller than the date, per the brief's explicit ratio.
            Sized off vh, not vw: the binding constraint here is the 92vh
            budget, and vw-based sizing blew past it badly on wide-but-short
            desktop viewports. */}
        <h1 className="font-display font-extrabold uppercase leading-[0.88] tracking-tight text-umber mt-3 sm:mt-4 text-[clamp(1.75rem,6vh,3.25rem)]">
          DSH Hacks
          <br />
          V2
        </h1>

        <div className="mt-3 sm:mt-4 w-full max-w-[16rem]">
          <Ornament />
        </div>

        <p className="type-eyebrow text-umber mt-3 sm:mt-4 text-[clamp(0.9375rem,2vh,1.25rem)]">
          AI × Healthcare
        </p>

        <p className="font-display font-extrabold uppercase tracking-tight leading-none text-umber mt-3 sm:mt-5 text-[clamp(3.25rem,12vh,7rem)]">
          Nov 7 2026
        </p>

        <div className="w-full max-w-2xl mx-auto border-t border-rule mt-6 sm:mt-8 pt-4 sm:pt-5 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 type-meta text-umber-soft text-[clamp(0.625rem,1.4vh,0.8125rem)]">
            {venueItems.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span aria-hidden="true">·</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>

          <a
            href="https://dsh-hacks-v2.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lapis text-plaster px-8 py-3 sm:py-3.5 type-meta text-[clamp(0.6875rem,1.5vh,0.8125rem)] hover:bg-lapis-deep transition-colors mt-4"
          >
            Register on Devpost
            <ArrowRight className="w-4 h-4" />
          </a>

          <p className="type-eyebrow text-umber-soft mt-3 text-[clamp(0.875rem,1.8vh,1.0625rem)]">
            Submissions close November 7
          </p>

          <Image
            src="/dsh-logo-circle.png"
            alt="DSH Hacks"
            width={24}
            height={24}
            className="object-contain mt-4 opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
