import Link from "next/link";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function LegalLayout({
  title,
  children,
}: Props) {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-8 py-40">

        <Link
          href="/"
          className="mb-12 inline-block text-[11px] uppercase tracking-[0.3em] text-neutral-500 transition hover:text-black"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-14 text-5xl font-light tracking-tight">
          {title}
        </h1>

        <div className="prose prose-neutral max-w-none leading-8">
          {children}
        </div>

      </section>
    </main>
  );
}