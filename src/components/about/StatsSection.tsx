"use client";

import { useEffect, useState } from "react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const stats = [
  {
    value: 150,
    suffix: "+",
    title: "Weddings Captured",
  },
  {
    value: 15,
    suffix: "+",
    title: "Years Of Experience",
  },
  {
    value: 10,
    suffix: "+",
    title: "Countries Filmed",
  },
  {
    value: 100,
    suffix: "%",
    title: "Passion In Every Story",
  },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1400;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function StatsSection() {
  return (
    <section className="py-8 lg:py-10">
      <Container>
        <FadeUp>
          <SectionHeader
            label="By The Numbers"
            title="Experience You Can Trust"
            description="Years of experience, countless memories and a passion for creating timeless wedding stories."
          />
        </FadeUp>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <FadeUp
              key={item.title}
              delay={index * 0.08}
            >
              <Card className="py-6 text-center">
                <h2
                  className="text-[3.2rem] font-light leading-none tracking-[-0.05em] text-[#21180f] lg:text-[4rem]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  <Counter
                    value={item.value}
                    suffix={item.suffix}
                  />
                </h2>

                <div className="mx-auto mt-3 h-px w-12 bg-[#d9c7ad]" />

                <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-[#8b7458]">
                  {item.title}
                </p>
              </Card>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.35}>
          <Card className="mt-5 py-6 text-center">
            <p
              className="text-[1.7rem] font-light leading-snug text-[#21180f] lg:text-[2.1rem]"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Every number represents a real couple,
              <br />
              a real celebration and a story that deserves
              <br />
              to be remembered forever.
            </p>
          </Card>
        </FadeUp>
      </Container>
    </section>
  );
}