"use client";

import {
  Heart,
  Reply,
  BadgeCheck,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Card from "@/components/ui/Card";

const wishes = [
  {
    id: 1,
    name: "Sarah Johnson",
    provider: "Verified via Google",
    time: "2 hours ago",
    likes: 24,
    message:
      "Absolutely beautiful. Every moment felt so natural and emotional. Congratulations to the beautiful couple. ❤️",
  },
  {
    id: 2,
    name: "Ahmed Ali",
    provider: "Verified via Facebook",
    time: "5 hours ago",
    likes: 16,
    message:
      "One of the most cinematic wedding films I've ever watched. Wishing you both a lifetime of happiness.",
  },
  {
    id: 3,
    name: "Maria Silva",
    provider: "Verified via Google",
    time: "Yesterday",
    likes: 11,
    message:
      "Watching this from Portugal. Such a timeless story. Beautiful work by Wedding Story Films.",
  },
];

export default function KindWishes() {
  return (
    <section className="py-4">
      <FadeUp>
        <Card>
          {/* Heading */}

          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7458]">
                Guestbook
              </p>

              <h2
                className="mt-3 text-[2rem] font-light text-[#21180f]"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                Kind Wishes
              </h2>
            </div>

            <p className="text-[14px] text-[#8b7458]">
              {wishes.length} Wishes
            </p>
          </div>

          {/* Wishes */}

          <div className="mt-8 space-y-7">
            {wishes.map((wish) => (
              <div
                key={wish.id}
                className="border-b border-[#eadfce] pb-7 last:border-none last:pb-0"
              >
                {/* Header */}

                <div className="flex items-start gap-4">
                  {/* Avatar */}

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#b99772] to-[#8b7458] text-lg font-medium text-white">
                    {wish.name.charAt(0)}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-medium text-[#21180f]">
                        {wish.name}
                      </h3>

                      <span className="inline-flex items-center gap-1 rounded-full bg-[#f5ede3] px-2 py-1 text-[11px] text-[#8b7458]">
                        <BadgeCheck size={13} />
                        {wish.provider}
                      </span>
                    </div>

                    <p className="mt-1 text-[13px] text-[#9a866f]">
                      {wish.time}
                    </p>

                    {/* Message */}

                    <p className="mt-4 max-w-3xl leading-8 text-[#5f4d3b]">
                      {wish.message}
                    </p>

                    {/* Footer */}

                    <div className="mt-5 flex flex-wrap items-center gap-5">
                      <button className="inline-flex items-center gap-2 text-[14px] text-[#8b7458] transition hover:text-[#21180f]">
                        <Heart size={16} />

                        Love this wish

                        <span>({wish.likes})</span>
                      </button>

                      <button className="inline-flex items-center gap-2 text-[14px] text-[#8b7458] transition hover:text-[#21180f]">
                        <Reply size={16} />

                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}

          <div className="mt-8 text-center">
            <button className="rounded-full border border-[#d9c8b3] px-6 py-3 text-[15px] text-[#21180f] transition hover:bg-[#f6f1ea]">
              Load More Wishes
            </button>
          </div>
        </Card>
      </FadeUp>
    </section>
  );
}