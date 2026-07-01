"use client";

import {
  Building2,
  ArrowUpRight,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const venues = [
  {
    name: "Penha Longa Resort",
    location: "Sintra, Portugal",
    image: "/images/about/venues/penha-longa.jpg",
  },
  {
    name: "Palácio de Queluz",
    location: "Lisbon, Portugal",
    image: "/images/about/venues/queluz.jpg",
  },
  {
    name: "Pena Palace",
    location: "Sintra, Portugal",
    image: "/images/about/venues/pena.jpg",
  },
  {
    name: "Four Seasons Ritz",
    location: "Lisbon, Portugal",
    image: "/images/about/venues/fourseasons.jpg",
  },
  {
    name: "Tivoli Hotels",
    location: "Portugal",
    image: "/images/about/venues/tivoli.jpg",
  },
  {
    name: "Pestana Collection",
    location: "Portugal",
    image: "/images/about/venues/pestana.jpg",
  },
];

export default function TrustedVenues() {
  return (
    <section className="py-8 lg:py-10">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Trusted Venues"
            title="Some Beautiful Places We've Worked"
            description="Every venue has its own atmosphere and character. We love creating timeless stories in some of Portugal's most iconic wedding locations."
          />
        </FadeUp>

        <div className="mt-6 grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
          {venues.map((venue, index) => (
            <FadeUp
              key={venue.name}
              delay={index * 0.08}
            >
              <Card className="group overflow-hidden p-0">
                {/* Placeholder */}

                <div className="relative aspect-[16/8] overflow-hidden bg-gradient-to-br from-[#433122] via-[#2d2219] to-[#19120d]">
                  {/* Later */}

                  {/*
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  */}

                  <div className="absolute inset-0 bg-black/15" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Building2
                        size={30}
                        className="mx-auto text-white/80"
                      />

                      <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/60">
                        Venue Image
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5">
                  <div>
                    <h3
                      className="text-[1.4rem] font-light leading-tight text-[#21180f]"
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {venue.name}
                    </h3>

                    <p className="mt-0.5 text-[14px] text-[#6d5b48]">
                      {venue.location}
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
          <Card className="mt-5 text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7458]">
              Every Venue Is Different
            </p>

            <h3
              className="mt-2 text-[1.9rem] font-light leading-tight text-[#21180f]"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Beautiful Places Deserve Beautiful Stories
            </h3>

            <p className="mx-auto mt-3 max-w-3xl text-[15px] leading-6 text-[#6d5b48]">
              Whether your celebration takes place in a historic palace,
              luxury hotel, vineyard or private estate, our approach remains
              the same — authentic storytelling with timeless elegance.
            </p>
          </Card>
        </FadeUp>
      </Container>
    </section>
  );
}