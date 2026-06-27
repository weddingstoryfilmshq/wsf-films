"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  Volume2,
  VolumeX,
} from "lucide-react";

import StoryProgress from "./StoryProgress";

type StoryViewerProps = {
  open: boolean;
  images: string[];
  current: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const STORY_DURATION = 5000;

export default function StoryViewer({
  open,
  images,
  current,
  onClose,
  onNext,
  onPrev,
}: StoryViewerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [muted, setMuted] = useState(false);

  /* ---------------------------------- */
  /* Keyboard Navigation                */
  /* ---------------------------------- */

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!open) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          onNext();
          break;

        case "ArrowLeft":
          onPrev();
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [open, onClose, onNext, onPrev]);

  /* ---------------------------------- */
  /* Auto Next Story                    */
  /* ---------------------------------- */

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      onNext();
    }, STORY_DURATION);

    return () => clearTimeout(timer);
  }, [open, current, onNext]);

  /* ---------------------------------- */
  /* Load Mute Preference               */
  /* ---------------------------------- */

  useEffect(() => {
    const saved = localStorage.getItem("storyMuted");

    if (saved === "true") {
      setMuted(true);
    }
  }, []);

  /* ---------------------------------- */
  /* Music                              */
  /* ---------------------------------- */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.muted = muted;

    if (open) {
      audio.volume = 0;

      (async () => {
        try {
          await audio.play();
        } catch (err) {
          console.error(err);
        }
      })();

      let volume = 0;

      const fadeIn = setInterval(() => {
        volume += 0.05;

        audio.volume = Math.min(volume, 1);

        if (volume >= 1) {
          clearInterval(fadeIn);
        }
      }, 30);

      return () => clearInterval(fadeIn);
    }

    const fadeOut = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= 0.05;
      } else {
        audio.pause();
        audio.currentTime = 0;
        clearInterval(fadeOut);
      }
    }, 30);

    return () => clearInterval(fadeOut);
  }, [open, muted]);

  function toggleMute() {
    const next = !muted;

    setMuted(next);

    localStorage.setItem(
      "storyMuted",
      String(next)
    );
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl">

      <audio
        ref={audioRef}
        src="/audio/story.mp3"
        preload="auto"
      />
            {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-8 top-8 z-50 text-white/70 transition hover:text-white"
      >
        <X size={32} />
      </button>

      {/* Volume */}
      <button
        onClick={toggleMute}
        className="absolute left-8 top-8 z-50 text-white/70 transition hover:text-white"
      >
        {muted ? (
          <VolumeX size={28} />
        ) : (
          <Volume2 size={28} />
        )}
      </button>

      {/* Story */}
      <div className="relative h-[88vh] aspect-[9/16] overflow-hidden rounded-3xl bg-black shadow-2xl">

        {/* Left Tap Area */}
        <button
          type="button"
          aria-label="Previous Story"
          onClick={onPrev}
          className="absolute inset-y-0 left-0 z-10 w-1/2 bg-transparent"
        />

        {/* Right Tap Area */}
        <button
          type="button"
          aria-label="Next Story"
          onClick={onNext}
          className="absolute inset-y-0 right-0 z-10 w-1/2 bg-transparent"
        />

        {/* Instagram Progress */}
        <StoryProgress
          total={images.length}
          current={current}
          duration={STORY_DURATION}
        />
                {/* Story Image */}
        <Image
          key={current}
          src={images[current]}
          alt={`Story ${current + 1}`}
          fill
          priority
          draggable={false}
          className="select-none object-cover"
        />

        {/* Top Overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-black/45 to-transparent" />

        {/* Bottom Overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-black/35 to-transparent" />

      </div>
          </div>
  );
}