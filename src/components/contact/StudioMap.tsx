"use client";

import {
  MapPin,
  Navigation,
  Clock3,
  Building2,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function StudioMap() {
  return (
    <section className="py-16 lg:py-18">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Visit Our Studio"
            title="You're Always Welcome"
            description="Whether you'd like to discuss your wedding over coffee or visit our studio, we'd love to meet you in person."
          />
        </FadeUp>

        <div className="mt-10 grid gap-6 lg:grid-cols-[360px_1fr]">

          {/* Left */}

          <FadeUp>
            <Card className="h-full p-6">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#21180f] text-white">
                <Building2 size={26} />
              </div>

              <h3
                className="mt-6 text-2xl font-light text-[#21180f]"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                Wedding Story Films
              </h3>

              <div className="mt-6 space-y-5">

                <div className="flex gap-3">

                  <MapPin
                    size={20}
                    className="mt-1 text-[#21180f]"
                  />

                  <div>

                    <h4 className="font-medium text-[#21180f]">
                      Studio Address
                    </h4>

                    <p className="mt-2 leading-7 text-[#6d5b48]">
                      Rua Alexandre Prista
                      <br />
                      Qta das Rodas Anexo D
                      <br />
                      2750-013
                      <br />
                      Cascais
                      <br />
                      Portugal
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <Clock3
                    size={20}
                    className="mt-1 text-[#21180f]"
                  />

                  <div>

                    <h4 className="font-medium text-[#21180f]">
                      Meetings
                    </h4>

                    <p className="mt-2 leading-7 text-[#6d5b48]">
                      By appointment only.
                      <br />
                      Monday – Sunday.
                    </p>

                  </div>

                </div>

              </div>

              <PrimaryButton
                href="https://maps.google.com/?q=38.72943,-9.450785"
                className="mt-8 w-full"
                showArrow
              >
                Open In Google Maps
              </PrimaryButton>

            </Card>
          </FadeUp>

          {/* Right */}

          <FadeUp delay={0.15}>

            <Card className="overflow-hidden p-0">

              <iframe
                title="Wedding Story Films Studio"
                src="https://www.google.com/maps?q=38.72943,-9.450785&z=15&output=embed"
                loading="lazy"
                className="h-[460px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </Card>

          </FadeUp>

        </div>

        {/* Bottom Card */}

        <FadeUp delay={0.25}>
          <Card className="mt-8 p-6">

            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

              <div>

                <h3
                  className="text-2xl font-light text-[#21180f]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Prefer To Meet Somewhere Else?
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-[#6d5b48]">
                  No problem. We regularly meet couples in hotels,
                  cafés and wedding venues throughout Lisbon,
                  Cascais and Sintra.
                </p>

              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#21180f] text-white">

                <Navigation size={28} />

              </div>

            </div>

          </Card>
        </FadeUp>

      </Container>
    </section>
  );
}