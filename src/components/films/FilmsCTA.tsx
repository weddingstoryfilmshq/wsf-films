"use client";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function FilmsCTA() {
  return (
    <section className="pb-20 pt-10 lg:pb-24">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[10px] uppercase tracking-[0.30em] text-[#8b7458]">
              Wedding Story Films
            </p>

            <h2
              className="mt-5 text-[2.8rem] font-light leading-[0.95] tracking-[-0.04em] text-[#21180f] md:text-[4rem] lg:text-[5rem]"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Ready To Tell
              <br />
              Your Story?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-8 text-[#6d5b48]">
              Every unforgettable wedding begins with a conversation.
              We'd love to hear about your celebration and create a timeless
              film that you'll treasure for generations.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton
                href="/contact"
                showArrow
              >
                Begin Your Enquiry
              </PrimaryButton>

              <SecondaryButton href="/about">
                Meet The Storytellers
              </SecondaryButton>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}