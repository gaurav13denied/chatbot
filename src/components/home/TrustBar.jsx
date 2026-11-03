import { CountUp, Reveal } from '../fx.jsx';

const TOPICS = [
  'Printers & Scanners',
  'Windows & Mac',
  'Wi-Fi & Routers',
  'Car Warning Lights',
  'Smart TVs',
  'Refrigerators',
  'Washing Machines',
  'Phones & Tablets',
  'HP • Canon • Epson • Brother',
  'Bluetooth Pairing',
];

const STATS = [
  { icon: 'groups', value: 25000, suffix: '+', label: 'People helped' },
  { icon: 'star', value: 4.9, decimals: 1, suffix: '/5', label: 'Average rating' },
  { icon: 'bolt', value: 90, prefix: '< ', suffix: 's', label: 'Typical match time' },
  { icon: 'category', value: 6, label: 'Help categories' },
];

export default function TrustBar() {
  const row = [...TOPICS, ...TOPICS];
  return (
    <>
      <div className="marquee overflow-hidden bg-primary border-y border-primary-container py-3.5" aria-hidden="true">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-10 text-sm font-bold text-white/95">
              {t}
              <span className="material-symbols-outlined text-[16px] text-primary-fixed">auto_awesome</span>
            </span>
          ))}
        </div>
      </div>

      <section className="bg-surface-container-lowest py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                from="zoom"
                delay={i * 110}
                className="group rounded-2xl border border-outline-variant/40 bg-surface-container-low p-5 sm:p-6 text-center hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 transition-all"
              >
                <span className="mx-auto mb-3 size-11 rounded-xl bg-primary text-on-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-[22px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {s.icon}
                  </span>
                </span>
                <p className="font-headline-lg text-3xl sm:text-4xl text-primary font-medium leading-none">
                  <CountUp to={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-on-surface-variant">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
