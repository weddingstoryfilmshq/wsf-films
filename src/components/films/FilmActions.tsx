"use client";

import {
  Heart,
  MessageCircle,
  Share2,
  Link2,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Card from "@/components/ui/Card";

export default function FilmActions() {
  return (
    <section className="py-4">
      <FadeUp>
        <Card className="overflow-hidden p-0">
          <div className="flex flex-col divide-y divide-[#eadfce] lg:flex-row lg:divide-x lg:divide-y-0">

            {/* Loved */}

            <button className="group flex flex-1 items-center justify-center gap-3 px-6 py-5 transition hover:bg-[#f6f1ea]">
              <Heart
                size={20}
                className="text-[#21180f] transition group-hover:scale-110"
              />

              <div className="text-left">
                <p className="text-[15px] font-medium text-[#21180f]">
                  Loved This Film
                </p>

                <p className="text-[13px] text-[#8b7458]">
                  2,847 Appreciations
                </p>
              </div>
            </button>

            {/* Wishes */}

            <button className="group flex flex-1 items-center justify-center gap-3 px-6 py-5 transition hover:bg-[#f6f1ea]">
              <MessageCircle
                size={20}
                className="text-[#21180f] transition group-hover:scale-110"
              />

              <div className="text-left">
                <p className="text-[15px] font-medium text-[#21180f]">
                  Leave Your Wishes
                </p>

                <p className="text-[13px] text-[#8b7458]">
                  126 Kind Wishes
                </p>
              </div>
            </button>

            {/* Share */}

            <button className="group flex flex-1 items-center justify-center gap-3 px-6 py-5 transition hover:bg-[#f6f1ea]">
              <Share2
                size={20}
                className="text-[#21180f] transition group-hover:scale-110"
              />

              <div className="text-left">
                <p className="text-[15px] font-medium text-[#21180f]">
                  Share
                </p>

                <p className="text-[13px] text-[#8b7458]">
                  Send this film
                </p>
              </div>
            </button>

            {/* Copy Link */}

            <button className="group flex flex-1 items-center justify-center gap-3 px-6 py-5 transition hover:bg-[#f6f1ea]">
              <Link2
                size={20}
                className="text-[#21180f] transition group-hover:scale-110"
              />

              <div className="text-left">
                <p className="text-[15px] font-medium text-[#21180f]">
                  Copy Link
                </p>

                <p className="text-[13px] text-[#8b7458]">
                  Share instantly
                </p>
              </div>
            </button>

          </div>
        </Card>
      </FadeUp>
    </section>
  );
}