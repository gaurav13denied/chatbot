import Photo from '../Photo.jsx';
export default function RecentCases() {
  return (
    <section className="py-16 bg-surface-container-low border-b border-surface-container" id="recent-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">task_alt</span> Verified Solutions{' '}
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface font-normal">
              {' '}
              Real Struggles Managed Today{' '}
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant max-w-sm">
            {' '}
            See what everyday problems our professionals tackled and solved within minutes.{' '}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary">
                  Plumbing
                </span>
                <span className="text-xs text-on-surface-variant">Solved in 8 minutes</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">
                "Kitchen tap leaking badly before guests arrived."
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                Plumber identified a worn washer, replaced it on the same visit, and the leak stopped.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-container flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Photo
                  alt="David M."
                  className="size-10 rounded-full object-cover border border-outline-variant"
                  local="/images/david-m.jpg"
                />
                <div>
                  <p className="text-xs font-bold text-on-surface">Solved by David M.</p>
                  <p className="text-[11px] text-on-surface-variant">Plumbing Specialist</p>
                </div>
              </div>
              <div className="flex text-amber-500 text-xs">★★★★★</div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary">
                  Housekeeping
                </span>
                <span className="text-xs text-on-surface-variant">Solved in 11 minutes</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">
                "Needed full home cleaning before festivals."
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                Housekeeper arranged a team and a room-by-room plan, finishing in one day.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-container flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Photo
                  alt="Elena R."
                  className="size-10 rounded-full object-cover border border-outline-variant"
                  local="/images/elena-r.jpg"
                />
                <div>
                  <p className="text-xs font-bold text-on-surface">Solved by Elena R.</p>
                  <p className="text-[11px] text-on-surface-variant">Housekeeping Expert</p>
                </div>
              </div>
              <div className="flex text-amber-500 text-xs">★★★★★</div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary">
                  Maid Services
                </span>
                <span className="text-xs text-on-surface-variant">Solved in 14 minutes</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">
                "Our maid left suddenly and we needed a replacement."
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                A verified maid was matched for daily morning work within the same day.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-container flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Photo
                  alt="Maria R."
                  className="size-10 rounded-full object-cover border border-outline-variant"
                  local="/images/maria-r.jpg"
                />
                <div>
                  <p className="text-xs font-bold text-on-surface">Solved by Maria R.</p>
                  <p className="text-[11px] text-on-surface-variant">Maid Services Expert</p>
                </div>
              </div>
              <div className="flex text-amber-500 text-xs">★★★★★</div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary">
                  Legal
                </span>
                <span className="text-xs text-on-surface-variant">Solved in 9 minutes</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">
                "Landlord refused to return my security deposit."
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                Lawyer reviewed the agreement and drafted a formal notice for the landlord.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-container flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Photo
                  alt="Sarah C."
                  className="size-10 rounded-full object-cover border border-outline-variant"
                  local="/images/sarah-c.jpg"
                />
                <div>
                  <p className="text-xs font-bold text-on-surface">Solved by Sarah C.</p>
                  <p className="text-[11px] text-on-surface-variant">Property Lawyer</p>
                </div>
              </div>
              <div className="flex text-amber-500 text-xs">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
