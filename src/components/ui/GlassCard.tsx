import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`rounded-[2.5rem] border border-white/70 bg-white/45 p-8 shadow-[0_35px_90px_rgba(33,24,15,.10)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}