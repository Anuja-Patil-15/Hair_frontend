export default function GotQuestions() {
  return (
    <section className="relative overflow-hidden bg-sand" id="faqs">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/got-questions-bg.jpg')" }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center md:py-28">
        <h2 className="text-5xl font-bold text-ink md:text-6xl">Got Questions?</h2>
        <p className="mt-4 max-w-sm text-sm text-ink/60">
          Browse our frequently asked questions — from hair care to sizing to shipping.
        </p>
        <a
          href="/faq"
          className="mt-8 rounded-full bg-coral px-8 py-3 text-sm font-medium text-white hover:bg-coral-dark transition-colors"
        >
          View FAQs
        </a>
      </div>
    </section>
  );
}
