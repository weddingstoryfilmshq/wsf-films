"use client";

import { ArrowDown } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Card from "@/components/ui/Card";

type PlannerIntroProps = {
  onStart?: () => void;
};

export default function PlannerIntro({
  onStart,
}: PlannerIntroProps) {
  return (
    <section className="py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <FadeUp>
            <SectionHeader
              label="Find My Collection"
              title="Let's Find Your Perfect Collection"
              description="Answer a few simple questions about your wedding and we'll recommend the collection that best matches your celebration, coverage requirements and overall vision."
            />
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14">
            {[
              "Takes less than 2 minutes",
              "Personalised recommendation",
              "No obligation to book",
            ].map((item, index) => (
              <FadeUp
                key={item}
                delay={index * 0.08}
              >
                <Card className="flex h-full items-center justify-center rounded-2xl p-6 text-center hover:translate-y-0">
                  <p className="text-sm leading-7 text-[#5f4d3d]">
                    {item}
                  </p>
                </Card>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.25}>
            <PrimaryButton
              onClick={onStart}
              className="mt-12 lg:mt-14"
            >
              Start Planning

              <ArrowDown
                size={18}
                className="animate-bounce"
              />
            </PrimaryButton>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}