"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaDiscord, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useFadeRise } from "@/components/sections/design-system";

const FooterSection = () => {
  const leftMotion = useFadeRise();
  const rightMotion = useFadeRise(0.1);

  return (
    <footer className="bg-lapis-deep text-plaster py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div {...leftMotion} className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-4 flex items-center gap-3">
              <Image src="/dsh-logo-circle.png" alt="DSH Hacks" width={34} height={34} className="object-contain brightness-0 invert" />
              <span className="type-title text-plaster !text-2xl">DSH Hacks</span>
            </div>
            <p className="type-body text-plaster/60 !text-sm mb-1">DeltaForge Hacks × NXT Horizon × STEMise</p>
            <p className="type-body text-plaster/80 !text-sm mb-6">
              <a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-plaster/30 hover:decoration-white transition-colors">
                dsh-hacks-v2.devpost.com
              </a>
            </p>
            <div className="flex gap-5 text-plaster/80">
              <a href="https://www.linkedin.com/posts/stemise_stemise-highschool-hackathon-activity-7444950300852973572-mtY-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF8a_J8BBFD-8QjBjyPkx4PzxZKaZ80DEi8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin size={20} /></a>
              <a href="https://www.instagram.com/dshhacksv1/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaInstagram size={20} /></a>
              <a href="https://discord.gg/3HgSzbYPx5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaDiscord size={20} /></a>
              <a href="https://www.youtube.com/@DSHHacks" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaYoutube size={20} /></a>
            </div>
          </motion.div>

          <motion.div {...rightMotion} className="grid grid-cols-2 gap-8 text-center lg:text-left">
            <div>
              <h3 className="type-meta text-plaster mb-4">Hackathon</h3>
              <ul className="space-y-2.5 type-body !text-sm text-plaster/70">
                <li><a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Register on Devpost</a></li>
                <li><a href="https://dsh-hacks-v2.devpost.com/rules" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Rules</a></li>
                <li><a href="/dsh-hacks-v2-flyer.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Event flyer (PDF)</a></li>
                <li><a href="#prizes" className="hover:text-white transition-colors">Prizes</a></li>
                <li><a href="#sponsors" className="hover:text-white transition-colors">Sponsors</a></li>
              </ul>
            </div>
            <div>
              <h3 className="type-meta text-plaster mb-4">Community</h3>
              <ul className="space-y-2.5 type-body !text-sm text-plaster/70">
                <li><a href="https://discord.gg/3HgSzbYPx5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DSH Hacks Discord</a></li>
                <li><a href="https://www.youtube.com/@DSHHacks" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Workshops on YouTube</a></li>
                <li><a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Project gallery</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-plaster/20 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center type-meta !text-xs text-plaster/50">
          <span>© 2026 DSH Hacks. Hosted by DeltaForge Hacks, NXT Horizon & STEMise.</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <a href="/artwork/CREDITS.md" target="_blank" rel="noopener noreferrer" className="hover:text-white underline underline-offset-4 decoration-plaster/30 hover:decoration-white transition-colors">
            Artwork credits
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
