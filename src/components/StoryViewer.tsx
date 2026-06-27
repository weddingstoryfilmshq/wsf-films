"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type StoryViewerProps = {
  open: boolean;
  images: string[];
  current: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function StoryViewer({
  open,
  images,
  current,
  onClose,
  onNext,
  onPrev,
}: StoryViewerProps) {
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

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, onNext, onPrev]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-8 top-8 z-20 text-white/70 transition hover:text-white"
      >
        <X size={32} />
      </button>

      {/* Previous */}
      <button
        onClick={onPrev}
        className="absolute left-10 top-1/2 -translate-y-1/2 text-white/60 transition hover:text-white"
      >
        <ChevronLeft size={46} />
      </button>

      {/* Portrait Story */}
      <div className="relative h-[88vh] aspect-[9/16] overflow-hidden rounded-3xl bg-black shadow-2xl">

        <Image
          src={images[current]}
          alt={`Story ${current + 1}`}
          fill
          priority
          className="object-cover"
        />

      </div>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-10 top-1/2 -translate-y-1/2 text-white/60 transition hover:text-white"
      >
        <ChevronRight size={46} />
      </button>

    </div>
  );
}