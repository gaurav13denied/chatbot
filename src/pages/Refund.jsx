import { Link } from 'react-router-dom';

function SectionHead({ n, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">{n}</span>
      <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">{title}</h2>
    </div>
  );
}

export default function Refund() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[72rem] h-96 bg-gradient-to-b from-primary-fixed/30 via-surface-container-high/20 to-transparent blur-3xl pointer-events-none -z-10"></div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 w-full">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
              <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" to="/privacy">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                Trust &amp; Legal
              </Link>
              <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
              <span className="font-label-md text-label-md text-primary font-semibold tracking-wide">Refund Policy &amp; Assurance</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">SATISFACTION-FIRST GUARANTEE • Fair Billing Standard</span>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Refund Policy</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">These guidelines <strong>explain our satisfaction-first standard, how billing concerns are reviewed, and how the service fee is adjusted when a bill changes.</strong></p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <aside className="hidden lg:block lg:col-span-4 sticky top-20 space-y-4"></aside>

            <article className="lg:col-span-8 bg-surface-container-lowest p-6 sm:p-10 rounded-2xl shadow-sm space-y-12">
              <div className="bg-surface-container-low rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold tracking-wider">
                  <span className="material-symbols-outlined text-[20px]">shield</span>
                  <span>Zero Upfront Financial Risk</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed"><strong>AskAnythingAnswers</strong> is built on a zero-upfront-risk model. <strong>All charges are paid after the service and only when you are satisfied with the work.</strong> You are never obligated to <strong>pay for incomplete or unsatisfactory work.</strong></p>
              </div>

              <section className="scroll-mt-20 space-y-4" id="art-1">
                <SectionHead n="01" title="Satisfaction Guarantee" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Our standard is simple: <strong>you pay only when you are satisfied with the work.</strong> Unlike platforms that require credit card pre-authorizations or non-refundable deposits, <strong>every job ends with your approval.</strong></p>
                <div className="bg-surface-container-low rounded-xl p-5 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant"><strong>No Advance Lock-In:</strong> Starting a chat carries no charge. The scope, expected hours, and hourly rate are agreed before work begins, and payment is requested only afterwards.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant"><strong>Clearance Prerequisite:</strong> If the work is incomplete or not to your satisfaction, <strong>no payment is due. Tell our help desk and we will review it with you.</strong></span>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-2">
                <SectionHead n="02" title="Payment and Fair Billing" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed"><strong>Professionals on our platform are independent.</strong> Their hourly rate is agreed before work begins, and payment is made directly to them, offline, <strong>after the work is done.</strong></p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">timer</span>Fair Hourly Billing</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      You are billed only for time worked, as agreed in your chat. Idle time and tasks you did not approve are not billable. Meanwhile, if new services or tasks are requested by the customer, the bill will be revised.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">receipt_long</span>Fixed Rate Once Agreed</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      The hourly rate cannot be increased after it is agreed. Any extra work needs your confirmation before it begins.
                    </p>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-3">
                <SectionHead n="03" title="Eligible Grounds for Billing Review" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  If you paid and later found a problem with the work, you can raise a billing concern with our help desk under these conditions:
                </p>
                <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">cancel</span>
                    <span><strong>Incomplete Deliverables:</strong> The professional left early, abandoned the job, or did not complete what was agreed.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">schedule</span>
                    <span><strong>No-Show or Late Arrival:</strong> The professional did not show up or arrived late without notice.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">report_problem</span>
                    <span><strong>Work Not as Agreed:</strong> The work or advice differed from the scope and rate agreed.</span>
                  </li>
                </ul>
              </section>

              {/* Design section 04 was empty (no heading or content), so it is omitted and later sections renumbered. */}

              <section className="scroll-mt-20 space-y-4" id="art-4">
                <SectionHead n="04" title="Service Fee Adjustment" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed"><strong>AskAnythingAnswers charges a transparent 10% service fee on the overall bill, shown before work begins.</strong> If your bill changes <strong>after a review:</strong></p>
                <div className="bg-surface-container-low rounded-xl p-5 space-y-3">
                  <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    <p><strong>Automatic Proration:</strong> In any instance where an offline invoice is reduced, conceded, or re-negotiated during mediation, the associated 10% platform service fee is automatically and proportionally adjusted downward.</p>
                    <p><strong>Full Fee Reversal:</strong> If a claim is upheld in full, the 10% service fee is reversed in full.</p>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-5">
                <SectionHead n="05" title="Escalation and Help Desk Support" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">If you encounter an uncooperative <strong>professional,</strong> an <strong>unexpected</strong> billing demand, or <strong>work that did not meet expectations,</strong> our <strong>account team will be</strong> available 24/7.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">gavel</span>Fair Review</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Our team reviews each case on the facts, without favouring either side.
                    </p>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">speed</span>
                      Rapid Turnaround
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed"><strong>Claims are acknowledged within 2 hours, in line with our support desk response time.</strong></p>
                  </div>
                </div>

                <div className="mt-8 bg-surface-container rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1.5 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold">
                      <span className="material-symbols-outlined text-[18px]">support_agent</span>
                      Help Desk Standing By
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Need Assistance With an Invoice?</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                      Our compliance and member advocacy team is available around the clock to address any billing or refund concerns.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                    <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary-container transition-all shadow-sm" to="/contact">
                      <span>Contact Billing Desk</span>
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
