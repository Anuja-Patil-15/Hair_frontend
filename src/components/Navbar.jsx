import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';

const shopLinks = [
  { label: 'Raw Indian Bundles', href: '#texture' },
  { label: 'HD Lace', href: '#' },
  { label: 'Order a Custom Unit', href: '#' },
  { label: 'Ready to Ship Units', href: '#' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShopOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShopOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShopOpen(false), 150);
  };

  const scrollToQuiz = (e) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="/" className="flex items-center">
          <img
            src="/images/logo-white.png"
            alt="Lethal Units"
            className="h-8 md:h-10 object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="/" className="hover:text-coral transition-colors font-medium">Home</a>

          {/* Shop dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setShopOpen((v) => !v)}
              className="flex items-center gap-1 hover:text-coral transition-colors font-medium"
              aria-expanded={shopOpen}
              aria-haspopup="true"
            >
              Shop
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${shopOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute left-0 top-full mt-1 w-56 rounded-lg bg-charcoal py-2 shadow-xl transition-all duration-200 origin-top ${
                shopOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
              }`}
            >
              {shopLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setShopOpen(false)}
                  className="block px-4 py-2.5 text-sm text-cream/90 hover:bg-ink hover:text-coral transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#quiz"
            onClick={scrollToQuiz}
            className="hover:text-coral transition-colors font-medium"
          >
            Style Quiz
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <ShoppingBag size={20} className="hidden md:block cursor-pointer hover:text-coral transition-colors" />
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-cream/10 bg-ink px-5 pb-4 pt-2">
          <a href="/" onClick={() => setOpen(false)} className="py-2 text-sm text-cream/90 hover:text-coral transition-colors">Home</a>
          <span className="pt-3 pb-1 text-xs uppercase tracking-widest text-cream/50">Shop</span>
          {shopLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 pl-2 text-sm text-cream/80 hover:text-coral transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quiz"
            onClick={scrollToQuiz}
            className="mt-2 py-2 text-sm text-cream/90 hover:text-coral transition-colors border-t border-cream/10"
          >
            Style Quiz
          </a>
        </nav>
      </div>
    </header>
  );
}
