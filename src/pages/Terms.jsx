import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ARTICLE_IDS = ['art-1', 'art-2', 'art-3', 'art-4', 'art-5', 'art-6', 'art-7'];
const ACTIVE_TOC = ' bg-surface-container-low text-primary font-semibold';

export default function Terms() {
  const [activeId, setActiveId] = useState(''); // article currently in view (highlights the index)

  useEffect(() => {
    const sections = ARTICLE_IDS.map((id) => document.getElementById(id)).filter(Boolean);
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
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[72rem] h-96 bg-gradient-to-b from-primary-fixed/30 via-surface-container-high/20 to-transparent blur-3xl pointer-events-none -z-10" />
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 w-full">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Legal Registry • Verified Guidance
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-primary-fixed/40 px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
              <span className="font-label-sm text-label-sm font-bold text-on-primary-fixed-variant">
                Fair, Human & Plain-Language Terms
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
              Terms of Service
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {' '}
              These Terms set out clear, transparent rules for connecting with independent technical
              specialists, sharing diagnostic information, and keeping physical safety front and center.{' '}
            </p>
          </div>
          <div className="mt-8 bg-surface-container-lowest rounded-xl p-5 shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <span className="block font-label-md text-label-md uppercase text-outline">Effective Date</span>{' '}
              <span className="font-body-md text-body-md font-semibold text-on-surface">
                October 24, 2024
              </span>
            </div>
            <div>
              <span className="block font-label-md text-label-md uppercase text-outline">
                Document Edition
              </span>{' '}
              <span className="font-body-md text-body-md font-semibold text-on-surface">Agreement v3.1</span>
            </div>
            <div>
              <span className="block font-label-md text-label-md uppercase text-outline">Jurisdiction</span>{' '}
              <span className="font-body-md text-body-md font-semibold text-on-surface">
                Global Remote Use
              </span>
            </div>
            <div>
              <span className="block font-label-md text-label-md uppercase text-outline">Reading Time</span>{' '}
              <span className="font-body-md text-body-md font-semibold text-on-surface">
                Approx. 7 Minutes
              </span>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <aside className="hidden lg:block lg:col-span-4 sticky top-20 space-y-4">
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 bg-surface-container-low -mx-6 -mt-6 px-6 pt-5 rounded-t-xl">
                  <span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">menu_book</span>{' '}
                    Document Outline{' '}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase bg-surface-container px-2 py-0.5 rounded text-on-surface-variant">
                    7 Articles
                  </span>
                </div>
                <nav className="space-y-1" id="legal-toc">
                  <a
                    className={`toc-link flex items-center justify-between px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'art-1' ? ACTIVE_TOC : ''}`}
                    href="#art-1"
                  >
                    <span className="truncate">1. Acceptance & Scope</span>
                    <span className="font-label-sm text-label-sm text-outline">§ 1</span>
                  </a>{' '}
                  <a
                    className={`toc-link flex items-center justify-between px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'art-2' ? ACTIVE_TOC : ''}`}
                    href="#art-2"
                  >
                    <span className="truncate">2. Platform & Specialist Role</span>
                    <span className="font-label-sm text-label-sm text-outline">§ 2</span>
                  </a>{' '}
                  <a
                    className={`toc-link flex items-center justify-between px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'art-3' ? ACTIVE_TOC : ''}`}
                    href="#art-3"
                  >
                    <span className="truncate">3. Community & Conduct</span>
                    <span className="font-label-sm text-label-sm text-outline">§ 3</span>
                  </a>{' '}
                  <a
                    className={`toc-link flex items-center justify-between px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'art-4' ? ACTIVE_TOC : ''}`}
                    href="#art-4"
                  >
                    <span className="truncate">4. Safety-First Protocols</span>
                    <span className="font-label-sm text-label-sm text-error">Critical</span>
                  </a>{' '}
                  <a
                    className={`toc-link flex items-center justify-between px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'art-5' ? ACTIVE_TOC : ''}`}
                    href="#art-5"
                  >
                    <span className="truncate">5. Customer Data & Notes</span>
                    <span className="font-label-sm text-label-sm text-outline">§ 5</span>
                  </a>{' '}
                  <a
                    className={`toc-link flex items-center justify-between px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'art-6' ? ACTIVE_TOC : ''}`}
                    href="#art-6"
                  >
                    <span className="truncate">6. Remote Disclaimers</span>
                    <span className="font-label-sm text-label-sm text-outline">§ 6</span>
                  </a>{' '}
                  <a
                    className={`toc-link flex items-center justify-between px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all${activeId === 'art-7' ? ACTIVE_TOC : ''}`}
                    href="#art-7"
                  >
                    <span className="truncate">7. Account Security & Help</span>
                    <span className="font-label-sm text-label-sm text-outline">§ 7</span>
                  </a>
                </nav>
                <div className="bg-surface-container-low rounded-lg p-3 text-on-surface-variant space-y-2">
                  <div className="flex items-center gap-2 text-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]">help_center</span>
                    <span>Need legal clarification?</span>
                  </div>
                  <p className="font-body-sm text-body-sm leading-snug">
                    {' '}
                    Our help desk coordinates direct answers regarding privacy or terms compliance within 24
                    hours.{' '}
                  </p>
                  <a
                    className="inline-flex items-center gap-1 font-label-sm text-label-sm font-bold text-primary hover:text-primary-container"
                    href="#art-7"
                  >
                    {' '}
                    Jump to Help Desk{' '}
                    <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                  </a>
                </div>
              </div>
            </aside>
            <article className="lg:col-span-8 bg-surface-container-lowest p-6 sm:p-10 rounded-2xl shadow-sm space-y-12">
              <div className="bg-surface-container-low rounded-xl p-6 space-y-3">
                <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">handshake</span> Our Commitment to
                  Direct Clarity{' '}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {' '}
                  We wrote these Terms to be understood by humans rather than hidden behind dense legalese. By
                  accessing or using the ExpertHelp platform, you enter into a binding agreement governed by
                  mutual respect, transparent boundaries, and an unyielding commitment to physical safety when
                  performing hardware or appliance troubleshooting.{' '}
                </p>
              </div>
              <section className="scroll-mt-20 space-y-4" id="art-1">
                <div className="flex items-center gap-3">
                  <span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">
                    01
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    Acceptance of Terms
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {' '}
                  By registering an account, submitting an inquiry, or interacting with any specialist across
                  our digital platform, you acknowledge that you have read, understood, and consented to these
                  Terms of Service. If you do not agree with each term, you must discontinue your use of
                  ExpertHelp immediately.{' '}
                </p>
                <div className="bg-surface-container-lowest rounded-lg p-4 space-y-2">
                  <p className="font-label-lg text-label-lg text-on-surface font-semibold">
                    1.1 Eligibility & Representation
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {' '}
                    You affirm that you are at least 18 years of age (or the legal age of majority in your
                    jurisdiction) and possess full legal capacity to enter into binding agreements. If
                    communicating on behalf of a household or enterprise, you warrant that you hold express
                    authority to apply technical recommendations to the devices in question.{' '}
                  </p>
                </div>
              </section>
              <section className="scroll-mt-20 space-y-4" id="art-2">
                <div className="flex items-center gap-3">
                  <span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">
                    02
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    The ExpertHelp Platform & Scope of Advice
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {' '}
                  ExpertHelp operates an informational matching infrastructure designed to connect users who
                  need technical insights with independent, verified specialists across consumer electronics,
                  peripherals, network hardware, and consumer appliances.{' '}
                </p>
                <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong>Independent Advisory:</strong> Specialists on our platform are verified
                      independent contractors and domain authorities, not our direct employees or agents.
                      Their diagnostic observations reflect their individual practical expertise.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong>Remote Guidance Only:</strong> All communications occur via text, synchronized
                      media, or remote sessions. Specialists cannot physically observe, touch, or handle your
                      equipment in the room.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      <strong>No Manufacturer Endorsement:</strong> Unless specifically highlighted, neither
                      ExpertHelp nor individual specialists represent, speak for, or act as an authorized
                      repair center for any third-party equipment brand.
                    </span>
                  </li>
                </ul>
              </section>
              <section className="scroll-mt-20 space-y-4" id="art-3">
                <div className="flex items-center gap-3">
                  <span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">
                    03
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    Community Conduct & Respectful Dialogue
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {' '}
                  Technical issues are stressful, but dignity and courtesy remain non-negotiable. We maintain
                  a zero-tolerance policy for hostility, abuse, or harassment directed at anyone on the
                  platform.{' '}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
                    <span className="font-label-md text-label-md text-primary font-bold uppercase flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">thumb_up</span> Expected
                      Conduct{' '}
                    </span>
                    <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5 list-disc pl-4">
                      <li>Provide accurate symptoms, error codes, and model details.</li>
                      <li>Maintain respectful, objective language throughout chats.</li>
                      <li>Follow safe testing sequences patiently.</li>
                    </ul>
                  </div>
                  <div className="bg-error-container/40 rounded-xl p-5 space-y-2">
                    <span className="font-label-md text-label-md text-error font-bold uppercase flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">block</span> Prohibited
                      Actions{' '}
                    </span>
                    <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5 list-disc pl-4">
                      <li>Harassment, profanity, or discriminatory statements.</li>
                      <li>Uploading deceptive, malicious, or explicit files.</li>
                      <li>Attempting to solicit offline or unvetted private channels.</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="scroll-mt-20 space-y-4" id="art-4">
                <div className="flex items-center gap-3">
                  <span className="size-7 rounded-lg bg-error-container text-error font-bold font-label-md text-label-md flex items-center justify-center">
                    04
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    Independent Specialist Guidance & Safety First
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {' '}
                  Physical safety takes precedence over every troubleshooting step. While our specialists
                  provide diagnostic methodologies, you are solely responsible for managing the physical
                  environment in which tests or adjustments take place.{' '}
                </p>
                <div className="bg-gradient-to-r from-error-container/60 via-surface-container-high to-surface-container-low rounded-xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 text-error">
                    <span className="material-symbols-outlined text-2xl">warning</span>
                    <h3 className="font-headline-sm text-headline-sm font-bold">
                      Mandatory Diagnostic Precautions
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed font-medium">
                    {' '}
                    Under no circumstances should you disassemble live power components or bypass manufacturer
                    safety switches. Always enforce the following rules:{' '}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-on-surface-variant font-body-sm text-body-sm">
                    <div className="bg-surface-container-lowest p-3.5 rounded-lg flex items-start gap-2">
                      <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">
                        electrical_services
                      </span>
                      <span>
                        <strong>High-Voltage Appliances:</strong> Completely unplug microwaves, power
                        supplies, or motor housings before inspecting internals. Beware of stored capacitor
                        energy.
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-lg flex items-start gap-2">
                      <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">
                        no_crash
                      </span>
                      <span>
                        <strong>Automotive Systems:</strong> Ensure vehicles are parked on flat grade with the
                        parking brake engaged and wheels chocked before accessing engine bays or
                        undercarriages.
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-lg flex items-start gap-2">
                      <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">
                        hvac
                      </span>
                      <span>
                        <strong>Gas & Combustion Lines:</strong> If you suspect fuel leakage or smell natural
                        gas, cease all communication immediately and contact local emergency services.
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-3.5 rounded-lg flex items-start gap-2">
                      <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">
                        shield_person
                      </span>
                      <span>
                        <strong>Protective Equipment:</strong> Wear insulated gloves and eye protection when
                        handling batteries, heated printing extruders, or high-pressure nozzles.
                      </span>
                    </div>
                  </div>
                  <p className="font-label-md text-label-md text-on-surface-variant italic">
                    {' '}
                    Notice: If at any moment you feel unqualified, unequipped, or physically uncomfortable
                    performing a physical action suggested during a session, you have an affirmative
                    obligation to stop and contact a licensed on-site technician.{' '}
                  </p>
                </div>
              </section>
              <section className="scroll-mt-20 space-y-4" id="art-5">
                <div className="flex items-center gap-3">
                  <span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">
                    05
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    Diagnostic Data & Transcripts Ownership
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {' '}
                  We respect your creative, diagnostic, and evidentiary property. Transparency regarding who
                  owns your troubleshooting documentation is fundamental to our high-trust relationship.{' '}
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      5.1 Customer Retains 100% Ownership
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {' '}
                      You retain complete intellectual property rights in any photographs, schematics, system
                      logs, serial captures, or narrative descriptions you upload to our platform. We make
                      zero claim of ownership over your personal files or device history.{' '}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      5.2 Limited Operating License
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {' '}
                      You grant ExpertHelp and the specialist engaged in your consultation a limited,
                      non-exclusive, royalty-free license solely to display, transmit, and analyze such
                      materials for the explicit purpose of diagnosing your inquiry.{' '}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      5.3 Consultation Transcripts
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {' '}
                      You are welcome to export, print, and preserve your complete troubleshooting transcripts
                      for personal use or future technical reference. We do not restrict your ability to keep
                      records of your repair history.{' '}
                    </p>
                  </div>
                </div>
              </section>
              <section className="scroll-mt-20 space-y-4" id="art-6">
                <div className="flex items-center gap-3">
                  <span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">
                    06
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    Disclaimers & Limitations of Remote Advice
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {' '}
                  While our specialists bring decades of field and workshop experience, remote diagnostics
                  cannot replicate the exhaustive sensory feedback of hands-on physical teardowns.{' '}
                </p>
                <div className="bg-surface-container-lowest rounded-xl p-5 space-y-3">
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    <strong>“As-Is” Informational Service:</strong> All advice, guidance, walk-through
                    checklists, and commentary are provided strictly on an “as-is” and “as-available”
                    informational basis. We make no warranty that remote troubleshooting will resolve every
                    intermittent bug, proprietary firmware malfunction, or terminal mechanical failure.{' '}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    <strong>Warranty Considerations:</strong> Opening sealed chassis, flashing non-standard
                    firmware, or modifying manufacturer circuitry may void existing consumer warranties. You
                    assume responsibility for reviewing manufacturer warranty policies prior to executing
                    physical adjustments.{' '}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    <strong>Liability Cap:</strong> To the fullest extent permitted by applicable law, neither
                    ExpertHelp nor any contributing specialist shall be liable for indirect, incidental,
                    consequential, or punitive damages resulting from equipment operation, data loss, or
                    physical self-repair attempts.{' '}
                  </p>
                </div>
              </section>
              <section className="scroll-mt-20 space-y-4" id="art-7">
                <div className="flex items-center gap-3">
                  <span className="size-7 rounded-lg bg-surface-container text-primary font-bold font-label-md text-label-md flex items-center justify-center">
                    07
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    Account Security & Help Desk Support
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {' '}
                  Maintaining account integrity protects your private session logs and ensures uninterrupted
                  communication with our verified specialist network.{' '}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">lock</span> Your
                      Credentials{' '}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {' '}
                      You are solely responsible for maintaining the confidentiality of your sign-in details.
                      If you suspect unauthorized access to your account, alert our support desk
                      immediately.{' '}
                    </p>
                  </div>
                  <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">history_edu</span>{' '}
                      Modifications{' '}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {' '}
                      We review these terms routinely. In the event of material shifts to safety rules or
                      ownership terms, we will provide at least 15 days notice before changes take
                      effect.{' '}
                    </p>
                  </div>
                </div>
                <div className="mt-8 bg-surface-container rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1.5 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold">
                      <span className="material-symbols-outlined text-[18px]">support_agent</span> Help Desk
                      Standing By{' '}
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Have Questions About These Terms?
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                      {' '}
                      Our compliance and member advocacy team is available around the clock to address any
                      concerns.{' '}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                    <Link
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary-container transition-all shadow-sm"
                      to="/contact"
                    >
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
