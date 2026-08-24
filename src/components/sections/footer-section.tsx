"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaDiscord, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { EKGLine } from "@/components/sections/mural-art";

const FooterSection = () => {
  return (
    <footer className="bg-[#12173f] text-[#f2e9d8] py-10 relative overflow-hidden">
      <EKGLine className="absolute top-0 left-0 w-full h-8 opacity-70" />
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="flex flex-col items-center lg:items-start">
            <div className="mb-3 flex items-center gap-3">
              <Image src="/dsh-logo-circle.png" alt="DSH Hacks" width={36} height={36} className="object-contain" />
              <span className="text-2xl font-bold tracking-tight">
                DSH <span className="text-[#e8836f]">Hacks</span>
              </span>
            </div>
            <p className="text-[#f2e9d8]/50 text-sm mb-1">DeltaForge Hacks × NXT Horizon × STEMise</p>
            <p className="text-[#f2e9d8]/70 text-sm mb-4">
              <a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#eecd7f] transition-colors underline underline-offset-2">
                dsh-hacks-v2.devpost.com
              </a>
            </p>
            <div className="flex gap-4 text-[#f2e9d8]/80">
              <a href="https://www.linkedin.com/posts/stemise_stemise-highschool-hackathon-activity-7444950300852973572-mtY-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF8a_J8BBFD-8QjBjyPkx4PzxZKaZ80DEi8" target="_blank" rel="noopener noreferrer" className="hover:text-[#eecd7f] transition"><FaLinkedin size={22} /></a>
              <a href="https://www.instagram.com/dshhacksv1/" target="_blank" rel="noopener noreferrer" className="hover:text-[#eecd7f] transition"><FaInstagram size={22} /></a>
              <a href="https://discord.gg/3HgSzbYPx5" target="_blank" rel="noopener noreferrer" className="hover:text-[#eecd7f] transition"><FaDiscord size={22} /></a>
              <a href="https://www.youtube.com/@DSHHacks" target="_blank" rel="noopener noreferrer" className="hover:text-[#eecd7f] transition"><FaYoutube size={22} /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <h3 className="text-base font-bold uppercase tracking-wide mb-3 text-[#eeda9f]">Hackathon</h3>
              <ul className="space-y-2 text-sm text-[#f2e9d8]/70">
                <li><a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#eecd7f] transition-colors">Register on Devpost</a></li>
                <li><a href="https://dsh-hacks-v2.devpost.com/rules" target="_blank" rel="noopener noreferrer" className="hover:text-[#eecd7f] transition-colors">Rules</a></li>
                <li><a href="/dsh-hacks-v2-flyer.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#eecd7f] transition-colors">Event Flyer (PDF)</a></li>
                <li><a href="#prizes" className="hover:text-[#eecd7f] transition-colors">Prizes</a></li>
                <li><a href="#sponsors" className="hover:text-[#eecd7f] transition-colors">Sponsors</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold uppercase tracking-wide mb-3 text-[#eeda9f]">Community</h3>
              <ul className="space-y-2 text-sm text-[#f2e9d8]/70">
                <li><a href="https://discord.gg/3HgSzbYPx5" target="_blank" rel="noopener noreferrer" className="hover:text-[#eecd7f] transition-colors">DSH Hacks Discord</a></li>
                <li><a href="https://www.youtube.com/@DSHHacks" target="_blank" rel="noopener noreferrer" className="hover:text-[#eecd7f] transition-colors">Workshops on YouTube</a></li>
                <li><a href="https://dsh-hacks-v2.devpost.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#eecd7f] transition-colors">Project Gallery</a></li>
                <li><a href="#faq" className="hover:text-[#eecd7f] transition-colors">FAQ</a></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#f2e9d8]/15 text-center text-xs text-[#f2e9d8]/40">
          © 2026 DSH Hacks. Hosted by DeltaForge Hacks, NXT Horizon & STEMise.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
