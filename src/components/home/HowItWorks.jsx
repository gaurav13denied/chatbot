export default function HowItWorks() {
  return (
    <section
      className="py-16 bg-surface-container-lowest border-b border-surface-container"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Simple & Fast</span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-normal mt-1">
            {' '}
            How You Get Your Solution in 3 Steps{' '}
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-2">
            {' '}
            No special knowledge needed. We keep it as simple as talking to a helpful neighbour.{' '}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/40 relative">
            <div className="size-12 rounded-xl bg-primary text-on-primary font-bold text-lg flex items-center justify-center mb-6 shadow-sm">
              {' '}
              1{' '}
            </div>
            <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-3">
              {' '}
              Tell us what's happening{' '}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {' '}
              Describe your problem in your own words. Type what you see, hear, or need help with.{' '}
            </p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/40 relative">
            <div className="size-12 rounded-xl bg-primary text-on-primary font-bold text-lg flex items-center justify-center mb-6 shadow-sm">
              {' '}
              2{' '}
            </div>
            <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-3">
              {' '}
              Get matched with the right expert{' '}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {' '}
              We pair you directly with a verified specialist who knows your exact problem, so you
              don't repeat yourself.{' '}
            </p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/40 relative">
            <div className="size-12 rounded-xl bg-primary text-on-primary font-bold text-lg flex items-center justify-center mb-6 shadow-sm">
              {' '}
              3{' '}
            </div>
            <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-3">
              {' '}
              Agree on the rate and get it done{' '}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {' '}
              Chat one-on-one, confirm the hourly rate, and get the work done. Pay the service charges only if you are satisfied.{' '}
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary-container text-on-primary font-bold text-base rounded-xl shadow-md transition-all"
            href="#quick-match"
          >
            {' '}
            Try It Now. Ask Your Question{' '}
          </a>
        </div>
      </div>
    </section>
  );
}
