"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const languages = [
  { code: "EN", name: "English", locale: "en" },
  { code: "PT", name: "Português", locale: "pt" },
  { code: "ES", name: "Español", locale: "es" },
  { code: "FR", name: "Français", locale: "fr" },
  { code: "DE", name: "Deutsch", locale: "de" },
  { code: "IT", name: "Italiano", locale: "it" },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);

  // Later this will come from next-intl
  const currentLanguage = languages[0];

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-[12px] font-light uppercase tracking-[0.22em] text-white backdrop-blur-xl transition-all duration-300 hover:border-white/60 hover:bg-white/10"
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
        className={`absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl transition-all duration-300 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {languages.map((language) => (
          <button
            key={language.locale}
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