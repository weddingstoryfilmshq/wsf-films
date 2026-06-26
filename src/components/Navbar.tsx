import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <Container>
        <nav className="flex h-[70px] items-center">

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

          {/* Menu */}
          <ul className="flex flex-1 justify-center gap-10 text-[13px] font-light uppercase tracking-[0.25em] text-white">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition-opacity duration-300 hover:opacity-60"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Spacer */}
          <div className="w-12" />
        </nav>
      </Container>
    </header>
  );
}