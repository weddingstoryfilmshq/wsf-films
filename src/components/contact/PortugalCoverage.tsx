"use client";

import {
  Globe2,
  Plane,
  MapPin,
  Camera,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const locations = [
  {
    icon: MapPin,
    title: "Cascais",
    text: "Our home studio, serving elegant coastal weddings.",
  },
  {
    icon: Camera,
    title: "Lisbon",
    text: "Luxury city weddings and iconic Portuguese venues.",
  },
  {
    icon: Sparkles,
    title: "Sintra",
    text: "Historic palaces, romantic estates and destination celebrations.",
  },
  {
    icon: HeartHandshake,
    title: "Portugal",
    text: "Available throughout Portugal for unforgettable celebrations.",
  },
  {
    icon: Plane,
    title: "Europe",
    text: "Traveling across Europe for destination weddings.",
  },
  {
    icon: Globe2,
    title: "Worldwide",
    text: "Your story deserves to be captured wherever it takes place.",
  },
];

export default function PortugalCoverage() {
  return (
    <section className="py-16 lg:py-18">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Where We Travel"
            title="Portugal • Europe • Worldwide"
            description="From intimate celebrations in Cascais to luxury destination weddings across Europe and beyond, we're always ready to travel wherever your story takes us."
          />
        </FadeUp>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((location, index) => {
            const Icon = location.icon;

            return (
              <FadeUp
                key={location.title}
                delay={index * 0.08}
              >
                <Card className="group h-full p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#21180f] text-white transition duration-300 group-hover:scale-105">
                    <Icon size={26} />
                  </div>

                  <h3
                    className="mt-6 text-2xl font-light text-[#21180f]"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {location.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#6d5b48]">
                    {location.text}
                  </p>
                </Card>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.25}>
          <Card className="mt-8 p-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b7458]">
                  Destination Weddings
                </p>

                <h3
                  className="mt-4 text-3xl font-light text-[#21180f]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Wherever Your Story Begins...
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-[#6d5b48]">
                  We love discovering new places, meeting wonderful people and
                  documenting celebrations in the most beautiful locations
                  around the world.
                </p>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#21180f] text-white shadow-lg">
                <Plane size={34} />
              </div>
            </div>
          </Card>
        </FadeUp>
      </Container>
    </section>
  );
}