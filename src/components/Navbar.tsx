import Link from "next/link";
import Image from "next/image";
import { Moon } from "lucide-react";
import Container from "@/components/ui/Container";
import LanguageSelector from "@/components/LanguageSelector";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/favicon.png"
              alt="WSF Films"
              width={48}
              height={48}
              priority
              className="h-12 w-auto transition-opacity duration-300 hover:opacity-80"
            />
          </Link>

          {/* Navigation */}
          <ul className="hidden flex-1 justify-center gap-10 lg:flex">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="relative text-[13px] font-light uppercase tracking-[0.24em] text-white transition-all duration-300 hover:text-white/70 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
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
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              <Moon
                size={16}
                strokeWidth={1.6}
                className="text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
            </button>

            {/* Language Selector */}
            <LanguageSelector />

          </div>

        </nav>
      </Container>
    </header>
  );
}