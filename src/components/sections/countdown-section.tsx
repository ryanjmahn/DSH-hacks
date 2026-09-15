"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading, useSectionReveal } from "@/components/sections/design-system";
import DitherField from "@/components/sections/dither-field";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DEADLINE = "2026-11-08T07:45:00Z"; // Nov 7, 2026 11:45pm PST

const calculateTimeLeft = (): TimeLeft => {
  const difference = +new Date(DEADLINE) - +new Date();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

/* Faint orbital ellipses behind the digits (§5B) — static line art, drawn
   once, --paper hairlines at low opacity on the ink ground. Not animated.
   Exported so About can reuse it behind the Golden Gate Bridge photo. */
export const Orbitals = () => (
  <svg
    className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2"
    viewBox="0 0 800 800"
    aria-hidden="true"
  >
    <g fill="none" stroke="var(--color-paper)" strokeWidth="1" opacity="0.12">
      <ellipse cx="400" cy="400" rx="360" ry="150" />
      <ellipse cx="400" cy="400" rx="360" ry="150" transform="rotate(60 400 400)" />
      <ellipse cx="400" cy="400" rx="360" ry="150" transform="rotate(120 400 400)" />
      <circle cx="400" cy="400" r="90" />
    </g>
  </svg>
);

function TimeSegment({
  value,
  label,
  isLast,
}: {
  value: number | null;
  label: string;
  isLast: boolean;
}) {
  return (
    <div
      className={`flex min-w-[6rem] flex-1 flex-col items-center py-2 ${
        isLast ? "" : "sm:border-r sm:border-rule"
      }`}
    >
      <span className="font-mono font-medium tabular-nums leading-none text-paper text-[length:var(--type-display)]">
        {value === null ? "—" : label === "Days" ? value : String(value).padStart(2, "0")}
      </span>
      <span className="mt-3 font-serif text-sm uppercase tracking-[0.15em] text-rubric-light">
        {label}
      </span>
    </div>
  );
}

const CountdownSection = () => {
  // Static export: seed a stable placeholder on first paint (identical on the
  // static HTML and the client's pre-hydration pass), then fill in the real
  // ticking value on mount.
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft?.days ?? null, label: "Days" },
    { value: timeLeft?.hours ?? null, label: "Hours" },
    { value: timeLeft?.minutes ?? null, label: "Minutes" },
    { value: timeLeft?.seconds ?? null, label: "Seconds" },
  ];

  const sectionReveal = useSectionReveal();

  return (
    <section id="countdown" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40">
      <DitherField className="absolute inset-0 h-full w-full" color="61,79,224" />

      <motion.div {...sectionReveal} className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Time remaining" title="Countdown" align="right" tone="paper" />

        <div className="mt-16 flex flex-wrap border-t border-b border-rule sm:mt-20 sm:flex-nowrap">
          {timeUnits.map((unit, i) => (
            <TimeSegment
              key={unit.label}
              value={unit.value}
              label={unit.label}
              isLast={i === timeUnits.length - 1}
            />
          ))}
        </div>

        <p className="type-meta mt-8 text-center text-paper-dim">
          Submissions close November 7, 2026
        </p>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
