import Photo from '../components/Photo.jsx';
import { Link } from 'react-router-dom';
import { useChatContext } from '../lib/ChatContext.jsx';
import ChatWindow from '../components/home/ChatWindow.jsx';

// Starter chips that fill the intake box
const QUICK_CHIPS = [
  'Leaking tap or pipe',
  'Blocked drain',
  'Low water pressure',
  'Geyser not heating',
  'Toilet flush fault',
];

const PROBLEMS = [
  {
    icon: 'water_drop',
    title: 'Tap or Pipe Keeps Leaking',
    text: 'Dripping taps, worn washers, and loose joints under sinks waste water and damage cabinets. We find the source, replace the faulty part, and check the seal.',
    fix: 'Average fix: 30-60 mins',
  },
  {
    icon: 'plumbing',
    title: 'Drain Blocked or Draining Slowly',
    text: 'Sinks, basins, and bathroom floors clog with grease, hair, and soap build-up. We guide the clearing method and arrange a plumber if a machine is needed.',
    fix: 'Average fix: 45-90 mins',
  },
  {
    icon: 'hot_tub',
    title: 'Low Water Pressure or Geyser Faults',
    text: 'Weak flow from taps and showers, or a geyser that heats poorly, usually traces back to blocked aerators, valves, or a failing heating element.',
    fix: 'Average fix: 60-90 mins',
  },
];

const EXPERTS = [
  {
    name: 'David M.',
    img: '/images/david-m.jpg',
    role: 'Senior Plumbing Specialist',
    rating: '4.98',
    count: '3,420+',
    bio: 'Specializes in leak detection, tap and pipe repairs, and blocked drains. Over 12 years of hands-on field experience.',
  },
  {
    name: 'Elena R.',
    img: '/images/elena-r.jpg',
    role: 'Bathroom Fittings Specialist',
    rating: '4.96',
    count: '3,180+',
    bio: 'Fixes toilet flush faults, shower mixers, and basin fittings. Known for clean, tidy bathroom repairs.',
  },
  {
    name: 'Marcus B.',
    img: '/images/marcus-b.jpg',
    role: 'Geyser Specialist',
    rating: '4.97',
    count: '2,410+',
    bio: 'Fixes geyser heating faults, low water pressure, and overhead tank issues. Comfortable with older pipework.',
  },
];

const CASES = [
  {
    mins: 'Resolved in 7 mins',
    ago: '18 mins ago',
    title: 'Kitchen tap leaking under the sink fixed same day',
    text: 'Tap dripped constantly and water pooled in the cabinet. Plumber found a worn washer and a loose joint, replaced both, and tested the seal on the same visit.',
    by: 'David M.',
    img: '/images/david-m.jpg',
  },
  {
    mins: 'Resolved in 10 mins',
    ago: '42 mins ago',
    title: 'Geyser stopped heating water after a power cut',
    text: 'Geyser switched on but the water stayed cold. Plumber traced the fault to a tripped thermostat, reset it, and confirmed the heating element worked.',
    by: 'Elena R.',
    img: '/images/elena-r.jpg',
  },
  {
    mins: 'Resolved in 8 mins',
    ago: '1 hour ago',
    title: 'Toilet flush running constantly resolved',
    text: 'Cistern kept refilling and wasting water. Plumber replaced a worn flush valve, adjusted the float, and the running stopped.',
    by: 'David M.',
    img: '/images/david-m.jpg',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Describe your plumbing issue',
    text: 'Share what is happening in plain English, such as a dripping tap, a blocked drain, or simply “no hot water.”',
    icon: 'edit_note',
    note: 'Takes under 30 seconds',
  },
  {
    n: '02',
    title: 'Connect with a plumber',
    text: 'We route your chat to a verified plumber who has handled this exact kind of fault. Share your location and timing so the right match is made.',
    icon: 'person_check',
    note: 'Live 1-on-1 human chat',
  },
  {
    n: '03',
    title: 'Agree on the rate and get it fixed',
    text: 'Chat step by step, send photos if helpful, and confirm the hourly rate before work begins. Pay once you are satisfied.',
    icon: 'task_alt',
    note: 'Pay only if satisfied',
  },
];

