const defaultCollections = [
  { name: 'Foundation', img: '/images/collection-foundation.jpg' },
  { name: 'Blend', img: '/images/collection-blend.jpg' },
  { name: 'Effortless', img: '/images/collection-effortless.jpg' },
  { name: 'Illusion', img: '/images/collection-illusion.jpg' },
];

export default function ShopByCollection({ items = defaultCollections }) {
  return (
    <section className="bg-cream px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">Shop By Collection</h2>
        <p className="mt-2 text-sm text-ink/60">
          Foundation, Blend, Effortless, Illusion — four ways to wear it
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {items.map((c) => (
            <a key={c.name} href="#" className="group block text-left">
              <div className="aspect-square overflow-hidden rounded-lg bg-coral/20 transition-transform duration-300 group-hover:scale-[1.03]">
                {c.img ? (
                  <img
                    src={c.img}
                    alt={c.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-coral/60" />
                )}
              </div>
              <h3 className="mt-3 text-sm font-medium md:text-base">{c.name}</h3>
              <span className="mt-1 inline-block text-xs text-coral-dark md:text-sm">
                Shop Now &rarr;
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-xl bg-coral/30 px-6 py-5 text-left sm:flex-row">
          <p className="text-sm font-medium md:text-base">
            Not sure which collection is right for you?
          </p>
          <a
            href="#quiz"
            className="whitespace-nowrap rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-cream hover:bg-charcoal"
          >
            Take The Style Quiz
          </a>
        </div>
      </div>
    </section>
  );
}
