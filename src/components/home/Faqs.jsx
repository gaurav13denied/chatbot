export default function Faqs() {
  return (
    <section className="py-16 bg-surface-container-lowest border-b border-surface-container" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Got Questions?</span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-normal mt-1">
            {' '}
            Frequently Asked Questions{' '}
          </h2>
          <p className="text-sm text-on-surface-variant mt-2">
            {' '}
            Everything you need to know about getting help from our friendly specialists.{' '}
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-outline-variant/40 bg-surface-container-low p-5">
            <h3 className="font-headline-sm text-base font-bold text-on-surface flex items-center justify-between">
              <span>How fast will I be connected to an expert?</span>
              <span className="material-symbols-outlined text-primary text-[20px]">expand_more</span>
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {' '}
              Most users are paired with a relevant specialist in under two minutes. Because we have hundreds
              of active specialists across time zones, someone is always available to assist you day or
              night.{' '}
            </p>
          </div>
          <div className="rounded-xl border border-outline-variant/40 bg-surface-container-low p-5">
            <h3 className="font-headline-sm text-base font-bold text-on-surface flex items-center justify-between">
              <span>Can I talk to the same expert again if I have more questions?</span>
              <span className="material-symbols-outlined text-primary text-[20px]">expand_more</span>
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {' '}
              Yes! You can view your past conversation history and easily reconnect directly with the same
              specialist whenever you need follow-up advice or have related questions on that topic.{' '}
            </p>
          </div>
          <div className="rounded-xl border border-outline-variant/40 bg-surface-container-low p-5">
            <h3 className="font-headline-sm text-base font-bold text-on-surface flex items-center justify-between">
              <span>What kind of devices and problems can you help with?</span>
              <span className="material-symbols-outlined text-primary text-[20px]">expand_more</span>
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {' '}
              Our specialists support thousands of brands and products, including laptops, desktop computers,
              mobile phones, printers, home appliances, automotive diagnostics, smart TVs, and home internet
              routers. If it has buttons, wires, or an engine, we have an expert who knows it.{' '}
            </p>
          </div>
          <div className="rounded-xl border border-outline-variant/40 bg-surface-container-low p-5">
            <h3 className="font-headline-sm text-base font-bold text-on-surface flex items-center justify-between">
              <span>Can an expert guide me over phone or text chat?</span>
              <span className="material-symbols-outlined text-primary text-[20px]">expand_more</span>
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {' '}
              You can communicate whichever way you feel most comfortable! Type in our live text chat, send
              photos of error messages, or request a clear phone call for direct verbal instructions.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
