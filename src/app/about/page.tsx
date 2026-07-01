import AboutHero from "@/components/about/AboutHero";
import Storytellers from "@/components/about/Storytellers";
import StatsSection from "@/components/about/StatsSection";
import DestinationExperience from "@/components/about/DestinationExperience";
import TrustedVenues from "@/components/about/TrustedVenues";
import BehindTheCamera from "@/components/about/BehindTheCamera";
import WhyChooseWSF from "@/components/about/WhyChooseWSF";
import CreativeProcess from "@/components/about/CreativeProcess";
import FinalStatement from "@/components/about/FinalStatement";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-[#f8f5f0]">
      <AboutHero />

      <Storytellers />

      <StatsSection />

      <DestinationExperience />

      <TrustedVenues />

      <BehindTheCamera />

      <WhyChooseWSF />

      <CreativeProcess />

      <FinalStatement />

      <AboutCTA />
    </main>
  );
}