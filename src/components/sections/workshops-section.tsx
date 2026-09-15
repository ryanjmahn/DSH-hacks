"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, WatercolorPlate, useFadeRise, useSectionReveal } from "@/components/sections/design-system";

const workshops = [
  { id: "v_6Beq5OL5o", speaker: "Maulik Bhatt",            topic: "Search to Intelligence, RAG Driven Agents" },
  { id: "mtKC_Fvi1X8", speaker: "Karthik Karunanithi",     topic: "What Nobody Tells You About Building Real AI" },
  { id: "BqeOkzui3Bs", speaker: "Sarvesh Gupta",           topic: "How Distributed Databases Actually Work" },
  { id: "T2BTGFHIp7g", speaker: "Siyuan Feng",             topic: "Protecting Test Data with AI" },
  { id: "YjerivsGsyM", speaker: "Jim Markunas",            topic: "Product Thinking 101" },
  { id: "hwUY4jseRlc", speaker: "Ratish Kumar Saravanan",  topic: "Intro to Predictive Analytics" },
  { id: "r5f5Jr-G-kk", speaker: "Parth Rana",              topic: "AI in Finance, From Wall Street to GenAI" },
  { id: "-HX7P0OKu70", speaker: "Bharat Khanna",           topic: "Agentic AI with LangChain" },
  { id: "SCEtoqYBWzY", speaker: "Eshan Abdul Salam",       topic: "Introduction to Quantitative Finance & Research" },
  { id: "hLHiqLXyMfA", speaker: "Eshaan Jain",             topic: "Breaking Into Product & AI" },
];

const PAGE_SIZE = 6;

const WorkshopsSection = () => {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(workshops.length / PAGE_SIZE);
  const visible = workshops.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const introMotion = useFadeRise(0.1);
  const ctaMotion = useFadeRise();
  const sectionReveal = useSectionReveal();

  return (
    <section id="workshops" className="blue-ground relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40">
      {/* DitherField dropped here (kept only on Prizes/Sponsors) — with six
          blue-ground sections in a row, the dot texture on every one of
          them started reading as noise rather than a deliberate accent. */}
      {/* GearTrain removed (remove-decorative-svg-and-fix-spacing-
          prompt.md) — the old Leonardo gear-and-screw study doesn't fit
          the current direction. Definition kept in graphics.tsx, unused. */}

      {/* SF watercolor pass — Twin Peaks overlook, no art yet (see
          sf-watercolor-prompts.md). */}
      <WatercolorPlate src="/plates/watercolor/workshops-twin-peaks.jpg" presence={0.3} maskPosition="40% 30%" />

      <motion.div {...sectionReveal} className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Learn from professionals" title="Workshops" />

        <motion.p {...introMotion} className="type-body mt-8 max-w-2xl leading-relaxed text-paper-dim">
          Learn from industry professionals through our recorded workshop series covering AI,
          product thinking, finance, data, and more. Watch them all on the{" "}
          <a
            href="https://www.youtube.com/@DSHHacks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rubric-light underline decoration-rule-dark underline-offset-4 transition-colors hover:text-paper hover:decoration-paper"
          >
            DSH Hacks YouTube channel
          </a>.
        </motion.p>

        <div className="mt-10 flex items-center justify-between gap-4 sm:justify-end">
          <span className="type-meta order-2 tabular-nums text-paper-dim sm:order-1 sm:mr-4">
            {page + 1} / {pageCount}
          </span>
          <div className="order-1 flex items-center gap-2 sm:order-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous workshops"
              className="btn-wipe flex rounded-full h-11 w-11 items-center justify-center border border-paper text-paper disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              disabled={page === pageCount - 1}
              aria-label="Next workshops"
              className="btn-wipe flex rounded-full h-11 w-11 items-center justify-center border border-paper text-paper disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col border border-rule-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-paper hover:shadow-[0_10px_28px_-12px_rgba(124,147,255,0.35)]"
                >
                  <div className="relative aspect-video overflow-hidden border-b border-rule-dark">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt={`${video.speaker}: ${video.topic}`}
                      className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors group-hover:bg-ink/25">
                      <div className="flex h-12 w-12 items-center justify-center bg-paper">
                        <Play className="ml-0.5 h-5 w-5 text-ink" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  {/* This card stays a white tile (bg-ink-alt is untouched by
                      .blue-ground) sitting on the section's blue fill, so its
                      own text needs to shadow --color-paper/--color-rubric-
                      light back to their site defaults locally — otherwise
                      the section-level white-text override would render
                      white text on this white card. */}
                  <div
                    className="card-texture flex flex-1 flex-col bg-ink-alt p-5"
                    style={{ "--color-paper": "#17171a", "--color-rubric-light": "#3d4fe0" } as React.CSSProperties}
                  >
                    <p className="type-title !text-lg leading-snug text-paper">{video.topic}</p>
                    <p className="type-eyebrow mt-2 text-rubric-light">{video.speaker}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div {...ctaMotion} className="mt-14 flex justify-center">
          <a
            href="https://www.youtube.com/@DSHHacks"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wipe inline-flex items-center gap-2 rounded-full border border-paper px-8 py-3.5 type-meta text-paper"
          >
            Subscribe on YouTube
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkshopsSection;
