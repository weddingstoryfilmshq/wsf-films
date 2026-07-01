"use client";

import { Check, Diamond, Gem, Heart } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";

const collections = [
  {
    icon: Heart,
    title: "Classic",
    subtitle: "Elegant storytelling for intimate celebrations.",
    price: "From €1,499",
    features: [
      "Up to 6 Hours Coverage",
      "Highlight Film",
      "Professional Colour Grading",
      "Private Online Delivery",
    ],
  },
  {
    icon: Diamond,
    title: "Signature",
    subtitle: "Our most popular cinematic wedding experience.",
    price: "From €2,899",
    featured: true,
    badge: "Most Popular",
    features: [
      "Full Day Coverage",
      "Drone Coverage",
      "Second Shooter",
      "Highlight Film",
      "Cinematic Feature Film",
    ],
  },
  {
    icon: Gem,
    title: "Platinum",
    subtitle: "Designed for luxury destination celebrations.",
    price: "From €4,899",
    features: [
      "Multi-Day Coverage",
      "Luxury Production",
      "Destination Weddings",
      "Priority Delivery",
      "Premium Client Experience",
    ],
  },
];

export default function CollectionCards() {
  return (
    <section
      id="collections"
      className="py-24 lg:py-28"
    >
      <Container>
        <FadeUp>
          <SectionHeader
            label="Wedding Story Films"
            title="Our Collections"
            description="Every wedding is different. Choose a collection designed around your celebration, your vision and your story."
          />
        </FadeUp>

        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-3 lg:items-stretch">
          {collections.map((collection, index) => {
            const Icon = collection.icon;

            return (
              <FadeUp
                key={collection.title}
                delay={index * 0.1}
              >
                <Card
                  className={`relative flex h-full flex-col ${
                    collection.featured
                      ? "!border-[#c9af87] lg:-translate-y-2 shadow-[0_35px_90px_rgba(33,24,15,.15)]"
                      : ""
                  }`}
                >
                  {collection.badge && (
                    <div className="absolute left-1/2 -top-4 z-20 -translate-x-1/2 rounded-full bg-[#d9b97d] px-5 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[#21180f] shadow-lg">
                      {collection.badge}
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#21180f] text-white">
                      <Icon size={28} />
                    </div>

                    <h3
                      className="mt-8 text-4xl font-light text-[#21180f]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {collection.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#6d5b48]">
                      {collection.subtitle}
                    </p>

                    <p className="mt-8 text-2xl font-light text-[#21180f]">
                      {collection.price}
                    </p>

                    <div className="mt-8 flex-1 space-y-4">
                      {collection.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-[#21180f]"
                        >
                          <Check
                            size={17}
                            className="shrink-0"
                          />

                          <span className="text-sm leading-6">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 border-t border-[#ece1d3] pt-8">
                      <PrimaryButton className="w-full">
                        Explore Collection
                      </PrimaryButton>
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