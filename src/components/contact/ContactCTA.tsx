"use client";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function ContactCTA() {
  return (
    <section className="pb-20 pt-6">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#21180f] px-6 py-14 text-center text-white md:px-12">

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.10),transparent_45%)]" />

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

            <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#d9b97d]/10 blur-3xl" />

            <div className="relative">

              <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                Wedding Story Films
              </p>

              <h2
                className="mt-4 text-4xl font-light tracking-[-0.05em] md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                Your Story
                <br />
                Starts Here
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
                Every unforgettable wedding begins with a simple conversation.
                We'd be honoured to hear your story, understand your vision and
                create something truly timeless together.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <PrimaryButton
                  href="#contact-form"
                  showArrow
                  className="bg-white !text-[#21180f] hover:bg-[#f5efe7]"
                >
                  Begin Your Enquiry
                </PrimaryButton>

                <SecondaryButton href="https://api.whatsapp.com/message/W2GEPK5TIT35B1?autoload=1&app_absent=0">
                  WhatsApp Us
                </SecondaryButton>

              </div>

              <p className="mt-6 text-sm text-white/50">
                Typically replying within 24 hours.
              </p>

            </div>

          </div>
        </FadeUp>
      </Container>
    </section>
  );
}