import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ACTIVE_TOC = ' bg-surface-container text-primary font-bold';

export default function Privacy() {
  const [progress, setProgress] = useState(0); // reading progress bar (%)
  const [activeId, setActiveId] = useState(''); // clause currently in view (highlights the index)
  const [purge, setPurge] = useState('idle'); // idle | running | done (demo only, nothing is deleted)

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(height > 0 ? (winScroll / height) * 100 : 0);

      let currentId = '';
      document.querySelectorAll('article section').forEach((section) => {
        if (window.pageYOffset >= section.offsetTop - 140) currentId = section.getAttribute('id');
      });
      setActiveId(currentId);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function requestPurge() {
    setPurge('running');
    setTimeout(() => setPurge('done'), 800);
  }

  return (
    <div className="flex flex-col w-full">
      <div className="sticky top-14 z-30 w-full bg-surface-container-lowest/80 backdrop-blur-md shadow-sm">
        <div
          className="h-1 bg-primary w-0 transition-all duration-150"
          id="read-progress"
          style={{ width: `${progress}%` }}
        />
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md mb-6">
          <Link className="hover:text-primary transition-colors" to="/privacy">
            Trust & Security
          </Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary font-semibold">Privacy Policy</span>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative z-10">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed/40 text-on-primary-fixed rounded-full text-label-sm font-label-sm">
                <span
                  className="material-symbols-outlined text-[16px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
                <span>Clear & Transparent Guarantee</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-none">
                Privacy Policy
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {' '}
                How we protect your hardware diagnostic transcripts, uploaded device logs, and personal
                identity. Plain English, zero ambiguities.{' '}
              </p>
            </div>
            <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 text-on-surface-variant text-label-md font-label-md bg-surface-container-low p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
                <span>
                  Effective: <strong className="text-on-surface">October 24, 2024</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">history</span>
                <span>
                  Revision: <strong className="text-on-surface">v2.4 (Plain-Language)</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">lock</span>
                <span className="text-primary font-semibold">TLS 1.3 End-to-End Encrypted</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Document Index
                </span>
                <span className="font-label-sm text-label-sm text-primary font-bold">7 Clauses</span>
              </div>
              <nav className="space-y-1" id="legal-toc">
                <a
                  className={`toc-link block px-3 py-2 rounded-lg text-body-sm font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'section-1' ? ACTIVE_TOC : ''}`}
                  href="#section-1"
                >
                  {' '}
                  1. Information We Collect{' '}
                </a>{' '}
                <a
                  className={`toc-link block px-3 py-2 rounded-lg text-body-sm font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'section-2' ? ACTIVE_TOC : ''}`}
                  href="#section-2"
                >
                  {' '}
                  2. Diagnostics Data Usage{' '}
                </a>{' '}
                <a
                  className={`toc-link block px-3 py-2 rounded-lg text-body-sm font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'section-3' ? ACTIVE_TOC : ''}`}
                  href="#section-3"
                >
                  {' '}
                  3. 1-on-1 Session Privacy{' '}
                </a>{' '}
                <a
                  className={`toc-link block px-3 py-2 rounded-lg text-body-sm font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'section-4' ? ACTIVE_TOC : ''}`}
                  href="#section-4"
                >
                  {' '}
                  4. Data Retention & Erasure{' '}
                </a>{' '}
                <a
                  className={`toc-link block px-3 py-2 rounded-lg text-body-sm font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'section-5' ? ACTIVE_TOC : ''}`}
                  href="#section-5"
                >
                  {' '}
                  5. Third-Party Safeguards{' '}
                </a>{' '}
                <a
                  className={`toc-link block px-3 py-2 rounded-lg text-body-sm font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'section-6' ? ACTIVE_TOC : ''}`}
                  href="#section-6"
                >
                  {' '}
                  6. Your Rights & Transcripts{' '}
                </a>{' '}
                <a
                  className={`toc-link block px-3 py-2 rounded-lg text-body-sm font-label-md text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'section-7' ? ACTIVE_TOC : ''}`}
                  href="#section-7"
                >
                  {' '}
                  7. Contact Trust Officer{' '}
                </a>
              </nav>
              <div className="pt-4 mt-4 bg-surface-container-low p-4 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
                  <span className="material-symbols-outlined text-[20px]">file_download</span>
                  <span className="text-sm font-bold">Offline Copy</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {' '}
                  Download the unmodified, cryptographically signed archival PDF.{' '}
                </p>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full mt-2 py-2 px-3 bg-surface-container-lowest text-on-surface hover:text-primary text-label-sm font-label-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Print / Save as PDF</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </button>
              </div>
            </div>
            <div className="bg-primary/5 p-5 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shield
                </span>
                <span className="font-label-lg text-label-lg font-bold">Zero Data Brokering</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                We never sell, trade, or package your diagnostic records, system logs, or private
                communications to advertising brokerages or third parties.{' '}
              </p>
            </div>
          </aside>
          <article className="lg:col-span-8 space-y-12">
            <div className="block lg:hidden bg-surface-container-lowest p-4 rounded-xl shadow-sm">
              <label
                className="block font-label-sm text-label-sm uppercase tracking-wider text-outline mb-2"
                htmlFor="mobile-toc-select"
              >
                Jump to Section
              </label>{' '}
              <select
                className="w-full bg-surface-container-low text-on-surface text-body-sm rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-primary"
                id="mobile-toc-select"
                onChange={(e) => {
                  if (e.target.value) window.location.hash = e.target.value;
                }}
              >
                <option value="#section-1">1. Information We Collect</option>
                <option value="#section-2">2. Diagnostics Data Usage</option>
                <option value="#section-3">3. 1-on-1 Session Privacy</option>
                <option value="#section-4">4. Data Retention & Erasure</option>
                <option value="#section-5">5. Third-Party Safeguards</option>
                <option value="#section-6">6. Your Rights & Transcripts</option>
                <option value="#section-7">7. Contact Trust Officer</option>
              </select>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                  <span className="material-symbols-outlined text-[24px]">menu_book</span>
                </div>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Our Privacy Philosophy in 30 Seconds
                  </h2>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Plain-English Primer
                  </p>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                When you ask for technical assistance on ExpertHelp, you entrust us with device serial
                numbers, network screenshots, printer logs, and direct conversations. We treat this technical
                material as confidential client work product. Your interactions exist solely to troubleshoot
                your inquiry, not to fuel algorithmic ad markets.{' '}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <span className="font-label-sm text-label-sm text-primary font-bold block mb-1">
                    Ownership
                  </span>{' '}
                  <span className="font-body-sm text-body-sm text-on-surface">
                    You own 100% of your chat records and hardware images.
                  </span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <span className="font-label-sm text-label-sm text-primary font-bold block mb-1">
                    Confidentiality
                  </span>{' '}
                  <span className="font-body-sm text-body-sm text-on-surface">
                    Experts sign strict Non-Disclosure Agreements.
                  </span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <span className="font-label-sm text-label-sm text-primary font-bold block mb-1">
                    Instant Deletion
                  </span>{' '}
                  <span className="font-body-sm text-body-sm text-on-surface">
                    One-click immediate purge of session diagnostics.
                  </span>
                </div>
              </div>
            </div>
            <section
              className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24"
              id="section-1"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-headline-md text-headline-md text-primary font-bold">01</span>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Information We Collect
                  </h2>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Scope & Transparency
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                We limit collection exclusively to telemetry, device parameters, and contact descriptors
                directly required to connect you with an accredited specialist and resolve technical
                incidents.{' '}
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-surface-container-low rounded-lg space-y-1">
                  <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                    A. Diagnostic Logs & Visual Artifacts
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {' '}
                    Screen captures, error dialogue codes, device firmware numbers, printer queue status
                    dumps, and router config summaries provided during your diagnostic session.{' '}
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-lg space-y-1">
                  <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                    B. Direct Transcripts & Annotations
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {' '}
                    Live bidirectional text transmissions, guided technical walk-through audio files (where
                    explicitly permitted), and interactive expert steps documented on screen.{' '}
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-lg space-y-1">
                  <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                    C. Contact Identifiers
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {' '}
                    Your preferred display name and validated email address used to send session summaries and
                    restore incomplete guidance threads.{' '}
                  </p>
                </div>
              </div>
            </section>
            <section
              className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24"
              id="section-2"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-headline-md text-headline-md text-primary font-bold">02</span>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    How We Use Diagnostics Data
                  </h2>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Functional Operation
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                Data provided during troubleshooting serves a single definitive mission: helping the certified
                specialist correctly isolate your issue, formulate remedial configurations, and verify
                stability.{' '}
              </p>
              <div className="p-6 bg-surface-container rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg font-bold">
                  <span className="material-symbols-outlined text-[22px]">verified</span>
                  <span>Hardware Isolation Clause</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {' '}
                  Uploaded configuration scripts and scanner dump files are processed in sandboxed memory
                  spaces. Once your expert confirms resolution or you dismiss the guidance thread, diagnostic
                  execution caches are unmounted and scheduled for automatic scrubbing.{' '}
                </p>
              </div>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                    check_circle
                  </span>
                  <span>
                    We do not scan your screenshots for facial recognition or commercial ad profiling.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                    check_circle
                  </span>
                  <span>
                    Wi-Fi passwords, personal credentials, or local IP ranges inadvertently shared during
                    screen reviews are sanitized from audit histories.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                    check_circle
                  </span>
                  <span>
                    System metadata is never aggregated to build marketing fingerprints of your household
                    devices.
                  </span>
                </li>
              </ul>
            </section>
            <section
              className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24"
              id="section-3"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-headline-md text-headline-md text-primary font-bold">03</span>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    1-on-1 Session Privacy
                  </h2>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Independent Advisory Protocol
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                Every session connects you with a rigorously vetted individual specialist. To safeguard your
                personal privacy while interacting in real time:{' '}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-surface-container-low rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg font-bold">
                    <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
                    <span>Enforced Anonymity</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {' '}
                    Experts see only your chosen screen moniker. Your private physical residence, IP origin,
                    and secondary email are masked by default.{' '}
                  </p>
                </div>
                <div className="p-5 bg-surface-container-low rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg font-bold">
                    <span className="material-symbols-outlined text-primary text-[20px]">gavel</span>
                    <span>Binding Non-Disclosure</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {' '}
                    Every verified specialist signs binding data-handling agreements forbidding local
                    retention or re-transmission of user files.{' '}
                  </p>
                </div>
              </div>
            </section>
            <section
              className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24"
              id="section-4"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-headline-md text-headline-md text-primary font-bold">04</span>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Data Retention & One-Click Erasure
                  </h2>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Your Total Control
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                By default, troubleshooting transcripts remain accessible for 30 calendar days so you can
                re-read instructions or ask follow-up questions if a problem reoccurs.{' '}
              </p>
              <div className="p-6 bg-surface-container-high rounded-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-label-lg text-label-lg font-bold text-on-surface block">
                      One-Click Session Erasure Protocol
                    </span>{' '}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Permanent irreversible removal of transcripts and uploaded attachments.
                    </span>
                  </div>
                  <button
                    className={`px-4 py-2.5 text-on-primary rounded-lg text-label-sm font-label-sm hover:bg-primary-container shadow-sm transition-all flex items-center gap-2 shrink-0 ${
                      purge === 'done' ? 'bg-outline cursor-not-allowed' : 'bg-primary'
                    }`}
                    id="erase-demo-btn"
                    type="button"
                    disabled={purge !== 'idle'}
                    onClick={requestPurge}
                  >
                    {purge === 'idle' && (
                      <>
                        <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                        <span>Request Instant Purge</span>
                      </>
                    )}
                    {purge === 'running' && (
                      <>
                        <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>{' '}
                        <span>Scrubbing...</span>
                      </>
                    )}
                    {purge === 'done' && (
                      <>
                        <span className="material-symbols-outlined text-[18px]">done</span>{' '}
                        <span>Session Purged</span>
                      </>
                    )}
                  </button>
                </div>
                <p
                  className={`${purge === 'done' ? '' : 'hidden '}text-label-sm font-label-sm text-primary flex items-center gap-1.5 pt-2`}
                  id="purge-status"
                >
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  <span>
                    Simulated session purged: All local cache, logs, and transcripts removed from records.
                  </span>
                </p>
              </div>
            </section>
            <section
              className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24"
              id="section-5"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-headline-md text-headline-md text-primary font-bold">05</span>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Third-Party Safeguards & Infrastructure
                  </h2>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Technical Defenses
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                Our cloud backbone uses SOC-2 certified datacenters located within ISO-27001 facilities. All
                network traffic between your client device and our support console is protected via Transport
                Layer Security (TLS 1.3) with ephemeral 256-bit AES cryptographic keys.{' '}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-surface-container-low rounded-lg">
                  <span className="font-label-sm text-label-sm text-outline font-bold block mb-1">
                    Data at Rest
                  </span>{' '}
                  <span className="font-body-md text-body-md font-semibold text-on-surface">
                    AES-256 Bit Encryption
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Disks are continuously encrypted; backups are segmented.
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low rounded-lg">
                  <span className="font-label-sm text-label-sm text-outline font-bold block mb-1">
                    Data in Transit
                  </span>{' '}
                  <span className="font-body-md text-body-md font-semibold text-on-surface">
                    HSTS + Strict TLS 1.3
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Direct forward secrecy applied across all endpoints.
                  </p>
                </div>
              </div>
            </section>
            <section
              className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24"
              id="section-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-headline-md text-headline-md text-primary font-bold">06</span>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Your Rights & Transcripts
                  </h2>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Universal Access
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                Regardless of whether you reside under GDPR, CCPA, or other regional privacy jurisdictions, we
                provide uniform, equitable data rights globally:{' '}
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">download</span>
                  <div>
                    <strong className="font-label-md text-label-md text-on-surface block">
                      Right to Portability & Transcript Export
                    </strong>{' '}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Download all advice threads in human-readable Markdown or JSON format at any time.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                    edit_document
                  </span>
                  <div>
                    <strong className="font-label-md text-label-md text-on-surface block">
                      Right to Rectification
                    </strong>{' '}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Update contact addresses or strike inadvertently uploaded sensitive pictures with
                      immediate effect.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">block</span>
                  <div>
                    <strong className="font-label-md text-label-md text-on-surface block">
                      Right to Object
                    </strong>{' '}
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Opt out of all non-essential technical notifications with zero hindrance.
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-sm space-y-6 scroll-mt-24"
              id="section-7"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-headline-md text-headline-md text-primary font-bold">07</span>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                    Contact Trust Officer
                  </h2>
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Direct Human Channel
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                Need manual file redactions, an archived audit transcript, or have an inquiry regarding
                technical telemetry? Reach our dedicated Trust & Privacy Office directly. We respond within 24
                business hours.{' '}
              </p>
              <div className="bg-surface-container p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg font-bold">
                    <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
                    <span>trust-officer@experthelp.com</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {' '}
                    Physical Mail: ExpertHelp Trust Operations, 548 Market St, Suite 2900, San Francisco,
                    CA{' '}
                  </p>
                </div>
                <a
                  className="px-5 py-2.5 bg-primary text-on-primary rounded-lg text-label-md font-label-md hover:bg-primary-container shadow-sm transition-all inline-flex items-center gap-2 shrink-0"
                  href="mailto:trust-officer@experthelp.com"
                >
                  <span>Send Inquiries</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </a>
              </div>
            </section>
            <div className="pt-6 pb-12 flex flex-col sm:flex-row items-center justify-between text-label-sm font-label-sm text-outline gap-4">
              <p>ExpertHelp Inc. Public Legal Specification • Document ID: EXP-PRIV-2024-V2.4</p>
              <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
                <span>Back to top</span>
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
