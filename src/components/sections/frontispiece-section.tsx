import React from "react";
import Image from "next/image";

/* Beat 1 — The Frontispiece. A 16th-century engraved title page rebuilt as an
   event masthead: title inside a drawn portico, imprint on the plinth,
   printer's device at the foot.

   §12 step 5: STATIC. No motion here — the arch draw-in and staggered load
   sequence come back in the step 8 motion pass. Everything renders in its
   final state.

   Height 92vh (not 100vh) so the CTA and deadline sit above the fold at both
   1440×900 and 390×844. Clean --paper, no plate — the contrast is what makes
   Beat 2 land. Below 768px the pilasters drop; the arch curve and plinth rule
   stay (scaling the whole architecture down turns it into a smudge). */

const Portico = () => (
  <svg
    viewBox="0 0 1000 420"
    className="absolute inset-x-0 top-0 h-full w-full pointer-events-none"
    preserveAspectRatio="xMidYMin slice"
    aria-hidden="true"
  >
    {/* hairline line art, --rule, 1.5px — off the same press as the plates */}
    <g stroke="var(--color-rule)" fill="none" strokeWidth="1.5">
      {/* arch — two halves sharing an apex */}
      <path d="M 500 -160 A 280 280 0 0 0 220 120" />
      <path d="M 500 -160 A 280 280 0 0 1 780 120" />
      {/* entablature over the opening */}
      <line x1="180" y1="118" x2="820" y2="118" className="hidden md:block" />
      {/* pilasters — md and up only */}
      <line x1="220" y1="120" x2="220" y2="400" className="hidden md:block" />
      <line x1="780" y1="120" x2="780" y2="400" className="hidden md:block" />
      <line x1="196" y1="400" x2="244" y2="400" className="hidden md:block" />
      <line x1="756" y1="400" x2="804" y2="400" className="hidden md:block" />
    </g>
    {/* compass-construction arcs — the geometry behind the arch, very faint */}
    <g stroke="var(--color-rule)" fill="none" strokeWidth="1" opacity="0.5">
      <circle cx="500" cy="120" r="280" />
      <path d="M 360 120 A 140 140 0 0 1 640 120" />
    </g>
  </svg>
);

/* A thin rule with a lozenge at centre — a compositor's mark. --ink, not
   rubric: the CTA is the section's single second-ink element. */
const Ornament = () => (
  <div className="relative flex w-full max-w-[16rem] items-center justify-center" aria-hidden="true">
    <span className="h-px w-full bg-rule" />
    <span className="absolute h-2 w-2 rotate-45 bg-ink" />
  </div>
);

const venueItems = ["Online", "Global", "Ages 13+", "100% Free"];

export default function FrontispieceSection() {
  return (
    <section
      id="frontispiece"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-paper px-6 py-20 text-ink sm:px-8"
    >
      <Portico />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* the "publishers", above the arch */}
        <p className="type-meta text-ink-soft text-[clamp(0.625rem,1.5vh,0.8125rem)]">
          DeltaForge Hacks &times; NXT Horizon &times; STEMise
        </p>

        {/* wordmark — deliberately smaller than the date */}
        <h1 className="type-display mt-3 text-ink text-[clamp(1.75rem,6vh,3.25rem)] sm:mt-4">
          DSH Hacks
          <br />
          V2
        </h1>

        <div className="mt-3 w-full max-w-[16rem] sm:mt-4">
          <Ornament />
        </div>

        <p className="type-eyebrow mt-3 text-ink text-[clamp(0.9375rem,2vh,1.25rem)] sm:mt-4">
          AI &times; Healthcare
        </p>

        {/* the most urgent fact — the largest element in the section */}
        <p className="type-mega mt-3 text-ink text-[clamp(3.25rem,12vh,7rem)] sm:mt-5">
          Nov 7 2026
        </p>

        {/* the plinth */}
        <div className="mt-6 flex w-full max-w-2xl flex-col items-center border-t border-rule pt-4 sm:mt-8 sm:pt-5">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 type-meta text-ink-soft text-[clamp(0.625rem,1.4vh,0.8125rem)]">
            {venueItems.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span className="h-3 w-px bg-rule" aria-hidden="true" />}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>

          {/* CTA — the section's one rubric element */}
          <a
            href="https://dsh-hacks-v2.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-rubric px-8 py-3 type-meta text-paper transition-colors hover:bg-rubric-deep text-[clamp(0.6875rem,1.5vh,0.8125rem)] sm:py-3.5"
          >
            Register on Devpost
          </a>

          <p className="type-eyebrow mt-3 text-ink-soft text-[clamp(0.875rem,1.8vh,1.0625rem)]">
            Submissions close November 7
          </p>

          {/* printer's device */}
          <Image
            src="/dsh-logo-circle.png"
            alt="DSH Hacks"
            width={24}
            height={24}
            className="mt-4 object-contain opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
