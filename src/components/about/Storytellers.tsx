"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const storytellers = [
  {
    name: "Khalifa",
    role: "Co-Founder",
    image: "/images/about/khalifa.jpg",
    story:
      "For more than a decade, Khalifa has documented weddings across multiple cultures and destinations. His filmmaking style is rooted in genuine emotion, natural movement and timeless storytelling, creating films that feel elegant today and decades from now.",
  },
  {
    name: "Diogo",
    role: "Co-Founder",
    image: "/images/about/diogo.jpg",
    story:
      "With over fifteen years in weddings and live events, Diogo combines technical expertise with an exceptional artistic understanding of rhythm, atmosphere and emotion. His musical background allows him to anticipate meaningful moments before they unfold.",
  },
  {
    name: "Hugo C.",
    role: "Lead Filmmaker",
    image: "/images/about/hugo.jpg",
    story:
      "Hugo brings extensive experience across weddings, documentaries, photography and digital storytelling. His calm creative approach focuses on authentic human connection, elegant composition and preserving every celebration with honesty and beauty.",
  },
];

export default function Storytellers() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="storytellers"
      className="py-8 lg:py-10"
    >
      <Container>
        <FadeUp>
          <SectionHeader
            label="The Storytellers"
            title="The People Behind Every Frame"
            description="A small creative team shaped by cinema, music, travel and the belief that every wedding deserves to be remembered beautifully."
          />
        </FadeUp>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {storytellers.map((person, index) => {
            const active = open === index;

            return (
              <FadeUp
                key={person.name}
                delay={index * 0.08}
              >
                <Card className="h-full overflow-hidden p-0 hover:translate-y-0">
                  <div className="aspect-[4/4.4] overflow-hidden bg-[#21180f]">
                    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,.12),transparent_45%),linear-gradient(135deg,#3a2a1b,#17100a)] text-center">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">
                          Portrait
                        </p>

                        <h3
                          className="mt-2 text-[2rem] font-light leading-none text-white"
                          style={{
                            fontFamily: "var(--font-heading)",
                          }}
                        >
                          {person.name}
                        </h3>
                      </div>
                    </div>

                    {/*
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={700}
                      height={900}
                      className="h-full w-full object-cover"
                    />
                    */}
                  </div>

                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7458]">
                      {person.role}
                    </p>

                    <h3
                      className="mt-2 text-[2rem] font-light leading-tight text-[#21180f]"
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {person.name}
                    </h3>

                    <button
                      type="button"
                      onClick={() => setOpen(active ? -1 : index)}
                      className="mt-4 flex w-full items-center justify-between border-t border-[#e8dccb] pt-4 text-left text-[14px] font-medium text-[#21180f]"
                    >
                      <span>Read Story</span>

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          active ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        active
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pt-4 text-[15px] leading-6 text-[#6d5b48]">
                          {person.story}
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