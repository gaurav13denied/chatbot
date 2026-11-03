import { Reveal } from '../fx.jsx';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-container to-secondary py-24">
      <div className="absolute inset-0 grid-lines" aria-hidden="true" />
      <div className="drift absolute -top-24 -left-16 size-96 rounded-full bg-primary-fixed/30 blur-[100px]" aria-hidden="true" />
      <div
        className="drift absolute -bottom-32 -right-16 size-96 rounded-full bg-secondary-container/40 blur-[100px]"
        style={{ animationDelay: '-8s' }}
        aria-hidden="true"
      />
      <Reveal from="zoom" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center text-amber-300 mb-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="material-symbols-outlined text-[26px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
        </div>
        <h2 className="font-headline-lg text-4xl sm:text-6xl text-white font-normal leading-[1.1] mb-4">
          Ready to Solve Your <span className="italic text-primary-fixed">Issue</span> Right Now?
        </h2>
        <p className="text-sm sm:text-lg text-white/85 max-w-xl mx-auto mb-9">
          Tell us what's going on and chat directly with an expert who can guide you step-by-step.
        </p>
        <a
          className="ring-pulse inline-flex items-center justify-center px-10 py-4 bg-white hover:bg-on-surface hover:text-white text-primary font-bold text-base rounded-xl shadow-2xl hover:-translate-y-1 transition-all"
          href="#quick-match"
        >
          Start Your Problem Check
          <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
        </a>
      </Reveal>
    </section>
  );
}
