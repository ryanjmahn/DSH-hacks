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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper">
      <FrontispieceSection />
      {/* no divider here — Beat 1/Beat 2 are explicitly one continuous
          space per the brief, not a bay boundary */}
      <HeroSection />
      <SpringingLine />
      <CountdownSection />
      <SpringingLine />
      <AboutSection />
      <SpringingLine />
      <V1Section />
      <SpringingLine />
      <ScheduleSection />
      <SpringingLine />
      <PrizesSection />
      <SpringingLine />
      <SponsorsSection />
      <SpringingLine />
      <WorkshopsSection />
      <SpringingLine />
      <RegisterSection />
      <SpringingLine />
      <FaqSection />
      <SpringingLine />
      <FooterSection />
    </div>
  );
}
