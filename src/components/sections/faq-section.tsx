"use client";

import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { SectionHeading, useFadeRise } from "@/components/sections/design-system";

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
  const accordionMotion = useFadeRise(0.1);

  return (
    <section id="faq" className="relative bg-plaster text-umber py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow="Good to know" title="FAQ" />

        <motion.div {...accordionMotion}>
          <Accordion type="single" collapsible className="w-full mt-14 sm:mt-16 max-w-3xl">
            {faqData.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="group relative border-rule pl-4 -ml-4">
                {/* effect 8: left hairline thickens to 2px ochre on row hover */}
                <span
                  className="absolute left-0 top-2 bottom-2 w-px bg-rule group-hover:w-0.5 group-hover:bg-ochre transition-all duration-300"
                  aria-hidden="true"
                />
                <AccordionTrigger className="type-title text-left text-umber py-6 hover:text-sienna hover:no-underline [&>svg]:text-umber-soft [&>svg]:size-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="type-body text-umber-soft pt-0 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
