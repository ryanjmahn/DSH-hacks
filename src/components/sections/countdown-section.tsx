"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MuralHeading, Constellation, Ribbon, Sparkle, PocketWatch } from "@/components/sections/mural-art";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  // Submission deadline: November 7, 2026 11:45pm PST
  const difference = +new Date("2026-11-08T07:45:00Z") - +new Date();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days", ring: "#e8836f" },
    { value: timeLeft.hours, label: "Hours", ring: "#eecd7f" },
    { value: timeLeft.minutes, label: "Minutes", ring: "#83d3c4" },
    { value: timeLeft.seconds, label: "Seconds", ring: "#5a77e6" },
  ];

  return (
    <section id="countdown" className="relative overflow-hidden bg-[#1a2153] text-[#f2e9d8] py-20 sm:py-28">
      <Ribbon className="absolute -top-6 -left-10 w-[420px] sm:w-[560px] opacity-90 pointer-events-none" />
      <Constellation className="absolute right-[6%] top-14 w-40 pointer-events-none" />
      <Constellation className="absolute left-[8%] bottom-10 w-32 pointer-events-none opacity-70" />
      <Sparkle className="absolute right-[20%] bottom-20 w-5 animate-twinkle pointer-events-none" />
      <Sparkle className="absolute left-[28%] top-16 w-4 animate-twinkle pointer-events-none" color="#f2e9d8" />
      <PocketWatch className="absolute right-[4%] bottom-[18%] w-16 sm:w-24 animate-bob-slow pointer-events-none hidden md:block" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <MuralHeading title="Countdown" center />
          <p className="mt-6 text-lg font-bold uppercase tracking-[0.25em] text-[#f2e9d8]/70">
            Submissions close November 7, 2026
          </p>
        </motion.div>

        <div className="mt-14 flex flex-wrap justify-center gap-6 sm:gap-10">
          {timeUnits.map(({ value, label, ring }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center animate-bob"
              style={{ animationDelay: `${i * 0.7}s`, animationDuration: `${5.5 + i * 0.6}s` }}
            >
              <div
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#f2e9d8] flex items-center justify-center shadow-lg shadow-black/30"
                style={{ border: `6px solid ${ring}` }}
              >
                <span className="text-3xl sm:text-5xl font-bold text-[#1a2153] tabular-nums">
                  {label !== "Days" ? String(value).padStart(2, "0") : value}
                </span>
              </div>
              <span className="mt-3 text-sm font-bold uppercase tracking-widest text-[#f2e9d8]/80">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
