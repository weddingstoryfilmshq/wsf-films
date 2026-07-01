"use client";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function AboutCTA() {
  return (
    <section className="pb-10 pt-4 lg:pb-12">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#8b7458]">
              Wedding Story Films
            </p>

            <h2
              className="mt-4 text-[2.6rem] font-light leading-[0.95] tracking-[-0.05em] text-[#21180f] md:text-[3.4rem] lg:text-[4.2rem]"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              We'd Be Honoured
              <br />
              To Tell Your Story.
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-6 text-[#6d5b48]">
              Every unforgettable wedding begins with a simple conversation.
              Tell us about your celebration and let's create something truly
              timeless together.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton
                href="/contact"
                showArrow
              >
                Begin Your Enquiry
              </PrimaryButton>

              <SecondaryButton href="/films">
                Watch Our Films
              </SecondaryButton>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}