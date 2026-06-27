import Link from "next/link";

const destinations = [
  {
    name: "Portugal",
    href: "/destinations/portugal",
  },
  {
    name: "UAE",
    href: "/destinations/uae",
  },
  {
    name: "Asia",
    href: "/destinations/asia",
  },
];

export default function HeroDestinations() {
  return (
    <div className="absolute bottom-28 left-10 z-20 flex gap-3 md:left-16">
      {destinations.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="
            group
            flex
            h-11
            min-w-[125px]
            items-center
            justify-center
            rounded-lg
            border
            border-white/25
            bg-white/5
            px-6
            uppercase
            tracking-[0.22em]
            text-white
            backdrop-blur-md
            transition-all
            duration-500
            hover:border-white
            hover:bg-white/10
            hover:-translate-y-1
          "
        >
          <span className="text-[11px] font-light">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
}