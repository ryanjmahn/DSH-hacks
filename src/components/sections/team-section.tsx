"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeading, useFadeRise, useSectionReveal } from "@/components/sections/design-system";

const RegisterNow = () => {
  const copyMotion = useFadeRise(0.15);
  const sectionReveal = useSectionReveal();

  return (
    <section id="register" className="blue-ground relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40">
      {/* DitherField dropped here (kept only on Prizes/Sponsors) — with six
          blue-ground sections in a row, the dot texture on every one of
          them started reading as noise rather than a deliberate accent. */}
      <motion.div {...sectionReveal} className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center sm:px-8">
        <SectionHeading eyebrow="Join us" title="Register" align="center" eyebrowAccent={false} className="mx-auto" />

        <motion.div {...copyMotion} className="mx-auto mt-10 max-w-2xl">
          <p className="type-body leading-relaxed text-paper-dim">
            <span className="font-medium text-rubric-light">DSH Hacks</span> is an online event open to
            students aged 13+. Whether you want to compete for prizes or just explore workshops
            and connect with the community, everyone is welcome!
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* bg-rubric would be invisible here — the section's own fill IS
                that blue now — so this inverts to white-fill/blue-text via
                bg-paper/text-ink, which already resolve to white/blue in
                this section's scope, rather than inventing a new style. */}
            <a
              href="https://dsh-hacks-v2.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-9 py-4 type-meta text-ink transition-opacity hover:opacity-90"
            >
              Register now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://discord.gg/3HgSzbYPx5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wipe inline-flex items-center gap-2 rounded-full border border-paper px-9 py-4 type-meta text-paper"
            >
              Join the Discord
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* ECGPulse removed (remove-decorative-svg-and-fix-spacing-prompt.md)
          — the old cardiograph rule doesn't fit the current direction.
          Removing it also removes the mt-16/h-16 space it occupied below
          the CTA buttons, so the section's own bottom padding now follows
          them directly instead of leaving a dead strip. Definition kept in
          design-system.tsx, unused. */}
    </section>
  );
};

export default RegisterNow;
