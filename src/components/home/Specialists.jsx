import Photo from '../Photo.jsx';
import { Reveal } from '../fx.jsx';
import { SPECIALISTS } from './specialists.js';

export default function Specialists() {
  return (
    <section className="relative py-20 bg-on-surface overflow-hidden" id="specialists">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div className="drift absolute -top-20 left-1/4 size-96 rounded-full bg-primary/40 blur-[120px]" aria-hidden="true" />
      <div
        className="drift absolute bottom-0 right-0 size-96 rounded-full bg-secondary/35 blur-[120px]"
        style={{ animationDelay: '-7s' }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-primary-fixed mb-4">
            <span className="material-symbols-outlined text-[16px]">groups</span> Friendly Real People
          </div>
          <h2 className="font-headline-lg text-3xl sm:text-5xl text-white font-normal leading-tight">
            Direct Access to <span className="italic text-primary-fixed">Real Human</span> Specialists
          </h2>
          <p className="text-sm sm:text-base text-inverse-on-surface/75 mt-3">
            We give a detailed background-check of every expert and evaluate them by their peers so you get
            trusted answers quickly.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALISTS.map((s, i) => (
            <Reveal
              key={s.name}
              delay={(i % 3) * 130}
              className="group relative rounded-2xl p-6 bg-white/[0.06] backdrop-blur-md border border-white/15 flex flex-col items-center text-center hover:-translate-y-2 hover:bg-white/10 hover:border-primary-fixed/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
            >
              <div className="relative mb-4">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-primary-fixed to-secondary-container opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
                <Photo
                  alt={s.name}
                  className="relative size-24 rounded-full object-cover border-2 border-on-surface"
                  local={s.photo}
                />
                <span className="absolute bottom-0 right-0 size-4 rounded-full bg-emerald-400 border-2 border-on-surface" />
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-white">{s.name}</h3>
              <p className="text-xs font-semibold text-primary-fixed mb-3">{s.role}</p>
              <div className="flex items-center gap-1 mb-3">
                <span
                  className="material-symbols-outlined text-[16px] text-amber-400"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="text-xs font-bold text-white">{s.rating}</span>
                <span className="text-xs text-inverse-on-surface/70">({s.count} ratings)</span>
              </div>
              <p className="text-xs text-inverse-on-surface/75 leading-relaxed">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
