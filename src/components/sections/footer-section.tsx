"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaDiscord, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useFadeRise } from "@/components/sections/design-system";

/* Footer — the site's second --ink ground (§2). --paper type, logo reversed
   out. The star-chart plate (M3, Bayer Uranometria, negative impression)
   lands behind this in the plates pass; markup slot is below, aria-hidden. */

const FooterSection = () => {
  const leftMotion = useFadeRise();
  const rightMotion = useFadeRise(0.1);

  return (
    <footer className="relative overflow-hidden bg-ink py-16 text-paper sm:py-20">
      {/* star-chart plate — negative impression, feathered into the top-right
          corner and held well clear of the link columns. Opacity is kept low
          (0.14) so text over any bright region still passes AA — §10: reduce
          the graphic, never add a scrim. Flagged as a cut candidate: this low
          it barely reads as an instrument. */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 55% 65% at 92% 8%, black 0%, transparent 66%)",
          maskImage: "radial-gradient(ellipse 55% 65% at 92% 8%, black 0%, transparent 66%)",
        }}
      >
        <picture>
          <source srcSet="/plates/footer-starchart.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/plates/footer-starchart.jpg"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-[0.14] [filter:grayscale(1)_invert(1)_contrast(1.2)]"
            onError={(e) => {
              (e.currentTarget.closest("picture") as HTMLElement | null)?.style.setProperty("display", "none");
            }}
          />
        </picture>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
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
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
