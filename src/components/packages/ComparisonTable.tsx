"use client";

import { Check, Minus } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const rows = [
  {
    feature: "Coverage",
    classic: "Up to 6 Hours",
    signature: "Full Day",
    platinum: "Multi-Day",
  },
  {
    feature: "Photography",
    classic: true,
    signature: true,
    platinum: true,
  },
  {
    feature: "Videography",
    classic: true,
    signature: true,
    platinum: true,
  },
  {
    feature: "Drone Coverage",
    classic: false,
    signature: true,
    platinum: true,
  },
  {
    feature: "Second Shooter",
    classic: false,
    signature: true,
    platinum: true,
  },
  {
    feature: "Content Creator",
    classic: "Optional",
    signature: "Optional",
    platinum: true,
  },
  {
    feature: "Highlight Film",
    classic: true,
    signature: true,
    platinum: true,
  },
  {
    feature: "Feature Film",
    classic: false,
    signature: true,
    platinum: true,
  },
  {
    feature: "Destination Weddings",
    classic: false,
    signature: true,
    platinum: true,
  },
  {
    feature: "Starting Investment",
    classic: "€1,499+",
    signature: "€2,899+",
    platinum: "€4,899+",
  },
];

function Cell({
  value,
  featured = false,
}: {
  value: string | boolean;
  featured?: boolean;
}) {
  if (typeof value === "boolean") {
    return value ? (
      <Check
        size={18}
        className={`mx-auto ${
          featured ? "text-white" : "text-[#21180f]"
        }`}
      />
    ) : (
      <Minus
        size={18}
        className={`mx-auto ${
          featured ? "text-white/40" : "text-black/30"
        }`}
      />
    );
  }

  return (
    <span
      className={`text-sm ${
        featured ? "text-white" : "text-[#21180f]"
      }`}
    >
      {value}
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <section className="py-24 lg:py-28">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Compare Collections"
            title="Find The Right Collection"
            description="Compare our collections side by side and discover which experience best suits your celebration."
          />
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-16 overflow-x-auto rounded-[2.5rem] border border-[#dfd1bd] bg-white/60 backdrop-blur-xl lg:mt-20">
            <div className="min-w-[760px]">
              {/* Header */}
              <div className="grid grid-cols-4 border-b border-[#e8dccb]">
                <div className="p-6" />

                <div className="p-6 text-center text-sm font-semibold tracking-wide text-[#21180f]">
                  Classic
                </div>

                <div className="bg-[#21180f] p-6 text-center text-sm font-semibold tracking-wide text-white">
                  Signature
                </div>

                <div className="p-6 text-center text-sm font-semibold tracking-wide text-[#21180f]">
                  Platinum
                </div>
              </div>

              {/* Rows */}
              {rows.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 items-center ${
                    index !== rows.length - 1
                      ? "border-b border-[#eee2d3]"
                      : ""
                  }`}
                >
                  <div className="px-6 py-5 text-sm font-semibold text-[#21180f]">
                    {row.feature}
                  </div>

                  <div className="px-6 py-5 text-center">
                    <Cell value={row.classic} />
                  </div>

                  <div className="bg-[#21180f] px-6 py-5 text-center">
                    <Cell
                      value={row.signature}
                      featured
                    />
                  </div>

                  <div className="px-6 py-5 text-center">
                    <Cell value={row.platinum} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}