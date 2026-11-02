import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TOC = [
  ['art-1', '1. Acceptance of Terms'],
  ['art-2', '2. No-Payment & Disclaimers'],
  ['art-3', '3. Specialist Guidance & Safety'],
  ['art-4', '4. Data & Transcripts Ownership'],
  ['art-5', '5. Remote Advice Disclaimers'],
  ['art-6', '6. Account Security & Help Desk'],
];
const ACTIVE_TOC = ' bg-surface-container-low text-primary font-semibold';

export default function Terms() {
  const [activeId, setActiveId] = useState(''); // article currently in view (highlights the index)

  useEffect(() => {
    const sections = TOC.map(([id]) => document.getElementById(id)).filter(Boolean);
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      let currentId = '';
      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) currentId = section.getAttribute('id');
      });
      setActiveId(currentId);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[72rem] h-96 bg-gradient-to-b from-primary-fixed/30 via-surface-container-high/20 to-transparent blur-3xl pointer-events-none -z-10"></div>

<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 w-full">

<div className="flex flex-wrap items-center justify-between gap-3 mb-6">
<div className="inline-flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full">
<span className="size-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Legal Registry • Verified Guidance</span>
</div>
</div>
<div className="space-y-4">
<h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Terms and Conditions</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          These Terms set out clear, transparent rules for connecting with independent technical specialists, sharing diagnostic information, and keeping physical safety front and center.
        </p>
</div>

</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<aside className="hidden lg:block lg:col-span-4 sticky top-20 space-y-4">
<div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-5">
<div className="flex items-center justify-between pb-3 bg-surface-container-low -mx-6 -mt-6 px-6 pt-5 rounded-t-xl">
<span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">menu_book</span>
                Document Outline
              </span>
<span className="font-label-sm text-label-sm uppercase bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">6 Articles</span>
</div>
<nav className="space-y-1" id="legal-toc">
{TOC.map(([id, label]) => (
<a key={id} className={`toc-link flex items-center justify-between px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === id ? ACTIVE_TOC : ''}`} href={`#${id}`}>
<span className="truncate">{label}</span>
</a>
))}
</nav>

</div>
</aside>

<article className="lg:col-span-8 bg-surface-container-lowest p-6 sm:p-10 rounded-2xl shadow-sm space-y-12">

<div className="bg-surface-container-low rounded-xl p-6 space-y-3">

<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">These Terms to be understood by humans rather than hidden behind dense legalalities. By accessing or using the AskAnythingAnswers platform, you enter into a binding agreement governed by mutual respect, transparent boundaries, and an unyielding commitment to physical safety when performing hardware or appliance troubleshooting.
            </p>
</div>

<section className="scroll-mt-20 space-y-4" id="art-1">
<div className="flex items-center gap-3">
<span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">01</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Acceptance of Terms</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed"><b>An Informational Marketplace: </b>The platform is an online, educational venue designed to connect users with independent experts across various categories, including auto repair, smart appliance, software and more.</p><div><b>No Professional Advice or Priviledge:</b> All communication, answers, and interactions facilitated on or through the platform are for general information and educational purposes only. Using the platform does not establish a user-client relationship. The information provided is not a substitute for in-person evaluations, diagnostic testing, or formal professional advice from a licensed practitioner in your jurisdiction.</div><div><b>Independent Contractors: </b>The experts responding to your questions are independent third-party operators and are not employees, partner, agents, or legal representatives of the Platform. We do not direct, supervise, or control the professional judgement of these experts.</div><div><b>AI Convinience Tools: </b>The platform may offer supplemental routing features or preliminary convenience tools powered by automated systems and artificial intelligence (AI). Automated insights are strictly for informational convenience, may contain slight inaccuracies, and must never be relied upon for critical, life-altering, financial, or medical decisions. <div><div><div><ul style={{ paddingInlineStart: "48px" }}></ul></div></div></div></div>
<div className="bg-surface-container-lowest rounded-lg p-4 space-y-2">
<p className="font-label-lg text-label-lg text-on-surface font-semibold">1.1 Emergency and Crisis Restrictions </p>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed"><strong>CRITICAL SAFETY WARNING:</strong> EMERGENCY QUESTIONS AND LIFE-THREATENING SITUATIONS MUST NOT BE DIRECTED TO THE PLATFORM. </p><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">If you are experiencing a medical emergency, a mental health crisis, or a dangerous safety hazard (such as a severe automotive failure or immediate pet poisoning), you must immediately contact emergency services or seek in-person professional care.</p>
</div>
</section>

