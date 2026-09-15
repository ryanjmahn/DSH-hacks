"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Menu, X } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FogLayer, useSectionReveal } from "@/components/sections/design-system";
import ParticleImage from "@/components/sections/particle-image";

/* Trimmed to 4 top-level items per the revamp brief ("condensed set of
   links... one pill-shaped CTA button right"); Sponsors and Workshops fold
   into the footer instead of competing for header space. */
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#prizes", label: "Prizes" },
  { href: "#faq", label: "FAQ" },
];

const metaItems = ["Deadline Nov 7, 2026", "Online", "Ages 13+", "100% Free"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-rule bg-ink/90 backdrop-blur-md shadow-[0_1px_12px_var(--shadow-nav)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
          <a href="#frontispiece" className="flex items-center gap-2.5">
            <Image src="/dsh-logo-circle.png" alt="DSH Hacks" width={30} height={30} className="object-contain" />
            <span className="font-body font-semibold tracking-tight text-base text-paper">DSH Hacks</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="type-meta text-paper-dim transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://dsh-hacks-v2.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-rubric px-6 py-2.5 type-meta text-ink transition-colors hover:bg-rubric-deep lg:inline-flex lg:items-center"
          >
            Register
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="btn-wipe inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule text-paper lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <motion.div
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="fixed inset-0 z-50 flex flex-col bg-ink lg:hidden"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="btn-wipe flex h-10 w-10 items-center justify-center rounded-full border border-rule text-paper"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-body font-semibold tracking-tight text-3xl text-paper transition-colors hover:text-paper-dim"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

/* The real Golden Gate Bridge photo (gates_integration.md), rendered as a
   particle/halftone field (same treatment as Frontispiece/About via
   particle-image.tsx) rather than a flat photo — dots sample the photo's
   own color, tuned bolder like Frontispiece (tighter stride, contrast
   gamma, saturation boost) so the bridge stays a clear, defined shape.
   Every legibility/mood treatment below is still real CSS, not baked into
   the file:
     - object-cover + a right-favoring object-position, so the tower (the
       bulk of the bridge's structure sits on the right of the source frame)
       stays the visual anchor at any viewport width rather than drifting
       off-center on narrow crops
     - a bottom-anchored linear gradient to --color-ink, so the hero
       headline/stats/buttons sitting over the lower two-thirds of the image
       stay legible without a flat scrim over the whole photo
     - the same radial "dissolve at the edges" mask every other plate on the
       site uses, so it reads as bleeding into the page rather than a
       hard-edged rectangle
     - the sitewide grain overlay for texture continuity
   No longer the LCP element the way a plain <img> was — canvas isn't an LCP
   candidate, so that role now falls to the headline text, which is a fine
   trade for a hero whose actual message is the text anyway. Still preloaded
   (see the <link> tag below) so the particle build starts as early as
   possible instead of waiting on a cold fetch. */
const HeroBridgePhoto = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div
      className="absolute inset-0"
      style={{
        // Widened and re-centered from the original 68%/62% (tuned for a
        // flat photo, where the right-side tower alone carried the image)
        // so the left half of the bridge — cables, hillside, the far tower
        // base — reads clearly as particles too instead of fading to
        // near-nothing there; the opaque core now holds until 45% of the
        // radius (up from 30%) before it starts dissolving at the edges.
        WebkitMaskImage: "radial-gradient(ellipse 92% 85% at 55% 52%, black 0%, black 45%, transparent 85%)",
        maskImage: "radial-gradient(ellipse 92% 85% at 55% 52%, black 0%, black 45%, transparent 85%)",
      }}
    >
      <ParticleImage
        src="/plates/watercolor/hero-golden-gate-desktop.jpg"
        className="h-full w-full"
        objectPosition="72% 38%"
        stride={5}
        contrast={0.7}
        saturate={1.4}
        lightCutoff={0.96}
      />
      {/* legibility gradient — transparent top, fading to the page ground by
          two-thirds down, where the headline/stats/buttons sit */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 0%, transparent 30%, var(--color-ink) 92%)" }}
      />
      <div className="grain-overlay" />
    </div>
  </div>
);

/* SF-vibe pass §1 — a soft blue-gray fog wash drifting behind the headline,
   layered above the plate so it reads as atmosphere veiling the scene rather
   than a second competing graphic. Opacity capped low; this stays a mood
   detail, not a haze thick enough to fight text contrast. */
const HeroFog = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70" aria-hidden="true">
    <FogLayer />
  </div>
);

