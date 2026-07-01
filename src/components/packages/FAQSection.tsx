"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const faqs = [
  {
    question: "How far do you travel?",
    answer:
      "We photograph and film weddings throughout Portugal and regularly travel across Europe and worldwide for destination celebrations.",
  },
  {
    question: "Can we customise a collection?",
    answer:
      "Absolutely. Every wedding is different, so collections can be tailored to include additional coverage, photography, videography, drone footage and more.",
  },
  {
    question: "Do you cover destination weddings?",
    answer:
      "Yes. Destination weddings are one of our specialties. We'll help plan travel, logistics and coverage from start to finish.",
  },
  {
    question: "How much is the booking fee?",
    answer:
      "A signed agreement together with a booking retainer secures your date. The remaining balance is due before the wedding.",
  },
  {
    question: "How early should we book?",
    answer:
      "Most couples reserve their date between 9–18 months in advance. Popular summer weekends often book much earlier.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Typical delivery is between 6–12 weeks depending on the season and the scope of your collection.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-28">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Frequently Asked Questions"
            title="Everything You Need To Know"
            description="A few answers to the questions we're asked most often before booking."
          />
        </FadeUp>

        <div className="mx-auto mt-16 max-w-5xl space-y-5">
          {faqs.map((faq, index) => {
            const expanded = open === index;

            return (
              <FadeUp
                key={faq.question}
                delay={index * 0.06}
              >
                <Card
                  className="overflow-hidden p-0 hover:translate-y-0"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpen(expanded ? null : index)
                    }
                    aria-expanded={expanded}
                    className="flex w-full items-center justify-between px-8 py-7 text-left transition-colors duration-300 hover:bg-[#fcfaf6]"
                  >
                    <span className="pr-6 text-lg font-medium text-[#21180f]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={22}
                      className={`shrink-0 transition-transform duration-300 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      expanded
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#e8dccb] bg-[#fcfaf6] px-8 py-6">
                        <p className="max-w-3xl leading-8 text-[#6d5b48]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}