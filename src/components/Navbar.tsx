"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon } from "lucide-react";

import Container from "@/components/ui/Container";
import LanguageSelector from "@/components/LanguageSelector";
import { navigation } from "@/data/navigation";
import StoryRing from "@/components/StoryRing";
import { storyImages } from "@/lib/storyImages";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-black/10 bg-white/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-24 items-center justify-between">

          {/* Story Logo */}
<StoryRing
  images={storyImages}
  size={52}
  />

          {/* Navigation */}
          <ul className="hidden flex-1 justify-center gap-10 lg:flex">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`relative text-[13px] font-light uppercase tracking-[0.24em] transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled
                      ? "text-black hover:text-black/70 after:bg-black"
                      : "text-white hover:text-white/70 after:bg-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-4">

            {/* Theme Switch */}
            <button
              aria-label="Toggle Theme"
              className={`group flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                scrolled
                  ? "border-black/10 bg-black/5 hover:bg-black/10"
                  : "border-white/20 bg-white/5 backdrop-blur-xl hover:border-white/60 hover:bg-white/10"
              }`}
            >
              <Moon
                size={16}
                strokeWidth={1.6}
                className={`transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              />
            </button>

            {/* Language Selector */}
            <LanguageSelector scrolled={scrolled} />

          </div>
        </nav>
      </Container>
    </header>
  );
}