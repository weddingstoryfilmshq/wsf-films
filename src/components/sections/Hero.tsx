import { hero } from "@/data/hero";
import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={hero.video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 ${hero.overlay}`} />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-20">
        <div>
          <FadeIn delay={0.6}>
            <h1
              className="max-w-4xl text-6xl leading-[0.9] text-white md:text-8xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {hero.title}
            </h1>
          </FadeIn>

          <FadeIn delay={1}>
            <p className="mt-5 text-sm uppercase tracking-[0.3em] text-white/80">
              {hero.subtitle}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}