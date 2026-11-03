import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false); // shows the "message received" state (nothing is sent anywhere)
  const [category, setCategory] = useState('');
  const [openFaq, setOpenFaq] = useState(null); // only one answer open at a time, like the design
  const formRef = useRef(null);

  // "Reconnect Now": preselect the follow-up category and jump to the form
  function reconnect() {
    setCategory('Follow up on a recent troubleshooting session');
    document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  // "Send another note": back to an empty form
  function sendAnother() {
    setSubmitted(false);
    setCategory('');
    formRef.current?.reset();
  }

  const toggleFaq = (n) => setOpenFaq((cur) => (cur === n ? null : n));

  return (
    <div className="flex flex-col w-full">
      <section className="relative bg-surface pt-8 pb-12 overflow-hidden">
        <div className="absolute -top-32 -right-24 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary-fixed/35 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md uppercase tracking-wider mb-6"
          >
            <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[16px]">home</span> Home{' '}
            </Link>
            <span className="text-outline-variant">/</span>
            <Link className="hover:text-primary transition-colors" to="/contact">
              Help Desk
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-bold">Contact Support</span>
          </nav>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
              <span
                className="material-symbols-outlined text-[15px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                volunteer_activism
              </span>{' '}
              Friendly Human Assistance{' '}
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight">
              {' '}
              We're Here to Help You Connect with the Right Expert{' '}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {' '}
              Have a question about our platform, need help reconnecting with a specialist, or want to share
              feedback? Our support team and help desk specialists are available 24/7.{' '}
            </p>
            <div className="pt-2 flex items-center gap-6 text-on-surface-variant font-label-md text-label-md">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="font-semibold text-on-surface">Support Center Online</span>
              </div>
              <span className="text-outline-variant">•</span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
                <span>
                  Average Queue Time: <strong className="text-on-surface">54 seconds</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-16 relative z-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]">chat</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Live Expert Chat</h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-tertiary-fixed text-on-tertiary-fixed">
                  Instant
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {' '}
                Instant private connection with a specialist in under 90 seconds for immediate device and tech
                troubleshooting.{' '}
              </p>
            </div>
            <div>
              <Link
                className="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg group-hover:gap-3 transition-all"
                to="/#quick-match"
              >
                <span>Start Live Chat</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="size-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]">mark_email_unread</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Message Our Support Desk
                </h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-secondary-fixed text-on-secondary-fixed">
                  Desk
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {' '}
                For account assistance, past session transcripts, specialist pairing questions, or general
                inquiries. Response within 2 hours.{' '}
              </p>
            </div>
            <div>
              <a
                className="inline-flex items-center gap-2 text-secondary font-label-lg text-label-lg group-hover:gap-3 transition-all"
                href="#contact-form-section"
              >
                <span>Submit a Ticket</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="size-12 rounded-lg bg-tertiary-container/15 text-tertiary-container flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[26px]">sync_alt</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Specialist Reconnection</h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold tracking-wide uppercase bg-surface-container-high text-on-surface-variant">
                  Resume
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {' '}
                Looking to follow up with David M., Elena R., or your previous specialist? Enter your previous
                session ID to resume.{' '}
              </p>
            </div>
            <div>
              <button
                className="inline-flex items-center gap-2 text-tertiary-container font-label-lg text-label-lg group-hover:gap-3 transition-all"
                type="button"
                onClick={reconnect}
              >
                <span>Reconnect Now</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 w-full" id="contact-form-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 sm:p-10 shadow-lg">
            <div className="mb-8">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                Help Desk Inquiry
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                Send a Message Directly to Our Team
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                {' '}
                Fill out the details below and an on-duty specialist or customer experts will get back to you
                promptly.{' '}
              </p>
            </div>
            <form ref={formRef} className="space-y-6" id="helpDeskForm" onSubmit={handleSubmit}>
              <div className={submitted ? 'hidden' : 'space-y-6'} id="formFieldsContainer">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block font-label-lg text-label-lg text-on-surface mb-2"
                      htmlFor="userName"
                    >
                      {' '}
                      Your Name <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                        person
                      </span>{' '}
                      <input
                        className="w-full bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg pl-11 pr-4 py-3 text-body-md font-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all shadow-sm"
                        id="userName"
                        placeholder="e.g. Eleanor Vance"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block font-label-lg text-label-lg text-on-surface mb-2"
                      htmlFor="userEmail"
                    >
                      {' '}
                      Email Address <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                        alternate_email
                      </span>{' '}
                      <input
                        className="w-full bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg pl-11 pr-4 py-3 text-body-md font-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all shadow-sm"
                        id="userEmail"
                        placeholder="where we can reply"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block font-label-lg text-label-lg text-on-surface mb-2"
                      htmlFor="inquiryCategory"
                    >
                      {' '}
                      Inquiry Category <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                        category
                      </span>{' '}
                      <select
                        className="w-full bg-surface-container-low text-on-surface rounded-lg pl-11 pr-10 py-3 text-body-md font-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all appearance-none cursor-pointer shadow-sm"
                        id="inquiryCategory"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option disabled value="">
                          Select category...
                        </option>
                        <option value="I need help connecting with an expert">
                          I need help connecting with an expert
                        </option>
                        <option value="Follow up on a recent troubleshooting session">
                          Follow up on a recent troubleshooting session
                        </option>
                        <option value="Feedback on a specialist">Feedback on a specialist</option>
                        <option value="Website or technical question">Website or technical question</option>
                        <option value="Other question">Other question</option>
                      </select>{' '}
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block font-label-lg text-label-lg text-on-surface mb-2"
                      htmlFor="deviceTopic"
                    >
                      {' '}
                      Topic or Device Involved{' '}
                      <span className="text-on-surface-variant text-xs font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                        devices
                      </span>{' '}
                      <input
                        className="w-full bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg pl-11 pr-4 py-3 text-body-md font-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all shadow-sm"
                        id="deviceTopic"
                        placeholder="e.g. HP OfficeJet, MacBook Air, Toyota Civic"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      className="block font-label-lg text-label-lg text-on-surface"
                      htmlFor="userMessage"
                    >
                      {' '}
                      Your Message <span className="text-error">*</span>
                    </label>
                  </div>
                  <textarea
                    className="w-full bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg p-4 text-body-md font-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-y shadow-sm"
                    id="userMessage"
                    placeholder="Please describe how we can assist you in plain words..."
                    required
                    rows="5"
                  />
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                    verified_user
                  </span>
                  <p>
                    {' '}
                    We treat your information with care and will never send unsolicited spam. Average response
                    time: <span className="font-bold text-on-surface">under 15 minutes</span> during daylight
                    hours.{' '}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container hover:shadow-lg transition-all transform active:scale-95"
                    type="submit"
                  >
                    <span>Send Message to Support Desk</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                  <span className="text-xs text-outline hidden sm:inline-block">
                    Encrypted & confidential submission
                  </span>
                </div>
              </div>
              <div
                className={`${submitted ? '' : 'hidden '}py-12 px-6 text-center space-y-4`}
                id="formSuccessState"
              >
                <div className="size-16 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Message Received by Our Help Desk
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                  {' '}
                  Thank you for reaching out. We have logged your request and assigned ticket{' '}
                  <strong className="text-on-surface font-mono">#EXP-84920</strong>. One of our support
                  coordinators will email you within 15 minutes.{' '}
                </p>
                <button
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors"
                  type="button"
                  onClick={sendAnother}
                >
                  <span className="material-symbols-outlined text-[16px]">refresh</span> Send another
                  note{' '}
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md space-y-5">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">all_inclusive</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Operating Hours
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    24 Hours a Day, 7 Days a Week
                  </h4>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                Our network of vetted technical, device, and home specialists operates across all time zones to
                guarantee you never get stuck.{' '}
              </p>
              <div className="bg-surface-container-low rounded-lg p-3 text-xs flex items-center justify-between text-on-surface font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-primary animate-pulse" /> Live Dispatch Active{' '}
                </span>
                <span className="text-outline">Global Coverage</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md space-y-5">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">mail</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Direct Email
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface select-all">
                    support@askanythinganswers.com
                  </h4>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                Prefer email clients? Write directly to our management desk. Please include photos or screenshots
                if applicable.{' '}
              </p>
              <a
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg py-2.5 px-4 bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors"
                href="mailto:support@askanythinganswers.com"
              >
                <span className="material-symbols-outlined text-[16px]">outgoing_mail</span>
                <span>Open in Mail Client</span>
              </a>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">timer</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Our Standard
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">Response Guarantee</h4>
                </div>
              </div>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    <strong>Under 2 minutes</strong> for live expert matching.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>
                    <strong>Under 2 hours</strong> for help desk emails & session notes requests.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-primary text-on-primary rounded-xl p-6 shadow-lg relative overflow-hidden space-y-3">
              <div className="flex items-center gap-2 text-primary-fixed font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">verified</span> Safe Advisory
                Pledge{' '}
              </div>
              <h4 className="font-headline-sm text-headline-sm">Community Guidelines & Safety Promise</h4>
              <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                {' '}
                All specialists undergo thorough credential vetting, identity checks, and peer reviews to
                provide dependable, respectful, and safe guidance every single time.{' '}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <img
                  className="size-10 rounded-full object-cover shadow-sm ring-2 ring-primary-fixed"
                  src="/images/contact-safety-desk.jpg"
                  alt="Quality & Safety Desk specialist"
                />
                <div>
                  <p className="font-label-md text-label-md text-white font-semibold">
                    Quality & Safety Desk
                  </p>
                  <p className="text-xs text-primary-fixed-dim">Supervised human advisory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 w-full">
        <div className="bg-surface-container-low rounded-xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                Behind Our Help Desk
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                Real Specialists Who Care About Your Peace of Mind
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                When you contact AskAnythingAnswers, you aren’t routed through automated dead-ends. Our dispatch
                coordinators are hands-on engineers and technology veterans who review every pairing
                personally when nuanced help is needed.{' '}
              </p>
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="bg-surface-container-lowest rounded-lg p-3 text-center">
                  <span className="block font-headline-sm text-headline-sm text-primary">98.4%</span>{' '}
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    First-contact match rate
                  </span>
                </div>
                <div className="bg-surface-container-lowest rounded-lg p-3 text-center">
                  <span className="block font-headline-sm text-headline-sm text-primary">12,000+</span>{' '}
                  <span className="font-body-sm text-[12px] text-on-surface-variant">Daily resolutions</span>
                </div>
                <div className="bg-surface-container-lowest rounded-lg p-3 text-center">
                  <span className="block font-headline-sm text-headline-sm text-primary">{'<'}90s</span>{' '}
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Average pairing speed
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <img
                className="rounded-xl shadow-lg object-cover w-full h-72"
                src="/images/contact-help-desk.jpg"
                alt="Help desk specialist wearing a headset"
              />
              <div className="absolute -bottom-4 -left-4 bg-surface-container-lowest p-3 rounded-lg shadow-md flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">Verified Identity Protocol</p>
                  <p className="text-[11px] text-on-surface-variant">Strict credential verification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 w-full">
        <div className="text-center space-y-3 mb-12">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Common Help Desk Inquiries</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {' '}
            Quick answers to everyday questions about matching, reconnecting with specialists, and session
            notes.{' '}
          </p>
        </div>
        <div className="space-y-4" id="faqAccordion">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-low transition-colors"
              type="button"
              onClick={() => toggleFaq(1)}
            >
              <span className="font-headline-sm text-headline-sm text-on-surface pr-4">
                How quickly will support respond to my message?
              </span>
              <span
                className={`material-symbols-outlined text-outline transition-transform duration-200${openFaq === 1 ? ' rotate-180' : ''}`}
                id="faq-icon-1"
              >
                expand_more
              </span>
            </button>
            <div
              className={`${openFaq === 1 ? '' : 'hidden '}px-6 pb-6 pt-1 font-body-md text-body-md text-on-surface-variant leading-relaxed`}
              id="faq-ans-1"
            >
              {' '}
              Our online help desk monitors incoming tickets around the clock. For standard inquiries
              submitted through the contact form, average response times range from 15 minutes to under two
              hours. If you are facing an urgent device crisis, we recommend using the “Start Live Chat”
              option for immediate matching in under 90 seconds.{' '}
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-low transition-colors"
              type="button"
              onClick={() => toggleFaq(2)}
            >
              <span className="font-headline-sm text-headline-sm text-on-surface pr-4">
                Can I request to speak with the same expert I worked with previously?
              </span>
              <span
                className={`material-symbols-outlined text-outline transition-transform duration-200${openFaq === 2 ? ' rotate-180' : ''}`}
                id="faq-icon-2"
              >
                expand_more
              </span>
            </button>
            <div
              className={`${openFaq === 2 ? '' : 'hidden '}px-6 pb-6 pt-1 font-body-md text-body-md text-on-surface-variant leading-relaxed`}
              id="faq-ans-2"
            >
              {' '}
              Absolutely. You can select “Follow up on a recent troubleshooting session” on the inquiry form
              or input your specialist’s name or session reference ID. If they are currently active online, we
              can patch you straight back into their personal room. If they are offline, we can schedule a
              reconnection or hold your transcript for their review.{' '}
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-low transition-colors"
              type="button"
              onClick={() => toggleFaq(3)}
            >
              <span className="font-headline-sm text-headline-sm text-on-surface pr-4">
                How do I access notes or steps from my past conversation?
              </span>
              <span
                className={`material-symbols-outlined text-outline transition-transform duration-200${openFaq === 3 ? ' rotate-180' : ''}`}
                id="faq-icon-3"
              >
                expand_more
              </span>
            </button>
            <div
              className={`${openFaq === 3 ? '' : 'hidden '}px-6 pb-6 pt-1 font-body-md text-body-md text-on-surface-variant leading-relaxed`}
              id="faq-ans-3"
            >
              {' '}
              Following every advisory dialogue, an organized summary of recommendations, commands, or
              troubleshooting steps is archived to your reference email. If you misplaced this email, simply
              message our desk with the email address you used and we will re-send the full transcript to your
              inbox immediately.{' '}
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-200">
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-low transition-colors"
              type="button"
              onClick={() => toggleFaq(4)}
            >
              <span className="font-headline-sm text-headline-sm text-on-surface pr-4">
                What if my problem was not fully solved during my session?
              </span>
              <span
                className={`material-symbols-outlined text-outline transition-transform duration-200${openFaq === 4 ? ' rotate-180' : ''}`}
                id="faq-icon-4"
              >
                expand_more
              </span>
            </button>
            <div
              className={`${openFaq === 4 ? '' : 'hidden '}px-6 pb-6 pt-1 font-body-md text-body-md text-on-surface-variant leading-relaxed`}
              id="faq-ans-4"
            >
              {' '}
              We stand firmly behind our promise of real human assistance. If your challenge required
              additional diagnostics or hardware inspections that were not concluded in your initial chat, our
              support desk will gladly pair you with a senior specialist in that specific niche at no
              additional hurdle until you have clear next steps.{' '}
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 w-full" id="quick-match">
        <div className="relative bg-gradient-to-r from-primary to-primary-container rounded-2xl p-8 sm:p-12 text-on-primary overflow-hidden shadow-xl">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-tertiary-fixed/20 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-primary-fixed font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[15px]">bolt</span> Instant Live
                Connection{' '}
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold tracking-tight">
                {' '}
                Ready to troubleshoot right now?{' '}
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                {' '}
                Skip the email queue and connect directly with an active specialist online. Verified experts
                are standing by across printers, computers, smart tech, and automotive issues.{' '}
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-4 items-center">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 bg-white text-primary font-headline-sm text-headline-sm font-bold shadow-lg hover:bg-surface-container-lowest hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                to="/#categories"
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  forum
                </span>
                <span>Ask an Expert Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
