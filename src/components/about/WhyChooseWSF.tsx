"use client";

import {
  Heart,
  Globe2,
  Camera,
  Sparkles,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const reasons = [
  {
    icon: Heart,
    title: "Emotion Before Perfection",
    text: "Real moments always come first. We preserve genuine emotions rather than creating staged memories.",
  },
  {
    icon: Camera,
    title: "Editorial Storytelling",
    text: "A refined cinematic style inspired by luxury fashion, timeless photography and authentic storytelling.",
  },
  {
    icon: Globe2,
    title: "Destination Specialists",
    text: "Available throughout Portugal, Europe and worldwide for unforgettable celebrations.",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
    text: "A calm, personal and premium experience from your first enquiry to final delivery.",
  },
  {
    icon: Clock3,
    title: "Timeless Editing",
    text: "Elegant colours and cinematic films designed to feel beautiful for decades, not trends.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Professionals",
    text: "Years of experience, careful planning and complete dedication to every couple we work with.",
  },
];

export default function WhyChooseWSF() {
  return (
    <section className="py-10 lg:py-12">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Why Couples Choose Us"
            title="A Different Kind Of Wedding Experience"
            description="More than beautiful imagery, we provide a thoughtful experience built around trust, creativity and genuine human connection."
          />
        </FadeUp>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp
                key={item.title}
                delay={index * 0.08}
              >
                <Card className="group h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#21180f] text-white transition duration-300 group-hover:scale-105">
                    <Icon size={22} />
                  </div>

                  <h3
                    className="mt-4 text-[1.55rem] font-light leading-tight text-[#21180f]"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-6 text-[#6d5b48]">
                    {item.text}
                  </p>
                </Card>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.3}>
          <Card className="mt-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#8b7458]">
              Our Promise
            </p>

            <h3
              className="mt-3 text-[2rem] font-light leading-tight text-[#21180f]"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Every Couple Receives
              <br />
              Our Full Creative Attention
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-6 text-[#6d5b48]">
              We intentionally accept a limited number of weddings each year,
              allowing us to give every celebration the time, creativity and
              personal attention it truly deserves.
            </p>
          </Card>
        </FadeUp>
      </Container>
    </section>
  );
}