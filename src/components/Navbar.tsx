"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Moon,
  Menu,
  X,
} from "lucide-react";

import Container from "@/components/ui/Container";
import LanguageSelector from "@/components/LanguageSelector";
import { navigation } from "@/data/navigation";
import StoryRing from "@/components/StoryRing";
import { storyImages } from "@/lib/storyImages";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setMenuOpen(false);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
              {/* Mobile Hamburger */}

              <button
                type="button"
                aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                onClick={() => setMenuOpen((prev) => !prev)}
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 xl:hidden ${
                  scrolled
                    ? "border-black/10 bg-white hover:shadow-md"
                    : "border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20"
                }`}
              >
                {menuOpen ? (
                  <X
                    size={19}
                    strokeWidth={1.8}
                    className={scrolled ? "text-[#21180f]" : "text-white"}
                  />
                ) : (
                  <Menu
                    size={20}
                    strokeWidth={1.8}
                    className={scrolled ? "text-[#21180f]" : "text-white"}
                  />
                )}
              </button>
                            {/* Theme */}

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

      {/* Click Outside */}

      {menuOpen && (
        <button
          type="button"
          aria-label="Close Menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[60] xl:hidden cursor-default"
        />
      )}

      {/* Mobile Dropdown */}

      <div
        className={`fixed right-5 top-[88px] z-[70] origin-top-right transition-all duration-300 xl:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="w-64 overflow-hidden rounded-2xl border border-[#3b2d22] bg-[#1a130f]/95 shadow-[0_24px_70px_rgba(0,0,0,.45)] backdrop-blur-3xl">

          <div className="flex items-center justify-between border-b border-[#3b2d22] px-4 py-3">
            <p className="text-[10px] uppercase tracking-[0.30em] text-[#b99772]">
              Menu
            </p>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-2">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`mb-1 block rounded-xl px-4 py-3 text-[15px] transition ${
                    active
                      ? "bg-[#2d2219] text-white"
                      : "text-white/75 hover:bg-[#241b14] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
                      </div>

          <div className="border-t border-[#3b2d22] p-2">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl bg-[#2d2219] px-4 py-3 text-center text-sm font-medium text-white transition duration-300 hover:bg-[#3b2b20]"
            >
              Begin Your Story →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}