const FAQS = [
  {
    q: 'Do I need some plumbing skills or special tools?',
    a: 'Not at all. Our plumbers explain everything in everyday words. For small faults like a dripping tap or a slow basin, they can guide you through a safe first fix. For anything that needs tools or electrical work, a professional visits instead.',
  },
  {
    q: 'When do I pay?',
    a: 'We do not collect any payment online. You pay offline, and only after the work is done to your satisfaction.',
  },
  {
    q: 'Can I send photos of the leak or fault?',
    a: 'Yes. Photos and short videos of the leak, fitting, or fault help the plumber judge the job before work begins.',
  },
  {
    q: 'How much does a plumber cost?',
    a: (
      <>
        Plumbers charge by the hour, and the rate is shared before work starts. A 10% service fee applies to
        the overall bill, and applicable taxes and fees apply as per our{' '}
        <Link className="text-primary font-semibold hover:underline" to="/terms">
          Terms of Service
        </Link>
        .
      </>
    ),
  },
];

export default function Plumbing() {
  const { chat } = useChatContext();

  return (
    <div className="flex flex-col w-full">
      <div className="relative isolate w-full overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-96 -left-20 w-80 h-80 bg-secondary-fixed/25 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <nav className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Home</span>
            </Link>
            <span className="text-outline-variant">/</span>
            <Link className="hover:text-primary transition-colors" to="/#categories">
              Categories
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-bold">Plumbing</span>
          </nav>
        </div>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-0 gap-x-10 lg:gap-10 items-center">
            <div className="contents lg:flex lg:col-span-7 lg:flex-col lg:pt-2">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 text-on-surface w-fit max-w-full mb-5 shadow-sm order-1 lg:order-none">
                <span className="font-label-md text-label-md font-bold tracking-tight">
                  8,400+ plumbing questions resolved
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg lg:text-display-lg text-on-surface tracking-tight font-medium mb-5 leading-tight order-2 lg:order-none min-[1280px]:max-[1439px]:text-[54px]">
                Get Instant Help for Any Plumbing Issue
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed order-4 lg:order-none min-[1280px]:max-[1439px]:text-base">
                Leaking taps, blocked drains, low water pressure, and geyser faults, handled by verified
                plumbers who have fixed your exact problem before. You pay only if you are satisfied.
              </p>
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-lowest shadow-sm max-w-xl order-5 lg:order-none">
                <div className="relative flex-shrink-0">
                  <Photo
                    alt="David M. Specialist"
                    className="size-12 rounded-full object-cover shadow-sm"
                    local="/images/david-m.jpg"
                  />
                  <span className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">
                      David M.
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      and 6 other plumbing specialists
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1 mt-0.5">
                    <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse" /> Online
                    right now • Avg reply under 90s
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 max-w-xl order-6 lg:order-none">
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <p className="font-headline-sm text-headline-sm font-bold text-on-surface">only 10%</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Service Fee on Total Bill</p>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <p className="font-headline-sm text-headline-sm font-bold text-on-surface">{'<'} 2 min</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Live Plumbing Match</p>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <p className="font-headline-sm text-headline-sm font-bold text-on-surface">Hourly</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Rates Shared Upfront</p>
                </div>
              </div>
            </div>
            <div className="order-3 lg:order-none lg:col-span-5 lg:self-start scroll-mt-24 mb-8 lg:mb-0" id="quick-match">
              <div className="flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_30px_80px_-30px_rgba(19,27,46,0.45)] ring-1 ring-black/10 max-md:h-[480px] lg:h-[min(640px,calc(100vh-11rem))] lg:min-h-[430px]">
                <ChatWindow chat={chat} chips={QUICK_CHIPS} inputId="plumbing-issue-input" takeOver />
              </div>
              <div className="mt-4 flex flex-col gap-2 px-1">
                <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span>100% Verified Plumbers • No automated bot loops</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">task_alt</span>
                  <span>Pay offline, and only if satisfied with the work</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Diagnosed in Minutes
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1.5 mb-3">
            Common Plumbing Problems We Clear Every Day
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Skip the guesswork and the endless video tutorials. Our plumbers know what is wrong and what it
            takes to fix it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="size-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-[26px]">{p.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2.5">{p.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{p.text}</p>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between text-primary font-label-md text-label-md">
                <span>{p.fix}</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-16 lg:py-20" id="experts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1">
              Meet Our Featured Plumbing Professionals
            </h2>
            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>Screened, verified, and continuously rated by users</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERTS.map((e) => (
              <div key={e.name} className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <Photo alt={e.name} className="size-16 rounded-xl object-cover shadow-sm" local={e.img} />
                    <span className="absolute -bottom-1 -right-1 size-3.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">
                        {e.name}
                      </h3>
                      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                    </div>
                    <p className="font-label-md text-label-md text-outline">{e.role}</p>
                    <div className="flex items-center gap-1 mt-1 text-amber-500">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">{e.rating}</span>
                      <span className="font-body-sm text-body-sm text-outline">({e.count} ratings)</span>
                    </div>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{e.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" id="recent-cases">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              Live Activity Log
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1">
              Recent Problem Resolutions
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-md text-label-md font-bold">
            <span className="size-2 rounded-full bg-emerald-600 animate-pulse" /> 142 plumbing requests matched
            today
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                    {c.mins}
                  </span>
                  <span className="font-body-sm text-body-sm text-outline">{c.ago}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3 leading-snug">
                  {c.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{c.text}</p>
              </div>
              <div className="mt-6 pt-4 flex items-center justify-between text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <Photo alt={c.by} className="size-7 rounded-full object-cover" local={c.img} />
                  <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                    Solved by {c.by}
                  </span>
                </div>
                <span className="material-symbols-outlined text-emerald-600 text-[20px]">check_circle</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-16 lg:py-20" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              Frictionless Experience
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1.5 mb-3">
              How We Fix Your Plumbing in 3 Simple Steps
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              No phone queues, no automated menus, no chasing plumbers for a callback.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm relative flex flex-col">
                <span className="font-headline-lg text-headline-lg text-primary font-bold opacity-30 mb-2">
                  {s.n}
                </span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3">{s.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{s.text}</p>
                <div className="mt-6 flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                  <span className="material-symbols-outlined text-[18px]">{s.icon}</span> {s.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" id="faqs">
        <div className="text-center mb-12">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Clear & Direct
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1.5 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Everything you need to know about getting help with your taps or drains.
          </p>
        </div>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              className="group bg-surface-container-lowest rounded-xl shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden"
              open={i === 0}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">{f.q}</h3>
                <span className="material-symbols-outlined text-outline transition-transform duration-200 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-on-primary p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/40 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-primary/10 text-on-primary font-label-md text-label-md font-bold mb-6">
              <span>8,400+ satisfied customers</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg lg:text-display-lg font-medium tracking-tight text-on-primary mb-4 leading-tight">
              Need a professional plumber today?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-8 max-w-xl leading-relaxed">
              Skip the endless searching and unanswered callbacks. Connect with a verified plumber right now
              and get your water running smoothly again.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-surface-container-lowest text-primary font-headline-sm text-headline-sm font-bold shadow-md hover:bg-surface-container-low transition-all text-center"
                href="#quick-match"
              >
                Connect with a Plumber Now
              </a>
              <div className="flex items-center gap-3 text-on-primary/90 font-label-md text-label-md sm:ml-2">
                <span className="material-symbols-outlined text-emerald-300 text-[20px]">bolt</span>
                <span>Average connection time under 90 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
