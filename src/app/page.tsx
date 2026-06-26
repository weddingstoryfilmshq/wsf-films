export default function Home() {
  return (
    <main>
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex h-full items-center px-8 md:px-20">
          <div>
            <p className="mb-5 uppercase tracking-[0.3em] text-sm text-white/80">
              Portugal · Europe · Worldwide
            </p>

            <h1
              className="text-6xl text-white md:text-8xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              WSF Films
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}