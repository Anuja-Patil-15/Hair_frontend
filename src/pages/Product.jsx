import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SizeGuideModal from '../components/SizeGuideModal';

// Illusion lace wig — the one real product page
const product = {
  name: 'Illusion Lace Wig',
  collection: 'Illusion',
  subtitle: 'Raw Indian Wavy · HD Lace Front',
  price: '$420',
  description:
    'The Illusion unit is built for women who want their protective style to pass as their own hair — every time, to everyone. Raw Indian wavy hair sourced from a single donor. HD lace that melts into the skin. A cap construction made to stay put through workouts, rain, and life.',
  features: [
    'Single-donor raw Indian wavy hair',
    'HD lace front — undetectable hairline',
    'Pre-bleached knots',
    'Adjustable straps + combs',
    'Available in 16" – 30"',
    'Density: 150% or 180%',
  ],
  images: [
    '/images/collection-illusion.jpg',
    '/images/raw-indian-wavy.jpg',
    '/images/collection-effortless.jpg',
  ],
  capSizes: ['XS', 'S', 'M', 'L', 'XL'],
  lengths: ['16"', '18"', '20"', '22"', '24"', '26"', '28"', '30"'],
  densities: ['150%', '180%'],
};

export default function Product() {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedLength, setSelectedLength] = useState(null);
  const [selectedDensity, setSelectedDensity] = useState(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />

      <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">

          {/* Image gallery */}
          <div>
            <div className="aspect-square overflow-hidden rounded-xl bg-sand">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="h-full w-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="mt-3 flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square w-16 overflow-hidden rounded-lg border-2 transition-colors ${
                    activeImg === i ? 'border-coral' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-widest text-coral-dark">{product.collection} Collection</p>
            <h1 className="mt-1 text-3xl font-semibold text-ink md:text-4xl">{product.name}</h1>
            <p className="mt-1 text-sm text-ink/60">{product.subtitle}</p>
            <p className="mt-4 text-2xl font-medium text-ink">{product.price}</p>

            <p className="mt-4 text-sm text-ink/70 leading-relaxed">{product.description}</p>

            {/* Cap Size */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-widest text-ink">Cap Size</label>
                <button
                  onClick={() => setSizeGuideOpen(true)}
                  className="text-xs text-coral-dark underline hover:no-underline"
                >
                  Size Guide
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.capSizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                      selectedSize === s
                        ? 'border-coral bg-coral/10 font-medium text-ink'
                        : 'border-ink/20 hover:border-ink/40 text-ink/70'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Length */}
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-widest text-ink">Length</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.lengths.map((l) => (
                  <button
                    key={l}
                    onClick={() => setSelectedLength(l)}
                    className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                      selectedLength === l
                        ? 'border-coral bg-coral/10 font-medium text-ink'
                        : 'border-ink/20 hover:border-ink/40 text-ink/70'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Density */}
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-widest text-ink">Density</label>
              <div className="mt-2 flex gap-2">
                {product.densities.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDensity(d)}
                    className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                      selectedDensity === d
                        ? 'border-coral bg-coral/10 font-medium text-ink'
                        : 'border-ink/20 hover:border-ink/40 text-ink/70'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button className="mt-8 w-full rounded-full bg-ink py-3.5 text-sm font-medium text-cream transition-colors hover:bg-charcoal">
              Add to Cart
            </button>

            {/* Features */}
            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink mb-3">What's Included</p>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink/70">
                    <span className="mt-0.5 text-coral shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
