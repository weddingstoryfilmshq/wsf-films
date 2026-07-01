"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

export default function SecondaryButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: Props) {
  const classes = `inline-flex items-center justify-center rounded-full border border-[#d9c7ad] bg-white/55 px-8 py-4 text-sm font-medium text-[#21180f] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white disabled:pointer-events-none disabled:opacity-50 ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}