import type { Metadata } from "next";

import CollectionsHero from "@/components/packages/CollectionsHero";
import CollectionCards from "@/components/packages/CollectionCards";
import ComparisonTable from "@/components/packages/ComparisonTable";
import WhyChooseSection from "@/components/packages/WhyChooseSection";
import PlannerIntro from "@/components/packages/PlannerIntro";
import PlannerWizard from "@/components/packages/PlannerWizard";
import FAQSection from "@/components/packages/FAQSection";
import QuoteSection from "@/components/packages/QuoteSection";

export const metadata: Metadata = {
  title: "Collections | Wedding Story Films",
  description:
    "Explore our signature wedding collections, compare coverage options, discover the perfect collection for your celebration, and request your personalised quote.",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#21180f]">

      <CollectionsHero />

      <CollectionCards />

      <ComparisonTable />

      <WhyChooseSection />

      <PlannerIntro />

      <PlannerWizard />

      <FAQSection />

      <QuoteSection />

    </main>
  );
}