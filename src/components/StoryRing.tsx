"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import StoryMenu from "./StoryMenu";
import StoryViewer from "./StoryViewer";

type Props = {
  images: string[];
  size?: number;
};

const STORY_DURATION = 5000;

export default function StoryRing({ images, size = 52 }: Props) {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewerOpen) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setProgressKey((prev) => prev + 1);
    }, STORY_DURATION);

    return () => clearInterval(timer);
  }, [images.length, viewerOpen]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const nextStory = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setProgressKey((prev) => prev + 1);
  };

  const prevStory = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setProgressKey((prev) => prev + 1);
  };

  const ringSize = size + 8;
  const radius = ringSize / 2 - 2.5;
  const circumference = 2 * Math.PI * radius;

  return (
    <>
      <div ref={wrapperRef} className="relative">
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="group relative flex items-center justify-center"
          aria-label="Wedding Story Films Stories"
          style={{ width: ringSize, height: ringSize }}
        >
          {/* Story Progress Ring */}
          <svg
            className="absolute inset-0 -rotate-90"
            width={ringSize}
            height={ringSize}
            viewBox={`0 0 ${ringSize} ${ringSize}`}
          >
            <circle
              cx={ringSize / 2}
              cy={ringSize / 2}
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2"
            />

            <circle
              key={progressKey}
              cx={ringSize / 2}
              cy={ringSize / 2}
              r={radius}
              fill="none"
              stroke="url(#storyGradient)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              className="story-progress-ring"
              style={
                {
                  "--story-circumference": circumference,
                  "--story-duration": `${STORY_DURATION}ms`,
                } as React.CSSProperties
              }
            />

            <defs>
              <linearGradient
                id="storyGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#feda75" />
                <stop offset="35%" stopColor="#fa7e1e" />
                <stop offset="65%" stopColor="#d62976" />
                <stop offset="100%" stopColor="#962fbf" />
              </linearGradient>
            </defs>
          </svg>

          {/* Original Logo - untouched */}
          <div
            className="relative flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
            style={{
              width: size,
              height: size,
            }}
          >
            <Image
              src="/favicon.png"
              alt="Wedding Story Films"
              width={size}
              height={size}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </button>

        <StoryMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          onViewStories={() => {
            setMenuOpen(false);
            setViewerOpen(true);
          }}
        />
      </div>

      <StoryViewer
        open={viewerOpen}
        images={images}
        current={current}
        onClose={() => setViewerOpen(false)}
        onNext={nextStory}
        onPrev={prevStory}
      />
    </>
  );
}