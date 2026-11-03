import { Link } from 'react-router-dom';
import { Reveal } from '../fx.jsx';

const CATEGORIES = [
  {
    icon: 'laptop_chromebook',
    title: 'Computers & Systems',
    online: 12,
    text: 'Slow performance, boot freezes, software setup, viral popups, or Windows & Mac updates.',
    cta: 'Ask Computer Expert →',
  },
  {
    icon: 'print',
    title: 'Printers & Scanners',
    online: 7,
    text: 'Offline alerts, driver installation, paper jams, ink cartridge errors, and wireless syncing.',
    cta: 'Ask Printer Expert →',
    to: '/category/printers',
  },
  {
    icon: 'directions_car',
    title: 'Cars & Vehicles',
    online: 9,
    text: 'Check engine warning codes, weird noises, starter difficulties, electrical drain, or transmission questions.',
    cta: 'Ask Vehicle Expert →',
  },
  {
    icon: 'tv',
    title: 'Smart Home & TV',
    online: 6,
    text: 'Smart TV streaming apps, soundbar setups, smart doorbells, voice assistants, and Bluetooth pairing.',
    cta: 'Ask Smart TV Expert →',
  },
  {
    icon: 'kitchen',
    title: 'Home Appliances',
    online: 8,
    text: 'Refrigerators not cooling, washing machines not draining, dishwasher error cycles, and dryer heat issues.',
    cta: 'Ask Appliance Expert →',
  },
  {
    icon: 'wifi',
    title: 'Wi-Fi & Internet',
    online: 5,
    text: 'Frequent connection drops, slow speed, router password resets, extender setup, and dead zone fixes.',
    cta: 'Ask Wi-Fi Expert →',
  },
];

export default function Categories() {
  return (
    <section className="relative py-20 bg-surface-container-low overflow-hidden" id="categories">
      <div className="absolute -top-24 -right-24 size-80 rounded-full bg-primary-fixed/40 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <Reveal from="left">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">category</span> Direct Access
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-5xl text-on-surface font-normal leading-tight">
              What Do You Need <span className="italic text-primary">Help</span> With?
            </h2>
          </Reveal>
          <Reveal from="right" delay={150}>
            <p className="text-sm text-on-surface-variant max-w-md">
              Select your category below to quickly describe your issue and chat directly with a qualified
              specialist in that field.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c, i) => {
            const cta = (
              <span className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary-fixed transition-all group-hover:translate-x-1">
                {c.cta}
              </span>
            );
            return (
              <Reveal
                key={c.title}
                delay={(i % 3) * 120}
                className="group relative overflow-hidden rounded-2xl bg-surface-container-lowest border border-outline-variant/40 p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:border-transparent hover:bg-on-surface transition-all duration-500"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="size-14 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white flex items-center justify-center shadow-md shadow-primary/30 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                      <span className="material-symbols-outlined text-[28px]">{c.icon}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary group-hover:bg-white/10 group-hover:text-primary-fixed transition-colors">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> {c.online} Online
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-2 group-hover:text-white transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed group-hover:text-inverse-on-surface/75 transition-colors">
                    {c.text}
                  </p>
                </div>
                {c.to ? (
                  <Link to={c.to}>{cta}</Link>
                ) : (
                  <a href="#quick-match">{cta}</a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
