"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center px-10 py-6">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src="/favicon.png"
            alt="WSF Films"
            className="h-12 w-auto transition-opacity duration-300 hover:opacity-80"
          />
        </a>

        {/* Menu */}
        <ul className="flex flex-1 justify-center gap-10 text-[13px] font-light uppercase tracking-[0.25em] text-white">
          <li><a href="/">Home</a></li>
          <li><a href="#">Films</a></li>
          <li><a href="#">Photography</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Journal</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Spacer */}
        <div className="w-12" />
      </nav>
    </header>
  );
}