"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

const VIDEO_ID = "final-statement";

export default function FinalStatement() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const handleVideoChange = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      if (customEvent.detail !== VIDEO_ID) {
        setIsMuted(true);
      }
    };

    window.addEventListener(
      "wsf-active-video",
      handleVideoChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "wsf-active-video",
        handleVideoChange as EventListener
      );
    };
  }, []);

  const toggleMute = () => {
    const nextMuted = !isMuted;

    setIsMuted(nextMuted);

    if (!nextMuted) {
      window.dispatchEvent(
        new CustomEvent("wsf-active-video", {
          detail: VIDEO_ID,
        })
      );
    }
  };

  return (
    <section className="py-8 lg:py-10">
      <div className="relative overflow-hidden">
        <div className="relative min-h-[500px] overflow-hidden lg:min-h-[520px]">
          {/* Background Video */}

          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/final-statement.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}

          <Container className="relative z-10 flex min-h-[500px] items-center py-10 lg:min-h-[520px]">
            <FadeUp>
              <div className="max-w-4xl text-white">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/65">
                  Our Promise
                </p>

                <h2
                  className="mt-4 text-[2.9rem] font-light leading-[0.94] tracking-[-0.04em] md:text-[3.8rem] xl:text-[5rem]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Some Moments
                  <br />
                  Can Never Be
                  <br />
                  Recreated.
                </h2>

                <p className="mt-5 max-w-2xl text-[16px] leading-7 text-white/75">
                  Long after the flowers have faded, the music has ended and
                  your guests have gone home, your photographs and films become
                  the way you remember one of life's most meaningful days.
                </p>

                <p className="mt-4 max-w-2xl text-[16px] leading-7 text-white/75">
                  That's why every frame we create is crafted with intention,
                  emotion and timeless elegance — so your story can be felt for
                  generations to come.
                </p>

                <div className="mt-6">
                  <PrimaryButton
                    href="/contact"
                    showArrow
                    className="bg-white !text-[#21180f] hover:bg-[#f5efe7]"
                  >
                    Begin Your Story
                  </PrimaryButton>
                </div>
              </div>
            </FadeUp>
          </Container>

          {/* Mute / Unmute */}

          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/55"
          >
            {isMuted ? (
              <VolumeX size={18} />
            ) : (
              <Volume2 size={18} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}