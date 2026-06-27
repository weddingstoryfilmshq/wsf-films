import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaPinterestP,
  FaYoutube,
  FaVimeoV,
  FaRedditAlien,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full scale-125 object-cover blur-[8px] brightness-80"
      >
        <source src="/videos/footer.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-8 py-16">

        {/* Logo */}
        <Link href="/" className="mb-10">
          <Image
            src="/favicon.png"
            alt="WSF Films"
            width={58}
            height={58}
            priority
            className="transition-all duration-300 hover:opacity-80"
          />
        </Link>

        {/* Social Icons */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 text-[22px] text-white/60">

          <Link
            href="#"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaInstagram />
          </Link>

          <Link
            href="#"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="#"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaTiktok />
          </Link>

          <Link
            href="#"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaPinterestP />
          </Link>

          <Link
            href="#"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaYoutube />
          </Link>

          <Link
            href="#"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaVimeoV />
          </Link>

          <Link
            href="#"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaRedditAlien />
          </Link>

          <Link
            href="#"
            className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            <FaXTwitter />
          </Link>

          <Link
            href="https://www.casamentos.pt/"
            target="_blank"
            className="text-[11px] uppercase tracking-[0.25em] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:text-white"
          >
            Casamentos.pt
          </Link>

        </div>

        {/* Divider */}
        <div className="mb-8 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-center">

          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">
            © {new Date().getFullYear()} WSF Films
          </p>

          <span className="text-white/20">•</span>

          <Link
            href="/terms"
            className="text-[11px] uppercase tracking-[0.25em] text-white/40 transition hover:text-white"
          >
            Terms
          </Link>

          <span className="text-white/20">•</span>

          <Link
            href="/privacy-policy"
            className="text-[11px] uppercase tracking-[0.25em] text-white/40 transition hover:text-white"
          >
            Privacy Policy
          </Link>

          <span className="text-white/20">•</span>

          <Link
            href="/cookie-policy"
            className="text-[11px] uppercase tracking-[0.25em] text-white/40 transition hover:text-white"
          >
            Cookie Policy
          </Link>

        </div>

      </div>
    </footer>
  );
}