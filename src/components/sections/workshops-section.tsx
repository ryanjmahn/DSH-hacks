"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

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
    <section id="workshops" className="bg-white text-[#26262e] py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="overflow-hidden">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#4f56e5] text-4xl font-bold text-white sm:h-24 sm:w-24 sm:text-5xl">5</div>
            <h2 className="text-5xl font-light tracking-tight sm:text-7xl">Workshops</h2>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-8 text-lg sm:text-xl text-[#5a5a66] max-w-3xl">
          Learn from industry professionals through our recorded workshop series — covering AI, product thinking, finance, data, and more. Watch them all on the{" "}
          <a href="https://www.youtube.com/@DSHHacks" target="_blank" rel="noopener noreferrer" className="text-[#4046d4] hover:underline font-semibold">
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
              className="group bg-[#f4f5fb] border border-[#e3e5f2] rounded-xl overflow-hidden hover:border-[#4f56e5]/40 transition-colors flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`${video.speaker}: ${video.topic}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#4f56e5]/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="font-semibold text-[#26262e] leading-snug">{video.topic}</p>
                <p className="text-sm text-[#4046d4] mt-2">{video.speaker}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="mt-10 flex justify-center">
          <a
            href="https://www.youtube.com/@DSHHacks"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#4f56e5] text-[#4f56e5] px-8 py-3 rounded-md text-lg font-medium hover:bg-[#3a41cc] hover:border-[#3a41cc] hover:text-white transition-all inline-flex items-center gap-2"
          >
            Subscribe on YouTube
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
