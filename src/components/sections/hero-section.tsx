"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
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
          scrolled ? "bg-paper/90 backdrop-blur-md border-b border-rule shadow-[0_1px_12px_rgba(20,20,32,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 sm:px-8 py-5">
          <a href="#hero" className="flex items-center gap-2.5">
            <Image src="/dsh-logo-circle.png" alt="DSH Hacks" width={30} height={30} className="object-contain" />
            <span className="font-display text-base font-extrabold uppercase tracking-tight text-ink">
              DSH Hacks
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label text-ink-muted hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-rule text-ink hover:border-brand hover:text-brand transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <motion.div
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", stiffness: 320, damping: 32 }}
        className="fixed inset-0 z-50 bg-paper flex flex-col lg:hidden"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center border border-rule text-ink hover:border-brand hover:text-brand transition-colors"
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
              className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

const HeroPlates = () => (
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
          className="w-full h-full object-cover grayscale"
          style={{ filter: "contrast(0.8) brightness(1.4)" }}
        />
      </picture>
    </div>

    {/* primary plate — full anatomical figure */}
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        WebkitMaskImage: "radial-gradient(ellipse 62% 76% at 50% 40%, black 0%, black 28%, transparent 76%)",
        maskImage: "radial-gradient(ellipse 62% 76% at 50% 40%, black 0%, black 28%, transparent 76%)",
      }}
    >
      <picture>
        <source media="(min-width: 768px)" srcSet="/plates/hero-desktop.webp" type="image/webp" />
        <source media="(min-width: 768px)" srcSet="/plates/hero-desktop.jpg" />
        <source srcSet="/plates/hero-mobile.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/plates/hero-mobile.jpg"
          alt=""
          fetchPriority="high"
          className="w-full h-full object-cover grayscale"
          style={{ objectPosition: "50% 18%", filter: "contrast(0.82) brightness(1.32)" }}
        />
      </picture>
    </div>

    {/* faint periwinkle cast — never full saturation */}
    <div className="absolute inset-0 bg-brand mix-blend-color opacity-[0.05]" />

    <div className="grain-overlay" />
  </div>
);

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? undefined : { opacity: 0, y: 24 };
  const animate = reduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <div className="bg-paper">
      <link rel="preload" as="image" href="/plates/hero-desktop.webp" media="(min-width: 768px)" fetchPriority="high" />
      <link rel="preload" as="image" href="/plates/hero-mobile.webp" media="(max-width: 767px)" fetchPriority="high" />

      <Navbar />

      <section id="hero" className="relative min-h-screen overflow-hidden bg-paper text-ink">
        <HeroPlates />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 min-h-screen flex flex-col justify-center pt-28 pb-16">
          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6 }}
            className="font-serif-eyebrow text-lg sm:text-xl text-brand-ink"
          >
            AI × Healthcare
          </motion.p>

          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display font-black uppercase leading-[0.82] tracking-[-0.03em] mt-3"
          >
            <span className="block text-[clamp(3.25rem,11vw,9rem)] text-ink">DSH Hacks</span>
            <span className="block text-[clamp(3.25rem,11vw,9rem)] text-brand-ink pl-[6vw] sm:pl-[10vw]">V2</span>
          </motion.h1>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="font-serif-eyebrow text-lg sm:text-xl text-ink-muted mt-7 max-w-sm sm:ml-[12vw]"
          >
            Transforming healthcare access through AI
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-10 text-label text-ink-muted"
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
              className="bg-brand text-paper px-8 py-3.5 text-label inline-flex items-center gap-2 hover:bg-brand-deep transition-colors"
            >
              Register on Devpost
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://discord.gg/3HgSzbYPx5"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink text-ink px-8 py-3.5 text-label inline-flex items-center gap-2 hover:border-brand hover:text-brand transition-colors"
            >
              Join Discord
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/dsh-hacks-v2-flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-ink-muted inline-flex items-center gap-1.5 underline underline-offset-4 decoration-rule hover:text-brand hover:decoration-brand transition-colors px-1 py-3.5"
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
