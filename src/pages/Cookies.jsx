import { Link } from 'react-router-dom';
import { useState } from 'react';

const PREF_KEY = 'aaa_cookie_prefs';

function SectionHead({ n, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">{n}</span>
      <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">{title}</h2>
    </div>
  );
}

function Toggle({ checked, onChange, id }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only peer" id={id} type="checkbox" />
      <div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
    </label>
  );
}

export default function Cookies() {
  const [drafts, setDrafts] = useState(() => {
    try {
      const s = JSON.parse(localStorage.getItem(PREF_KEY) || 'null');
      return s ? !!s.drafts : true;
    } catch { return true; }
  });
  const [latency, setLatency] = useState(() => {
    try {
      const s = JSON.parse(localStorage.getItem(PREF_KEY) || 'null');
      return s ? !!s.latency : false;
    } catch { return false; }
  });

  const savePrefs = () => {
    try { localStorage.setItem(PREF_KEY, JSON.stringify({ drafts, latency })); } catch { /* storage unavailable */ }
  };
  const resetPrefs = () => {
    setDrafts(true);
    setLatency(false);
    try { localStorage.removeItem(PREF_KEY); } catch { /* storage unavailable */ }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[72rem] h-96 bg-gradient-to-b from-primary-fixed/30 via-surface-container-high/20 to-transparent blur-3xl pointer-events-none -z-10"></div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 w-full">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Trust &amp; Legal • Cookies Policy</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm font-bold">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span>ZERO THIRD-PARTY TRACKERS • PRIVACY STANDARD</span>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Cookies Policy</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Clear, transparent rules regarding how client storage operates on AskAnythingAnswers strictly protect consultation privacy without behavioral advertising trackers or consumer profiling.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <aside className="hidden lg:block lg:col-span-4 sticky top-20 space-y-4"></aside>

            <article className="lg:col-span-8 bg-surface-container-lowest p-6 sm:p-10 rounded-2xl shadow-sm space-y-12">
              <div className="bg-surface-container-low rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-primary font-label-md text-label-md font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">shield</span>
                  <span>Zero Advertising Tracker Standard</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">AskAnythingAnswers is committed to zero advertising tracking pixels, data brokering, and third-party behavioral profiling. Every cookie or storage item we use exists strictly to keep your chat connected, secure your session, and save your draft.</p>
              </div>

              <section className="scroll-mt-20 space-y-4" id="art-1">
                <SectionHead n="01" title="Purpose & Core Principles" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Cookies and similar browser storage are small pieces of data saved by your browser. We reject cross-site profiling and retargeting pixels. On our platform, they do three jobs:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-surface-container-low p-4 rounded-lg space-y-1">
                    <span className="material-symbols-outlined text-primary text-[22px]">sync_alt</span>
                    <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Connection Stability</h4>
                    <p className="font-body-sm text-xs text-on-surface-variant">Keeps your live chat connected when your network drops briefly.</p>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-lg space-y-1">
                    <span className="material-symbols-outlined text-primary text-[22px]">lock</span>
                    <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Secure Sign-in</h4>
                    <p className="font-body-sm text-xs text-on-surface-variant">Ensures only you and your matched professional can view your chat and uploaded files.</p>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-lg space-y-1">
                    <span className="material-symbols-outlined text-primary text-[22px]">pending_actions</span>
                    <h4 className="font-label-lg text-label-lg font-bold text-on-surface">Draft Saving</h4>
                    <p className="font-body-sm text-xs text-on-surface-variant">Keeps your request details if the page refreshes by accident.</p>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-2">
                <SectionHead n="02" title="Categories of Storage" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  The cookies we use are listed below by purpose:
                </p>
                <div className="overflow-x-auto border border-surface-container rounded-xl">
                  <table className="w-full text-left font-body-sm text-xs">
                    <thead className="bg-surface-container-low text-on-surface uppercase font-label-sm text-[10px] tracking-wider border-b border-surface-container">
                      <tr>
                        <th className="p-3">Category</th>
                        <th className="p-3">Identifier Name</th>
                        <th className="p-3">Exact Technical Function</th>
                        <th className="p-3">Lifespan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container">
                      <tr>
                        <td className="p-3 font-semibold text-primary">Strictly Necessary</td>
                        <td className="p-3 font-mono text-on-surface font-semibold">{/* TODO(owner): exact cookie name */}—</td>
                        <td className="p-3 text-on-surface-variant">Keeps you signed in during your session</td>
                        <td className="p-3 text-on-surface-variant">Session</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-primary">Strictly Necessary</td>
                        <td className="p-3 font-mono text-on-surface font-semibold">{/* TODO(owner): exact cookie name */}—</td>
                        <td className="p-3 text-on-surface-variant">Protects forms and requests from tampering</td>
                        <td className="p-3 text-on-surface-variant">24 Hours</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-secondary">Functional</td>
                        <td className="p-3 font-mono text-on-surface font-semibold">{/* TODO(owner): exact cookie name */}—</td>
                        <td className="p-3 text-on-surface-variant">Saves your request details while you move between pages</td>
                        <td className="p-3 text-on-surface-variant">7 Days</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-secondary">Functional</td>
                        <td className="p-3 font-mono text-on-surface font-semibold">{/* TODO(owner): exact cookie name */}—</td>
                        <td className="p-3 text-on-surface-variant">Saves your notification sound setting for expert replies</td>
                        <td className="p-3 text-on-surface-variant">30 Days</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-tertiary">Quality Analytics</td>
                        <td className="p-3 font-mono text-on-surface font-semibold">{/* TODO(owner): exact cookie name */}—</td>
                        <td className="p-3 text-on-surface-variant">Measures chat response speed, anonymously, to help match you faster</td>
                        <td className="p-3 text-on-surface-variant">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-3">
                <SectionHead n="03" title="Strict Third-Party Data Boundaries" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our infrastructure maintains complete isolation from consumer advertising networks and data aggregators.
                </p>
                <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span><strong>No Sale of Consumer Data:</strong> We do not sell or share your personal information or cookie identifiers with advertisers or data aggregators.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span><strong>No Online Payments:</strong> We do not collect payment details online, so no payment information is stored in cookies. Payment is handled in a secure way and remain only between you and us.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                    <span><strong>Private Chat Sessions:</strong> Cookies used for chat only keep your session connected and secure.</span>
                  </li>
                </ul>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-4">
                <SectionHead n="04" title="Client Preference Controls" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Manage your local browser preferences directly. Changes apply immediately to this active session without requiring page reload.
                </p>
                <div className="bg-surface-container-low rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between py-2 px-3 bg-surface-container-lowest rounded-lg">
                    <div>
                      <p className="font-label-md text-label-md font-bold text-on-surface">Strictly Essential Cookies</p>
                      <p className="font-body-sm text-xs text-outline">Session authentication, CSRF tokens, edge routing</p>
                    </div>
                    <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded font-bold">Always Active</span>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-surface-container-lowest rounded-lg">
                    <div>
                      <p className="font-label-md text-label-md font-bold text-on-surface">Saved Drafts and Preferences</p>
                      <p className="font-body-sm text-xs text-outline">Saves unsent request details and alert sound settings</p>
                    </div>
                    <Toggle id="pref-drafts" checked={drafts} onChange={setDrafts} />
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 bg-surface-container-lowest rounded-lg">
                    <div>
                      <p className="font-label-md text-label-md font-bold text-on-surface">Anonymous Performance Data</p>
                      <p className="font-body-sm text-xs text-outline">Measures response speed to help match you faster</p>
                    </div>
                    <Toggle id="pref-latency" checked={latency} onChange={setLatency} />
                  </div>
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button type="button" className="px-3.5 py-1.5 rounded-lg border border-outline-variant text-on-surface text-xs font-semibold hover:bg-surface-container transition-colors" onClick={resetPrefs}>Reset Defaults</button>
                    <button type="button" className="px-4 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-bold hover:bg-primary-container transition-colors shadow-sm" onClick={savePrefs}>Save Preferences</button>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-5">
                <SectionHead n="05" title="Managing Your Browser Controls" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  You hold total control over local storage via your browser&apos;s native security panels:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 bg-surface-container-low rounded-xl space-y-1.5">
                    <div className="flex items-center gap-1.5 font-label-md text-label-md font-bold text-on-surface">
                      <span className="material-symbols-outlined text-[16px] text-primary">laptop_chromebook</span>
                      <span>Google Chrome</span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                      Open <span className="font-mono bg-surface-container-lowest px-1 rounded">Settings &gt; Privacy &amp; Security &gt; Cookies</span>. Select your desired block or retention parameters.
                    </p>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-xl space-y-1.5">
                    <div className="flex items-center gap-1.5 font-label-md text-label-md font-bold text-on-surface">
                      <span className="material-symbols-outlined text-[16px] text-primary">security</span>
                      <span>Apple Safari</span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                      Open <span className="font-mono bg-surface-container-lowest px-1 rounded">Preferences &gt; Privacy</span> and enable <em>Prevent Cross-Site Tracking</em> and cookie restrictions.
                    </p>
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-xl space-y-1.5">
                    <div className="flex items-center gap-1.5 font-label-md text-label-md font-bold text-on-surface">
                      <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                      <span>Mozilla Firefox</span>
                    </div>
                    <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                      Access <span className="font-mono bg-surface-container-lowest px-1 rounded">Settings &gt; Privacy &amp; Security</span> and select <em>Strict Tracking Protection</em>.
                    </p>
                  </div>
                </div>
              </section>

              <section className="scroll-mt-20 space-y-4" id="art-6">
                <SectionHead n="06" title="Privacy Contact" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  For questions about this policy or privacy requests, contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>Contact</span>
                    <p className="font-headline-sm text-sm font-bold text-on-surface"><strong>TECH-FIN SOLUTIONS LLC</strong> / <strong>Support and Privacy Team</strong> / <strong><a href="mailto:support@askanythinganswers.com">support@askanythinganswers.com</a></strong></p>
                    <p className="font-body-sm text-xs text-primary font-bold pt-1">Response SLA: &lt; 24 business hours</p>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>Address</span>
                    <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed"><strong>TECH-FIN SOLUTIONS LLC, 3 Germay Dr, Ste 4 1983, Wilmington, DE 19804</strong></p>
                  </div>
                </div>

                <div className="mt-8 bg-surface-container rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1.5 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold">
                      <span className="material-symbols-outlined text-[18px]">support_agent</span>
                      Help Desk Standing By
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Have Questions Regarding Cookies?</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                      Our privacy and compliance team is available around the clock to address any concerns.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                    <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary-container transition-all shadow-sm" to="/contact">
                      <span>Contact Privacy Team</span>
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
