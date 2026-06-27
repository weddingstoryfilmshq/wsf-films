import { hero } from "@/data/hero";
import ScrollIndicator from "@/components/ScrollIndicator";
import HeroDestinations from "@/components/HeroDestinations";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 h-full w-full object-cover ${hero.videoScale}`}
      >
        <source src={hero.video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 ${hero.overlay}`} />

      {/* Hero Content */}
      <div className="absolute left-10 top-1/2 z-20 max-w-[520px] -translate-y-1/2 md:left-16">
        <p className="text-[14px] leading-7 font-light text-white/90">
          WSF creates cinematic wedding films and timeless photography
          for couples celebrating in Portugal, Europe, the UAE, Asia, and
          destination weddings worldwide. Every film is thoughtfully crafted
          with elegance, genuine emotion, and authentic storytelling.
        </p>
      </div>

      {/* Destination Buttons */}
      <HeroDestinations />

      {/* Scroll Indicator */}
      {hero.showScrollIndicator && <ScrollIndicator />}
    </section>
  );
}