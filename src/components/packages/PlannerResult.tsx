"use client";

import { Heart, Diamond, Gem, Check } from "lucide-react";
import type { PlannerData } from "./plannerTypes";

type Props = {
  data: PlannerData;
};

export default function PlannerResult({ data }: Props) {
  let title = "Classic Collection";
  let price = "From €1,499";
  let Icon = Heart;

  const guests = Number(data.guests || 0);

  if (
    guests >= 120 ||
    data.drone ||
    data.secondShooter ||
    data.coverage === "Full Day"
  ) {
    title = "Signature Collection";
    price = "From €2,899";
    Icon = Diamond;
  }

  if (
    guests >= 220 ||
    data.coverage === "Multi-Day" ||
    data.budget === "€6,000+"
  ) {
    title = "Platinum Collection";
    price = "From €4,899";
    Icon = Gem;
  }

  return (
    <div>
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#21180f] text-white">
        <Icon size={28} />
      </div>

      <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-[#8a7358]">
        Recommended Collection
      </p>

      <h2
        className="mt-4 text-5xl font-light tracking-[-0.05em] text-[#21180f]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6d5a45]">
        Based on your celebration, guest count and coverage requirements,
        this collection provides the best balance of storytelling,
        production quality and overall experience.
      </p>

      <div className="mt-10 rounded-[2rem] border border-[#ddceb8] bg-white/70 p-7">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#8a7358]">
          Estimated Investment
        </p>

        <p className="mt-3 text-4xl font-light text-[#21180f]">
          {price}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Drone Coverage",
            "Second Shooter",
            "Wedding Album",
            "Content Creator",
            "Extended Highlight Film",
            "Priority Delivery",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-[#e6d8c6] bg-[#fbf8f1] px-4 py-4"
            >
              <Check size={16} />

              <span className="text-sm text-[#6d5a45]">
                {item}
              </span>
            </div>
          ))}
        </div>

        <button className="mt-10 rounded-full bg-[#21180f] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#3a2a1b]">
          Request Your Personal Quote
        </button>
      </div>
    </div>
  );
}