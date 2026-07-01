"use client";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function QuoteSection() {
  return (
    <section className="pt-12 pb-28 lg:pb-32">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-[3rem] bg-[#21180f] px-8 py-20 text-center text-white md:px-16 lg:px-20">
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.10),transparent_45%)]" />

            <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:70px_70px]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/60">
                Wedding Story Films
              </p>

              <h2
                className="mt-6 text-5xl font-light tracking-[-0.05em] md:text-6xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready To Tell Your Story?
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/70">
                We'd love to learn more about your celebration and create a
                collection tailored exclusively to your wedding.
              </p>

              <PrimaryButton
                showArrow
                className="mt-12 bg-white !text-[#21180f] hover:bg-[#f6f1e8]"
              >
                Request Your Personal Quote
              </PrimaryButton>

              <p className="mt-6 text-sm text-white/45">
                Typically responding within 24 hours.
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}