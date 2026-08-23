"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { MuralHeading, Clouds, Sparkle } from "@/components/sections/mural-art";

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

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="relative overflow-hidden bg-[#1a2153] text-[#f2e9d8] py-20 sm:py-28">
      <Sparkle className="absolute left-[10%] top-16 w-5 animate-twinkle pointer-events-none" />
      <Sparkle className="absolute right-[14%] top-24 w-4 animate-twinkle pointer-events-none" color="#f2e9d8" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <MuralHeading title="Workshops" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-8 text-lg sm:text-xl text-[#f2e9d8]/75 max-w-3xl leading-relaxed">
          Learn from industry professionals through our recorded workshop series covering AI, product thinking, finance, data, and more. Watch them all on the{" "}
          <a href="https://www.youtube.com/@DSHHacks" target="_blank" rel="noopener noreferrer" className="text-[#eecd7f] font-bold hover:underline">
            DSH Hacks YouTube channel
          </a>.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((video, index) => (
            <motion.a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-[#222a63] border-2 border-[#f2e9d8]/15 rounded-3xl overflow-hidden hover:border-[#eecd7f]/70 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`${video.speaker}: ${video.topic}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#12173f]/40 group-hover:bg-[#12173f]/15 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#e2574c] shadow-lg shadow-black/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-[#f2e9d8] ml-1" fill="#f2e9d8" />
                  </div>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="font-bold text-[#f2e9d8] leading-snug">{video.topic}</p>
                <p className="text-sm text-[#83d3c4] font-bold mt-2">{video.speaker}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="mt-12 flex justify-center">
          <a
            href="https://www.youtube.com/@DSHHacks"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#e2574c] text-[#e8836f] px-8 py-3 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-[#e2574c] hover:text-[#f2e9d8] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
          >
            Subscribe on YouTube
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <Clouds className="absolute inset-x-0 -bottom-1 w-full h-28 pointer-events-none" color="#222a63" />
    </section>
  );
};

export default WorkshopsSection;
