export default function FinalCta() {
  return (
    <section className="py-16 bg-surface-container">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center text-amber-500 mb-3">
          <span
            className="material-symbols-outlined text-[24px] fill-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined text-[24px] fill-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined text-[24px] fill-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined text-[24px] fill-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined text-[24px] fill-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        </div>
        <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-normal mb-3">
          {' '}
          Ready to Solve Your Issue Right Now?{' '}
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8">
          {' '}
          Tell us what's going on and chat directly with an expert who can guide you step-by-step.{' '}
        </p>
        <a
          className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-container text-on-primary font-bold text-base rounded-xl shadow-lg transition-all"
          href="#quick-match"
        >
          {' '}
          Start Your Problem Check{' '}
          <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}
