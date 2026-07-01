"use client";

import { Camera, Clapperboard } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const gallery = [
  {
    title: "Wedding Morning",
    image: "/images/about/bts/morning.jpg",
  },
  {
    title: "Capturing Emotion",
    image: "/images/about/bts/emotion.jpg",
  },
  {
    title: "Behind The Camera",
    image: "/images/about/bts/camera.jpg",
  },
  {
    title: "Creative Direction",
    image: "/images/about/bts/directing.jpg",
  },
  {
    title: "Editing Process",
    image: "/images/about/bts/editing.jpg",
  },
  {
    title: "Destination Journey",
    image: "/images/about/bts/travel.jpg",
  },
];

export default function BehindTheCamera() {
  return (
    <section className="py-8 lg:py-10">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Behind The Camera"
            title="Where Every Story Comes To Life"
            description="A glimpse into the moments behind the lens—the preparation, creativity and passion that shape every wedding film."
          />
        </FadeUp>

        <div className="mt-6 grid gap-3.5 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <FadeUp
              key={item.title}
              delay={index * 0.08}
            >
              <Card className="group overflow-hidden p-0">
                {/* IMAGE PLACEHOLDER */}

                <div className="relative aspect-[16/8] overflow-hidden bg-gradient-to-br from-[#433122] via-[#2d2219] to-[#18120d]">
                  {/* Replace later

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  */}

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <Camera
                      size={30}
                      className="text-white/80"
                    />

                    <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-white/60">
                      Behind The Scenes
                    </p>
                  </div>
                </div>

                <div className="p-3.5">
                  <h3
                    className="text-[1.4rem] font-light leading-tight text-[#21180f]"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {item.title}
                  </h3>
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
                  Our Approach
                </p>

                <h3
                  className="mt-2 text-[1.9rem] font-light leading-tight text-[#21180f]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Calm. Unobtrusive. Authentic.
                </h3>

                <p className="mt-3 max-w-2xl text-[15px] leading-6 text-[#6d5b48]">
                  We quietly observe, anticipate genuine moments and document
                  them naturally. Rather than directing every scene, we allow
                  your day to unfold organically, creating imagery that feels
                  timeless and true to your story.
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#21180f] text-white">
                <Clapperboard size={28} />
              </div>
            </div>
          </Card>
        </FadeUp>
      </Container>
    </section>
  );
}