"use client";

import {
  CircleCheckBig,
  House,
  Play,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa6";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function ContactSuccess() {
  return (
    <section className="py-16 lg:py-18">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-3xl">
            <Card className="overflow-hidden p-6 text-center lg:p-7">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#21180f] text-white">
                <CircleCheckBig size={34} />
              </div>

              <p className="mt-6 text-[11px] uppercase tracking-[0.35em] text-[#8b7458]">
                Thank You
              </p>

              <h1
                className="mt-4 text-4xl font-light tracking-[-0.05em] text-[#21180f] md:text-5xl"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                Your Enquiry
                <br />
                Has Been Received
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6d5b48]">
                Thank you for getting in touch with Wedding Story Films.
                We'll personally review your enquiry and reply within
                approximately 24 hours.
              </p>

              <div className="mt-8 rounded-3xl border border-[#e7d9c5] bg-[#fcfaf6] p-6">
                <h3
                  className="text-2xl font-light text-[#21180f]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  What Happens Next?
                </h3>

                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  <div>
                    <h4 className="font-medium text-[#21180f]">
                      01
                    </h4>

                    <p className="mt-2 leading-7 text-[#6d5b48]">
                      We carefully review your enquiry.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-[#21180f]">
                      02
                    </h4>

                    <p className="mt-2 leading-7 text-[#6d5b48]">
                      We'll contact you personally.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-[#21180f]">
                      03
                    </h4>

                    <p className="mt-2 leading-7 text-[#6d5b48]">
                      You'll receive your personalised proposal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <PrimaryButton
                  href="/films"
                  showArrow
                >
                  Watch Our Films
                </PrimaryButton>

                <SecondaryButton href="https://www.instagram.com/weddingstoryfilmsportugal/">
                  <FaInstagram className="text-[18px]" />

                  <span>Instagram</span>
                </SecondaryButton>

                <SecondaryButton href="/">
                  <House size={18} />

                  <span>Back Home</span>
                </SecondaryButton>
              </div>

              <div className="mt-8 rounded-2xl border border-dashed border-[#d8c7ad] px-5 py-4">
                <div className="flex items-center justify-center gap-3">
                  <Play
                    size={17}
                    className="text-[#8b7458]"
                  />

                  <p className="text-sm leading-7 text-[#6d5b48]">
                    While you wait, explore our latest wedding films and
                    destination stories.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}