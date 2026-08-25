"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading, useFadeRise } from "@/components/sections/design-system";

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

  return (
    <section id="workshops" className="relative bg-plaster text-umber py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Learn from professionals" title="Workshops" />

        <motion.p {...introMotion} className="type-body text-umber-soft mt-8 max-w-2xl leading-relaxed">
          Learn from industry professionals through our recorded workshop series covering AI,
          product thinking, finance, data, and more. Watch them all on the{" "}
          <a href="https://www.youtube.com/@DSHHacks" target="_blank" rel="noopener noreferrer" className="text-sienna hover:text-umber underline underline-offset-4">
            DSH Hacks YouTube channel
          </a>.
        </motion.p>

        <div className="mt-10 flex items-center justify-between sm:justify-end gap-4">
          <span className="type-meta text-umber-soft tabular-nums order-2 sm:order-1 sm:mr-4">
            {page + 1} / {pageCount}
          </span>
          <div className="flex items-center gap-2 order-1 sm:order-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous workshops"
              className="w-11 h-11 border border-umber text-umber flex items-center justify-center hover:border-sienna hover:text-sienna transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              disabled={page === pageCount - 1}
              aria-label="Next workshops"
              className="w-11 h-11 border border-umber text-umber flex items-center justify-center hover:border-sienna hover:text-sienna transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight className="w-5 h-5" />
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
            >
              {visible.map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-rule hover:border-umber transition-colors flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden border-b border-rule">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt={`${video.speaker}: ${video.topic}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-umber/10 group-hover:bg-umber/25 transition-colors">
                      <div className="w-12 h-12 bg-plaster flex items-center justify-center">
                        <Play className="w-5 h-5 text-umber ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="type-title text-umber text-lg leading-snug">{video.topic}</p>
                    <p className="type-eyebrow text-umber-soft mt-2">{video.speaker}</p>
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
            className="border border-umber text-umber px-8 py-3.5 type-meta hover:border-sienna hover:text-sienna transition-colors inline-flex items-center gap-2"
          >
            Subscribe on YouTube
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
