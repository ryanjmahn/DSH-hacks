"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeading, ECGPulse, useFadeRise } from "@/components/sections/design-system";

const RegisterNow = () => {
  const copyMotion = useFadeRise(0.15);

  return (
    <section id="register" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center sm:px-8">
        <SectionHeading eyebrow="Join us" title="Register" align="center" eyebrowAccent={false} className="mx-auto" />

        <motion.div {...copyMotion} className="mx-auto mt-10 max-w-2xl">
          <p className="type-body leading-relaxed text-paper-dim">
            <span className="font-medium text-rubric-light">DSH Hacks</span> is an online event open to
            students aged 13+. Whether you want to compete for prizes or just explore workshops
            and connect with the community, everyone is welcome!
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://dsh-hacks-v2.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rubric px-9 py-4 type-meta text-paper transition-colors hover:bg-rubric-deep"
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
      </div>

      {/* ECG pulse rule — draws once on entry, then static. The QRS spike is
          the section's second rubric mark alongside the primary CTA. */}
      <ECGPulse className="pointer-events-none mt-16 h-16 w-full sm:mt-20" />
    </section>
  );
};

export default RegisterNow;
