"use client";

import React from "react";

/* Shared illustrated-mural art, matching the panel reference thumbnails:
   deep navy canvas with cream, coral, teal, and gold hand-drawn motifs. */

export const PALETTE = {
  navy: "#1a2153",
  navyDeep: "#12173f",
  navyCard: "#222a63",
  cream: "#f2e9d8",
  gold: "#eeda9f",
  coral: "#e8836f",
  red: "#e2574c",
  teal: "#83d3c4",
  yellow: "#eecd7f",
  blue: "#5a77e6",
};

/* Heartbeat flatline with an EKG spike, like the hero and about panels */
export const EKGLine = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 900 48" fill="none" preserveAspectRatio="none" aria-hidden>
    <path
      d="M0 24 L330 24 L352 24 L364 6 L378 42 L390 14 L400 24 L900 24"
      stroke={PALETTE.red}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Sparkle: four-pointed star used across the panels */
export const Sparkle = ({ className = "", color = PALETTE.gold }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill={color} />
  </svg>
);

/* Constellation cluster from the countdown panel */
export const Constellation = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 160" fill="none" aria-hidden>
    <g stroke={PALETTE.cream} strokeOpacity="0.5" strokeWidth="1">
      <line x1="20" y1="40" x2="70" y2="20" />
      <line x1="70" y1="20" x2="120" y2="55" />
      <line x1="120" y1="55" x2="95" y2="105" />
      <line x1="95" y1="105" x2="160" y2="130" />
    </g>
    <g fill={PALETTE.cream}>
      <circle cx="20" cy="40" r="3.5" />
      <circle cx="70" cy="20" r="2.5" />
      <circle cx="120" cy="55" r="3.5" />
      <circle cx="95" cy="105" r="2.5" />
      <circle cx="160" cy="130" r="3.5" />
    </g>
  </svg>
);

/* Multicolor swirl from the hero panel */
export const Swirl = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden>
    <g strokeLinecap="round" fill="none">
      <path d="M100 22 A78 78 0 1 1 22 100" stroke={PALETTE.coral} strokeWidth="17" />
      <path d="M100 42 A58 58 0 1 1 42 100" stroke={PALETTE.blue} strokeWidth="15" />
      <path d="M100 60 A40 40 0 1 1 60 100" stroke={PALETTE.teal} strokeWidth="13" />
      <path d="M100 76 A24 24 0 1 1 76 100" stroke={PALETTE.yellow} strokeWidth="11" />
      <path d="M100 89 A11 11 0 1 1 89 100" stroke={PALETTE.cream} strokeWidth="8" />
    </g>
  </svg>
);

/* Rainbow ribbon band from the countdown and register panels */
export const Ribbon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 220" fill="none" preserveAspectRatio="none" aria-hidden>
    <g fill="none" strokeLinecap="round">
      <path d="M-20 200 C90 160 140 60 420 30" stroke={PALETTE.coral} strokeWidth="16" />
      <path d="M-20 218 C95 178 150 80 420 52" stroke={PALETTE.yellow} strokeWidth="14" />
      <path d="M-20 234 C100 196 160 100 420 74" stroke={PALETTE.blue} strokeWidth="14" />
      <path d="M-20 250 C105 214 170 120 420 96" stroke={PALETTE.teal} strokeWidth="12" />
      <path d="M-20 266 C110 232 180 140 420 118" stroke={PALETTE.cream} strokeWidth="10" />
    </g>
  </svg>
);

/* Cell blobs from the about panel */
export const Cells = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 220 220" fill="none" aria-hidden>
    <g>
      <circle cx="60" cy="60" r="44" fill={PALETTE.teal} opacity="0.9" />
      <circle cx="60" cy="60" r="18" fill={PALETTE.yellow} />
      <circle cx="140" cy="42" r="30" fill={PALETTE.yellow} opacity="0.9" />
      <circle cx="140" cy="42" r="12" fill={PALETTE.teal} />
      <circle cx="150" cy="130" r="46" fill={PALETTE.coral} opacity="0.85" />
      <circle cx="150" cy="130" r="19" fill={PALETTE.cream} />
      <circle cx="52" cy="158" r="34" fill={PALETTE.teal} opacity="0.75" />
      <circle cx="52" cy="158" r="13" fill={PALETTE.cream} />
    </g>
  </svg>
);

