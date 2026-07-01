"use client";

import type { ElementType, ReactNode } from "react";
import { Check, Sparkles } from "lucide-react";

export function PlannerPanel({
  eyebrow,
  title,
  text,
  icon: Icon = Sparkles,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  icon?: ElementType;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#ddceb8] bg-white/65 text-[#21180f]">
        <Icon size={22} />
      </div>

      <p className="mt-8 text-[11px] uppercase tracking-[0.30em] text-[#8a7358]">
        {eyebrow}
      </p>

      <h2
        className="mt-4 text-4xl font-light tracking-[-0.045em] text-[#21180f] sm:text-5xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-[#6d5a45]">
        {text}
      </p>

      <div className="mt-8">{children}</div>
    </div>
  );
}

export function PlannerInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[11px] uppercase tracking-[0.25em] text-[#8a7358]">
        {label}
      </span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="h-16 w-full rounded-3xl border border-[#dccbb3] bg-white/70 px-5 text-base text-[#21180f] outline-none transition placeholder:text-[#b09d87] focus:border-[#21180f] focus:bg-white"
      />
    </label>
  );
}

export function OptionGrid({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {options.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onSelect(item)}
          className={`rounded-3xl border px-5 py-5 text-left text-sm transition ${
            selected === item
              ? "border-[#21180f] bg-[#21180f] text-white"
              : "border-[#dccbb3] bg-white/60 text-[#6d5a45] hover:bg-white"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function ToggleCard({
  title,
  checked,
  onClick,
}: {
  title: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between rounded-3xl border px-5 py-5 text-left transition ${
        checked
          ? "border-[#21180f] bg-[#21180f] text-white"
          : "border-[#dccbb3] bg-white/60 text-[#6d5a45] hover:bg-white"
      }`}
    >
      <span className="text-sm font-medium">{title}</span>

      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full border ${
          checked
            ? "border-white/20 bg-white text-[#21180f]"
            : "border-[#d6c4ab]"
        }`}
      >
        {checked && <Check size={15} />}
      </span>
    </button>
  );
}