const textures = [
  {
    name: 'Raw Indian Wavy',
    img: '/images/raw-indian-wavy.jpg',
  },
  {
    name: 'Raw Indian Curly',
    img: '/images/raw-indian-curly.jpg',
  },
];

export default function ShopByTexture({ items = textures }) {
  return (
    <section id="texture" className="mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
      <h2 className="text-3xl font-bold md:text-4xl">Shop By Texture</h2>
      <p className="mt-2 text-sm text-ink/60">
        Find the perfect texture match for your natural hair
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((t) => (
          <a key={t.name} href="#" className="group block text-left">
            <div className="aspect-[3/2] overflow-hidden bg-sand">
              <img
                src={t.img}
                alt={t.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{t.name}</h3>
            <span className="mt-1 inline-block text-sm text-coral-dark">Shop Now &rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}