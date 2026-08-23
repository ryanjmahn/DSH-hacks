"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const infoCards = [
  {
    title: "Schedule",
    content: "Submission Deadline: November 7, 2026 @ 11:45pm PST\n\nWorkshop and event schedules will be posted in the DSH Hacks Discord!\n\nMake sure to join the Discord server to stay up to date on all announcements and live sessions, and check out our recorded workshops on YouTube.",
  },
  {
    title: "Theme",
    content: "AI × Healthcare\n\nParticipants will build meaningful technical products in AI and healthcare that solve real-world problems.\n\nProjects may range from diagnostic tools tackling global disease burdens, to patient-care platforms improving access and outcomes, to AI-powered systems reimagining how we detect, treat, and manage illness.\n\nThe theme track will have special prizes for projects that align with the announced theme.",
  },
  {
    title: "Rules",
    content: "• All students aged 13+ are eligible to participate.\n• Projects must demonstrate a novel creation of a specialized system made to solve an identified problem.\n• Submissions should demonstrate use in at least a demonstrative capacity.\n• Teams may work individually or in groups.\n• Projects must be original and built during the hackathon period.\n• Follow all community guidelines and maintain a respectful, inclusive environment.",
    link: "https://dsh-hacks-v2.devpost.com/rules",
    linkLabel: "View full rules",
  },
  {
    title: "Prizes",
    content: "🏆 Winner – $100 Cash + $100 AoPS Gift Card\n\nMore prize announcements will be posted on Devpost and in the DSH Hacks Discord — stay tuned!",
    link: "https://dsh-hacks-v2.devpost.com/",
    linkLabel: "See prizes on Devpost",
  },
  {
    title: "Judging Criteria",
    content: "Projects are judged on four components:\n\n1. Idea – Did the proposal address the theme? Was the idea innovative? Could it be deployed for real-world impact?\n\n2. Implementation – Does the solution work? How technically challenging was the implementation?\n\n3. Design – Did the team put thought into UX? How well designed is the interface?\n\n4. Presentation – Does the presentation clearly define and address the problem statement?",
  },
  {
    title: "Submission Requirements",
    content: "Your submission must include:\n\n• Project: A website, app, or coding prototype with user interaction capabilities. Hardware with a coding component is allowed.\n\n• Demo Video: Explaining the purpose, showcasing features, and demonstrating how users interact with the prototype.\n\n• One-Page Project Description (PDF): Describing the project purpose and key features.\n\n• GitHub Repository / Code PDF: Showcasing all code developed for the project.",
    link: "https://dsh-hacks-v2.devpost.com/",
    linkLabel: "Submit on Devpost",
  },
];

const InfoCarousel = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateLayout = () => {
    const width = window.innerWidth;
    if (width < 640) setVisibleCards(1);
    else if (width < 1024) setVisibleCards(2);
    else setVisibleCards(3);
    if (containerRef.current) setCardWidth(containerRef.current.offsetWidth / visibleCards);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [visibleCards]);

  const next = () => setIndex((prev) => prev >= infoCards.length - visibleCards ? 0 : prev + 1);
  const prev = () => setIndex((prev) => prev <= 0 ? infoCards.length - visibleCards : prev - 1);

  return (
    <section id="info" className="bg-white text-[#26262e] py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#4f56e5] text-4xl font-bold text-white sm:h-24 sm:w-24 sm:text-5xl">2</div>
            <h2 className="text-5xl font-light tracking-tight sm:text-7xl">INFO</h2>
          </div>
          <div className="flex gap-3">
            <button onClick={prev} className="p-3 bg-[#eef0f9] rounded-full hover:bg-[#e6e9f6] transition"><ChevronLeft className="w-6 h-6" /></button>
            <button onClick={next} className="p-3 bg-[#eef0f9] rounded-full hover:bg-[#e6e9f6] transition"><ChevronRight className="w-6 h-6" /></button>
          </div>
        </div>
        <div ref={containerRef} className="relative overflow-hidden w-full">
          <motion.div className="flex" animate={{ x: -index * cardWidth }} transition={{ type: "spring", stiffness: 90, damping: 20 }}>
            {infoCards.map((card) => (
              <div key={card.title} style={{ minWidth: cardWidth }} className="p-4 sm:p-6">
                <div className="bg-[#f4f5fb] p-8 rounded-2xl shadow-lg border border-[#e3e5f2] h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                    <p className="text-base text-gray-600 whitespace-pre-line leading-relaxed">{card.content}</p>
                  </div>
                  {card.link && (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[#4046d4] hover:underline font-semibold">
                      {card.linkLabel || "Learn more"}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoCarousel;
