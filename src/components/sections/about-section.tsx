"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MuralHeading, Cells, Sparkle } from "@/components/sections/mural-art";

const statsData = [
  { value: "1300+", title: "PAST COMPETITORS", color: "#e8836f" },
  { value: "70+", title: "COUNTRIES", color: "#83d3c4" },
  { value: "$30K+", title: "PRIZES DISTRIBUTED", color: "#eecd7f" },
  { value: "10+", title: "SPONSORS", color: "#8fa3f0" },
];

const StatCard = ({
  value, title, color, isVisible,
}: (typeof statsData)[0] & { isVisible: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * numericValue);
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplayValue(numericValue);
    };
    requestAnimationFrame(animate);
  }, [isVisible, value]);

  const prefix = value.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = value.match(/[^0-9]+$/)?.[0] ?? "";

  return (
    <div
      className="rounded-3xl bg-[#222a63] p-8 text-center border-2 hover:-translate-y-1 transition-all duration-300"
      style={{ borderColor: color }}
    >
      <div className="text-4xl sm:text-5xl font-bold mb-3 tabular-nums" style={{ color }}>
        {`${prefix}${displayValue}${suffix}`}
      </div>
      <div className="text-sm font-bold uppercase tracking-widest text-[#f2e9d8]/75">{title}</div>
    </div>
  );
};

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setIsVisible(true); }); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-[#1a2153] text-[#f2e9d8] py-20 sm:py-28">
      <Cells className="absolute -left-16 top-8 w-56 sm:w-72 pointer-events-none animate-bob-slow" />
      <Sparkle className="absolute right-[10%] top-16 w-5 animate-twinkle pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="flex justify-center sm:justify-start sm:pl-64">
          <MuralHeading title="About" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-12 max-w-4xl mx-auto text-center sm:text-left sm:mx-0 sm:ml-auto sm:max-w-3xl">
          <p className="mb-6 text-xl leading-relaxed sm:text-2xl">
            DSH Hacks is a free, global, online hackathon open to students aged 13+, hosted collaboratively by three youth-led organizations:{" "}
            <span className="text-[#e8836f] font-bold">DeltaForge Hacks</span>,{" "}
            <span className="text-[#83d3c4] font-bold">NXT Horizon</span>, and{" "}
            <span className="text-[#eecd7f] font-bold">STEMise</span>.
          </p>
          <p className="text-lg sm:text-xl text-[#f2e9d8]/80 leading-relaxed mb-4">
            Theme: <span className="text-[#eeda9f] font-bold">AI × Healthcare: Transforming Healthcare Access through AI</span>
          </p>
          <p className="text-lg sm:text-xl text-[#f2e9d8]/70 leading-relaxed">
            Identify a real healthcare problem and build an AI-powered app, website, or system that tackles it. Any skill level welcome. From diagnostic tools tackling global disease burdens, to patient-care platforms improving access and outcomes, to AI-powered systems reimagining how we detect, treat, and manage illness. Work solo or in a team, and use AI to lower the barrier for ambitious ideas. Low/no-code welcome.
          </p>
        </motion.div>

        <div ref={sectionRef} className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <StatCard {...stat} isVisible={isVisible} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
