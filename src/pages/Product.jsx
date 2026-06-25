import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const product = {
  name: 'The Illusion Lace Wig',
  collection: 'ILLUSION COLLECTION',
  price: 'From $385',
  description: 'Our only true lace collection — a frontal or closure, hand-built on a cap to your exact measurements. Comes with bleached knots and a pre-plucked hairline for the most natural-looking part. Frontals require adhesive, closures can be worn glueless.',
  laceTypes: ['Frontal', 'Closure'],
  lengths: ['14"', '16"', '18"', '20"', '22"', '24"'],
  densities: ['150%', '180%', '200%'],
  colors: ['Natural Black', 'Jet Black (+$50)'],
  capSizes: ['XS', 'S', 'M', 'L'],
  images: [
    '/images/collection-effortless.jpg', // Main image path
    '/images/collection-blend.jpg',
    '/images/collection-illusion.jpg',
    '/images/raw-indian-curly.jpg',
    '/images/collection-foundation.jpg'
  ],
};

export default function Product() {
  const [activeImg, setActiveImg] = useState(0);
  
  // Initial states changed to null so no options are highlighted on mount
  const [selectedLace, setSelectedLace] = useState(null);
  const [selectedLength, setSelectedLength] = useState(null);
  const [selectedDensity, setSelectedDensity] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans relative">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: Gallery */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 shrink-0 ${
                    activeImg === i ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Product Configurator */}
          <div className="flex flex-col pr-4">
            <span className="text-[10px] tracking-widest text-[#E2A993] font-bold uppercase">
              {product.collection}
            </span>
            <h1 className="text-3xl font-black text-black mt-1 tracking-tight">
              {product.name}
            </h1>
            <p className="text-base font-bold text-black mt-2">
              {product.price}
            </p>
            <p className="text-xs text-gray-600 leading-relaxed mt-4 font-normal max-w-xl">
              {product.description}
            </p>

            {/* Selection Options Blocks */}
            <div className="mt-6 flex flex-col gap-5">
              
              {/* Lace Type */}
              <div>
                <span className="block text-[10px] font-bold text-black uppercase tracking-wider mb-2">Lace Type</span>
                <div className="flex gap-2">
                  {product.laceTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedLace(type)}
                      className={`px-4 py-1.5 text-xs rounded-full border transition-all ${
                        selectedLace === type 
                          ? 'border-[#E2A993] text-[#E2A993] bg-[#E2A993]/5 font-semibold' 
                          : 'border-gray-300 text-black hover:border-gray-400'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Length */}
              <div>
                <span className="block text-[10px] font-bold text-black uppercase tracking-wider mb-2">Length</span>
                <div className="flex flex-wrap gap-2">
                  {product.lengths.map((len) => (
                    <button
                      key={len}
                      onClick={() => setSelectedLength(len)}
                      className={`w-10 h-10 flex items-center justify-center text-xs rounded-full border transition-all ${
                        selectedLength === len 
                          ? 'border-[#E2A993] text-[#E2A993] bg-[#E2A993]/5 font-semibold' 
                          : 'border-gray-300 text-black hover:border-gray-400'
                      }`}
                    >
                      {len}
                    </button>
                  ))}
                </div>
              </div>

              {/* Density */}
              <div>
                <span className="block text-[10px] font-bold text-black uppercase tracking-wider mb-2">Density</span>
                <div className="flex gap-2">
                  {product.densities.map((den) => (
                    <button
                      key={den}
                      onClick={() => setSelectedDensity(den)}
                      className={`px-4 py-1.5 text-xs rounded-full border transition-all ${
                        selectedDensity === den 
                          ? 'border-[#E2A993] text-[#E2A993] bg-[#E2A993]/5 font-semibold' 
                          : 'border-gray-300 text-black hover:border-gray-400'
                      }`}
                    >
                      {den}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <span className="block text-[10px] font-bold text-black uppercase tracking-wider mb-2">Color</span>
                <div className="flex gap-2">
                  {product.colors.map((col) => (
                    <button
                      key={col}
                      onClick={() => setSelectedColor(col)}
                      className={`px-4 py-1.5 text-xs rounded-full border transition-all ${
                        selectedColor === col 
                          ? 'border-[#E2A993] text-[#E2A993] bg-[#E2A993]/5 font-semibold' 
                          : 'border-gray-300 text-black hover:border-gray-400'
                      }`}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cap Size */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-bold text-black uppercase tracking-wider">Cap Size</span>
                  <button 
                    onClick={() => setSizeGuideOpen(true)}
                    className="inline-flex items-center gap-1 text-[10px] text-[#E2A993] border border-[#E2A993]/40 rounded-full px-2 py-0.5 bg-[#E2A993]/5 font-medium hover:bg-[#E2A993]/10"
                  >
                    📏 Size Guide
                  </button>
                </div>
                <div className="flex gap-2">
                  {product.capSizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`w-10 h-10 flex items-center justify-center text-xs rounded-full border transition-all ${
                        selectedSize === sz 
                          ? 'border-[#E2A993] text-[#E2A993] bg-[#E2A993]/5 font-semibold' 
                          : 'border-gray-300 text-black hover:border-gray-400'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Add To Cart */}
            <button className="w-full max-w-md mt-8 bg-black hover:bg-zinc-900 text-white font-bold uppercase text-xs tracking-wider py-4 rounded-full transition-colors">
              Add To Cart
            </button>
          </div>

        </div>
      </main>

      <Footer />

      {/* SIZE GUIDE OVERLAY MODAL */}
      {sizeGuideOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full relative shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            {/* Close Cross */}
            <button 
              onClick={() => setSizeGuideOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-lg p-1"
            >
              ✕
            </button>

            <h2 className="text-lg font-black text-black tracking-tight mb-1">Size Guide</h2>
            <p className="text-[11px] text-gray-500 mb-4 leading-tight">
              Sizing is based primarily on Head Circumference and Front to Nape (starred below). The other measurements are optional extra reference points.
            </p>

            {/* Data Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-100">
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="bg-black text-white uppercase tracking-wider text-[10px]">
                    <th className="p-2.5 font-bold">Measurement</th>
                    <th className="p-2.5 font-bold">XS (21")</th>
                    <th className="p-2.5 font-bold">S (22")</th>
                    <th className="p-2.5 font-bold">M (23")</th>
                    <th className="p-2.5 font-bold">L (24")</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium">
                  <tr className="bg-[#FFF4F1] text-black font-bold">
                    <td className="p-2.5">Head Circumference *</td>
                    <td className="p-2.5">21"</td>
                    <td className="p-2.5">22"</td>
                    <td className="p-2.5">23"</td>
                    <td className="p-2.5">24"</td>
                  </tr>
                  <tr className="bg-[#FFF4F1] text-black font-bold">
                    <td className="p-2.5">Front to Nape *</td>
                    <td className="p-2.5">13"</td>
                    <td className="p-2.5">14"</td>
                    <td className="p-2.5">15"</td>
                    <td className="p-2.5">16"</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="p-2.5">Ear to Ear (Forehead)</td>
                    <td className="p-2.5">10.5"-11"</td>
                    <td className="p-2.5">11"-11.5"</td>
                    <td className="p-2.5">11.5"-12"</td>
                    <td className="p-2.5">12"-12.5"</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="p-2.5">Ear to Ear (Over Top)</td>
                    <td className="p-2.5">11.5"-12"</td>
                    <td className="p-2.5">12"-12.5"</td>
                    <td className="p-2.5">12.5"-13"</td>
                    <td className="p-2.5">13"-13.5"</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="p-2.5">Temple to Temple (Around Back)</td>
                    <td className="p-2.5">14"-14.5"</td>
                    <td className="p-2.5">14.5"-15"</td>
                    <td className="p-2.5">15"-15.5"</td>
                    <td className="p-2.5">15.5"-16"</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="p-2.5">Nape of Neck</td>
                    <td className="p-2.5">4.5"-5"</td>
                    <td className="p-2.5">5"-5.5"</td>
                    <td className="p-2.5">5.5"-6"</td>
                    <td className="p-2.5">6"-6.5"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Warning Note */}
            <p className="text-[10px] text-[#FA8574] mt-4 font-medium leading-relaxed">
              If any measurement falls on a boundary number or in between two sizes, always size up — it's better for a wig to be slightly too big than too small.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}