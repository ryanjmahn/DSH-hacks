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
    <div className="bg-[#f4f5fb] rounded-lg p-8 text-center">
      <div className="text-4xl sm:text-5xl font-bold mb-4">{formattedValue}</div>
      <div className="text-xl font-semibold mb-2">{title}</div>
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
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#4f56e5] text-4xl font-bold text-white sm:h-24 sm:w-24 sm:text-5xl">1</div>
            <h2 className="text-5xl font-light tracking-tight sm:text-7xl">About</h2>
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
            Theme: <span className="text-[#26262e] font-semibold">AI × Healthcare — Transforming Healthcare Access through AI</span>
          </p>
          <p className="text-lg sm:text-xl text-[#5a5a66] leading-relaxed">
            Identify a real healthcare problem and build an AI-powered app, website, or system that tackles it — any skill level welcome. From diagnostic tools tackling global disease burdens, to patient-care platforms improving access and outcomes, to AI-powered systems reimagining how we detect, treat, and manage illness. Work solo or in a team, and use AI to lower the barrier for ambitious ideas — low/no-code welcome.
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