<section className="scroll-mt-20 space-y-4" id="art-2">
<div className="flex items-center gap-3">
<span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">02</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">No-Payment Policy, Verification and Content Disclaimers</h2>
</div>

<ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span><strong>No Financial Transactions:</strong> Since this is platform build for knowledge-sharing of experts in the specific field, we do not collect payment card details, bank account credentials or financial purchases for Q&amp;A features. </span><span><br /></span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span><strong>Third-Party Verification:</strong> While we implement third-party background filters or credentials validation checks for participating experts to foster  a trusted environment, these checks reflect information available at the time of verification. We do not explicitly warrant, guarantee, or represent the absolute accuracy of an expert's purported identity, real-time license status, or continous professional competence. </span>
</li>
<li className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span><strong>User Relying on Content :</strong> We do not pre-screen, monitor, filter, or modify the direct substance of answers before they are posted. You access and rely on information provided by experts or automated tools entirely at your own risk. We disclaim all liability for any loss, damage, or adverse outcome resulting from actions you take based on content found on the website. </span>
</li>
</ul>
</section>

<section className="scroll-mt-20 space-y-4" id="art-3">
<div className="flex items-center gap-3">
<span className="size-7 rounded-lg bg-error-container text-error font-bold font-label-md text-label-md flex items-center justify-center">03</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Independent Specialist Guidance &amp; Safety First</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Physical safety takes precedence over every troubleshooting step. While our specialists provide diagnostic methodologies, you are solely responsible for managing the physical environment in which tests or adjustments take place.
            </p>

<div className="bg-gradient-to-r from-error-container/60 via-surface-container-high to-surface-container-low rounded-xl p-6 shadow-sm space-y-4">
<div className="flex items-center gap-3 text-error">
<span className="material-symbols-outlined text-2xl">warning</span>
<h3 className="font-headline-sm text-headline-sm font-bold">Mandatory Diagnostic Precautions</h3>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed font-medium">
                Under no circumstances should you disassemble live power components or bypass manufacturer safety switches. Always enforce the following rules:
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-on-surface-variant font-body-sm text-body-sm">
<div className="bg-surface-container-lowest p-3.5 rounded-lg flex items-start gap-2">
<span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">electrical_services</span>
<span><strong>High-Voltage Appliances:</strong> Completely unplug microwaves, power supplies, or motor housings before inspecting internals. Beware of stored capacitor energy.</span>
</div>
<div className="bg-surface-container-lowest p-3.5 rounded-lg flex items-start gap-2">
<span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">no_crash</span>
<span><strong>Automotive Systems:</strong> Ensure vehicles are parked on flat grade with the parking brake engaged and wheels chocked before accessing engine bays or undercarriages.</span>
</div>
<div className="bg-surface-container-lowest p-3.5 rounded-lg flex items-start gap-2">
<span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">hvac</span>
<span><strong>Gas &amp; Combustion Lines:</strong> If you suspect fuel leakage or smell natural gas, cease all communication immediately and contact local emergency services.</span>
</div>
<div className="bg-surface-container-lowest p-3.5 rounded-lg flex items-start gap-2">
<span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">shield_person</span>
<span><strong>Protective Equipment:</strong> Wear insulated gloves and eye protection when handling batteries, heated printing extruders, or high-pressure nozzles.</span>
</div>
</div>
<p className="font-label-md text-label-md text-on-surface-variant italic">
                Notice: If at any moment you feel unqualified, unequipped, or physically uncomfortable performing a physical action suggested during a session, you have an affirmative obligation to stop and contact a licensed on-site technician.
              </p>
