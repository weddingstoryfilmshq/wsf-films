import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      {/* Temporary Content */}
      <section className="min-h-screen bg-[#F8F5F0]" />

      <Footer />
    </main>
  );
}