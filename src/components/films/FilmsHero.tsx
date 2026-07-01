"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function FilmsHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative aspect-[21/9] min-h-[420px] max-h-[720px] w-full overflow-hidden">
        {/* Background Video */}

        <video
          ref={videoRef}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/videos/films-hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/60" />

        {/* Content */}

        <div className="absolute inset-0 flex items-center">
          <FadeUp>
            <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
              <div className="max-w-2xl border-l border-white/40 pl-8">
                <p className="text-[11px] uppercase tracking-[0.42em] text-white/70">
                  Wedding Story Films
                </p>

                <h1
                  className="mt-5 text-5xl font-light leading-[0.95] tracking-[-0.04em] text-white md:text-6xl xl:text-7xl"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Cinematic
                  <br />
                  Wedding Films
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-9 text-white/85">
                  Discover timeless wedding stories captured across Portugal
                  and destinations around the world.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <PrimaryButton
                    href="#featured-film"
                    showArrow
                  >
                    Watch Featured Film
                  </PrimaryButton>

                  <SecondaryButton href="/contact">
                    Book Your Date
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Mute */}

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition-all duration-300 hover:bg-black/45"
        >
          {muted ? (
            <VolumeX
              size={20}
              className="text-white"
            />
          ) : (
            <Volume2
              size={20}
              className="text-white"
            />
          )}
        </button>

        {/* Scroll */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="mx-auto h-12 w-px bg-white/30" />

          <p className="mt-3 text-center text-[10px] uppercase tracking-[0.35em] text-white/70">
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
}