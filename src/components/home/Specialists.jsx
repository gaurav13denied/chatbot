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
            Every expert is rigorously background-checked and evaluated by their peers so you get trusted
            answers quickly.{' '}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/40 shadow-sm flex flex-col items-center text-center">
            <div className="relative mb-4">
              <Photo
                alt="David M."
                className="size-20 rounded-full object-cover border-2 border-primary/20"
                src="https://lh3.googleusercontent.com/aida/AEtjO1V1P4URgq15Dm3SFnBSbLV9jkmf9Iv1ESsWBoBtJbVDOi8Hm4VEIn4ybK59zBQJCmPlEx7CNIzsJfB-88Yk0v-NkVGienuR-2mu1Acp2NOyp4U7-Gi3kbcfzX8B-nSLphkVrIOMlDt581D-opjI4yHzjulpE_CgGYu7uH5uOdO4rQjqUABJpv3I2oOc2Lamnov2mR1ceNf9LtklsQvT7mFcx_m6wvPDghnNDTUqPqG8"
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
                src="https://lh3.googleusercontent.com/aida/AEtjO1WF_LJYUT1A2C7gAfcECyAUy-jfWi69r1yXecQTlSWk1-Z2uUfqrWj3n-gQ8cgAPpQ5RTv023To1WyR8ec7Ofx06K9bFHlxpgOyckS4_4mbeA0UomjxrAjIZ5qPfcGbrNTAuV_qiQHym8_VhuV2kjm3KWwzLrHla2jkItxjbBHrWPXBIzg0hiPCwINsBr-DB2cGZ_AKpUc1QOkYyMzHrBkk4NaIFG-reqQO1SvevzKO"
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
                src="https://lh3.googleusercontent.com/aida/AEtjO1UHylAvxjQkVDQkTjjGa3d_bSW3dCKX0iS_HXC6-ANqs4XlsODJNBHez6J0QRxRyBOxXNeI0gZHAkzyP1HD5XT-bBzrOD_yPBZX7Q8Ce5bmx-vPrke-aiqzU2Nr-F9aGEKxL6FyU1cmvbB1qXmPtQ5QwrQXWTi4qiNl8Ilw07e4n_GMCvQgaDRdHPPFoPMe1q-CIHEKTbYzwoanQmX4-GuocFMSiIWMjIdJRbFv8LHq"
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
                src="https://lh3.googleusercontent.com/aida/AEtjO1Xpgpbt03b087ivXmKzcGWRC0jfHZSN4QOVmfuQj90-UitKXlJVNSCyeBubXAyT0iBpTON5ZewS7DRjhwvDxh7jLTS2c9QnhlUnX4sxoMmBrJ2jGS3Bucy8TMh_D1hH03w4-ZsAAiTT28aWOBFb5uZ7JTXZL1w3Vc52vn9fF6--EBHF6aGLsBQ3zY7fEQTJLbZaS_uW_bmX-dxaf9dHHxkuG6IZ9ItdDqBJYl2gEBMd"
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
                src="https://lh3.googleusercontent.com/aida/AEtjO1XeSD2WioXT00NEqCZxfDph265BzIC0T0VEmkwLGQdg1cDlKQqxHBX6acgIik3aQqHJ86XIe8YwL6mKnFPcaTEugeAdYH9Ie5Z_EUTEqP7heVhqhJydbaoRvmj-y1ylKdlftVj9lqgshGFBJw6ZqU84a71H4qQp2S6vPq-krIZq7Tae-tc1pHu8LRvHDx7XUmt4MUoy3c5RapD43HO27ajzKqYKG2cKIecwON8ELjFb"
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
                src="https://lh3.googleusercontent.com/aida/AEtjO1U2E9OQ8DM79ENrsTCZJjF-cVmaqVJvRb3JQmtpm4ZsF6WwQbUSqjMLC3vXIbDnrI_ZwBL8z4qTqq9xZbbKQqIGMDMqUUhOcXBEUbP55sMs6R5mZauXdxuOens9nOiDqHRiS6_VFNxy7dqogTmJhkHSxEuym5aCsWiFj1w6R0BAO3tEOFHWcg1mTBLVAmK3amyno-wC0u0TFYlaMPpf9AbaJkYw9or759J9U80mAgoi"
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
