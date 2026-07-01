"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const faqs = [
  {
    question: "How quickly will you reply?",
    answer:
      "We usually respond within 24 hours. During peak wedding season it may take slightly longer, but every enquiry receives a personal reply.",
  },
  {
    question: "Can we arrange a video consultation?",
    answer:
      "Absolutely. We regularly meet couples via Zoom, Google Meet and WhatsApp Video, making planning easy from anywhere in the world.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Yes. We photograph and film weddings throughout Portugal, across Europe and internationally. We'd love to hear about your plans.",
  },
  {
    question: "Can we meet before booking?",
    answer:
      "Of course. You can choose a studio meeting, a coffee meeting, a phone call or a video consultation—whatever feels most comfortable for you.",
  },
  {
    question: "Do you create custom collections?",
    answer:
      "Yes. Every wedding is unique, so we can tailor a collection around your celebration, coverage requirements and vision.",
  },
  {
    question: "How do we secure our date?",
    answer:
      "Once you're happy with your collection, we'll send a proposal and agreement. Your wedding date is secured once the booking retainer has been received.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 lg:py-18">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Frequently Asked Questions"
            title="Everything You Might Be Wondering"
            description="Here are some of the questions we're most often asked before booking."
          />
        </FadeUp>

        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <FadeUp
              key={faq.question}
              delay={index * 0.05}
            >
              <Card className="overflow-hidden p-0 hover:translate-y-0">
                <button
                  type="button"
                  onClick={() =>
                    setOpen(open === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <h3 className="text-lg font-light text-[#21180f]">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      open === index
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#e8dccb] px-6 py-5">
                      <p className="leading-7 text-[#6d5b48]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}