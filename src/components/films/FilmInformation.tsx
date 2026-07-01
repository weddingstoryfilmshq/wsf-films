"use client";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Heart,
  Camera,
  Building2,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Card from "@/components/ui/Card";

export default function FilmInformation() {
  return (
    <section className="py-4">
      <FadeUp>
        <Card>
          {/* Heading */}

          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7458]">
            Wedding Story
          </p>

          <h2
            className="mt-3 text-[2.2rem] font-light leading-tight text-[#21180f]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Sofia & Daniel
          </h2>

          {/* Meta */}

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div className="flex items-center gap-3">
              <MapPin
                size={18}
                className="text-[#8b7458]"
              />

              <div>
                <p className="text-[11px] uppercase tracking-[0.20em] text-[#8b7458]">
                  Location
                </p>

                <p className="mt-1 text-[15px] text-[#21180f]">
                  Sintra, Portugal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays
                size={18}
                className="text-[#8b7458]"
              />

              <div>
                <p className="text-[11px] uppercase tracking-[0.20em] text-[#8b7458]">
                  Wedding Date
                </p>

                <p className="mt-1 text-[15px] text-[#21180f]">
                  14 June 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock3
                size={18}
                className="text-[#8b7458]"
              />

              <div>
                <p className="text-[11px] uppercase tracking-[0.20em] text-[#8b7458]">
                  Film Duration
                </p>

                <p className="mt-1 text-[15px] text-[#21180f]">
                  6 Minutes 42 Seconds
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Building2
                size={18}
                className="text-[#8b7458]"
              />

              <div>
                <p className="text-[11px] uppercase tracking-[0.20em] text-[#8b7458]">
                  Venue
                </p>

                <p className="mt-1 text-[15px] text-[#21180f]">
                  Penha Longa Resort
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Heart
                size={18}
                className="text-[#8b7458]"
              />

              <div>
                <p className="text-[11px] uppercase tracking-[0.20em] text-[#8b7458]">
                  Couple
                </p>

                <p className="mt-1 text-[15px] text-[#21180f]">
                  Sofia & Daniel
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Camera
                size={18}
                className="text-[#8b7458]"
              />

              <div>
                <p className="text-[11px] uppercase tracking-[0.20em] text-[#8b7458]">
                  Produced By
                </p>

                <p className="mt-1 text-[15px] text-[#21180f]">
                  Wedding Story Films
                </p>
              </div>
            </div>
          </div>

          {/* Story */}

          <div className="mt-8 border-t border-[#eadfce] pt-8">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7458]">
              Their Story
            </p>

            <p className="mt-4 max-w-4xl text-[16px] leading-8 text-[#6d5b48]">
              Every wedding has its own rhythm, emotions and unforgettable
              moments. This celebration was filled with heartfelt vows,
              beautiful scenery and genuine connections between family and
              friends. Rather than simply documenting events, our goal was to
              preserve the atmosphere, emotions and timeless beauty exactly as
              they unfolded throughout the day.
            </p>

            <p className="mt-5 max-w-4xl text-[16px] leading-8 text-[#6d5b48]">
              From the quiet anticipation of the morning preparations to the
              final dance beneath the evening lights, every frame was crafted
              with intention to create a film that will remain meaningful for
              generations to come.
            </p>
          </div>
        </Card>
      </FadeUp>
    </section>
  );
}