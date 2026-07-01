"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon } from "lucide-react";

import Container from "@/components/ui/Container";
import LanguageSelector from "@/components/LanguageSelector";
import { navigation } from "@/data/navigation";
import StoryRing from "@/components/StoryRing";
import { storyImages } from "@/lib/storyImages";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-black/5 bg-white/75 shadow-[0_10px_40px_rgba(20,20,20,.05)] backdrop-blur-3xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-24 items-center justify-between">
          {/* Logo */}
          <StoryRing
            images={storyImages}
            size={54}
          />

          {/* Navigation */}
          <ul className="hidden flex-1 justify-center gap-10 xl:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative text-[13px] font-light uppercase tracking-[0.26em] transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:transition-all after:duration-300 ${
                      active
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    } ${
                      scrolled
                        ? active
                          ? "text-[#21180f] after:bg-[#21180f]"
                          : "text-[#5d4b38] hover:text-[#21180f] after:bg-[#21180f]"
                        : active
                        ? "text-white after:bg-white"
                        : "text-white/90 hover:text-white after:bg-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle Theme"
              className={`group flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                scrolled
                  ? "border-black/10 bg-white hover:shadow-md"
                  : "border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20"
              }`}
            >
              <Moon
                size={17}
                strokeWidth={1.7}
                className={`transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${
                  scrolled ? "text-[#21180f]" : "text-white"
                }`}
              />
            </button>

            <LanguageSelector scrolled={scrolled} />
          </div>
        </nav>
      </Container>
    </header>
  );
}