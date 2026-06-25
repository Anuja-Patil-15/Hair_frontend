import { useEffect } from 'react';
import { X } from 'lucide-react';

const sizeData = [
  { size: 'XS', circumference: '20"–20.5"', frontToNape: '13"', earToEar: '11"', temple: '13"' },
  { size: 'S',  circumference: '21"–21.5"', frontToNape: '13.5"', earToEar: '11.5"', temple: '13.5"' },
  { size: 'M',  circumference: '22"–22.5"', frontToNape: '14"', earToEar: '12"', temple: '14"' },
  { size: 'L',  circumference: '23"–23.5"', frontToNape: '14.5"', earToEar: '12.5"', temple: '14.5"' },
  { size: 'XL', circumference: '24"+',      frontToNape: '15"', earToEar: '13"', temple: '15"' },
];

export default function SizeGuideModal({ open, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-label="Size Guide"
    >
      {/* Dim overlay */}
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-cream shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4">
          <h2 className="text-lg font-semibold text-ink">Cap Size Guide</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 hover:bg-sand transition-colors"
            aria-label="Close size guide"
          >
            <X size={18} />
          </button>
        </div>

        {/* Measurement note */}
        <div className="px-6 pt-4 pb-2">
          <p className="text-xs text-ink/60 leading-relaxed">
            Measure your head circumference with a soft tape measure placed one finger-width above your ears and around the fullest part of your head. All measurements in inches.
          </p>
        </div>

        {/* Size table */}
        <div className="overflow-x-auto px-6 pb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink/10">
                <th className="py-2 text-left font-semibold text-ink text-xs uppercase tracking-widest">Size</th>
                <th className="py-2 text-left font-semibold text-ink text-xs uppercase tracking-widest">Circumference</th>
                <th className="py-2 text-left font-semibold text-ink text-xs uppercase tracking-widest">Front–Nape</th>
                <th className="py-2 text-left font-semibold text-ink text-xs uppercase tracking-widest">Ear–Ear</th>
                <th className="py-2 text-left font-semibold text-ink text-xs uppercase tracking-widest">Temple</th>
              </tr>
            </thead>
            <tbody>
              {sizeData.map((row, i) => (
                <tr
                  key={row.size}
                  className={`border-b border-ink/5 ${i % 2 === 0 ? 'bg-sand/30' : ''}`}
                >
                  <td className="py-2.5 font-semibold text-coral-dark">{row.size}</td>
                  <td className="py-2.5 text-ink/80">{row.circumference}</td>
                  <td className="py-2.5 text-ink/80">{row.frontToNape}</td>
                  <td className="py-2.5 text-ink/80">{row.earToEar}</td>
                  <td className="py-2.5 text-ink/80">{row.temple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="bg-sand/50 px-6 py-3">
          <p className="text-xs text-ink/50 text-center">
            Not sure? Most customers wear a Medium (22"–22.5"). Custom sizing available on request.
          </p>
        </div>
      </div>
    </div>
  );
}
