import Photo from '../Photo.jsx';
export default function Specialists() {
  return (
    <section className="py-16 bg-surface-container-low border-b border-surface-container" id="specialists">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-xs font-bold text-primary mb-3">
            <span className="material-symbols-outlined text-[16px]">groups</span> Friendly Real People{' '}
          </div>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-normal">
            {' '}
            Direct Access to Real Human Specialists{' '}
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-2">
            {' '}
            We give a detailed background-check of every expert and evaluate them by their peers so you get
            trusted answers quickly.{' '}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Photo
                alt="David M."
                className="size-20 rounded-full object-cover border-2 border-primary/20"
                local="/images/david-m.jpg"
              />
              <span className="absolute bottom-0 right-1 size-3.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <h3 className="font-headline-sm text-lg font-bold text-on-surface">David M.</h3>
            <p className="text-xs font-medium text-primary mb-2">Printer & Computer Specialist</p>
            <div className="flex items-center gap-1 mb-3">
              <span
                className="material-symbols-outlined text-[16px] text-amber-500 fill-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-xs font-bold text-on-surface">4.98</span>
              <span className="text-xs text-on-surface-variant">(3,420+ ratings)</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Fixes printer connection issues, paper feed errors, and driver problems.
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Photo
                alt="Elena R."
                className="size-20 rounded-full object-cover border-2 border-primary/20"
                local="/images/elena-r.jpg"
              />
              <span className="absolute bottom-0 right-1 size-3.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <h3 className="font-headline-sm text-lg font-bold text-on-surface">Elena R.</h3>
            <p className="text-xs font-medium text-primary mb-2">Mac & Windows System Expert</p>
            <div className="flex items-center gap-1 mb-3">
              <span
                className="material-symbols-outlined text-[16px] text-amber-500 fill-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-xs font-bold text-on-surface">4.96</span>
              <span className="text-xs text-on-surface-variant">(3,180+ ratings)</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Resolves slow computers, system errors, and software setup.
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Photo
                alt="Maria R."
                className="size-20 rounded-full object-cover border-2 border-primary/20"
                local="/images/maria-r.jpg"
              />
              <span className="absolute bottom-0 right-1 size-3.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <h3 className="font-headline-sm text-lg font-bold text-on-surface">Maria R.</h3>
            <p className="text-xs font-medium text-primary mb-2">Car & Vehicle Specialist</p>
            <div className="flex items-center gap-1 mb-3">
              <span
                className="material-symbols-outlined text-[16px] text-amber-500 fill-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-xs font-bold text-on-surface">4.97</span>
              <span className="text-xs text-on-surface-variant">(2,850+ ratings)</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Diagnoses dashboard warning lights, engine noise, and vehicle electrical issues.
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Photo
                alt="Sarah C."
                className="size-20 rounded-full object-cover border-2 border-primary/20"
                local="/images/sarah-c.jpg"
              />
              <span className="absolute bottom-0 right-1 size-3.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <h3 className="font-headline-sm text-lg font-bold text-on-surface">Sarah C.</h3>
            <p className="text-xs font-medium text-primary mb-2">Smart Home & Devices Specialist</p>
            <div className="flex items-center gap-1 mb-3">
              <span
                className="material-symbols-outlined text-[16px] text-amber-500 fill-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-xs font-bold text-on-surface">4.95</span>
              <span className="text-xs text-on-surface-variant">(1,920+ ratings)</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Fixes smart TVs, tablets, phone sync, and home audio connections.
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Photo
                alt="Robert M."
                className="size-20 rounded-full object-cover border-2 border-primary/20"
                local="/images/robert-m.jpg"
              />
              <span className="absolute bottom-0 right-1 size-3.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <h3 className="font-headline-sm text-lg font-bold text-on-surface">Robert M.</h3>
            <p className="text-xs font-medium text-primary mb-2">Home Electrical & Appliance Expert</p>
            <div className="flex items-center gap-1 mb-3">
              <span
                className="material-symbols-outlined text-[16px] text-amber-500 fill-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-xs font-bold text-on-surface">4.99</span>
              <span className="text-xs text-on-surface-variant">(4,110+ ratings)</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Helps diagnose washing machines, refrigerators, and home wiring questions.
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Photo
                alt="Marcus B."
                className="size-20 rounded-full object-cover border-2 border-primary/20"
                local="/images/marcus-b.jpg"
              />
              <span className="absolute bottom-0 right-1 size-3.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <h3 className="font-headline-sm text-lg font-bold text-on-surface">Marcus B.</h3>
            <p className="text-xs font-medium text-primary mb-2">Wi-Fi & Internet Expert</p>
            <div className="flex items-center gap-1 mb-3">
              <span
                className="material-symbols-outlined text-[16px] text-amber-500 fill-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-xs font-bold text-on-surface">4.97</span>
              <span className="text-xs text-on-surface-variant">(2,410+ ratings)</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Solves dropped Wi-Fi signals, router setups, and network dead zones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
