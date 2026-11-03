import Photo from '../Photo.jsx';
import useChat from '../../lib/useChat.js';
import ChatPanel, { Avatar } from './ChatPanel.jsx';

export default function Hero() {
  const chat = useChat();
  return (
    <section className="relative overflow-hidden border-b border-surface-container py-4 sm:py-5 lg:py-6">
      <div className="absolute inset-0 z-0">
        <Photo
          alt="Bright, sunlit workspace with a laptop"
          className="w-full h-full object-cover object-left md:object-center"
          local="/images/hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/95 via-surface-container-lowest/90 to-surface-container-lowest/75 lg:from-surface-container-lowest/95 lg:via-surface-container-lowest/80 lg:to-surface-container-lowest/40 backdrop-blur-[1px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/40 shadow-sm w-fit">
              <div className="flex text-amber-500 text-xs leading-none">
                <span
                  className="material-symbols-outlined text-[15px] text-amber-500 fill-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[15px] text-amber-500 fill-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[15px] text-amber-500 fill-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[15px] text-amber-500 fill-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[15px] text-amber-500 fill-1"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-on-surface">
                4.9/5 Average rating across 25,000+ helped users
              </span>
            </div>
            <div className="space-y-2">
              <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-[2.5rem] text-on-surface font-normal tracking-tight leading-[1.15]">
                Get Real Help from <span className="text-primary italic font-serif">Verified Experts</span> in
                Minutes
              </h1>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-lg font-normal leading-snug">
                Connect with friendly specialists ready to solve your computer, printer, car, appliance, or
                phone issues right now. No confusing manuals or endless hold music.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3.5 text-xs text-on-surface font-semibold pt-0.5">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                <span>100% Real Human Specialists</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
                <span>Average match under 90 seconds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px]">lock</span>
                <span>Private, one-on-one support</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div
              className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-xl overflow-hidden max-w-lg ml-auto"
              id="quick-match"
            >
              <div className="bg-surface-container-low px-4 py-2.5 border-b border-surface-container flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <Avatar name={chat.persona} className="size-8 text-xs border-2 border-primary" />
                    <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-on-surface">{chat.persona || "Support Specialist"}</h4>
                      <span className="px-1.5 py-0.2 rounded-full bg-primary-fixed text-on-primary-fixed text-[10px] font-bold">
                        On Duty
                      </span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-emerald-500" /> Live Help Desk • Ready to respond
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-primary block">{'<'} 90 seconds</span>
                  <span className="text-[10px] text-on-surface-variant leading-none">typical reply</span>
                </div>
              </div>
              <div className="px-4 py-1.5 bg-surface-container-lowest border-b border-surface-container flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-500">
                  <span
                    className="material-symbols-outlined text-[14px] fill-1"
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
                    <span className="material-symbols-outlined text-primary text-[13px]">lock</span> Private &
                    Secure Chat
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[13px]">verified_user</span>{' '}
                    Verified Human Specialists
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[13px]">chat_bubble</span>{' '}
                    Free of Cost Answers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
