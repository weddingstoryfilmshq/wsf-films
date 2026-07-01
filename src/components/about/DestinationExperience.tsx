"use client";

import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const destinations = [
  {
    title: "Portugal",
    subtitle: "Luxury Weddings",
    image: "/images/about/portugal.jpg",
  },
  {
    title: "UAE",
    subtitle: "Luxury Celebrations",
    image: "/images/about/uae.jpg",
  },
  {
    title: "Asia",
    subtitle: "Destination Weddings",
    image: "/images/about/asia.jpg",
  },
];

export default function DestinationExperience() {
  return (
    <section className="py-8 lg:py-10">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Destination Experience"
            title="Stories Without Borders"
            description="From intimate celebrations in Portugal to destination weddings across the UAE and Asia, we're always ready to travel wherever your story begins."
          />
        </FadeUp>

        <div className="mt-6 grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((item, index) => (
            <FadeUp
              key={item.title}
              delay={index * 0.08}
            >
              <Card className="group overflow-hidden p-0">
                {/* Placeholder */}

                <div className="relative aspect-[16/8] overflow-hidden bg-gradient-to-br from-[#463524] via-[#2b2118] to-[#18120d]">
                  {/* Replace with Image later */}

                  {/*
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  */}

                  <div className="absolute inset-0 bg-black/15" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">
                        Destination Image
                      </p>

                      <h3
                        className="mt-2 text-[2rem] font-light leading-none text-white"
                        style={{
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5">
                  <div>
                    <p
                      className="text-[1.4rem] font-light leading-tight text-[#21180f]"
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {item.title}
                    </p>

                    <p className="mt-0.5 text-[14px] text-[#6d5b48]">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#21180f] text-white transition duration-300 group-hover:scale-110">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <Card className="mt-5">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7458]">
                  Always Ready To Travel
                </p>

                <h3
                  className="mt-2 text-[1.9rem] font-light leading-tight text-[#21180f]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Wherever Your Story Takes You
                </h3>

                <p className="mt-3 max-w-2xl text-[15px] leading-6 text-[#6d5b48]">
                  Whether your celebration takes place in Portugal, the UAE or
                  anywhere across Asia, we'll be there to document every
                  unforgettable moment with timeless elegance.
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#21180f] text-white">
                <MapPin size={28} />
              </div>
            </div>
          </Card>
        </FadeUp>
      </Container>
    </section>
  );
}