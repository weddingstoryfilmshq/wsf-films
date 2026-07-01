"use client";

import { useMemo, useState } from "react";
import { CalendarDays, CircleCheckBig } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function AvailabilityChecker() {
  const [date, setDate] = useState("");

  const status = useMemo(() => {
    if (!date) return null;

    // Temporary demo logic
    const day = new Date(date).getDate();

    if (day % 5 === 0) {
      return {
        color: "bg-red-500",
        title: "Already Reserved",
        text: "Unfortunately this date has already been reserved. Please contact us and we'll discuss nearby availability.",
      };
    }

    if (day % 2 === 0) {
      return {
        color: "bg-amber-500",
        title: "Limited Availability",
        text: "We still have limited availability for this date. We recommend getting in touch soon.",
      };
    }

    return {
      color: "bg-emerald-500",
      title: "Great News!",
      text: "We're currently available for your wedding date.",
    };
  }, [date]);

  return (
    <section className="py-16 lg:py-18">
      <Container>
        <FadeUp>
          <SectionHeader
            label="Wedding Date"
            title="Check Our Availability"
            description="Before completing your enquiry, check whether your wedding date is currently available."
          />
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mx-auto mt-10 max-w-2xl">
            <Card className="p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#21180f] text-white">
                <CalendarDays size={30} />
              </div>

              <h3
                className="mt-6 text-2xl font-light text-[#21180f]"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                Select Your Wedding Date
              </h3>

              <p className="mt-3 leading-7 text-[#6d5b48]">
                We'll instantly provide an availability indication.
              </p>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-8 w-full rounded-2xl border border-[#dfd1bd] bg-white px-5 py-3 text-center text-base text-[#21180f] outline-none transition focus:border-[#21180f]"
              />

              {status && (
                <div className="mt-8 rounded-3xl border border-[#e7d9c5] bg-[#fcfaf6] p-6 text-left">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-3.5 w-3.5 rounded-full ${status.color}`}
                    />

                    <h4 className="text-lg font-medium text-[#21180f]">
                      {status.title}
                    </h4>
                  </div>

                  <p className="mt-4 leading-7 text-[#6d5b48]">
                    {status.text}
                  </p>

                  <PrimaryButton
                    href="#contact-form"
                    showArrow
                    className="mt-6"
                  >
                    Continue Your Enquiry
                  </PrimaryButton>
                </div>
              )}

              {!status && (
                <div className="mt-8 rounded-3xl border border-dashed border-[#dbc9b1] bg-[#fcfaf6] p-6">
                  <CircleCheckBig
                    size={32}
                    className="mx-auto text-[#b79b71]"
                  />

                  <p className="mt-4 leading-7 text-[#6d5b48]">
                    Choose your wedding date above to check our
                    availability.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}