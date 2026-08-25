"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeading, BleachedPlate, useFadeRise } from "@/components/sections/design-system";

const RegisterNow = () => {
  const copyMotion = useFadeRise(0.15);

  return (
    <section id="register" className="relative bg-paper text-ink py-24 sm:py-32 overflow-hidden">
      <BleachedPlate
        srcBase="/plates/hero-accent"
        className="absolute inset-0"
        presence={0.18}
        maskPosition="50% 45%"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 text-center">
        <SectionHeading eyebrow="Join us" title="Register" align="center" className="mx-auto" />

        <motion.div {...copyMotion} className="mt-10 max-w-2xl mx-auto">
          <p className="type-body text-ink-muted leading-relaxed">
            <span className="text-brand font-medium">DSH Hacks</span> is an online event open to
            students aged 13+. Whether you want to compete for prizes or just explore workshops
            and connect with the community, everyone is welcome!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://dsh-hacks-v2.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-paper px-9 py-4 type-meta hover:bg-brand-deep transition-colors"
            >
              Register now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://discord.gg/3HgSzbYPx5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink text-ink px-9 py-4 type-meta hover:border-brand hover:text-brand transition-colors"
            >
              Join the Discord
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterNow;
