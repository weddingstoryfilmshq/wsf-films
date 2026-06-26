import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      {/* Temporary section */}
      <section className="h-screen bg-[#F8F5F0]" />
    </main>
  );
}