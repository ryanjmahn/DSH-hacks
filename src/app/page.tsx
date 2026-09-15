import FrontispieceSection from "@/components/sections/frontispiece-section";
import HeroSection from "@/components/sections/hero-section";
import CountdownSection from "@/components/sections/countdown-section";
import AboutSection from "@/components/sections/about-section";
import V1Section from "@/components/sections/v1-section";
import ScheduleSection from "@/components/sections/schedule-section";
import PrizesSection from "@/components/sections/prizes-section";
import SponsorsSection from "@/components/sections/sponsors-section";
import WorkshopsSection from "@/components/sections/workshops-section";
import RegisterSection from "@/components/sections/team-section";
import FaqSection from "@/components/sections/faq-section";
import FooterSection from "@/components/sections/footer-section";
import { SpringingLine } from "@/components/sections/design-system";

/* Fully light. Every section runs the light ground; the accent blue
   (--rubric) carries accent words, eyebrows, labels, and links. */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-ink">
      <FrontispieceSection />
      {/* no divider — Beat 1/Beat 2 are one continuous space */}
      <HeroSection />
      <SpringingLine ground="dark" />
      <CountdownSection />
      <SpringingLine ground="dark" />
      <AboutSection />
      <SpringingLine ground="dark" />
      <V1Section />
      <SpringingLine ground="dark" />
      <ScheduleSection />
      <SpringingLine ground="dark" />
      <PrizesSection />
      <SpringingLine ground="dark" />
      <SponsorsSection />
      <SpringingLine ground="dark" />
      <WorkshopsSection />
      <SpringingLine ground="dark" />
      <RegisterSection />
      <SpringingLine ground="dark" />
      <FaqSection />
      <SpringingLine ground="dark" />
      <FooterSection />
    </div>
  );
}
