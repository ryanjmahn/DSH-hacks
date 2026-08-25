"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeading, EngravedLineDraw, useFadeRise } from "@/components/sections/design-system";

const RegisterNow = () => {
  const copyMotion = useFadeRise(0.15);

  return (
    <section id="register" className="relative bg-plaster text-umber py-24 sm:py-32 overflow-hidden">
      {/* the Colosseum in ruin (B3 in CREDITS.md) — a literal gathering place,
          for the section that's asking people to join. Traced to an ochre
          line-draw (effect 4) rather than the raster BleachedPlate treatment
          used elsewhere — the second and last instance of this effect. */}
      <EngravedLineDraw src="/artwork/traced/register-line.svg" className="absolute inset-0" durationMs={1700} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 text-center">
        <SectionHeading eyebrow="Join us" title="Register" align="center" className="mx-auto" />

        <motion.div {...copyMotion} className="mt-10 max-w-2xl mx-auto">
          <p className="type-body text-umber-soft leading-relaxed">
            <span className="text-sienna font-medium">DSH Hacks</span> is an online event open to
            students aged 13+. Whether you want to compete for prizes or just explore workshops
            and connect with the community, everyone is welcome!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://dsh-hacks-v2.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lapis text-plaster px-9 py-4 type-meta hover:bg-lapis-deep transition-colors"
            >
              Register now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://discord.gg/3HgSzbYPx5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-umber text-umber px-9 py-4 type-meta hover:border-sienna hover:text-sienna transition-colors"
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
