"use client";

import {
  Heart,
  Share2,
  Play,
  Clock3,
  MapPin,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Card from "@/components/ui/Card";
import RelatedFilms from "@/components/films/RelatedFilms";

export default function FeaturedPlayer() {
  return (
    <section
      id="featured-film"
      className="pt-28 pb-8 lg:pt-32 lg:pb-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* Left */}

          <FadeUp>
            <div>
              {/* Featured Video */}

              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[21/9] bg-gradient-to-br from-[#3f3024] via-[#231a13] to-[#130e0b]">

                  {/*
                  <video
                    controls
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source
                      src="/videos/films/sample.mp4"
                      type="video/mp4"
                    />
                  </video>
                  */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                      <Play
                        size={34}
                        fill="white"
                        className="ml-1 text-white"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Film Info */}

              <div className="mt-6">
                <h1
                  className="text-4xl font-light text-[#21180f] lg:text-5xl"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Sofia & Daniel
                </h1>

                <div className="mt-3 flex flex-wrap items-center gap-5 text-[14px] text-[#7b6854]">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    Sintra, Portugal
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    6 min 42 sec
                  </div>
                </div>

                <p className="mt-5 max-w-4xl leading-8 text-[#6d5b48]">
                  An intimate destination wedding surrounded by the timeless
                  beauty of Sintra. A celebration filled with emotion,
                  meaningful moments and elegant storytelling.
                </p>
              </div>

              {/* Actions */}

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-full bg-[#21180f] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3b2c20]">
                  <Heart size={17} />
                  Loved this film
                </button>

                <button className="flex items-center gap-2 rounded-full border border-[#d8c9b5] bg-white px-6 py-3 text-sm text-[#21180f] transition hover:bg-[#f7f3ed]">
                  <Share2 size={17} />
                  Share
                </button>
              </div>
            </div>
          </FadeUp>

          {/* Right Sidebar */}

          <FadeUp delay={0.15}>
            <RelatedFilms />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}