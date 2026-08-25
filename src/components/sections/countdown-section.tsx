"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading, useFadeRise } from "@/components/sections/design-system";

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

function TimeSegment({
  value,
  label,
  isLast,
  delay,
}: {
  value: number | null;
  label: string;
  isLast: boolean;
  delay: number;
}) {
  const motionProps = useFadeRise(delay);
  return (
    <motion.div
      {...motionProps}
      className={`flex-1 min-w-[6rem] flex flex-col items-center py-2 ${isLast ? "" : "sm:border-r sm:border-rule"}`}
    >
      <span className="type-display text-ink tabular-nums">
        {value === null ? "—" : label === "Days" ? value : String(value).padStart(2, "0")}
      </span>
      <span className="type-meta text-ink-muted mt-3">{label}</span>
    </motion.div>
  );
}

const CountdownSection = () => {
  // This is a static export: the page HTML is generated once at build time, so
  // a countdown seeded eagerly (`useState(calculateTimeLeft())`) bakes in the
  // build timestamp and mismatches the client's real time on every load. Render
  // a stable placeholder on first paint (identical on the static HTML and the
  // client's pre-hydration pass), then fill in the real, ticking value on mount.
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

  return (
    <section id="countdown" className="relative bg-paper text-ink py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Time remaining" title="Countdown" align="right" />

        <div className="mt-16 sm:mt-20 flex flex-wrap sm:flex-nowrap border-t border-b border-rule">
          {timeUnits.map((unit, i) => (
            <TimeSegment
              key={unit.label}
              value={unit.value}
              label={unit.label}
              isLast={i === timeUnits.length - 1}
              delay={i * 0.06}
            />
          ))}
        </div>

        <p className="type-meta text-ink-muted text-center mt-8">
          Submissions close November 7, 2026
        </p>
      </div>
    </section>
  );
};

export default CountdownSection;
