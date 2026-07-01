"use client";

import { Play } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const stories = [
  {
    title: "Portugal Wedding",
    location: "Sintra",
    type: "landscape",
  },
  {
    title: "Luxury Ceremony",
    location: "Lisbon",
    type: "portrait",
  },
  {
    title: "Beach Wedding",
    location: "Comporta",
    type: "landscape",
  },
  {
    title: "Editorial Couple",
    location: "Porto",
    type: "portrait",
  },
  {
    title: "Destination Story",
    location: "Algarve",
    type: "landscape",
  },
  {
    title: "Wedding Highlights",
    location: "Portugal",
    type: "portrait",
  },
];

export default function MoreStories() {
  return (
    <section className="py-8 lg:py-10">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Discover More"
            title="More Stories You'll Love"
            description="Every celebration has its own atmosphere, emotions and unforgettable moments. Explore more wedding stories from Portugal and beyond."
          />
        </FadeUp>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {stories.map((story, index) => (
            <FadeUp
              key={story.title}
              delay={index * 0.05}
            >
              <Card className="group overflow-hidden p-0">
                {/* Thumbnail */}

                <div
                  className={`relative overflow-hidden bg-gradient-to-br from-[#433122] via-[#2d2219] to-[#18120d] ${
                    story.type === "portrait"
                      ? "aspect-[9/16]"
                      : "aspect-video"
                  }`}
                >
                  {/* Replace later */}

                  {/*

<Image
src=""
fill
alt=""
className="object-cover transition duration-700 group-hover:scale-105"
/>

*/}

                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition duration-300 group-hover:scale-110">

                      <Play
                        size={22}
                        fill="white"
                        className="ml-1 text-white"
                      />

                    </div>

                  </div>
                </div>

                {/* Content */}

                <div className="p-4">

                  <h3
                    className="line-clamp-2 text-[1.3rem] font-light leading-tight text-[#21180f]"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {story.title}
                  </h3>

                  <p className="mt-2 text-[14px] text-[#8b7458]">
                    {story.location}
                  </p>

                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}