"use client";

import { Sparkles } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

type CollectionsHeroProps = {
  onStart?: () => void;
};

export default function CollectionsHero({
  onStart,
}: CollectionsHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-24 lg:pt-36 lg:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.92),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(180,140,90,.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,.45),rgba(244,239,230,1))]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(50,35,20,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(50,35,20,.18)_1px,transparent_1px)] [background-size:72px_72px]" />

      <Container className="relative">
        <div className="grid gap-16 xl:gap-20 lg:grid-cols-[1.15fr_430px] lg:items-center">
          {/* LEFT */}
          <FadeUp>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c7ad] bg-white/50 px-4 py-2 backdrop-blur-xl">
                <Sparkles
                  size={14}
                  className="text-[#8b6a46]"
                />

                <span className="text-[11px] uppercase tracking-[0.32em] text-[#7b6245]">
                  Wedding Story Films
                </span>
              </div>

              <h1
                className="mt-7 max-w-5xl text-5xl font-light leading-[0.92] tracking-[-0.055em] text-[#21180f] sm:text-6xl md:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Collections
              </h1>

              <p className="mt-7 max-w-2xl text-[17px] leading-8 text-[#6d5b48] md:text-lg md:leading-9">
                Every celebration deserves a timeless story. Explore our
                signature wedding collections, compare coverage options and
                discover the perfect collection crafted around your wedding.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <PrimaryButton
                  onClick={onStart}
                  showArrow
                >
                  Find My Collection
                </PrimaryButton>

                <SecondaryButton href="#collections">
                  View Collections
                </SecondaryButton>
              </div>
            </div>
          </FadeUp>

          {/* RIGHT */}
          <FadeUp delay={0.2}>
            <GlassCard className="p-5 lg:p-6">
              <div className="rounded-[1.8rem] border border-[#dfd1bd] bg-[#fbf8f1]/80 p-7 lg:p-8">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[#8a7358]">
                  COLLECTION EXPERIENCE
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Classic Collection",
                    "Signature Collection",
                    "Platinum Collection",
                    "Collection Comparison",
                    "Personal Recommendation",
                    "Tailored Quote",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-[#e6d8c6] bg-white/70 px-5 py-4 transition-all duration-300 hover:border-[#d4c1a5] hover:bg-white"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-[#21180f]" />

                      <span className="text-sm text-[#5f4d3d]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-3xl bg-[#21180f] p-6 text-white">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/60">
                    EXPERIENCE
                  </p>

                  <h3
                    className="mt-3 text-3xl font-light"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Crafted Around You
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    Every collection is thoughtfully designed to adapt to your
                    wedding, your vision and your story — never the other way
                    around.
                  </p>
                </div>
              </div>
            </GlassCard>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}