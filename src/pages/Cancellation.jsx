import { Link } from 'react-router-dom';

function SectionHead({ n, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">{n}</span>
      <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">{title}</h2>
    </div>
  );
}

function Check({ children }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
      <span>{children}</span>
    </li>
  );
}

export default function Cancellation() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[72rem] h-96 bg-gradient-to-b from-primary-fixed/30 via-surface-container-high/20 to-transparent blur-3xl pointer-events-none -z-10"></div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 w-full">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
              <Link className="hover:text-primary transition-colors" to="/privacy">Trust &amp; Legal</Link>
              <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
              <span className="text-primary font-semibold">Cancellation Policy</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">FLEXIBLE SCHEDULING • CONSUMER STANDARD</span>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Cancellation Policy</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Clear, transparent rules for rescheduling, terminating consultations, and zero penalty deductions before session initiation.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <aside className="hidden lg:block lg:col-span-4 sticky top-20 space-y-4">
              <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm space-y-3 border border-surface-container">
                <div className="flex items-center gap-2 text-primary font-label-md text-label-md font-bold">
                  <span className="material-symbols-outlined text-[18px]">support_agent</span>
                  <span>Need Urgent Help?</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  If your consultation starts in under 5 minutes or you encounter portal errors, dispatch operators can freeze your session manually.
                </p>
                <Link className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all" to="/contact">
                  <span>Contact Help Desk</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </aside>

            <article className="lg:col-span-8 bg-surface-container-lowest p-6 sm:p-10 rounded-2xl shadow-sm space-y-12">
              <div className="bg-surface-container-low rounded-xl p-6 space-y-3">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Cancellations and schedule updates are completely free up to 15 minutes before your confirmed appointment start time. Since consultation and diagnostic billing occurs transparently on verified milestones post-service, there is zero pre-payment locked in and no upfront forfeiture risk.
                </p>
              </div>

              <section className="scroll-mt-20 space-y-4" id="art-1">
                <SectionHead n="01" title="Client-Initiated Cancellation Rights" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Clients hold unconditional discretion to reschedule or cancel upcoming consultations, appliance diagnostics, or specialist sessions. Appointments can be adjusted or terminated without penalty through your account dashboard or active specialist thread.
                </p>
                <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                  <Check><strong>Direct specialist thread notification:</strong> Inform your assigned specialist in your active message window to instantly release the time slot without triggering any invoice.</Check>
                  <Check><strong>Self-serve consultation dashboard:</strong> Tap &quot;Modify or Terminate&quot; on your appointment card to immediately unlink your scheduled session.</Check>
                  <Check><strong>Rate preservation:</strong> Rescheduled appointments retain all active tier discounts and diagnostic quotes with zero administrative re-booking fees.</Check>
                </ul>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-2">
                <SectionHead n="02" title="15-Minute Free Cancellation Window" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Any session cancelled or rescheduled at least 15 minutes before the agreed start time incurs strictly zero cost. Because card holds or pre-authorizations are never required, no refund wait times or banking deduction disputes occur.
                </p>
                <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
                  <span className="font-label-lg text-label-lg font-bold text-on-surface">Zero Penalty Deduction Guarantee</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Neither administrative fees, convenience surcharges, nor booking retainers will ever be withheld when notice is submitted prior to the threshold.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-3">
                <SectionHead n="03" title="Late Cancellations" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We recognize that unforeseen technical issues, urgent repairs, or emergencies happen. For changes inside the final 15 minutes, balanced safeguards protect both consumers and scheduled specialists:
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">3.1 Universal 10-Minute Grace Period</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      If you are delayed entering the consultation room, the expert holds the private room open for 10 minutes. If connection occurs within this buffer, your full consultation proceeds without tardiness penalties.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">3.2 Documented Pre-Work Only</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      If a technical specialist has already drafted verified schematics or telemetry analyses requested prior to the call, liability is limited strictly to that documented fraction, never the full scheduled session block.
                    </p>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-4">
                <SectionHead n="04" title="Expert-Initiated Rescheduling" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our vetted network operates under rigorous punctuality guidelines. If an expert experiences connectivity dropouts, critical delays, or electrical emergencies:
                </p>
                <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                  <Check><strong>Priority Re-Pairing Guarantee:</strong> Automated priority dispatch connects you with an equal or higher credentialed specialist in under 5 minutes.</Check>
                  <Check><strong>Advisory Courtesy Credit:</strong> If you choose not to re-pair immediately, your account automatically receives a complimentary advisory amount credited for subsequent sessions.</Check>
                </ul>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-5">
                <SectionHead n="05" title="Multi-Hour & Ongoing Engagements" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  For prolonged issues or multi-day guidance, billing is governed strictly by verified and performed milestones:
                </p>
                <div className="bg-surface-container-low rounded-xl p-5 space-y-3">
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    <strong>Accrued Hours Only:</strong> Clients may conclude or pause multi-hour projects at any stage. You are strictly responsible only for hours already completed and countersigned in your milestone dashboard.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-6">
                <SectionHead n="06" title="Step-by-Step Cancellation Workflow" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Cancelling an appointment is simple, instantaneous, and completed in two clicks without retention phone queues or tiring feedback surveys:
                </p>
                {/* TODO(owner): design export had an empty workflow-steps grid here; add the step cards when supplied */}

                <div className="mt-8 bg-surface-container rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1.5 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold">
                      <span className="material-symbols-outlined text-[18px]">support_agent</span>
                      Help Desk Standing By
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Questions About a Cancellation?</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                      Our support team is available 24/7 to adjust appointments, verify milestone credits, or assist with scheduling inquiries.
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