/* DNA double helix from the schedule panel */
export const DNAHelix = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 480" fill="none" aria-hidden>
    <g strokeLinecap="round" fill="none">
      <path
        d="M30 0 C30 40 90 60 90 100 C90 140 30 160 30 200 C30 240 90 260 90 300 C90 340 30 360 30 400 C30 440 90 460 90 480"
        stroke={PALETTE.teal}
        strokeWidth="10"
      />
      <path
        d="M90 0 C90 40 30 60 30 100 C30 140 90 160 90 200 C90 240 30 260 30 300 C30 340 90 360 90 400 C90 440 30 460 30 480"
        stroke={PALETTE.coral}
        strokeWidth="10"
      />
      <g strokeWidth="6">
        <line x1="42" y1="50" x2="78" y2="50" stroke={PALETTE.yellow} />
        <line x1="34" y1="150" x2="86" y2="150" stroke={PALETTE.blue} />
        <line x1="42" y1="250" x2="78" y2="250" stroke={PALETTE.yellow} />
        <line x1="34" y1="350" x2="86" y2="350" stroke={PALETTE.blue} />
        <line x1="42" y1="450" x2="78" y2="450" stroke={PALETTE.yellow} />
      </g>
    </g>
  </svg>
);

/* Diamond argyle column from the schedule panel */
export const Diamonds = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 90 300" fill="none" aria-hidden>
    <g fill={PALETTE.yellow} opacity="0.85">
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={12 + col * 40}
            y={14 + row * 58}
            width="24"
            height="24"
            transform={`rotate(45 ${24 + col * 40} ${26 + row * 58})`}
          />
        ))
      )}
    </g>
  </svg>
);

/* Branching vessels with hearts from the prizes panel */
export const Vessels = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 260 240" fill="none" aria-hidden>
    <g stroke={PALETTE.teal} strokeWidth="9" strokeLinecap="round" fill="none">
      <path d="M20 120 C70 110 100 90 130 60 C150 40 170 30 200 24" />
      <path d="M20 120 C80 125 120 140 160 170 C180 185 200 195 230 200" />
      <path d="M110 78 C130 95 140 115 150 140" />
      <path d="M150 60 C170 70 185 85 195 105" />
    </g>
    <g fill={PALETTE.coral}>
      <path d="M200 12 c4 -8 16 -6 16 3 c0 6 -8 11 -16 17 c-8 -6 -16 -11 -16 -17 c0 -9 12 -11 16 -3 Z" />
      <path d="M148 128 c3 -6 12 -4 12 2 c0 5 -6 8 -12 13 c-6 -5 -12 -8 -12 -13 c0 -6 9 -8 12 -2 Z" />
      <path d="M228 188 c3 -6 12 -4 12 2 c0 5 -6 8 -12 13 c-6 -5 -12 -8 -12 -13 c0 -6 9 -8 12 -2 Z" />
      <path d="M96 60 c3 -6 12 -4 12 2 c0 5 -6 8 -12 13 c-6 -5 -12 -8 -12 -13 c0 -6 9 -8 12 -2 Z" />
    </g>
  </svg>
);

/* Concentric broadcast arcs from the sponsors panel */
export const Arcs = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 800 360" fill="none" preserveAspectRatio="xMidYMax slice" aria-hidden>
    <g stroke={PALETTE.cream} strokeOpacity="0.14" strokeWidth="2" fill="none">
      {[80, 140, 200, 260, 320, 380].map((r) => (
        <circle key={r} cx="400" cy="380" r={r} />
      ))}
    </g>
  </svg>
);

/* Puffy cloud bank from the workshops and register panels */
export const Clouds = ({ className = "", color = PALETTE.cream, opacity = 1 }: { className?: string; color?: string; opacity?: number }) => (
  <svg className={className} viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none" aria-hidden>
    <path
      d="M0 180 L0 120 C40 120 50 84 100 84 C140 84 150 108 190 108 C220 60 300 60 330 100 C370 70 440 76 470 110 C520 80 600 86 630 120 C680 90 760 96 790 128 C840 100 920 104 950 134 C1000 106 1080 110 1110 140 C1160 112 1240 118 1270 146 C1320 122 1400 128 1440 150 L1440 180 Z"
      fill={color}
      opacity={opacity}
    />
  </svg>
);

