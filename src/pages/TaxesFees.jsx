import { Link } from 'react-router-dom';

const RATES = [
  { name: 'Plumbing & Water Systems', desc: 'Master plumbers, pipe diagnostic reviews, emergency shutoff valves', rate: '$65 – $95 / hr' },
  { name: 'Maids', desc: 'Deep sanitation, move-out turnovers, specialized bio-safe materials', rate: '$35 – $55 / hr' },
  { name: 'Housekeeping', desc: 'Pantry curation, living flow optimization, routine appliance upkeep', rate: '$30 – $45 / hr' },
  { name: 'Legal & Attorneys', desc: 'Bar-certified contracts, tenancy dispute review, civil advisory', rate: '$120 – $220 / hr' },
  { name: 'Home Electrical & Wiring', desc: 'Licensed journeymen, breaker panels, EV charger diagnostic setups', rate: '$70 – $105 / hr' },
  { name: 'General Handyman', desc: 'Drywall patching, mechanical fixture mounts, general equipment diagnostics', rate: '$45 – $65 / hr' },
];

function SectionHead({ n, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">{n}</span>
      <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">{title}</h2>
    </div>
  );
}

function Bullet({ icon, title, children }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">{icon}</span>
      <span><strong>{title}</strong> {children}</span>
    </li>
  );
}

export default function TaxesFees() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[72rem] h-96 bg-gradient-to-b from-primary-fixed/30 via-surface-container-high/20 to-transparent blur-3xl pointer-events-none -z-10"></div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 w-full">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Fee Disclosure</span>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Taxes, Hourly Rates and 10% Service Fee</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">Complete pricing transparency. Every charge is shown upfront, with no hidden memberships, no recurring charges, and payment made offline only after you are satisfied.</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <aside className="hidden lg:block lg:col-span-4 sticky top-20 space-y-4">
              <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm space-y-2 border border-surface-container">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Independent Advisory Desk</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Have questions regarding statutory municipal codes or commercial rate cards?
                </p>
                <Link className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-1" to="/contact">
                  <span>Contact Help Desk</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </aside>

            <article className="lg:col-span-8 bg-surface-container-lowest p-6 sm:p-10 rounded-2xl shadow-sm space-y-12">
              <div className="bg-surface-container-low rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  PAYMENT AFTER SATISFACTION
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">All services on AskAnythingAnswers are paid for offline, and only after you check the completed work and are satisfied with it. We never pre-authorize cards, charge recurring membership retainers, or bill upfront. A clear, flat 10% service fee applies to the overall bill and is shown to you before work begins. The fee supports professional verification and our help desk.</p>
              </div>

              <section className="scroll-mt-20 space-y-4" id="art-1">
                <SectionHead n="01" title="Upfront Pricing Standard" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <b>Zero Hidden Retainers:</b> We don&apos;t secretly enroll customers into recurring billing cycles or auto-debit credits, AskAnythingAnswers operates strictly on an on-demand, per-engagement model. You only pay when satisfied with the work.</p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <b>Satisfaction-First Covenant:</b> No funds are remitted prior to service delivery. The scope of work, expected hours, and hourly rate are confirmed before the work begins. Payment is made directly only after you confirm that the work met your expectations.</p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed"><b>Fixed Rate Once Agreed:</b> Specialists cannot unilaterally alter or inflate their hourly rate once it has been agreed. Retroactive price hikes and unexpected line items are strictly prohibited by platform guidelines.</p>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-2">
                <SectionHead n="02" title="The 10% Service Fee" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">A 10% platform service fee applies to the total bill. Terms and conditions apply. It is shown before work begins. This single fee supports four core user protections:</p>
                <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                  <Bullet icon="verified" title="Verified Professionals:">Background checks and peer review for every professional on the platform.</Bullet>
                  <Bullet icon="support_agent" title="Help Desk Support:">Our support team steps in if a rate, booking, or billing question comes up.</Bullet>
                  <Bullet icon="assignment_turned_in" title="Billing Review:">Billing concerns raised within 14 days are reviewed by our team.</Bullet>
                  <Bullet icon="lock" title="Secure Chat:">Secure, encrypted chat for the details, photos, and documents you share.</Bullet>
                </ul>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-3">
                <SectionHead n="03" title="Hourly Rate Benchmarks" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Hourly rates are charged based on the service. Professionals set their rates within these ranges, and the rate is shared before work begins.</p>
                <div className="border border-surface-container rounded-xl overflow-hidden">
                  <div className="divide-y divide-surface-container bg-surface-container-lowest font-body-sm text-body-sm">
                    {RATES.map((r) => (
                      <div key={r.name} className="p-4 flex items-center justify-between hover:bg-surface-container-low/40 transition-colors">
                        <div>
                          <div className="font-bold text-on-surface">{r.name}</div>
                          <div className="text-xs text-on-surface-variant">{r.desc}</div>
                        </div>
                        <span className="font-label-lg text-label-lg font-bold text-primary shrink-0 ml-4">{r.rate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-4">
                <SectionHead n="04" title="Offline Settlement Protocol" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Financial settlement is administered through an auditable, offline process designed to protect consumers from unauthorized card charges:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">4.1 Scope and Rate Agreement</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">You and the professional agree on the task, the expected hours, and the hourly rate before work begins.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">4.2 Work Verification</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Upon task completion, the client inspects the resolved tasks or evaluates the diagnostic report. No settlement occurs if the work is incomplete or not to your satisfaction.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">4.3 Direct Payment</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">The professional’s hourly charge is paid directly to them, offline. The 10% service fee is part of your overall bill and is shown before work begins.</p>
                  </div>
                </div>
              </section>

              {/* Design section 05 was empty (no heading or content), so it is omitted and the next section renumbered. */}

              <section className="scroll-mt-20 space-y-4" id="art-5">
                <SectionHead n="05" title="14-Day Billing Review" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  If you spot an overcharge, an unexpected charge, or work that was not completed as agreed, contact our help desk within 14 days of the job.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
                      14-Day Claim Window
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Submit your concern within 14 calendar days of the job. Your chat record is kept for review.
                    </p>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">published_with_changes</span>
                      Fee Adjustment</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed"><strong>If a billing issue is confirmed after review, the service fee is adjusted as set out in our <Link className="text-primary underline" to="/refund-policy">Refund Policy</Link>.</strong></p>
                  </div>
                </div>

                <div className="mt-8 bg-surface-container rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1.5 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold">
                      <span className="material-symbols-outlined text-[18px]">support_agent</span>
                      Help Desk Standing By
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Have Questions About Taxes or Fees?</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                      Our compliance and member advocacy team is available around the clock to audit invoices and address rate questions.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                    <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary-container transition-all shadow-sm" to="/contact">
                      <span>Contact Help Desk</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
