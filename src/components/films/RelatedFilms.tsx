"use client";

import Link from "next/link";
import { Play } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Card from "@/components/ui/Card";

const films = [
  {
    title: "A Romantic Wedding In Portugal",
    location: "Sintra",
    duration: "6:42",
  },
  {
    title: "Luxury Destination Celebration",
    location: "Algarve",
    duration: "5:18",
  },
  {
    title: "Elegant Church Wedding",
    location: "Lisbon",
    duration: "7:05",
  },
  {
    title: "Beach Wedding Story",
    location: "Comporta",
    duration: "4:51",
  },
  {
    title: "Timeless Editorial Film",
    location: "Porto",
    duration: "8:16",
  },
  {
    title: "Wedding Highlights",
    location: "Portugal",
    duration: "3:24",
  },
];

export default function RelatedFilms() {
  return (
    <aside className="xl:sticky xl:top-28">
      <FadeUp>
        <Card>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7458]">
            More Stories
          </p>

          <h2
            className="mt-2 text-[2rem] font-light text-[#21180f]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Related Films
          </h2>

          <div className="mt-6 space-y-4">
            {films.map((film, index) => (
              <Link
                key={index}
                href="#"
                className="group flex gap-4"
              >
                {/* Thumbnail */}

                <div className="relative aspect-video w-[150px] flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-[#433122] via-[#2d2219] to-[#18120d]">

                  {/* Replace with thumbnail later */}

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">

                      <Play
                        size={16}
                        fill="white"
                        className="ml-0.5 text-white"
                      />

                    </div>

                  </div>

                  <div className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-[11px] text-white">
                    {film.duration}
                  </div>

                </div>

                {/* Content */}

                <div className="flex-1">

                  <h3 className="line-clamp-2 text-[15px] font-medium leading-6 text-[#21180f] transition group-hover:text-[#8b7458]">
                    {film.title}
                  </h3>

                  <p className="mt-2 text-[13px] text-[#8b7458]">
                    {film.location}
                  </p>

                </div>

              </Link>
            ))}
          </div>
        </Card>
      </FadeUp>
    </aside>
  );
}