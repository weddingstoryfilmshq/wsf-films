"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const languages = [
  { code: "EN", name: "English", locale: "en" },
  { code: "PT", name: "Português", locale: "pt" },
  { code: "ES", name: "Español", locale: "es" },
  { code: "FR", name: "Français", locale: "fr" },
  { code: "DE", name: "Deutsch", locale: "de" },
  { code: "IT", name: "Italiano", locale: "it" },
];

type Props = {
  scrolled?: boolean;
};

export default function LanguageSelector({
  scrolled = false,
}: Props) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Later this will come from next-intl
  const currentLanguage = languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`group flex items-center gap-2 rounded-lg border px-4 py-2 text-[12px] font-light uppercase tracking-[0.22em] transition-all duration-300 ${
          scrolled
            ? "border-black/10 bg-black/5 text-black hover:bg-black/10"
            : "border-white/20 bg-white/5 text-white backdrop-blur-xl hover:border-white/60 hover:bg-white/10"
        }`}
      >
        {currentLanguage.code}

        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-black/75 backdrop-blur-2xl transition-all duration-300 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {languages.map((language) => (
          <button
            key={language.locale}
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-between px-6 py-3 text-left transition-all duration-200 hover:bg-white/10"
          >
            <span className="text-[13px] font-light text-white">
              {language.name}
            </span>

            {language.locale === currentLanguage.locale && (
              <Check
                size={15}
                className="text-white/70"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}