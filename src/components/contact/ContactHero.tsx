"use client";

import { Sparkles } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden pt-28 pb-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.92),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(180,140,90,.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,.45),rgba(244,239,230,1))]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(50,35,20,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(50,35,20,.18)_1px,transparent_1px)] [background-size:72px_72px]" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8c7ad] bg-white/60 px-4 py-2 backdrop-blur-xl">
              <Sparkles
                size={13}
                className="text-[#8b6a46]"
              />

              <span className="text-[10px] uppercase tracking-[0.32em] text-[#7b6245]">
                Wedding Story Films
              </span>
            </div>

            <h1
              className="mt-6 text-5xl font-light leading-[0.94] tracking-[-0.06em] text-[#21180f] md:text-6xl lg:text-7xl"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Let's Begin
              <br />
              Your Story
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6d5b48]">
              We'd love to hear about your wedding, your vision and everything
              that makes your celebration unique. Share a few details and we'll
              create a personalised experience designed around your story.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton
                href="#contact-form"
                showArrow
              >
                Begin Your Enquiry
              </PrimaryButton>

              <SecondaryButton href="https://api.whatsapp.com/message/W2GEPK5TIT35B1?autoload=1&app_absent=0">
                WhatsApp Us
              </SecondaryButton>
            </div>

            <p className="mt-6 text-sm text-[#8b775f]">
              Typically responding within{" "}
              <span className="font-medium text-[#21180f]">
                24 hours.
              </span>
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}