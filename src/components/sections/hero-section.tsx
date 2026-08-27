"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Menu, X } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#prizes", label: "Prizes" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#workshops", label: "Workshops" },
  { href: "#register", label: "Register" },
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
            ? "border-b border-rule bg-paper/90 backdrop-blur-md shadow-[0_1px_12px_rgba(11,11,15,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
          <a href="#frontispiece" className="flex items-center gap-2.5">
            <Image src="/dsh-logo-circle.png" alt="DSH Hacks" width={30} height={30} className="object-contain" />
            <span className="type-title text-base text-ink">DSH Hacks</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="type-meta text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="btn-wipe inline-flex h-10 w-10 items-center justify-center border border-rule text-ink lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <motion.div
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="btn-wipe flex h-10 w-10 items-center justify-center border border-rule text-ink"
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
              className="type-display text-3xl text-ink transition-colors hover:text-ink-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

/* The bleached Vesalius plate behind the type (§4 monochrome positive, §7
   Beat 2). Grayscale pushed toward black line on white, whites lifted to
   --paper, feathered with a radial alpha mask, no bounding box — and no wash,
   no mottle (that was the fresco treatment). Mask centre sits low so presence
   is near zero across the top ~20%, reading as a gradual reveal continuing
   from Beat 1's clean paper rather than a seam. LCP element — preloaded. */
const DedicationPlate = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div
      className="absolute inset-0 opacity-[0.24]"
      style={{
        WebkitMaskImage: "radial-gradient(ellipse 62% 70% at 50% 66%, black 0%, black 18%, transparent 68%)",
        maskImage: "radial-gradient(ellipse 62% 70% at 50% 66%, black 0%, black 18%, transparent 68%)",
      }}
    >
      <picture>
        <source media="(min-width: 768px)" srcSet="/plates/beat2-desktop.webp" type="image/webp" />
        <source media="(min-width: 768px)" srcSet="/plates/beat2-desktop.jpg" />
        <source srcSet="/plates/beat2-mobile.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/plates/beat2-mobile.jpg"
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 30%", filter: "grayscale(1) contrast(1.15) brightness(1.3)" }}
        />
      </picture>
    </div>
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
        <g stroke="var(--color-rule)" fill="none" strokeWidth="1.5">
          <path d="M 120 500 A 380 380 0 0 1 880 500" opacity="0.55" />
          <path d="M 230 500 A 270 270 0 0 1 770 500" opacity="0.4" />
          <path d="M 340 500 A 160 160 0 0 1 660 500" opacity="0.28" />
        </g>
        {/* circle-and-square proportion construction (§5B) */}
        <g stroke="var(--color-rule)" fill="none" strokeWidth="1" opacity="0.3">
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

  return (
    <div className="bg-paper">
      <link rel="preload" as="image" href="/plates/beat2-desktop.webp" media="(min-width: 768px)" fetchPriority="high" />
      <link rel="preload" as="image" href="/plates/beat2-mobile.webp" media="(max-width: 767px)" fetchPriority="high" />

      <Navbar />

      {/* Beat 2 — The Dedication. Left margin echoes the Frontispiece's left
          pilaster so the two beats read as one continuous space. No ground
          change, no hard boundary. */}
      <section id="hero" className="relative min-h-screen overflow-hidden bg-paper text-ink">
        <RecedingArches />
        <DedicationPlate />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pt-28 pb-16 sm:pl-[14vw] sm:pr-8">
          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6 }}
            className="type-eyebrow text-lg text-ink-soft sm:text-xl"
          >
            a global
          </motion.p>

          <motion.h2
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="type-display mt-3"
          >
            <span className="block text-[clamp(3.25rem,11vw,10rem)] text-ink">Gathering</span>
            <span className="block pl-[6vw] text-[clamp(3.25rem,11vw,10rem)] text-ink sm:pl-[9vw]">of builders</span>
          </motion.h2>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-7 max-w-md type-eyebrow text-lg text-ink-soft sm:ml-[9vw] sm:text-xl"
          >
            1,294 hackers. 70+ countries. One question.
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 type-meta text-ink-soft"
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
              className="inline-flex items-center gap-2 bg-rubric px-8 py-3.5 type-meta text-paper transition-colors hover:bg-rubric-deep"
            >
              Register on Devpost
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://discord.gg/3HgSzbYPx5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wipe inline-flex items-center gap-2 border border-ink px-8 py-3.5 type-meta text-ink"
            >
              Join Discord
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="/dsh-hacks-v2-flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-1 py-3.5 type-meta text-ink-soft underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              View Flyer
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
