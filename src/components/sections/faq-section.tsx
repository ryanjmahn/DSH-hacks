"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { MuralHeading, Waves, StarField } from "@/components/sections/mural-art";

const faqData: { id: string; question: string; answer: React.ReactNode }[] = [
  { id: "faq-1",  question: "Who can participate?",
    answer: "All students aged 13+ are eligible to participate. The event is open to students from all countries and territories (excluding standard exceptions)." },
  { id: "faq-2",  question: "Is DSH Hacks free to enter?",
    answer: "Yes! DSH Hacks is 100% free for all competitors." },
  { id: "faq-3",  question: "When does the hackathon take place?",
    answer: "The project submission deadline is November 7, 2026 at 11:45pm PST." },
  { id: "faq-4",  question: "Can I work solo or do I need a team?",
    answer: "You can work individually or in a team. We recommend finding like-minded individuals to collaborate with. Check out the DSH Hacks Discord to find teammates!" },
  { id: "faq-5",  question: "What is the theme?",
    answer: "The theme is AI × Healthcare. You'll identify a real healthcare problem and build an AI-powered app, website, or system that tackles it: from diagnostic tools, to patient-care platforms, to systems that reimagine how we detect, treat, and manage illness." },
  { id: "faq-6",  question: "What do I need to submit?",
    answer: "Your submission must include: (1) a Project: a website, app, or prototype with user interaction; (2) a Demo Video; (3) a One-Page Project Description in PDF; and (4) a GitHub Repository or Code PDF." },
  { id: "faq-7",  question: "Can I use AI tools to help build my project?",
    answer: "Yes! Participants are allowed and encouraged to use AI tools to help build their solutions. The goal is to lower the technical barrier for beginners with ambitious ideas." },
  { id: "faq-8",  question: "What are the prizes?",
    answer: "The winner receives $100 Cash + a $100 AoPS Gift Card. More prize announcements will be posted on Devpost and in the DSH Hacks Discord. Stay tuned!" },
  { id: "faq-9",  question: "How will projects be judged?",
    answer: "Projects are judged on four components: Idea, Implementation, Design, and Presentation." },
  { id: "faq-10", question: "Who is hosting DSH Hacks?",
    answer: "DSH Hacks is hosted collaboratively by three youth-led organizations: DeltaForge Hacks, NXT Horizon, and STEMise." },
  { id: "faq-11", question: "Where can I get updates and find teammates?",
    answer: "Join the DSH Hacks Discord. All announcements, workshop schedules, and community discussions will be posted there. Recorded workshops are available on the DSH Hacks YouTube channel." },
  { id: "faq-12", question: "I have another question.",
    answer: "Join the DSH Hacks Discord and make a ticket and we'll get back to you as soon as possible!" },
];

const FaqSection = () => {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#1a2153] text-[#f2e9d8] py-20 sm:py-28 pb-44">
      <StarField className="absolute top-4 left-0 w-full h-40 pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <MuralHeading title="FAQ" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Accordion type="single" collapsible className="w-full mt-12">
            {faqData.map((faq, index) => (
              <motion.div key={faq.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                <AccordionItem value={faq.id} className="group border-b border-[#f2e9d8]/20">
                  <AccordionTrigger className="py-6 text-xl font-bold text-left text-[#f2e9d8] transition-all hover:text-[#eeda9f] hover:no-underline [&>svg:last-child]:hidden">
                    {faq.question}
                    <Plus  className="h-6 w-6 shrink-0 text-[#eecd7f] transition-transform duration-200 group-data-[state=open]:hidden" />
                    <Minus className="h-6 w-6 shrink-0 text-[#eecd7f] transition-transform duration-200 hidden group-data-[state=open]:block" />
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-4 text-base text-[#f2e9d8]/75 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>

      <Waves className="absolute inset-x-0 -bottom-1 w-full h-36 pointer-events-none" />
    </section>
  );
};

export default FaqSection;
