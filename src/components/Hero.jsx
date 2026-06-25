export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sand via-sand/60 to-transparent" />
      <div className="relative mx-auto flex min-h-[480px] max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center md:min-h-[560px]">
        <p className="text-xs font-medium tracking-widest text-coral-dark md:text-sm">
          Raw, Unprocessed Indian Hair Extensions &amp; Custom Units
        </p>

        <h1 className="mt-4 text-7xl font-light tracking-[0.25em] text-ink md:text-5xl">
          LETH<span className="text-coral">A</span>L UNITS
        </h1>

        <p className="mt-3 text-sm text-ink/70 md:text-base">
          Untouched Texture. Unmatched Edge.
        </p>
        <div className="mt-2 h-px w-12 bg-green-400/60" />

        {/* Restored opening anchor tag here */}
        <a
          href="#texture"
          className="mt-7 rounded-full bg-coral px-8 py-3 text-sm font-medium text-white shadow-md transition-transform hover:scale-105 hover:bg-coral-dark"
        >
          SHOP
        </a>
      </div>
    </section>
  );
}