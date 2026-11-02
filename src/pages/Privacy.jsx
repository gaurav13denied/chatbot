import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Privacy() {
  const [progress, setProgress] = useState(0); // reading progress bar (%)

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex flex-col w-full">

<div className="sticky top-14 z-30 w-full bg-surface-container-lowest/80 backdrop-blur-md shadow-sm">
<div className="h-1 bg-primary w-0 transition-all duration-150" id="read-progress" style={{ width: `${progress}%` }}></div>
</div>
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">

<div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md mb-6">
<Link className="hover:text-primary transition-colors" to="/privacy">Trust &amp; Security</Link>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Privacy Policy</span>
</div>

<div className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm mb-10 relative overflow-hidden">
<div className="absolute -right-16 -top-16 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative z-10">
<div className="space-y-4 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed/40 text-on-primary-fixed rounded-full text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
<span>Clear &amp; Transparent Guarantee</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-none">Privacy Policy</h1>

</div>
<div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 text-on-surface-variant text-label-md font-label-md bg-surface-container-low p-4 rounded-lg">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
<span>Effective: <strong className="text-on-surface">October 24, 2026</strong></span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

<aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">

<div className="bg-primary/5 p-5 rounded-xl space-y-2">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
<span className="font-label-lg text-label-lg font-bold">Zero Data Brokering</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            We never sell, trade, or package your diagnostic records, system logs, or private communications to advertising brokerages or third parties.
          </p>
</div>
</aside>

<article className="lg:col-span-8 space-y-12">

<div className="block lg:hidden bg-surface-container-lowest p-4 rounded-xl shadow-sm">
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2" htmlFor="mobile-toc-select">Jump to Section</label>
<select className="w-full bg-surface-container-low text-on-surface text-body-sm rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary" id="mobile-toc-select" onChange={(e) => { if (e.target.value) window.location.hash = e.target.value; }}>
<option value="#section-1">1. Information We Collect</option>
<option value="#section-2">2. How We Use Diagnostics Data</option>
<option value="#section-3">3. Sharing and Disclosure of Data</option>
<option value="#section-4">4. International Data Operations</option>
<option value="#section-5">5. Your Rights &amp; Choices</option>
<option value="#section-6">6. Protecting Minor Privacy</option>
</select>
</div>

<div className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<span className="material-symbols-outlined text-[24px]">menu_book</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            When you ask for technical assistance on AskAnythingAnswers, you entrust us with device serial numbers, network screenshots, printer logs, and direct conversations. We treat these material as confidential client work product. Your interactions exist solely to troubleshoot your inquiry, not to fuel algorithmic ad markets.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
<div className="p-3 bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-primary font-bold block mb-1">Ownership</span>
<span className="font-body-sm text-body-sm text-on-surface">You own 100% of your chat records and hardware images.</span>
</div>
<div className="p-3 bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-primary font-bold block mb-1">Confidentiality</span>
<span className="font-body-sm text-body-sm text-on-surface">Experts sign strict Non-Disclosure Agreements.</span>
</div>

</div>
</div>

<section className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24" id="section-1">
<div className="flex items-baseline gap-4">
<span className="font-headline-md text-headline-md text-primary font-bold">01</span>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Information We Collect</h2>

</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We only gather the minimum necessary data required to route your questions to the right specialist and improve your experience. </p>
<div className="space-y-4">
<div className="p-4 bg-surface-container-low rounded-lg space-y-1">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">A. Diagnostic Logs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Screen captures, make/model, device firmware numbers, printer queue status dumps, and router config summaries provided during your diagnostic session.
              </p>
</div>
<div className="p-4 bg-surface-container-low rounded-lg space-y-1">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">B. Media Attachments</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">If you choose to visually upload the problem by sharing photos  or short video clips of symptoms, error screen, or mechanical issues, we securely store these files so our experts can review them.  </p>
</div>
<div className="p-4 bg-surface-container-low rounded-lg space-y-1">
<h3 className="font-label-lg text-label-lg font-bold text-on-surface">C. Contact Identifiers</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Your preferred display name and validated email address used to send session summaries and restore incomplete guidance threads.
              </p>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24" id="section-2">
<div className="flex items-baseline gap-4">
<span className="font-headline-md text-headline-md text-primary font-bold">02</span>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">How We Use Diagnostics Data</h2>

</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">We process your data strictly to manage our platform and deliver a reliable user experience. Specifically, we use your information to: </p>

<div className="p-6 bg-surface-container rounded-xl space-y-3">
<div className="flex items-center gap-2 text-primary font-label-lg text-label-lg font-bold">
<span className="material-symbols-outlined text-[22px]">verified</span>

</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Authenticate your access and manage your anonymous question submissions. </p>
</div>
<ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
<span>Route your technical or informational queries to the most appropriate available expert. </span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
<span>Notify you via email the moment an expert posts a response to your question.  </span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
<span>Defend against fraudulent activity, spam, or the creation of automated face accounts. </span>
</li>
</ul>
</section>

<section className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24" id="section-3">
<div className="flex items-baseline gap-4">
<span className="font-headline-md text-headline-md text-primary font-bold">03</span>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Sharing and Disclosure of Data</h2>

</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">We do not  sell your  personal data. This platform is built on transparency, and your information is only shared under the following condditions. </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-5 bg-surface-container-low rounded-lg space-y-2">
<div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg font-bold">
<span className="material-symbols-outlined text-primary text-[20px]">badge</span>
<span>Public &amp; Anonymous Posts</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">The details inside your submitted questions are visible to the experts on the platform so that can formulate answers. </p>
</div>
<div className="p-5 bg-surface-container-low rounded-lg space-y-2">
<div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg font-bold">
<span className="material-symbols-outlined text-primary text-[20px]">gavel</span>
<span>Trusted Service Provider</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">We partner with essential third-party vendors who assist with cloud storage, website data analytics and automated email delivery. These providers handle your  data strictly according to our direct instructions.  </p>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24" id="section-4">
<div className="flex items-baseline gap-4">
<span className="font-headline-md text-headline-md text-primary font-bold">04</span>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">International Data Operations</h2>

</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Our platform operates globally, and we may transfer, store, and process the information we collect in countries outside your home jusrisdiction.  Data proetction laws vary across regions. When transferring data internationally, we utilize standard contractual safeguards to ensure your information remains secure, private, and treated in accordance with this policy. </p>
</section>

<section className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24" id="section-5">
<div className="flex items-baseline gap-4">
<span className="font-headline-md text-headline-md text-primary font-bold">05</span>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Your Rights &amp; Choices</h2>

</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">We believe you should remain in full control of your of yournpersonal data. Depending on your physical location and local privacy laws, you may exercise the following rights: </p>
<div className="space-y-3">
<div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">download</span>
<div>

<span className="font-body-sm text-body-sm text-on-surface-variant"><b>Access and Correction:</b> You can request a copy of the data we hold about you or update incorrect information at any time.</span>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">edit_document</span>
<div>

<span className="font-body-sm text-body-sm text-on-surface-variant"> <b>Account Detail: </b>You have the right to request that we erase your personal data from our active systems.  </span>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">block</span>
<div>

<span className="font-body-sm text-body-sm text-on-surface-variant"><b>Communication Options</b>: You can opt out of promotional updates or platform alerts at any time by clicking the "unsubscribe" link at the bottom our emails. The essential notifications like direct alerts than an expert has answered your questions will still be sent.  </span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24" id="section-6">
<div className="flex items-baseline gap-4">
<span className="font-headline-md text-headline-md text-primary font-bold">06</span>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Protecting Minor Privacy</h2>

</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Our services are designed exclusively for individuals who are at least 18 years old. We do not knowingly gather or maintain personal data from children under the age of 13. If you discover that a minor has shared personal information with our platform without parental consent, pleast altert us immediately so we can remove the data from our chats. </p>
<div className="bg-surface-container p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="space-y-1">
<div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg font-bold">
<span className="material-symbols-outlined text-primary text-[20px]">mail</span>
<span>help@askanythinganswers.com </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">For any questions, feedback or concerns, please contact our support team directly.</p>
</div>
<a className="px-5 py-2.5 bg-primary text-on-primary rounded-lg text-label-md font-label-md hover:bg-primary-container shadow-sm transition-all inline-flex items-center gap-2 shrink-0" href="mailto:help@askanythinganswers.com">
<span>Send Inquiries</span>
<span className="material-symbols-outlined text-[16px]">send</span>
</a>
</div>
</section>

<div className="pt-6 pb-12 flex flex-col sm:flex-row items-center justify-between text-label-sm font-label-sm text-outline gap-4">
<p>AskAnythingAnswers Inc. Public Legal Specification • Document ID: EXP-PRIV-2024-V2.4</p>
<button type="button" className="hover:text-primary transition-colors flex items-center gap-1" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
<span>Back to top</span>
<span className="material-symbols-outlined text-[14px]">arrow_upward</span>
</button>
</div>
</article>
</div>
</section>

</div>
  );
}
