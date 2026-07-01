type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-[11px] uppercase tracking-[0.35em] text-[#8b7458]">
        {label}
      </p>

      <h2
        className="mt-5 text-5xl font-light tracking-[-0.05em] text-[#21180f] md:text-6xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-9 text-[#6d5b48] ${
            centered ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}