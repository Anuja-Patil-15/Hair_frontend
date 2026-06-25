import { useState } from 'react';

// Per the spec:
// Q1: hair preference (curly/wavy/both) — informs texture recommendation, not directly mapped to collection
// Q2: lace preference — Blend or Illusion signal
// Q3: install time — Effortless, Illusion, or Foundation signal
// Q4: wear duration — Effortless, Illusion, Blend, or Foundation signal

const questions = [
  {
    id: 'q1',
    q: 'Do you prefer curly hair or wavy hair?',
    options: [
      { label: 'Curly', texture: 'curly' },
      { label: 'Wavy', texture: 'wavy' },
      { label: 'I like both', texture: 'both' },
    ],
  },
  {
    id: 'q2',
    q: 'How do you feel about lace?',
    options: [
      { label: 'I prefer a natural leave-out', collection: 'Blend' },
      { label: "I love lace, as long as it's good quality and looks natural", collection: 'Illusion' },
    ],
  },
  {
    id: 'q3',
    q: 'How much time do you wanna spend on install day?',
    options: [
      { label: 'Five minutes, tops. I like quick and easy.', collection: 'Effortless' },
      { label: "I don't mind sitting down for it. Beauty takes time.", collection: 'Illusion' },
      { label: "Hand me the raw materials. I'll take it from here.", collection: 'Foundation' },
    ],
  },
  {
    id: 'q4',
    q: 'How long do you want to wear it before changing it up?',
    options: [
      { label: 'A few days? I like to switch things up often.', collection: 'Effortless' },
      { label: 'Weeks at a time. I want it secure and low-fuss.', collection: 'Illusion' },
      { label: "As long as my leave-out looks good, I'm good.", collection: 'Blend' },
      { label: 'I like reusing my bundles and turning them into different styles.', collection: 'Foundation' },
    ],
  },
];

const collectionDescriptions = {
  Foundation: 'Raw bundles and the freedom to create. You know what you want and you know how to get it.',
  Blend: 'A seamless leave-out look — protective, polished, and effortlessly yours.',
  Effortless: 'Quick installs, beautiful results. Low-maintenance hair that moves with you.',
  Illusion: 'Undetectable lace, flawless finish. The ultimate in natural-looking protective style.',
};

function deriveResult(answers) {
  // Tally collection votes from Q2, Q3, Q4
  const votes = {};
  answers.forEach((a) => {
    if (a.collection) {
      votes[a.collection] = (votes[a.collection] || 0) + 1;
    }
  });
  if (Object.keys(votes).length === 0) return 'Foundation';
  return Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0];
}

export default function QuizCard() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const current = questions[step];
  const isLast = step + 1 === questions.length;

  const handleNext = () => {
    if (selected === null) return;
    const chosenOption = current.options[selected];
    const next = [...answers, chosenOption];
    setAnswers(next);

    if (!isLast) {
      setStep(step + 1);
      setSelected(null);
    } else {
      setResult(deriveResult(next));
    }
  };

  const reset = () => {
    setStep(0);
    setSelected(null);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section id="quiz" className="bg-sage px-6 py-16 text-center md:py-24">
      <h2 className="text-2xl font-semibold text-ink md:text-3xl">Find Your Perfect Match</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-ink/70">
        Answer four quick questions and we'll point you to the right collection
      </p>

      <div className="mx-auto mt-8 max-w-md rounded-xl bg-cream p-6 text-left shadow-lg md:p-8">
        {result ? (
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-coral-dark">Your match</p>
            <h3 className="mt-2 text-2xl font-semibold text-ink">{result}</h3>
            <p className="mt-2 text-sm text-ink/60 leading-relaxed">
              {collectionDescriptions[result]}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-cream hover:bg-charcoal transition-colors text-center"
              >
                Shop {result}
              </a>
              <button
                onClick={reset}
                className="rounded-full border border-ink/20 px-6 py-2.5 text-sm font-medium hover:bg-sand transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Progress bar */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs uppercase tracking-widest text-ink/40">
                  Question {step + 1} of {questions.length}
                </p>
                <span className="text-xs text-ink/30">{Math.round(((step) / questions.length) * 100)}%</span>
              </div>
              <div className="h-1 w-full rounded-full bg-ink/10">
                <div
                  className="h-1 rounded-full bg-coral transition-all duration-500"
                  style={{ width: `${((step) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="mt-2 text-base font-medium md:text-lg text-ink">{current.q}</h3>

            <div className="mt-5 flex flex-col gap-3">
              {current.options.map((opt, i) => (
                <button
                  key={opt.label}
                  onClick={() => setSelected(i)}
                  className={`rounded-full border px-5 py-2.5 text-left text-sm transition-colors ${
                    selected === i
                      ? 'border-coral bg-coral/10 font-medium text-ink'
                      : 'border-ink/15 hover:border-ink/30 text-ink/80'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selected === null}
              className="mt-6 w-full rounded-full bg-ink py-3 text-sm font-medium text-cream transition-all disabled:opacity-30 hover:bg-charcoal"
            >
              {isLast ? 'See My Match →' : 'Next →'}
            </button>
          </>
        )}
      </div>
    </section>
  );
}