/* Faint receding arch outlines diminishing toward a horizon (§6 perspective).
   Scroll-linked drift (§8): the group scales to 1.04 and fades slightly across
   the section's own scroll range — the user feels they are walking in. */
const RecedingArches = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.75]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.svg
        viewBox="0 0 1000 700"
        className="absolute inset-x-0 top-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        style={reduceMotion ? undefined : { scale, opacity }}
      >
        <g stroke="var(--color-line-dark)" fill="none" strokeWidth="1.5">
          <path d="M 120 500 A 380 380 0 0 1 880 500" opacity="0.55" />
          <path d="M 230 500 A 270 270 0 0 1 770 500" opacity="0.4" />
          <path d="M 340 500 A 160 160 0 0 1 660 500" opacity="0.28" />
        </g>
        {/* circle-and-square proportion construction (§5B) */}
        <g stroke="var(--color-line-dark)" fill="none" strokeWidth="1" opacity="0.3">
          <rect x="360" y="180" width="280" height="280" />
          <circle cx="500" cy="320" r="140" />
        </g>
      </motion.svg>
    </div>
  );
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? undefined : { opacity: 0, y: 24 };
  const animate = reduceMotion ? undefined : { opacity: 1, y: 0 };
  const sectionReveal = useSectionReveal();

  return (
    <div className="bg-ink">
      {/* Single desktop source now (ParticleImage samples one file at any
          viewport, same as Frontispiece/About), so one preload covers it —
          the old mobile-specific webp preload is no longer fetched here. */}
      <link rel="preload" as="image" href="/plates/watercolor/hero-golden-gate-desktop.jpg" fetchPriority="high" />

      <Navbar />

      {/* Beat 2 — The Dedication. Left margin echoes the Frontispiece's left
          pilaster so the two beats read as one continuous space. No ground
          change, no hard boundary. */}
      <section id="hero" className="relative min-h-screen overflow-hidden bg-ink text-paper">
        {/* RecedingArches removed (remove-decorative-svg-and-fix-spacing-
            prompt.md) — the old engraved-folio construction-line arcs read
            as competing clutter behind "a global" now that there's a real
            bridge photo underneath. Definition kept below, unused. */}
        <HeroBridgePhoto />
        <HeroFog />

        <motion.div
          {...sectionReveal}
          className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pt-28 pb-16 sm:pl-[14vw] sm:pr-8"
        >
          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6 }}
            className="type-eyebrow text-rubric-light"
          >
            a global
          </motion.p>

          <motion.h2
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="type-display mt-3"
          >
            <span className="block text-[clamp(3.25rem,11vw,10rem)] text-paper">Gathering</span>
            <span className="block pl-[6vw] text-[clamp(3.25rem,11vw,10rem)] text-paper sm:pl-[9vw]">of builders</span>
          </motion.h2>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-7 max-w-md type-eyebrow text-paper-dim sm:ml-[9vw]"
          >
            1,294 hackers. 70+ countries. One question.
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 type-meta text-paper-dim"
          >
            {metaItems.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span className="hidden h-3 w-px bg-rule sm:block" aria-hidden="true" />}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </motion.div>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"
          >
            <a
              href="https://dsh-hacks-v2.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rubric px-8 py-3.5 type-meta text-ink transition-colors hover:bg-rubric-deep"
            >
              Register on Devpost
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://discord.gg/3HgSzbYPx5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wipe inline-flex items-center gap-2 rounded-full border border-paper px-8 py-3.5 type-meta text-paper"
            >
              Join Discord
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="/dsh-hacks-v2-flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-1 py-3.5 type-meta text-paper-dim underline decoration-rule underline-offset-4 transition-colors hover:text-paper hover:decoration-paper"
            >
              View Flyer
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
