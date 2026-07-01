import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={[
        "rounded-[2.5rem]",
        "border border-[#dfd1bd]",
        "bg-white",
        "p-8",
        "backdrop-blur-xl",
        "transition-all duration-500",
        "hover:-translate-y-2",
        "hover:border-[#c9af87]",
        "hover:shadow-[0_35px_100px_rgba(33,24,15,.12)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}