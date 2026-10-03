"use client";

import { useEffect, useState } from "react";

/* Live California time. The zone label follows the calendar (PDT until
   Nov 1, PST after), so the deadline reads in the zone it's stated in. */
const fmt = () => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { zone: get("timeZoneName"), time: `${get("hour")}:${get("minute")}` };
};

export function usePacificTime() {
  const [now, setNow] = useState<{ zone: string; time: string } | null>(null);
  useEffect(() => {
    setNow(fmt());
    const id = window.setInterval(() => setNow(fmt()), 10_000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export default function Clock({ className }: { className?: string }) {
  const now = usePacificTime();
  return (
    <span className={className} aria-label="Local time in California">
      {now ? `${now.zone} ${now.time}` : "PST --:--"}
    </span>
  );
}
