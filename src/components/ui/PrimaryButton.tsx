"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
};

export default function PrimaryButton({
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  showArrow = false,
}: Props) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-1 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

  const defaultClasses =
    "bg-[#21180f] text-white shadow-[0_25px_70px_rgba(33,24,15,.16)] hover:bg-[#342417] hover:shadow-[0_35px_90px_rgba(33,24,15,.24)]";

  const classes = `${baseClasses} ${defaultClasses} ${className}`;

  const content = (
    <>
      {children}

      {showArrow && (
        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
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
      {content}
    </button>
  );
}