/* Layered waves from the faq panel */
export const Waves = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1440 150" fill="none" preserveAspectRatio="none" aria-hidden>
    <path d="M0 70 C240 20 480 110 720 65 C960 20 1200 110 1440 60 L1440 150 L0 150 Z" fill={PALETTE.teal} opacity="0.9" />
    <path d="M0 95 C240 55 480 130 720 92 C960 55 1200 130 1440 88 L1440 150 L0 150 Z" fill={PALETTE.coral} opacity="0.9" />
    <path d="M0 120 C240 90 480 145 720 118 C960 92 1200 145 1440 115 L1440 150 L0 150 Z" fill={PALETTE.yellow} />
  </svg>
);

/* Sunburst star from the register panel */
export const Sunburst = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden>
    <g stroke={PALETTE.coral} strokeWidth="4" strokeLinecap="round" opacity="0.9">
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const x1 = 100 + Math.cos(a) * 58;
        const y1 = 100 + Math.sin(a) * 58;
        const x2 = 100 + Math.cos(a) * 84;
        const y2 = 100 + Math.sin(a) * 84;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
    <path
      d="M100 30 L112 76 L152 52 L126 90 L170 100 L126 110 L152 148 L112 124 L100 170 L88 124 L48 148 L74 110 L30 100 L74 90 L48 52 L88 76 Z"
      fill={PALETTE.yellow}
    />
    <circle cx="100" cy="100" r="14" fill={PALETTE.cream} />
  </svg>
);

/* Floating paper card from the hero panel */
export const PaperCard = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 80" fill="none" aria-hidden>
    <rect x="4" y="4" width="56" height="72" rx="6" fill={PALETTE.cream} />
    <rect x="14" y="18" width="36" height="5" rx="2.5" fill={PALETTE.coral} />
    <rect x="14" y="32" width="36" height="4" rx="2" fill={PALETTE.navy} opacity="0.35" />
    <rect x="14" y="44" width="28" height="4" rx="2" fill={PALETTE.navy} opacity="0.35" />
    <rect x="14" y="56" width="32" height="4" rx="2" fill={PALETTE.navy} opacity="0.35" />
  </svg>
);

/* Pocket watch from the hero and countdown panels */
export const PocketWatch = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 90 100" fill="none" aria-hidden>
    <rect x="38" y="2" width="14" height="12" rx="3" fill={PALETTE.yellow} />
    <circle cx="45" cy="56" r="40" fill={PALETTE.yellow} />
    <circle cx="45" cy="56" r="32" fill={PALETTE.cream} />
    <g stroke={PALETTE.navy} strokeWidth="3" strokeLinecap="round">
      <line x1="45" y1="56" x2="45" y2="34" />
      <line x1="45" y1="56" x2="61" y2="62" />
    </g>
    <circle cx="45" cy="56" r="3.5" fill={PALETTE.coral} />
  </svg>
);

/* A starfield strip of sparkles and dots */
export const StarField = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1200 200" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <g fill={PALETTE.cream}>
      <circle cx="80" cy="40" r="2.5" opacity="0.8" />
      <circle cx="240" cy="120" r="2" opacity="0.5" />
      <circle cx="420" cy="60" r="2.5" opacity="0.7" />
      <circle cx="600" cy="150" r="2" opacity="0.5" />
      <circle cx="760" cy="50" r="2.5" opacity="0.8" />
      <circle cx="950" cy="120" r="2" opacity="0.6" />
      <circle cx="1120" cy="70" r="2.5" opacity="0.8" />
    </g>
    <g fill={PALETTE.gold}>
      <path d="M160 80 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 Z" className="animate-twinkle" />
      <path d="M520 110 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 Z" className="animate-twinkle" style={{ animationDelay: "1.2s" }} />
      <path d="M870 60 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 Z" className="animate-twinkle" style={{ animationDelay: "2.4s" }} />
      <path d="M1050 140 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 Z" className="animate-twinkle" style={{ animationDelay: "0.6s" }} />
    </g>
  </svg>
);

/* Section header in the mural style: gold hand-painted caps with a heartbeat underline */
export const MuralHeading = ({ title, center = false }: { title: string; center?: boolean }) => (
  <div className={center ? "flex flex-col items-center text-center" : ""}>
    <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-[0.08em] text-[#eeda9f]">{title}</h2>
    <EKGLine className={`mt-2 h-8 ${center ? "w-64" : "w-72"}`} />
  </div>
);
