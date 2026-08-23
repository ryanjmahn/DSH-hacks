"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const statsData = [
  { value: "1300+", title: "PAST COMPETITORS", description: "" },
  { value: "70+",   title: "COUNTRIES",        description: "" },
  { value: "$30K+", title: "PRIZES DISTRIBUTED", description: "" },
  { value: "10+",   title: "SPONSORS",         description: "" },
];

const StatCard = ({
  value, title, description, isVisible,
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
  const formattedValue = `${prefix}${displayValue}${suffix}`;

  return (
    <div className="rounded-3xl border border-[#e3e5f2] bg-gradient-to-b from-white to-[#f4f5fb] p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#4f56e5]/30 transition-all duration-300">
      <div className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-[#4f56e5] to-[#8b5cf6] bg-clip-text text-transparent tabular-nums">{formattedValue}</div>
      <div className="text-sm font-bold uppercase tracking-widest text-[#5a5a66]">{title}</div>
      <div className="text-sm opacity-80 leading-relaxed">{description}</div>
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
    <section id="about" className="bg-white text-[#26262e] py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="overflow-hidden">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#4f56e5] mb-4">01 · About</p>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">About the Hackathon</h2>
            <div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#4f56e5] to-[#a855f7]"></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10 max-w-6xl">
          <p className="mb-6 text-xl leading-relaxed sm:text-2xl">
            DSH Hacks V2 is a free, global, online hackathon open to students aged 13+, hosted collaboratively by three youth-led organizations:{" "}
            <span className="text-[#4046d4] font-semibold">DeltaForge Hacks</span>,{" "}
            <span className="text-[#4046d4] font-semibold">NXTHorizon</span>, and{" "}
            <span className="text-[#4046d4] font-semibold">STEMise</span>.
          </p>
          <p className="text-lg sm:text-xl text-[#4a4a55] leading-relaxed mb-4">
            Theme: <span className="text-[#26262e] font-semibold">AI × Healthcare: Transforming Healthcare Access through AI</span>
          </p>
          <p className="text-lg sm:text-xl text-[#5a5a66] leading-relaxed">
            Identify a real healthcare problem and build an AI-powered app, website, or system that tackles it. Any skill level welcome. From diagnostic tools tackling global disease burdens, to patient-care platforms improving access and outcomes, to AI-powered systems reimagining how we detect, treat, and manage illness. Work solo or in a team, and use AI to lower the barrier for ambitious ideas. Low/no-code welcome.
          </p>
        </motion.div>

        <div ref={sectionRef} className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
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
