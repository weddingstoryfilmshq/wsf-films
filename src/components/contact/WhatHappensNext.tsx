"use client";

import {
  MessageCircleMore,
  CalendarCheck2,
  Sparkles,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const steps = [
  {
    number: "01",
    icon: MessageCircleMore,
    title: "Tell Us About Your Wedding",
    description:
      "Share your wedding plans, vision and the details that matter most. The more we know, the more personal your experience becomes.",
  },
  {
    number: "02",
    icon: CalendarCheck2,
    title: "Let's Arrange A Consultation",
    description:
      "We'll personally review your enquiry and arrange a video call, coffee meeting or studio consultation at a time that suits you.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Receive Your Personal Proposal",
    description:
      "You'll receive a carefully tailored recommendation and collection designed specifically around your celebration.",
  },
];

export default function WhatHappensNext() {
  return (
    <section className="py-16 lg:py-18">
      <Container>
        <FadeUp>
          <SectionHeader
            label="What Happens Next"
            title="A Simple & Personal Experience"
            description="From your first enquiry to your wedding day, every step is designed to be effortless, personal and completely tailored to you."
          />
        </FadeUp>

        <div className="relative mx-auto mt-10 max-w-7xl">

          {/* Desktop Line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-12 hidden h-px bg-gradient-to-r from-transparent via-[#d7c2a0] to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <FadeUp
                  key={step.number}
                  delay={index * 0.08}
                >
                  <Card className="relative h-full p-6 text-center">

                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#f5f0e8] bg-[#21180f] text-xs font-medium tracking-[0.16em] text-white shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    <div className="pt-6">

                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#21180f] text-white transition duration-300 group-hover:scale-105">
                        <Icon size={28} />
                      </div>

                      <h3
                        className="mt-6 text-2xl font-light tracking-[-0.03em] text-[#21180f]"
                        style={{
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {step.title}
                      </h3>

                      <p className="mt-4 leading-7 text-[#6d5b48]">
                        {step.description}
                      </p>

                    </div>
                  </Card>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}