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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-plaster/90 backdrop-blur-md border-b border-rule shadow-[0_1px_12px_rgba(61,50,38,0.08)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 sm:px-8 py-5">
          <a href="#frontispiece" className="flex items-center gap-2.5">
            <Image src="/dsh-logo-circle.png" alt="DSH Hacks" width={30} height={30} className="object-contain" />
            <span className="font-display text-base font-extrabold uppercase tracking-tight text-umber">
              DSH Hacks
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="type-meta text-umber-soft hover:text-sienna transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-rule text-umber hover:border-sienna hover:text-sienna transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <motion.div
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="fixed inset-0 z-50 bg-plaster flex flex-col lg:hidden"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center border border-rule text-umber hover:border-sienna hover:text-sienna transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-center items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-3xl font-extrabold uppercase tracking-tight text-umber hover:text-sienna transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

const DedicationPlates = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* secondary collage layer — branching nerve-tree plate, upper right */}
    <div
      className="absolute -right-[10%] -top-[6%] w-[62%] max-w-xl aspect-[3/4] opacity-[0.16]"
      style={{
        WebkitMaskImage: "radial-gradient(ellipse 62% 62% at 58% 32%, black 0%, transparent 72%)",
        maskImage: "radial-gradient(ellipse 62% 62% at 58% 32%, black 0%, transparent 72%)",
      }}
    >
      <picture>
        <source srcSet="/plates/hero-accent.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/plates/hero-accent.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(1) contrast(0.8) brightness(1.4)" }}
        />
      </picture>
    </div>

    {/* primary plate — the walking écorché figure (Vesalius tradition, 1568).
        Mask center sits low (65%) with a wide vertical radius so presence is
        essentially zero across the top ~20% of this section — reading as a
        gradual reveal continuing from Beat 1's clean plaster rather than a
        hard seam, per the brief: "Beat 2's plate begins fading in near the
        bottom of Beat 1." A literal cross-section bleed was considered but
        would need dropping overflow-hidden on the section (horizontal-scroll
        risk) and could paint over the Frontispiece's own footer content.

        The ochre wash and plaster texture live INSIDE this same masked box —
        the first version had them as unmasked siblings covering the full
        rectangle, which produced the exact "box" bug found earlier in
        BleachedPlate: a uniform tint/texture starting abruptly at the section
        edge regardless of how softly the image itself faded in. */}
    <div
      className="absolute inset-0 opacity-[0.42]"
      style={{
        WebkitMaskImage: "radial-gradient(ellipse 62% 70% at 50% 65%, black 0%, black 20%, transparent 68%)",
        maskImage: "radial-gradient(ellipse 62% 70% at 50% 65%, black 0%, black 20%, transparent 68%)",
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
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 30%", filter: "grayscale(1) contrast(0.8) brightness(1.34)" }}
        />
      </picture>

      {/* warm ochre wash — aged-plaster cast, never a cool tint */}
      <div className="absolute inset-0 bg-ochre mix-blend-color opacity-[0.14]" />

      {/* nested inside the 0.42-opacity plate wrapper, so its own opacity is
          boosted to keep the mottling legible at its actual painted weight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "var(--plaster-texture-svg)", mixBlendMode: "multiply", opacity: 0.4 }}
      />
    </div>
  </div>
);

/** Faint receding arch outlines diminishing toward a horizon — Part 4 calls
 *  for this on "the opening sections" (plural), and Beat 2 is the second.
 *  Three nested arcs, fainter as they shrink, suggesting a hallway receding
 *  into the distance. Scroll-linked drift (effect 2) scales the whole group
 *  to 1.04 and fades it slightly across the section's own scroll range. */
const RecedingArches = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.75]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.svg
        viewBox="0 0 1000 700"
        className="absolute inset-x-0 top-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        style={reduceMotion ? undefined : { scale, opacity }}
      >
        <g stroke="var(--color-ochre)" fill="none" strokeWidth="1.5">
          <path d="M 120 500 A 380 380 0 0 1 880 500" opacity="0.22" />
          <path d="M 230 500 A 270 270 0 0 1 770 500" opacity="0.16" />
          <path d="M 340 500 A 160 160 0 0 1 660 500" opacity="0.1" />
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
    <div className="bg-plaster">
      <link rel="preload" as="image" href="/plates/beat2-desktop.webp" media="(min-width: 768px)" fetchPriority="high" />
      <link rel="preload" as="image" href="/plates/beat2-mobile.webp" media="(max-width: 767px)" fetchPriority="high" />

      <Navbar />

      {/* Beat 2 — The Dedication. Left margin echoes the Frontispiece's left
          pilaster (~22% from edge) so the two beats read as one continuous
          space, not two unrelated sections. */}
      <section id="hero" className="relative min-h-screen overflow-hidden bg-plaster text-umber">
        <RecedingArches />
        <DedicationPlates />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:pl-[14vw] sm:pr-8 min-h-screen flex flex-col justify-center pt-28 pb-16">
          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6 }}
            className="type-eyebrow text-sienna text-lg sm:text-xl"
          >
            a global
          </motion.p>

          <motion.h2
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display font-extrabold uppercase leading-[0.85] tracking-[-0.03em] mt-3"
          >
            <span className="block text-[clamp(3.25rem,11vw,10rem)] text-umber">Gathering</span>
            <span className="block text-[clamp(3.25rem,11vw,10rem)] text-umber pl-[6vw] sm:pl-[9vw]">of builders</span>
          </motion.h2>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="type-eyebrow text-umber-soft text-lg sm:text-xl mt-7 max-w-md sm:ml-[9vw]"
          >
            1,294 hackers. 70+ countries. One question.
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-10 type-meta text-umber-soft"
          >
            {metaItems.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span className="hidden sm:block w-px h-3 bg-rule" aria-hidden="true" />}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </motion.div>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mt-10"
          >
            <a
              href="https://dsh-hacks-v2.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lapis text-plaster px-8 py-3.5 type-meta inline-flex items-center gap-2 hover:bg-lapis-deep transition-colors"
            >
              Register on Devpost
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://discord.gg/3HgSzbYPx5"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-umber text-umber px-8 py-3.5 type-meta inline-flex items-center gap-2 hover:border-sienna hover:text-sienna transition-colors"
            >
              Join Discord
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/dsh-hacks-v2-flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="type-meta text-umber-soft inline-flex items-center gap-1.5 underline underline-offset-4 decoration-rule hover:text-sienna hover:decoration-sienna transition-colors px-1 py-3.5"
            >
              View Flyer
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
