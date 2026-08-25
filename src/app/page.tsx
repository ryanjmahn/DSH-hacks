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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper">
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <V1Section />
      <ScheduleSection />
      <PrizesSection />
      <SponsorsSection />
      <WorkshopsSection />
      <RegisterSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
