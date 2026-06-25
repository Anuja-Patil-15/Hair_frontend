import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqs = [
  {
    q: "How are your bundles priced?",
    a: "All bundles are priced individually. There are no bundle deals. To purchase more than one bundle, simply increase the quantity for a specific length or add additional lengths to your cart.",
  },
  {
    q: "How many bundles will I need for a full look?",
    a: `The longer the hair, the more bundles you will need for a complete look.

12\" - 16\" = 2 bundles
18\" - 24\" = 3 bundles
26\" - 32\" = 4 bundles
34\" - 36\" = 5 bundles

Custom units are constructed accordingly using the same bundles we offer.`,
  },
  {
    q: "What is your shipping policy?",
    a: "Bundles, lace pieces, clip-ins, tape-ins, and similar products require 5–10 business days for processing, as each item is thoroughly inspected for quality. Orders with Jet Black dye processing may require additional time. All wigs are made to order, so please allow 7–14 business days for unit construction and inspection before shipping. Orders are shipped Monday through Saturday via USPS with Priority (2-day shipping) and Expedited (overnight) options available. We recommend ordering at least one month before any important event to allow time for processing, shipping, and installation.",
  },
  {
    q: "How should I care for my raw hair extensions?",
    a: "Raw hair is 100% unprocessed, which allows it to last longer, but it does require proper care. Shampoo and condition the hair weekly, deep condition it every two weeks, never sleep on wet hair, use a heat protectant when applying heat, and always detangle before washing or sleeping. Raw hair requires very little product, so avoid excessive product usage to prevent buildup and tangling. Moisture should always be your main focus, and products with natural ingredients are highly recommended.",
  },
  {
    q: "How do I choose the correct size for a custom Lethal Unit?",
    a: "Measure the circumference of your head where the wig will sit—starting at your hairline, around your head, and behind your ears. If your measurement falls on a half size (.5), always size up to the nearest whole size. Never size down, as a slightly larger wig fits better than one that is too small. The average head circumference is 22.5 inches, which corresponds to a Medium size. Proper measurements are essential to achieving the most natural and comfortable fit.",
  },
  {
    q: "What is your return policy?",
    a: "Bundles and lace pieces are eligible for a partial refund. Orders canceled within the first 24 hours qualify for a 90% refund (10% is retained to cover merchant processing fees). Orders canceled between 25 and 72 hours qualify for a 50% refund. Made-to-order items are not eligible for refunds or exchanges. This includes custom units, clip-ins, ponytails, tape-ins, and any items purchased with Jet Black color processing.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-coral-dark">Support</p>
          <h1 className="mt-2 text-4xl font-light text-ink md:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-sm text-ink/60">
            Can't find what you're looking for?{' '}
            <a href="mailto:hello@lethalunits.com" className="text-coral-dark underline hover:no-underline">
              Email us
            </a>
          </p>
        </div>

        <div className="divide-y divide-ink/10">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-ink">{q}</span>
        <span
          className={`mt-0.5 shrink-0 text-coral transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-sm text-ink/70 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

// useState needs to be imported inside same file
import { useState } from 'react';