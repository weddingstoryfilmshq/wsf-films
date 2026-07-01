"use client";

import {
  Camera,
  Globe2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const reasons = [
  {
    icon: Camera,
    title: "Cinematic Storytelling",
    text: "Every wedding is captured with intention, emotion and timeless storytelling rather than simply documenting events.",
  },
  {
    icon: Globe2,
    title: "Destination Experience",
    text: "Available throughout Portugal, Europe and destination weddings worldwide with a seamless planning experience.",
  },
  {
    icon: Sparkles,
    title: "Luxury Editing",
    text: "Natural colours, elegant pacing and refined cinematic finishing designed to look beautiful for decades.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Experience",
    text: "Every couple receives thoughtful guidance from the first conversation through the final delivery.",
  },
  {
    icon: Video,
    title: "Premium Delivery",
    text: "Beautifully presented films delivered privately in high quality with a premium viewing experience.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    text: "Clear communication, organised planning and dependable coverage so you can enjoy your wedding with confidence.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 lg:py-28">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Why Wedding Story Films"
            title="More Than Beautiful Films"
            description="Your wedding deserves more than coverage. It deserves a carefully crafted experience designed around your story, your celebration and the people who matter most."
          />
        </FadeUp>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:mt-20 xl:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp
                key={item.title}
                delay={index * 0.08}
              >
                <Card className="group flex h-full flex-col p-9">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#21180f] text-white transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                    <Icon size={28} />
                  </div>

                  <h3
                    className="mt-8 text-3xl font-light tracking-[-0.03em] text-[#21180f]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-5 flex-1 text-[16px] leading-8 text-[#6d5b48]">
                    {item.text}
                  </p>
                </Card>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}