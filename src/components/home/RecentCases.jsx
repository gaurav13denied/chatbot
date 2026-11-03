import Photo from '../Photo.jsx';
import { Reveal } from '../fx.jsx';
import { SPECIALISTS } from './specialists.js';

const who = (name) => SPECIALISTS.find((s) => s.name === name);

const CASES = [
  {
    tag: 'Printers & Hardware',
    time: 'Solved in 8 minutes',
    title: '"HP DeskJet showed \'Printer Offline\' right before an urgent boarding pass printing."',
    text: 'Guided the user through clearing the stuck print queue and reconnecting to the Wi-Fi network. The printer responded and printed right away.',
    by: 'David M.',
  },
  {
    tag: 'Mac & Software',
    time: 'Solved in 11 minutes',
    title: '"MacBook froze with spinning color wheel after updating macOS."',
    text: 'Walked through restarting in Safe Mode, finding a stuck startup app that was freezing the computer, and safely removing it.',
    by: 'Elena R.',
  },
  {
    tag: 'Automotive',
    time: 'Solved in 14 minutes',
    title: '"Honda dashboard flickered with brake and battery light while starting."',
    text: 'Identified signs of low battery voltage rather than brake failure, instructed user to tighten the cable terminal, safely starting the car without a tow.',
    by: 'Maria R.',
  },
  {
    tag: 'Home Internet',
    time: 'Solved in 9 minutes',
    title: '"Wi-Fi keeps disconnecting on tablets and phones upstairs in the evening."',
    text: 'Helped user separate their 2.4GHz and 5GHz Wi-Fi network names so mobile devices stopped jumping between bands.',
    by: 'Marcus B.',
  },
];

export default function RecentCases() {
  return (
    <section className="relative py-20 bg-surface-container overflow-hidden" id="recent-cases">
      <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-secondary-container/40 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <Reveal from="left">
            <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">task_alt</span> Verified Solutions
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-5xl text-on-surface font-normal leading-tight">
              Real Troubleshooting Cases <span className="italic text-primary">Solved Today</span>
            </h2>
          </Reveal>
          <Reveal from="right" delay={150}>
            <p className="text-sm text-on-surface-variant max-w-sm">
              See what everyday problems our specialists tackled and solved within minutes.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map((c, i) => {
            const s = who(c.by);
            return (
              <Reveal
                key={c.by}
                from={i % 2 ? 'right' : 'left'}
                delay={(i >> 1) * 140}
                className="group rounded-2xl bg-surface-container-lowest border border-outline-variant/40 border-l-4 border-l-primary p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-semibold">
                      {c.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      <span className="material-symbols-outlined text-[15px]">timer</span> {c.time}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">{c.text}</p>
                </div>
                <div className="pt-4 border-t border-surface-container flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Photo
                      alt={c.by}
                      className="size-10 rounded-full object-cover border-2 border-primary/30"
                      local={s.photo}
                    />
                    <div>
                      <p className="text-xs font-bold text-on-surface">Solved by {c.by}</p>
                      <p className="text-[11px] text-on-surface-variant">{s.role}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-500 text-xs group-hover:tracking-widest transition-all">★★★★★</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
