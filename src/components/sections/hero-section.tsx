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

const RibbonNav = () => (
  <svg viewBox="0 0 900 160" className="ribbon-nav w-full h-auto drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]" aria-label="Site navigation">
    <defs>
      <path id="ribbon-seg-a" d="M 10 56 C 160 68 320 78 448 84" />
      <path id="ribbon-seg-b" d="M 462 84 C 590 88 750 68 884 48" />
    </defs>

    {/* left tip fold, tucked under the start of segment A */}
    <polygon points="10,87 44,91 10,108" fill="#a63b31" />

    {/* segment A */}
    <use href="#ribbon-seg-a" fill="none" stroke="#e2574c" strokeWidth="64" />

    {/* folded seam: dark parallelogram where the ribbon changes angle */}
    <polygon points="444,52 468,46 468,112 444,118" fill="#a63b31" />

    {/* segment B, laid over the fold */}
    <use href="#ribbon-seg-b" fill="none" stroke="#e2574c" strokeWidth="64" />

    {/* swallowtail notch cut into the right end */}
    <polygon points="886,14 886,82 850,48" fill="#1a2153" />

    <text fontSize="20" letterSpacing="1.4" wordSpacing="17" textAnchor="middle" dominantBaseline="central">
      <textPath href="#ribbon-seg-a" startOffset="52%">
        <a href="#about"><tspan>ABOUT</tspan></a> <a href="#schedule"><tspan>SCHEDULE</tspan></a>{" "}
        <a href="#prizes"><tspan>PRIZES</tspan></a> <a href="#sponsors"><tspan>SPONSORS</tspan></a>
      </textPath>
    </text>
    <text fontSize="20" letterSpacing="1.8" wordSpacing="46" textAnchor="middle" dominantBaseline="central">
      <textPath href="#ribbon-seg-b" startOffset="47%">
        <a href="#workshops"><tspan>WORKSHOPS</tspan></a> <a href="#register"><tspan>REGISTER</tspan></a>{" "}
        <a href="#faq"><tspan>FAQ</tspan></a>
      </textPath>
    </text>
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex items-start justify-between px-4 sm:px-6 pt-3">
          {/* Floating logo, separate from the ribbon */}
          <a href="#" className="pointer-events-auto flex items-center gap-2.5 mt-1">
            <Image src="/dsh-logo-circle.png" alt="DSH Hacks" width={40} height={40} className="object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]" />
            <span className="text-lg font-bold tracking-tight text-[#f2e9d8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              DSH <span className="text-[#eeda9f]">Hacks</span>
            </span>
          </a>

          {/* Curved two-segment ribbon, top-right, desktop only */}
          <div className="pointer-events-auto hidden lg:block w-[660px] xl:w-[780px] -mt-1 -mr-2">
            <RibbonNav />
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="pointer-events-auto lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e2574c] shadow-lg shadow-black/30 mt-1"
            aria-label="Open menu"
          >
            <div className="relative w-5 h-5 flex flex-col justify-center items-center">
              <span className="block w-5 h-0.5 bg-[#f2e9d8]"></span>
              <span className="block w-5 h-0.5 bg-[#f2e9d8] mt-1"></span>
              <span className="block w-5 h-0.5 bg-[#f2e9d8] mt-1"></span>
            </div>
          </button>
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
              <h1 className="text-[52px] sm:text-[72px] lg:text-[92px] font-bold uppercase tracking-tight leading-none text-[#f2e9d8]">
                DSH <span className="text-[#eeda9f]">Hacks</span> <span className="text-[#e8836f]">V2</span>
              </h1>

              <p className="text-xl sm:text-2xl font-bold mt-6 mb-3 text-[#83d3c4]">
                AI × Healthcare: Transforming Healthcare Access through AI
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 text-sm font-bold uppercase tracking-wide">
                {["Deadline Nov 7, 2026", "Online", "Ages 13+", "100% Free"].map((chip, i) => (
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
