"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const RegisterNow = () => {
  return (
    <section id="register" className="bg-white text-[#26262e] py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/40 to-transparent pointer-events-none" />
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-[#f4f5fb] rounded-2xl shadow-2xl overflow-hidden border border-[#e3e5f2]"
        >
          {/* Fake browser bar */}
          <div className="flex items-center justify-start px-4 py-3 bg-[#eceef8] border-b border-[#e3e5f2]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white text-sm text-[#5a5a66] px-4 py-1.5 rounded-md font-mono">
                https://dsh-hacks-v2.devpost.com
              </div>
            </div>
          </div>

          <div className="p-10 sm:p-16 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="overflow-hidden flex justify-center items-center">
              <div className="flex items-center gap-6">
                <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full text-4xl sm:text-5xl font-bold bg-[#4f56e5] text-white">6</div>
                <h2 className="text-5xl font-light tracking-tight sm:text-7xl text-[#26262e]">REGISTER</h2>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10 max-w-4xl mx-auto">
              <p className="mb-6 text-xl leading-relaxed sm:text-2xl text-[#3a3a44]">
                <span className="text-[#26262e] font-bold">DSH Hacks V2</span> is an online event open to students aged 13+. Whether you want to compete for prizes or just explore workshops and connect with the community, everyone is welcome!
              </p>
              <ul className="text-left sm:text-center text-lg sm:text-xl text-[#3a3a44] leading-relaxed space-y-3 mt-10">
                <li>• Register and submit your project on{" "}
                  <a href="https://dsh-hacks-v2.devpost.com/" className="underline-offset-4 hover:underline font-semibold text-[#4046d4]" target="_blank" rel="noopener noreferrer">
                    Devpost
                  </a>
                </li>
                <li>• Join the{" "}
                  <a href="https://discord.gg/3HgSzbYPx5" className="underline-offset-4 hover:underline font-semibold text-[#4046d4]" target="_blank" rel="noopener noreferrer">
                    DSH Hacks Discord
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.a
              href="https://dsh-hacks-v2.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#4f56e5] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-[#4046d4] transition mt-12"
            >
              Register Now! <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterNow;
