"use client";

import {
  Search,
  ClipboardCheck,
  Camera,
  Film,
  Gift,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    text: "We begin by getting to know you, your story and the vision you have for your wedding day.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Plan",
    text: "Together we create a seamless timeline so every meaningful moment is beautifully documented.",
  },
  {
    icon: Camera,
    number: "03",
    title: "Capture",
    text: "With a calm documentary approach, we preserve genuine emotions while allowing your day to unfold naturally.",
  },
  {
    icon: Film,
    number: "04",
    title: "Craft",
    text: "Every image and film is carefully edited with timeless colour, elegant storytelling and cinematic attention to detail.",
  },
  {
    icon: Gift,
    number: "05",
    title: "Deliver",
    text: "Your memories are presented in a beautiful online gallery and cinematic films you'll treasure forever.",
  },
];

export default function CreativeProcess() {
  return (
    <section className="py-8 lg:py-10">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Our Creative Process"
            title="From Your First Message To Final Delivery"
            description="Every celebration follows a carefully considered journey, ensuring a relaxed experience and timeless results."
          />
        </FadeUp>

        <div className="relative mx-auto mt-6 max-w-7xl">
          {/* Desktop Line */}

          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#d8c7ad] to-transparent xl:block" />

          <div className="grid gap-3.5 xl:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <FadeUp
                  key={step.number}
                  delay={index * 0.08}
                >
                  <Card className="relative h-full py-5 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#21180f] text-white">
                      <Icon size={22} />
                    </div>

                    <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#8b7458]">
                      {step.number}
                    </p>

                    <h3
                      className="mt-2 text-[1.5rem] font-light leading-tight text-[#21180f]"
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-6 text-[#6d5b48]">
                      {step.text}
                    </p>
                  </Card>
                </FadeUp>
              );
            })}
          </div>
        </div>

        <FadeUp delay={0.35}>
          <Card className="mt-5 py-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7458]">
              Every Wedding Is Unique
            </p>

            <h3
              className="mt-2 text-[1.9rem] font-light leading-tight text-[#21180f]"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Thoughtfully Planned.
              <br />
              Beautifully Remembered.
            </h3>

            <p className="mx-auto mt-3 max-w-3xl text-[15px] leading-6 text-[#6d5b48]">
              Our process is designed to feel effortless, allowing you to enjoy
              every moment while we quietly document your celebration with care,
              creativity and timeless elegance.
            </p>
          </Card>
        </FadeUp>
      </Container>
    </section>
  );
}