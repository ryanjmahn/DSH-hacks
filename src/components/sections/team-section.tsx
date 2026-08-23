"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MuralHeading, Sunburst, Clouds, Sparkle } from "@/components/sections/mural-art";

const RegisterNow = () => {
  return (
    <section id="register" className="relative overflow-hidden bg-[#222a63] text-[#f2e9d8] py-20 sm:py-28">
      <Sparkle className="absolute left-[16%] top-14 w-5 animate-twinkle pointer-events-none" />
      <Sparkle className="absolute right-[18%] top-24 w-4 animate-twinkle pointer-events-none" color="#f2e9d8" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <Sunburst className="w-32 sm:w-44 animate-bob-slow mb-6" />
          <MuralHeading title="Register" center />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <p className="mb-8 text-xl leading-relaxed sm:text-2xl text-[#f2e9d8]/90">
            <span className="text-[#eeda9f] font-bold">DSH Hacks</span> is an online event open to students aged 13+. Whether you want to compete for prizes or just explore workshops and connect with the community, everyone is welcome!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://dsh-hacks-v2.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#e2574c] text-[#f2e9d8] px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wide shadow-lg shadow-black/30 hover:bg-[#e8836f] transition"
            >
              Register Now! <ArrowRight className="w-5 h-5" />
            </motion.a>
            <a
              href="https://discord.gg/3HgSzbYPx5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#83d3c4] text-[#83d3c4] px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-[#83d3c4] hover:text-[#1a2153] transition"
            >
              Join the Discord
            </a>
          </div>
        </motion.div>
      </div>

      <Clouds className="absolute inset-x-0 -bottom-1 w-full h-32 pointer-events-none" color="#1a2153" />
    </section>
  );
};

export default RegisterNow;
