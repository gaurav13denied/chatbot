import Photo from '../Photo.jsx';
export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-surface-container py-4 sm:py-5 lg:py-6">
      <div className="absolute inset-0 z-0">
        <Photo
          alt="Warm study tech workspace hero background"
          className="w-full h-full object-cover object-left md:object-center"
          src="https://lh3.googleusercontent.com/aida/AEtjO1X2Z_sIzrGNEiS_IgwOG88Y_3mGejqMpezX9DvJjmDwFykkI0pS5mWUc8MhjzxWBcMhtfIYQaFxmNPvTmv4W_fUEwCID1yZbcW-1s0_-kZKU8p7JQ_6qQ40Kft9lenqP6VjmopEEzoliJddmWEVd6lC4Dct28dFofq9XGoibnSwQc5HkgG39J6VDUZx4Ep5ze9FIhnvmSco6j-KM6YAG9BaqJxkO5dusChYZMQOkfSR"
          local="/images/hero.svg"
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
                Connect 1-on-1 with specialists ready to solve your computer, printer, car, appliance, or
                phone issue right now. No confusing manuals or endless hold music.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3.5 text-xs text-on-surface font-semibold pt-0.5">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                <span>100% Real Specialists</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
                <span>Avg. match under 90 sec</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[18px]">lock</span>
                <span>Secured Communications</span>
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
                    <Photo
                      alt="Duty Specialist David M."
                      className="size-8 rounded-full object-cover border-2 border-primary"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1V1P4URgq15Dm3SFnBSbLV9jkmf9Iv1ESsWBoBtJbVDOi8Hm4VEIn4ybK59zBQJCmPlEx7CNIzsJfB-88Yk0v-NkVGienuR-2mu1Acp2NOyp4U7-Gi3kbcfzX8B-nSLphkVrIOMlDt581D-opjI4yHzjulpE_CgGYu7uH5uOdO4rQjqUABJpv3I2oOc2Lamnov2mR1ceNf9LtklsQvT7mFcx_m6wvPDghnNDTUqPqG8"
                      local="/images/david-m.jpg"
                    />
                    <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-on-surface">David M.</h4>
                      <span className="px-1.5 py-0.2 rounded-full bg-primary-fixed text-on-primary-fixed text-[10px] font-bold">
                        On Duty
                      </span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-emerald-500" /> Live Help Desk • Ready now
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
                  <span className="text-on-surface-variant text-[11px]">(14,200+ ratings)</span>
                </div>
                <span className="text-primary font-bold text-[11px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">check_circle</span> 100% Real People
                </span>
              </div>
              <div className="p-3.5 sm:p-4 space-y-2.5">
                <div className="flex items-start gap-2">
                  <Photo
                    alt="David M."
                    className="size-6 rounded-full object-cover mt-0.5 shrink-0"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1V1P4URgq15Dm3SFnBSbLV9jkmf9Iv1ESsWBoBtJbVDOi8Hm4VEIn4ybK59zBQJCmPlEx7CNIzsJfB-88Yk0v-NkVGienuR-2mu1Acp2NOyp4U7-Gi3kbcfzX8B-nSLphkVrIOMlDt581D-opjI4yHzjulpE_CgGYu7uH5uOdO4rQjqUABJpv3I2oOc2Lamnov2mR1ceNf9LtklsQvT7mFcx_m6wvPDghnNDTUqPqG8"
                    local="/images/david-m.jpg"
                  />
                  <div className="bg-surface-container rounded-xl rounded-tl-sm px-3 py-1.5 text-xs text-on-surface leading-snug">
                    <p>
                      Hello! I am online right now. Tell me what is happening with your device or select an
                      issue below.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                    Common starter issues
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-[11px] font-medium text-on-surface border border-outline-variant/30 cursor-pointer transition-colors">
                      Printer offline
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-[11px] font-medium text-on-surface border border-outline-variant/30 cursor-pointer transition-colors">
                      Paper jam
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-[11px] font-medium text-on-surface border border-outline-variant/30 cursor-pointer transition-colors">
                      Wi-Fi setup
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-[11px] font-medium text-on-surface border border-outline-variant/30 cursor-pointer transition-colors">
                      Blue screen freeze
                    </span>
                  </div>
                </div>
                <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <label className="block text-[11px] font-bold text-on-surface mb-1">
                      Describe your device or issue
                    </label>
                    <div className="relative">
                      <textarea
                        className="w-full p-2.5 bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline border border-outline-variant/40 focus:ring-2 focus:ring-primary text-xs resize-none focus:outline-none transition-all"
                        placeholder="Type your question here (e.g. My HP printer won't connect after Wi-Fi change)..."
                        rows="2"
                      />
                    </div>
                  </div>
                  <button
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-primary hover:bg-primary-container text-on-primary font-bold text-sm rounded-lg shadow-sm transition-all gap-1.5"
                    type="submit"
                  >
                    Ask an Expert <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </form>
                <div className="pt-1.5 border-t border-surface-container flex flex-wrap items-center justify-between text-[10px] text-on-surface-variant gap-1.5">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[13px]">lock</span> Private
                    Chat
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[13px]">verified_user</span>{' '}
                    Verified Humans
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[13px]">chat_bubble</span>{' '}
                    Free to describe
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
