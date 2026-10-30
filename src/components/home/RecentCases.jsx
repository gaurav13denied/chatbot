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
              Real Troubleshooting Cases Solved Today{' '}
            </h2>
          </div>
          <p className="text-sm text-on-surface-variant max-w-sm">
            {' '}
            See what everyday problems our specialists tackled and solved within minutes.{' '}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary">
                  Printers & Hardware
                </span>
                <span className="text-xs text-on-surface-variant">Solved in 8 minutes</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">
                "HP DeskJet showed 'Printer Offline' right before an urgent boarding pass printing."
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                Guided the user through clearing the stuck print queue and reconnecting to the Wi-Fi network.
                The printer responded and printed right away.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-container flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Photo
                  alt="David M."
                  className="size-10 rounded-full object-cover border border-outline-variant"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1V1P4URgq15Dm3SFnBSbLV9jkmf9Iv1ESsWBoBtJbVDOi8Hm4VEIn4ybK59zBQJCmPlEx7CNIzsJfB-88Yk0v-NkVGienuR-2mu1Acp2NOyp4U7-Gi3kbcfzX8B-nSLphkVrIOMlDt581D-opjI4yHzjulpE_CgGYu7uH5uOdO4rQjqUABJpv3I2oOc2Lamnov2mR1ceNf9LtklsQvT7mFcx_m6wvPDghnNDTUqPqG8"
                  local="/images/david-m.jpg"
                />
                <div>
                  <p className="text-xs font-bold text-on-surface">Solved by David M.</p>
                  <p className="text-[11px] text-on-surface-variant">Printer & Computer Specialist</p>
                </div>
              </div>
              <div className="flex text-amber-500 text-xs">★★★★★</div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary">
                  Mac & Software
                </span>
                <span className="text-xs text-on-surface-variant">Solved in 11 minutes</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">
                "MacBook froze with spinning color wheel after updating macOS."
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                Walked through restarting in Safe Mode, finding a stuck startup app that was freezing the
                computer, and safely removing it.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-container flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Photo
                  alt="Elena R."
                  className="size-10 rounded-full object-cover border border-outline-variant"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WF_LJYUT1A2C7gAfcECyAUy-jfWi69r1yXecQTlSWk1-Z2uUfqrWj3n-gQ8cgAPpQ5RTv023To1WyR8ec7Ofx06K9bFHlxpgOyckS4_4mbeA0UomjxrAjIZ5qPfcGbrNTAuV_qiQHym8_VhuV2kjm3KWwzLrHla2jkItxjbBHrWPXBIzg0hiPCwINsBr-DB2cGZ_AKpUc1QOkYyMzHrBkk4NaIFG-reqQO1SvevzKO"
                  local="/images/elena-r.jpg"
                />
                <div>
                  <p className="text-xs font-bold text-on-surface">Solved by Elena R.</p>
                  <p className="text-[11px] text-on-surface-variant">Mac & Windows System Expert</p>
                </div>
              </div>
              <div className="flex text-amber-500 text-xs">★★★★★</div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary">
                  Automotive
                </span>
                <span className="text-xs text-on-surface-variant">Solved in 14 minutes</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">
                "Honda dashboard flickered with brake and battery light while starting."
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                Identified signs of low battery voltage rather than brake failure, instructed user to tighten
                the cable terminal, safely starting the car without a tow.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-container flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Photo
                  alt="Maria R."
                  className="size-10 rounded-full object-cover border border-outline-variant"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UHylAvxjQkVDQkTjjGa3d_bSW3dCKX0iS_HXC6-ANqs4XlsODJNBHez6J0QRxRyBOxXNeI0gZHAkzyP1HD5XT-bBzrOD_yPBZX7Q8Ce5bmx-vPrke-aiqzU2Nr-F9aGEKxL6FyU1cmvbB1qXmPtQ5QwrQXWTi4qiNl8Ilw07e4n_GMCvQgaDRdHPPFoPMe1q-CIHEKTbYzwoanQmX4-GuocFMSiIWMjIdJRbFv8LHq"
                  local="/images/maria-r.jpg"
                />
                <div>
                  <p className="text-xs font-bold text-on-surface">Solved by Maria R.</p>
                  <p className="text-[11px] text-on-surface-variant">Car & Vehicle Specialist</p>
                </div>
              </div>
              <div className="flex text-amber-500 text-xs">★★★★★</div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-primary">
                  Home Internet
                </span>
                <span className="text-xs text-on-surface-variant">Solved in 9 minutes</span>
              </div>
              <h3 className="font-headline-sm text-base font-bold text-on-surface mb-2">
                "Wi-Fi keeps disconnecting on tablets and phones upstairs in the evening."
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                Helped user separate their 2.4GHz and 5GHz Wi-Fi network names so mobile devices stopped
                jumping between bands.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-container flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Photo
                  alt="Marcus B."
                  className="size-10 rounded-full object-cover border border-outline-variant"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1U2E9OQ8DM79ENrsTCZJjF-cVmaqVJvRb3JQmtpm4ZsF6WwQbUSqjMLC3vXIbDnrI_ZwBL8z4qTqq9xZbbKQqIGMDMqUUhOcXBEUbP55sMs6R5mZauXdxuOens9nOiDqHRiS6_VFNxy7dqogTmJhkHSxEuym5aCsWiFj1w6R0BAO3tEOFHWcg1mTBLVAmK3amyno-wC0u0TFYlaMPpf9AbaJkYw9or759J9U80mAgoi"
                  local="/images/marcus-b.jpg"
                />
                <div>
                  <p className="text-xs font-bold text-on-surface">Solved by Marcus B.</p>
                  <p className="text-[11px] text-on-surface-variant">Wi-Fi & Internet Expert</p>
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
