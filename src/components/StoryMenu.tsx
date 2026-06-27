"use client";

import Link from "next/link";
import { Play, House } from "lucide-react";

type StoryMenuProps = {
  open: boolean;
  onClose: () => void;
  onViewStories: () => void;
};

export default function StoryMenu({
  open,
  onClose,
  onViewStories,
}: StoryMenuProps) {
  return (
    <div
      className={`absolute left-1/2 top-[72px] -translate-x-1/2 transition-all duration-300 ${
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-4">

        {/* View Stories */}
        <button
          onClick={() => {
            onViewStories();
            onClose();
          }}
          className="group flex items-center gap-2"
        >
          <Play
            size={13}
            strokeWidth={1.8}
            className="text-white transition-transform duration-300 group-hover:translate-x-0.5"
            style={{
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,.65))",
            }}
          />

          <span
            className="text-[11px] font-light uppercase tracking-[0.28em] text-white transition-opacity duration-300 group-hover:opacity-70"
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,.65)",
            }}
          >
            View Stories
          </span>
        </button>

        {/* Home */}
        <Link
          href="/"
          onClick={onClose}
          className="group flex items-center gap-2"
        >
          <House
            size={13}
            strokeWidth={1.8}
            className="text-white transition-transform duration-300 group-hover:-translate-x-0.5"
            style={{
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,.65))",
            }}
          />

          <span
            className="text-[11px] font-light uppercase tracking-[0.28em] text-white transition-opacity duration-300 group-hover:opacity-70"
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,.65)",
            }}
          >
            Home
          </span>
        </Link>

      </div>
    </div>
  );
}