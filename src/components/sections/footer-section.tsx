"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaDiscord, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useFadeRise, useSectionReveal } from "@/components/sections/design-system";

/* Footer — blue-ground (see globals.css), --paper type reversed out. No
   DitherField here (kept only on Prizes/Sponsors) — with six blue-ground
   sections in a row, the dot texture on every one of them started reading
   as noise rather than a deliberate accent. The star-chart plate and
   BridgeSilhouette line art were removed earlier for the same reason. */

const FooterSection = () => {
  const leftMotion = useFadeRise();
  const rightMotion = useFadeRise(0.1);
  const sectionReveal = useSectionReveal();

  return (
    <footer className="blue-ground relative overflow-hidden bg-ink py-16 text-paper sm:py-20 lg:py-28">
      <motion.div {...sectionReveal} className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div {...leftMotion} className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-4 flex items-center gap-3">
              <Image src="/dsh-logo-circle.png" alt="DSH Hacks" width={34} height={34} className="object-contain" />
              <span className="type-title !text-2xl text-paper">DSH Hacks</span>
            </div>
            <p className="type-body mb-1 !text-sm text-paper-dim">DeltaForge Hacks &times; NXT Horizon &times; STEMise</p>
            <p className="type-body mb-6 !text-sm text-paper-dim">
              <a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="text-rubric-light underline decoration-rule-dark underline-offset-4 transition-colors hover:text-paper hover:decoration-paper">
                dsh-hacks-v2.devpost.com
              </a>
            </p>
            <div className="flex gap-5 text-paper-dim">
              <a href="https://www.linkedin.com/posts/stemise_stemise-highschool-hackathon-activity-7444950300852973572-mtY-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF8a_J8BBFD-8QjBjyPkx4PzxZKaZ80DEi8" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper"><FaLinkedin size={20} /></a>
              <a href="https://www.instagram.com/dshhacksv1/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper"><FaInstagram size={20} /></a>
              <a href="https://discord.gg/3HgSzbYPx5" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper"><FaDiscord size={20} /></a>
              <a href="https://www.youtube.com/@DSHHacks" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper"><FaYoutube size={20} /></a>
            </div>
          </motion.div>

          <motion.div {...rightMotion} className="grid grid-cols-2 gap-8 text-center lg:text-left">
            <div>
              <h3 className="type-meta mb-4 text-rubric-light">Hackathon</h3>
              <ul className="type-body space-y-2.5 !text-sm text-paper-dim">
                <li><a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">Register on Devpost</a></li>
                <li><a href="https://dsh-hacks-v2.devpost.com/rules" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">Rules</a></li>
                <li><a href="/dsh-hacks-v2-flyer.pdf" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">Event flyer (PDF)</a></li>
                <li><a href="#prizes" className="transition-colors hover:text-paper">Prizes</a></li>
                <li><a href="#sponsors" className="transition-colors hover:text-paper">Sponsors</a></li>
              </ul>
            </div>
            <div>
              <h3 className="type-meta mb-4 text-rubric-light">Community</h3>
              <ul className="type-body space-y-2.5 !text-sm text-paper-dim">
                <li><a href="#workshops" className="transition-colors hover:text-paper">Workshops</a></li>
                <li><a href="https://discord.gg/3HgSzbYPx5" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">DSH Hacks Discord</a></li>
                <li><a href="https://www.youtube.com/@DSHHacks" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">Workshops on YouTube</a></li>
                <li><a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">Project gallery</a></li>
                <li><a href="#faq" className="transition-colors hover:text-paper">FAQ</a></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-2 border-t border-rule-dark pt-6 text-center type-meta !text-xs text-paper-dim sm:flex-row sm:gap-4">
          <span>&copy; 2026 DSH Hacks. Hosted by DeltaForge Hacks, NXT Horizon &amp; STEMise.</span>
          <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
          <a href="/artwork/CREDITS.md" target="_blank" rel="noopener noreferrer" className="underline decoration-rule-dark underline-offset-4 transition-colors hover:text-paper hover:decoration-paper">
            Artwork credits
          </a>
          <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
          {/* Coordinate-tag micro-typography (SF-vibe pass §4) — echoes the
              hero's tracked mono metadata row rather than a literal, and
              potentially misleading, physical-location claim. */}
          <span className="tracking-[0.2em] text-paper-dim/80">Online // Global</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
