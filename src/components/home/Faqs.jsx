import { Reveal } from '../fx.jsx';

const FAQS = [
  {
    q: 'How fast will I be connected to an expert?',
    a: 'Most users are paired with a relevant specialist in under two minutes. Because we have hundreds of active specialists across time zones, someone is always available to assist you day or night.',
  },
  {
    q: 'Can I talk to the same expert again if I have more questions?',
    a: 'Yes! You can view your past conversation history and easily reconnect directly with the same specialist whenever you need follow-up advice or have related questions on that topic.',
  },
  {
    q: 'What kind of devices and problems can you help with?',
    a: 'Our specialists support thousands of brands and products, including laptops, desktop computers, mobile phones, printers, home appliances, automotive diagnostics, smart TVs, and home internet routers. If it has buttons, wires, or an engine, we have an expert who knows it.',
  },
  {
    q: 'Can an expert guide me over phone or text chat?',
    a: 'You can communicate whichever way you feel most comfortable! Type in our live text chat, send photos of error messages, or request a clear phone call for direct verbal instructions.',
  },
];

export default function Faqs() {
  return (
    <section className="py-20 bg-surface-container-lowest" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Got Questions?</span>
          <h2 className="font-headline-lg text-3xl sm:text-5xl text-on-surface font-normal mt-2 leading-tight">
            Frequently Asked <span className="italic text-primary">Questions</span>
          </h2>
          <p className="text-sm text-on-surface-variant mt-3">
            Everything you need to know about getting help from our friendly specialists.
          </p>
        </Reveal>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 100}>
              <details className="group rounded-xl border border-outline-variant/40 bg-surface-container-low open:bg-on-surface open:border-on-surface open:shadow-xl transition-colors duration-300">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-headline-sm text-base font-bold text-on-surface group-open:text-white [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span className="material-symbols-outlined shrink-0 text-primary group-open:text-primary-fixed group-open:rotate-180 transition-transform duration-300 text-[22px]">
                    expand_more
                  </span>
                </summary>
                <p className="px-5 pb-5 text-xs sm:text-sm text-on-surface-variant group-open:text-inverse-on-surface/80 leading-relaxed">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
