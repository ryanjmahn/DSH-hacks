"use client";

import React, { useState } from "react";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { EKGLine, Swirl, PaperCard, PocketWatch, Sparkle, StarField } from "@/components/sections/mural-art";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#prizes", label: "Prizes" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#workshops", label: "Workshops" },
  { href: "#register", label: "Register" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto w-full max-w-6xl px-4 pt-3">
          {/* Painted ribbon banner */}
          <div
            className="relative flex items-center justify-between bg-[#f2e9d8] text-[#1a2153] shadow-lg shadow-black/30 px-5 sm:px-8 h-14"
            style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 18px) 50%, 100% 100%, 0 100%, 18px 50%)" }}
          >
            <a href="#" className="flex items-center gap-2.5 pl-3">
              <Image src="/dsh-logo-circle.png" alt="DSH Hacks" width={34} height={34} className="object-contain" />
              <span className="text-lg font-bold tracking-tight text-[#1a2153]">
                DSH <span className="text-[#e2574c]">Hacks</span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-6 pr-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wide text-[#1a2153] hover:text-[#e2574c] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#1a2153] pr-3"
              aria-label="Open menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span className="block w-6 h-0.5 bg-[#1a2153]"></span>
                <span className="block w-6 h-0.5 bg-[#1a2153] mt-1"></span>
                <span className="block w-6 h-0.5 bg-[#1a2153] mt-1"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      <motion.div
        initial={{ x: "-100%" }}
        animate={isMenuOpen ? { x: 0 } : { x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-0 z-50 bg-[#12173f]/97 backdrop-blur-md flex flex-col"
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-[#e2574c] flex items-center justify-center hover:bg-[#e8836f] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-[#f2e9d8]" />
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-center items-center gap-8 text-[#f2e9d8] text-2xl font-bold uppercase tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#eeda9f] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default function HeroSection() {
  return (
    <div className="antialiased bg-[#1a2153]">
      <Navbar />
      <section id="hero" className="min-h-screen relative overflow-hidden text-[#f2e9d8]">
        <StarField className="absolute top-0 left-0 w-full h-64 pointer-events-none" />
        <EKGLine className="absolute top-28 left-0 w-full h-10 pointer-events-none opacity-90" />

        {/* Floating illustrated objects */}
        <Swirl className="absolute -right-16 sm:right-[4%] top-[52%] w-52 sm:w-80 animate-bob pointer-events-none" />
        <PaperCard className="absolute right-[16%] top-[20%] w-12 sm:w-16 animate-bob pointer-events-none hidden sm:block" />
        <PaperCard className="absolute right-[8%] top-[30%] w-10 sm:w-14 rotate-12 animate-bob-slow pointer-events-none hidden sm:block" />
        <PocketWatch className="absolute left-[6%] top-[62%] w-16 sm:w-24 animate-bob-slow pointer-events-none hidden md:block" />
        <Sparkle className="absolute left-[12%] top-[26%] w-5 animate-twinkle pointer-events-none" />
        <Sparkle className="absolute right-[28%] top-[64%] w-4 animate-twinkle pointer-events-none" color="#f2e9d8" />
        <Sparkle className="absolute left-[30%] top-[78%] w-4 animate-twinkle pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-screen gap-8 py-28 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col items-center max-w-4xl"
            >
              <a
                href="https://dsh-hacks-v2.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border-2 border-[#eeda9f]/60 text-[#eeda9f] font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#eeda9f] hover:text-[#1a2153] transition-colors"
              >
                Hosted by DeltaForge Hacks, NXTHorizon & STEMise
              </a>

              <h1 className="text-[52px] sm:text-[72px] lg:text-[92px] font-bold uppercase tracking-tight leading-none text-[#f2e9d8]">
                DSH <span className="text-[#eeda9f]">Hacks</span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold mt-6 mb-3 text-[#83d3c4]">
                AI × Healthcare: Transforming Healthcare Access through AI
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 text-sm font-bold uppercase tracking-wide">
                {["Nov 7, 2026", "Online", "Ages 13+", "100% Free"].map((chip, i) => (
                  <span
                    key={chip}
                    className="px-4 py-1.5 rounded-full border-2"
                    style={{
                      borderColor: ["#e8836f", "#83d3c4", "#eecd7f", "#5a77e6"][i],
                      color: ["#e8836f", "#83d3c4", "#eecd7f", "#8fa3f0"][i],
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://dsh-hacks-v2.devpost.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#e2574c] text-[#f2e9d8] px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-[#e8836f] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 shadow-lg shadow-black/30"
                >
                  Register on Devpost
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://discord.gg/3HgSzbYPx5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#f2e9d8] text-[#f2e9d8] px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-[#f2e9d8] hover:text-[#1a2153] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
                >
                  Join Discord
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="/dsh-hacks-v2-flyer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#eeda9f]/60 text-[#eeda9f] px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-[#eeda9f] hover:text-[#1a2153] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
                >
                  View Flyer
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
