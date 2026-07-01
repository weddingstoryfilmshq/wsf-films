import ContactHero from "@/components/contact/ContactHero";
import WhatHappensNext from "@/components/contact/WhatHappensNext";
import ContactMethods from "@/components/contact/ContactMethods";
import AvailabilityChecker from "@/components/contact/AvailabilityChecker";
import LuxuryContactForm from "@/components/contact/LuxuryContactForm";
import MeetingPreference from "@/components/contact/MeetingPreference";
import StudioMap from "@/components/contact/StudioMap";
import PortugalCoverage from "@/components/contact/PortugalCoverage";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <WhatHappensNext />

      <ContactMethods />

      <AvailabilityChecker />

      <LuxuryContactForm />

      <MeetingPreference />

      <StudioMap />

      <PortugalCoverage />

      <ContactFAQ />

      <ContactCTA />
    </>
  );
}