</div>
</section>

<section className="scroll-mt-20 space-y-4" id="art-4">
<div className="flex items-center gap-3">
<span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">04</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Diagnostic Data &amp; Transcripts Ownership</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We respect your creative, diagnostic, and evidentiary property. Transparency regarding who owns your troubleshooting documentation is fundamental to our high-trust relationship.
            </p>
<div className="space-y-3">
<div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">4.1 Customer Retains 100% Ownership</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  You retain complete intellectual property rights in any photographs, schematics, system logs, serial captures, or narrative descriptions you upload to our platform. We make zero claim of ownership over your personal files or device history.
                </p>
</div>
<div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">4.2 Limited Operating License</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  You grant AskAnthingAnswers and the specialist engaged in your consultation a limited, non-exclusive, royalty-free license solely to display, transmit, and analyze such materials for the explicit purpose of diagnosing your inquiry.
                </p>
</div>
<div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">4.3 Consultation Transcripts</span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  You are welcome to export, print, and preserve your complete troubleshooting transcripts for personal use or future technical reference. We do not restrict your ability to keep records of your repair history.
                </p>
</div>
</div>
</section>

<section className="scroll-mt-20 space-y-4" id="art-5">
<div className="flex items-center gap-3">
<span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">05</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Disclaimers &amp; Limitations of Remote Advice</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              While our specialists bring decades of field and workshop experience, remote diagnostics cannot replicate the exhaustive sensory feedback of hands-on physical teardowns.
            </p>
<div className="bg-surface-container-lowest rounded-xl p-5 space-y-3">
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
<strong>“As-Is” Informational Service:</strong> All advice, guidance, walk-through checklists, and commentary are provided strictly on an “as-is” and “as-available” informational basis. We make no warranty that remote troubleshooting will resolve every intermittent bug, proprietary firmware malfunction, or terminal mechanical failure.
              </p>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
<strong>Warranty Considerations:</strong> Opening sealed chassis, flashing non-standard firmware, or modifying manufacturer circuitry may void existing consumer warranties. You assume responsibility for reviewing manufacturer warranty policies prior to executing physical adjustments.
              </p>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
<strong>Liability Cap:</strong> To the fullest extent permitted by applicable law, neither AskAnythingAnswers nor any contributing specialist shall be liable for indirect, incidental, consequential, or punitive damages resulting from equipment operation, data loss, or physical self-repair attempts.
              </p>
</div>
</section>

<section className="scroll-mt-20 space-y-4" id="art-6">
<div className="flex items-center gap-3">
<span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">06</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Account Security &amp; Help Desk Support</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Maintaining account integrity protects your private session logs and ensures uninterrupted communication with our verified specialist network.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-surface-container-low rounded-xl p-5 space-y-2">
<span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">lock</span>
                  Your Credentials
                </span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  You are solely responsible for maintaining the confidentiality of your sign-in details. If you suspect unauthorized access to your account, alert our support desk immediately.
                </p>
</div>
<div className="bg-surface-container-low rounded-xl p-5 space-y-2">
<span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">history_edu</span>
                  Modifications
                </span>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We review these terms routinely. In the event of material shifts to safety rules or ownership terms, we will provide at least 15 days notice before changes take effect.
                </p>
</div>
</div>

<div className="mt-8 bg-surface-container rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="space-y-1.5 text-center sm:text-left">
<div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold">
<span className="material-symbols-outlined text-[18px]">support_agent</span>
                  Help Desk Standing By
                </div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Have Questions About These Terms?</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  Our compliance and member advocacy team is available around the clock to address any concerns.
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
