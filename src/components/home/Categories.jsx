import { Link } from 'react-router-dom';
export default function Categories() {
  return (
    <section className="py-16 bg-surface-container-lowest border-b border-surface-container" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-normal">
              {' '}
              What Do You Need Help With?{' '}
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant max-w-md">
            {' '}
            Select your category below to quickly describe your issue and chat directly with a qualified
            specialist in that field.{' '}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group bg-surface-container-low hover:bg-surface-container rounded-2xl p-6 border border-outline-variant/40 transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">plumbing</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-xs font-semibold text-primary">
                  <span className="size-1.5 rounded-full bg-emerald-500" /> 12 Online{' '}
                </span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Plumbers</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-5">
                {' '}
                Leaking taps, blocked drains, low water pressure, geyser faults, and bathroom or kitchen fittings.{' '}
              </p>
            </div>
            <Link className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-container group-hover:translate-x-1 transition-all" to="/category/plumbing">
              {' '}
              Ask a Plumber →{' '}
            </Link>
          </div>
          <div className="group bg-surface-container-low hover:bg-surface-container rounded-2xl p-6 border border-outline-variant/40 transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">cleaning_services</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-xs font-semibold text-primary">
                  <span className="size-1.5 rounded-full bg-emerald-500" /> 7 Online{' '}
                </span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Maid Service</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-5">
                {' '}
                Daily or weekly help with sweeping, mopping, dishes, laundry, and kitchen cleanup.{' '}
              </p>
            </div>
            <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-container group-hover:translate-x-1 transition-all" href="#quick-match">
              {' '}
              Ask for a Maid →{' '}
            </a>
          </div>
          <div className="group bg-surface-container-low hover:bg-surface-container rounded-2xl p-6 border border-outline-variant/40 transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">home</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-xs font-semibold text-primary">
                  <span className="size-1.5 rounded-full bg-emerald-500" /> 9 Online{' '}
                </span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Housekeeping</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-5">
                {' '}
                Part-time and full-time house managers for organising, plant care and routine upkeep.{' '}
              </p>
            </div>
            <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-container group-hover:translate-x-1 transition-all" href="#quick-match">
              {' '}
              Ask Housekeeping →{' '}
            </a>
          </div>
          <div className="group bg-surface-container-low hover:bg-surface-container rounded-2xl p-6 border border-outline-variant/40 transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">gavel</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-xs font-semibold text-primary">
                  <span className="size-1.5 rounded-full bg-emerald-500" /> 6 Online{' '}
                </span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Lawyers</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-5">
                {' '}
                Advice on property papers, rental agreements, consumer complaints, and family or civil matters.{' '}
              </p>
            </div>
            <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-container group-hover:translate-x-1 transition-all" href="#quick-match">
              {' '}
              Ask a Lawyer →{' '}
            </a>
          </div>
          <div className="group bg-surface-container-low hover:bg-surface-container rounded-2xl p-6 border border-outline-variant/40 transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">kitchen</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-xs font-semibold text-primary">
                  <span className="size-1.5 rounded-full bg-emerald-500" /> 8 Online{' '}
                </span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface mb-2">Home Appliances</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-5">
                {' '}
                Refrigerators not cooling, washing machines not draining, dishwasher error cycles, and dryer heat issues.{' '}
              </p>
            </div>
            <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-container group-hover:translate-x-1 transition-all" href="#quick-match">
              {' '}
              Ask Appliance Expert →{' '}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
