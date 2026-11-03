import useChat from '../../lib/useChat.js';
import ChatPanel, { Avatar } from './ChatPanel.jsx';

const delay = (ms) => ({ animationDelay: `${ms}ms` });

const POINTS = [
  { icon: 'verified', text: '100% Real Human Specialists' },
  { icon: 'bolt', text: 'Average match under 90 seconds' },
  { icon: 'lock', text: 'Private, one-on-one support' },
];

export default function Hero() {
  const chat = useChat();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-on-surface via-[#16233b] to-inverse-surface py-10 sm:py-14 lg:py-16">
      {/* Animated backdrop: grid, drifting colour glows (parallax on scroll) */}
      <div className="absolute inset-0 grid-lines" aria-hidden="true" />
      <div className="absolute inset-0 overflow-hidden parallax" aria-hidden="true">
        <div className="drift absolute -top-32 -left-24 size-[420px] rounded-full bg-primary/50 blur-[110px]" />
        <div
          className="drift absolute top-1/3 -right-24 size-[380px] rounded-full bg-secondary/45 blur-[110px]"
          style={{ animationDelay: '-6s' }}
        />
        <div
          className="drift absolute -bottom-40 left-1/3 size-[320px] rounded-full bg-primary-fixed-dim/20 blur-[100px]"
          style={{ animationDelay: '-10s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div
              className="enter inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit"
              style={delay(50)}
            >
              <div className="flex text-amber-400">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[15px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-white">
                4.9/5 Average rating across 25,000+ helped users
              </span>
            </div>

            <h1
              className="enter font-headline-lg text-4xl sm:text-5xl lg:text-[3.6rem] text-white font-normal tracking-tight leading-[1.08]"
              style={delay(180)}
            >
              Get Real Help from{' '}
              <span className="shine-text italic font-serif bg-gradient-to-r from-primary-fixed via-secondary-container to-primary-fixed bg-clip-text text-transparent">
                Verified Experts
              </span>{' '}
              in Minutes
            </h1>

            <p className="enter text-sm sm:text-base text-inverse-on-surface/80 max-w-xl leading-relaxed" style={delay(320)}>
              Connect with friendly specialists ready to solve your computer, printer, car, appliance, or phone
              issues right now. No confusing manuals or endless hold music.
            </p>

            <div className="enter flex flex-wrap items-center gap-3" style={delay(460)}>
              <a
                href="#quick-match"
                className="ring-pulse inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-fixed text-on-primary-fixed font-bold text-sm shadow-lg shadow-primary/30 hover:bg-white hover:-translate-y-0.5 transition-all"
              >
                Ask an Expert Now
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
                See How It Works
              </a>
            </div>

            <div className="enter flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-1" style={delay(600)}>
              {POINTS.map((p) => (
                <div key={p.icon} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                  <span className="size-7 rounded-lg bg-primary-fixed/15 text-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">{p.icon}</span>
                  </span>
                  {p.text}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative enter" style={delay(380)}>
            <div className="float-slow absolute -top-11 -left-3 sm:-left-10 z-20 hidden sm:flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl">
              <span className="size-7 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px]">task_alt</span>
              </span>
              <div className="leading-tight">
                <p className="text-[11px] font-bold text-on-surface">Printer fixed</p>
                <p className="text-[10px] text-on-surface-variant">Solved in 8 minutes</p>
              </div>
            </div>

            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary-fixed-dim/60 via-secondary-container/40 to-transparent blur-xl" aria-hidden="true" />
            <div
              className="relative bg-surface-container-lowest rounded-xl border border-white/40 shadow-2xl overflow-hidden max-w-lg ml-auto"
              id="quick-match"
            >
              <div className="bg-gradient-to-r from-primary to-primary-container px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <Avatar name={chat.persona} className="size-8 text-xs !bg-white !text-primary" />
                    <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-400 border-2 border-primary animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-white">{chat.persona || 'Support Specialist'}</h4>
                      <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
                        On Duty
                      </span>
                    </div>
                    <p className="text-[11px] text-white/80 flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-emerald-300" /> Live Help Desk • Ready to respond
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-white block">{'<'} 90 seconds</span>
                  <span className="text-[10px] text-white/75 leading-none">typical reply</span>
                </div>
              </div>
              <div className="px-4 py-1.5 bg-surface-container-lowest border-b border-surface-container flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-500">
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-bold text-on-surface text-xs">4.9/5</span>
                  <span className="text-on-surface-variant text-[11px]">(14,200+ verified ratings)</span>
                </div>
                <span className="text-primary font-bold text-[11px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">check_circle</span> 100% Real People
                </span>
              </div>
              <div className="p-3.5 sm:p-4 space-y-2.5">
                <ChatPanel chat={chat} />
                <div className="pt-1.5 border-t border-surface-container flex flex-wrap items-center justify-between text-[10px] text-on-surface-variant gap-1.5">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[13px]">lock</span> Private & Secure
                    Chat
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[13px]">verified_user</span> Verified
                    Human Specialists
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[13px]">chat_bubble</span> Free of Cost
                    Answers
                  </span>
                </div>
              </div>
            </div>

            <div
              className="float-slow absolute -bottom-5 -right-2 sm:-right-6 z-20 hidden sm:flex items-center gap-2 rounded-xl bg-on-surface px-3 py-2 shadow-xl border border-white/10"
              style={{ animationDelay: '-3s' }}
            >
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-[11px] font-bold text-white">37 specialists online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
