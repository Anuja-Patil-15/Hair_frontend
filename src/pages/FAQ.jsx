import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Images served from /public/images/
const palmShadow = '/images/palm-shadow.JPG';
const brushShadow = '/images/brush-shadow.JPG';

const faqs = [
  {
    q: "How many bundles will I need for a full look?",
    a: `Length determines bundle count — the longer you go, the more it takes to build real fullness. Here's the breakdown:\n\n12" – 16" = 2 bundles\n18" – 24" = 3 bundles\n26" – 32" = 4 bundles\n34" – 36" = 5 bundles\n\nCustom units are built using these same bundle counts.`,
    image: brushShadow,
  },
  {
    q: "How should we care for our raw extensions?",
    a: "Raw hair is 100% unprocessed, which is exactly why it lasts — but that same rawness means it asks for a little more attention than what you're used to. Shampoo and condition the hair weekly. Deep condition every other week. Never sleep on wet hair — it's the fastest way to matting. Always use a heat protectant before reaching for hot tools. Detangle before washing and before bed. The beauty of raw hair is that it barely needs product to look incredible, so resist the urge to layer too much on — buildup leads to tangling. Keep the focus on moisture, lean on natural ingredients, and know that a Lethal Units hair care line is on the way.",
  },
  {
    q: "What is your shipping policy?",
    a: "Every piece — bundles, lace, clip-ins, tape-ins — goes through 5 to 10 business days of processing, with each one inspected by hand for quality. Add Jet Black dye processing and that timeline extends slightly to make sure the color is done right. Units are made to order, so plan for 7 to 14 business days of construction and inspection before your piece ships. Once it's ready, orders ship Monday through Saturday via USPS, with Priority (2-day) and Expedited (overnight) options available. Our advice: order at least a month out from any big event, so processing, shipping, and install all have room to breathe.",
  },
  {
    q: "How do we choose a size for a custom Lethal Units?",
    a: 'Start by measuring the circumference of your head where the wig will actually sit — just in front of your hairline, down behind your ears. If your number lands on a .5, round up. Always size up, never down; a wig that\'s slightly roomy still looks right, one that\'s too tight never will. For reference, the average head measures 22.5", which lands in our MED size. Measuring is worth the extra minute — guessing is the single biggest reason a unit doesn\'t sit flat and natural.',
    image: palmShadow,
  },
  {
    q: "What is your return policy?",
    a: "Bundles and lace pieces qualify for a partial refund: cancel within 24 hours and you'll get 90% back (the remaining 10% covers processing fees), or within 25–72 hours for 50% back. Made-to-order pieces — custom units, clip-ins, ponytails, tape-ins, and anything with Jet Black processing — are final once started, so there's no refund or exchange on those. Same goes for Ready to Ship units: final sale, regardless of size, so take a moment to confirm your measurements before checking out.",
  },
];

function FAQCard({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-[16px] overflow-hidden shadow-sm">
      {/* Clickable header — always visible */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <h3 className="text-[13px] font-bold text-black leading-snug">
          {faq.q}
        </h3>
        {/* Arrow rotates when open */}
        <span
          className={`shrink-0 text-gray-500 text-[10px] mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
        >
          ▲
        </span>
      </button>

      {/* Collapsible body */}
      <div
        className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-[600px]' : 'max-h-0'}`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4">
          <p className="text-[11px] text-gray-700 leading-relaxed whitespace-pre-line">
            {faq.a}
          </p>

          {faq.image && (
            <div className="rounded-lg overflow-hidden">
              <img
                src={faq.image}
                alt=""
                className="w-full object-cover"
                style={{ height: '160px' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E2A993' }}>
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-16 py-20">
        <div className="mb-12 text-left">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <FAQCard faq={faqs[0]} />
            <FAQCard faq={faqs[2]} />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <FAQCard faq={faqs[1]} />
            <FAQCard faq={faqs[3]} />
            <FAQCard faq={faqs[4]} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}