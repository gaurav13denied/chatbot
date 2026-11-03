import Photo from '../Photo.jsx';
import useChat from '../../lib/useChat.js';
import ChatWindow from './ChatWindow.jsx';

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
            {/* Same chat window as the printers page: header, scrolling messages, reply box pinned at the bottom */}
            <div
              className="ml-auto flex w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_30px_80px_-30px_rgba(19,27,46,0.45)] ring-1 ring-black/10 lg:h-[min(640px,calc(100vh-11rem))] lg:min-h-[430px]"
              id="quick-match"
            >
              <ChatWindow chat={chat} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
