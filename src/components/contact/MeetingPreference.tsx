"use client";

import { useState } from "react";

import {
  Coffee,
  Building2,
  Phone,
  Video,
  MessageCircle,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const options = [
  {
    id: "video",
    title: "Video Consultation",
    icon: Video,
    description:
      "Meet online via Zoom or Google Meet from anywhere in the world.",
  },
  {
    id: "whatsapp",
    title: "WhatsApp Video",
    icon: MessageCircle,
    description:
      "Quick, simple and convenient using WhatsApp.",
  },
  {
    id: "phone",
    title: "Phone Call",
    icon: Phone,
    description:
      "Perfect if you prefer speaking over the phone.",
  },
  {
    id: "studio",
    title: "Visit Our Studio",
    icon: Building2,
    description:
      "Meet us in Cascais and discuss your wedding in person.",
  },
  {
    id: "coffee",
    title: "Coffee Together",
    icon: Coffee,
    description:
      "Let's meet somewhere convenient for you.",
  },
];

export default function MeetingPreference() {
  const [selected, setSelected] = useState("video");

  return (
    <section className="py-16 lg:py-18">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Consultation"
            title="How Would You Like To Meet?"
            description="Choose whichever meeting style feels most comfortable. We'll happily work around your schedule."
          />
        </FadeUp>

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {options.map((item) => {
            const Icon = item.icon;

            const active = selected === item.id;

            return (
              <FadeUp key={item.id}>
                <button
                  type="button"
                  onClick={() => setSelected(item.id)}
                  className="w-full text-left"
                >
                  <Card
                    className={`h-full p-6 transition-all duration-300 ${
                      active
                        ? "!border-[#21180f] shadow-[0_20px_50px_rgba(33,24,15,.10)]"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        active
                          ? "bg-[#21180f] text-white"
                          : "bg-[#f5efe7] text-[#21180f]"
                      }`}
                    >
                      <Icon size={24} />
                    </div>

                    <h3
                      className="mt-6 text-xl font-light text-[#21180f]"
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#6d5b48]">
                      {item.description}
                    </p>
                  </Card>
                </button>
              </FadeUp>
            );
          })}
        </div>

        {/* Dynamic Content */}

        <FadeUp delay={0.2}>
          <Card className="mt-8 p-6">
            {selected === "video" && (
              <>
                <h3
                  className="text-2xl font-light text-[#21180f]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Video Consultation
                </h3>

                <p className="mt-3 leading-7 text-[#6d5b48]">
                  We'll send you a private Google Meet or Zoom invitation
                  at your preferred time.
                </p>
              </>
            )}

            {selected === "whatsapp" && (
              <>
                <h3
                  className="text-2xl font-light text-[#21180f]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  WhatsApp Video
                </h3>

                <p className="mt-3 leading-7 text-[#6d5b48]">
                  A relaxed face-to-face conversation using WhatsApp.
                </p>
              </>
            )}

            {selected === "phone" && (
              <>
                <h3
                  className="text-2xl font-light text-[#21180f]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Phone Consultation
                </h3>

                <p className="mt-3 leading-7 text-[#6d5b48]">
                  We'll call you at your preferred time to discuss your
                  wedding plans.
                </p>
              </>
            )}

            {selected === "studio" && (
              <>
                <h3
                  className="text-2xl font-light text-[#21180f]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Visit Our Studio
                </h3>

                <p className="mt-3 leading-7 text-[#6d5b48]">
                  Our studio is located in Cascais, Portugal. The next
                  section will display our interactive map and directions.
                </p>
              </>
            )}

            {selected === "coffee" && (
              <>
                <h3
                  className="text-2xl font-light text-[#21180f]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Coffee Meeting
                </h3>

                <p className="mt-3 leading-7 text-[#6d5b48]">
                  Soon you'll be able to choose any café, hotel or venue
                  using Google Places Autocomplete, making it easy to meet
                  somewhere convenient for both of us.
                </p>

                <div className="mt-6 rounded-2xl border border-dashed border-[#d8c7ad] bg-[#fcfaf6] px-5 py-4">
                  <input
                    type="text"
                    placeholder="Search for a café, hotel or venue... (Coming Soon)"
                    disabled
                    className="w-full bg-transparent text-sm text-[#8b775f] outline-none"
                  />
                </div>
              </>
            )}
          </Card>
        </FadeUp>
      </Container>
    </section>
  );
}