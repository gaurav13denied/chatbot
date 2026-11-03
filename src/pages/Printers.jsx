import Photo from '../components/Photo.jsx';
import { Link } from 'react-router-dom';
import useChat from '../lib/useChat.js';
import ChatWindow from '../components/home/ChatWindow.jsx';

// Starter chips that fill the intake box
const QUICK_CHIPS = [
  'Printer Shows Offline',
  'Paper Jam Error',
  'Wi-Fi / Network Setup',
  'Ink Cartridge Lockout',
  "Won't Print from Phone/Mac",
];

// media: undefined = the original page, 'video' = looping video behind the hero, 'image' = photo behind the hero
export default function Printers({ media }) {
  const chat = useChat();

  return (
    <div className="flex flex-col w-full">
      <div className="relative isolate w-full overflow-hidden">
        {media && (
          <>
            {/* Hero background for the video / image variants, softened with a light wash so the page stays light */}
            {media === 'video' ? (
              <video
                className="absolute inset-0 -z-20 size-full object-cover"
                src="/media/printer-hero.mp4"
                poster="/media/printer-hero-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
              />
            ) : (
              <img
                className="absolute inset-0 -z-20 size-full object-cover"
                src="/media/printer-kitchen.jpg"
                alt=""
                aria-hidden="true"
              />
            )}
            <div
              className={`absolute inset-0 -z-10 bg-gradient-to-r ${
                media === 'image' ? 'from-surface/95 via-surface/75 to-surface/25' : 'from-surface via-surface/90 to-surface/55'
              }`}
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-surface to-transparent" aria-hidden="true" />
          </>
        )}
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-96 -left-20 w-80 h-80 bg-secondary-fixed/25 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <nav className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
            <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Home</span>
            </Link>
            <span className="text-outline-variant">/</span>
            <Link className="hover:text-primary transition-colors" to="/#categories">
              Categories
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-bold">Printers & Scanners</span>
          </nav>
        </div>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-0 gap-x-10 lg:gap-10 items-center">
            <div className="contents lg:flex lg:col-span-7 lg:flex-col lg:pt-2">
              <div className="inline-flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2.5 px-3.5 sm:px-3 py-2 sm:py-1.5 rounded-xl sm:rounded-full bg-surface-container-low text-on-surface w-fit max-w-full mb-5 shadow-sm order-1 lg:order-none">
                <div className="flex items-center text-amber-500">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <span className="font-label-md text-label-md font-bold tracking-tight">
                  4.9/5 from 8,400+ printer questions resolved
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg lg:text-display-lg text-on-surface tracking-tight font-medium mb-5 leading-tight order-2 lg:order-none min-[1280px]:max-[1439px]:text-[54px]">
                {' '}
                Get Instant Help for Any Printer or Scanner Issue{' '}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed order-4 lg:order-none min-[1280px]:max-[1439px]:text-base">
                {' '}
                Troubleshoot offline errors, driver installation, paper jams, wireless connectivity, and ink
                cartridge problems with verified specialists who know your exact printer brand.{' '}
              </p>
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-lowest shadow-sm max-w-xl order-5 lg:order-none">
                <div className="relative flex-shrink-0">
                  <Photo
                    alt="David M. Specialist"
                    className="size-12 rounded-full object-cover shadow-sm"
                    local="/images/david-m.jpg"
                  />
                  <span className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">
                      David M.
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      and 6 other printer specialists
                    </span>
                  </div>
                  <p className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1 mt-0.5">
                    <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse" /> Online
                    right now • Avg reply under 90s{' '}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 max-w-xl order-6 lg:order-none">
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <p className="font-headline-sm text-headline-sm font-bold text-on-surface">98.4%</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    First-Session Fix Rate
                  </p>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <p className="font-headline-sm text-headline-sm font-bold text-on-surface">{'<'} 2 min</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Live Specialist Match</p>
                </div>
                <div className="p-3 bg-surface-container-low rounded-lg">
                  <p className="font-headline-sm text-headline-sm font-bold text-on-surface">35+ Brands</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Full Model Coverage</p>
                </div>
              </div>
            </div>
            <div className="order-3 lg:order-none lg:col-span-5 lg:self-start scroll-mt-24 mb-8 lg:mb-0" id="quick-match">
              <div className="flex flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_30px_80px_-30px_rgba(19,27,46,0.45)] ring-1 ring-black/10 lg:h-[min(640px,calc(100vh-11rem))] lg:min-h-[430px]">
                <ChatWindow chat={chat} chips={QUICK_CHIPS} inputId="printer-issue-input" />
              </div>
              <div className="mt-4 flex flex-col gap-2 px-1">
                <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span>100% Real Human Specialists • No automated bot loops</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">task_alt</span>
                  <span>Step-by-step guidance until you successfully print a page</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Diagnosed in Minutes
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1.5 mb-3">
            Common Printer Problems We Clear Every Day
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Don't waste hours tearing through confusing manuals. Our specialists know the mechanics to get
            your device working.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="size-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">wifi_off</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2.5">
                Printer Says Offline Even When Turned On
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                Windows or Mac reports the printer is unreachable, paused, or grayed out even though lights
                are steady green. We fix SNMP port locks, spooler freezes, and IP collisions.{' '}
              </p>
            </div>
            <div className="mt-6 pt-4 flex items-center justify-between text-primary font-label-md text-label-md">
              <span>Average fix: 6-8 mins</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="size-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">error</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2.5">
                Paper Jam Warning When No Paper is Stuck
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                Ghost jams caused by dislodged optical flag sensors, dusty pick-up rollers, or micro-torn
                paper fragments in the duplex gear assembly. Guided clearance without damaging trays.{' '}
              </p>
            </div>
            <div className="mt-6 pt-4 flex items-center justify-between text-primary font-label-md text-label-md">
              <span>Average fix: 8-12 mins</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="size-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">router</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2.5">
                Wireless Setup & AirPrint Connection Drops
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                New router or 5GHz Wi-Fi band causing your printer to lose connection. We configure 2.4GHz
                static assignments, WPS handshakes, and AirPrint multicast settings.{' '}
              </p>
            </div>
            <div className="mt-6 pt-4 flex items-center justify-between text-primary font-label-md text-label-md">
              <span>Average fix: 7-10 mins</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="size-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">format_color_reset</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2.5">
                Streaky, Faded, or Missing Colors After Replacement
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                Brand new cartridges producing blank pages, banding, or color misalignment. We perform deep
                printhead power flushes, purge air locks, and bypass chip read errors.{' '}
              </p>
            </div>
            <div className="mt-6 pt-4 flex items-center justify-between text-primary font-label-md text-label-md">
              <span>Average fix: 9-11 mins</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="size-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">downloading</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2.5">
                Driver Installation & "Printer Not Found" Errors
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                Software installer halts midway or says the device isn't recognized. We provide clean
                uninstalls of corrupted legacy packages and direct OEM driver installs.{' '}
              </p>
            </div>
            <div className="mt-6 pt-4 flex items-center justify-between text-primary font-label-md text-label-md">
              <span>Average fix: 8-10 mins</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="size-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">document_scanner</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2.5">
                Scanner Scans Blank Pages or Won't Send to PC
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                Flatbed moves but produces pure white PDFs, or "Scan to PC" throws communication errors. We
                configure TWAIN/WIA protocols, firewall exceptions, and folder shares.{' '}
              </p>
            </div>
            <div className="mt-6 pt-4 flex items-center justify-between text-primary font-label-md text-label-md">
              <span>Average fix: 6-9 mins</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                chevron_right
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-low py-16 lg:py-20" id="experts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                Vetted Hardware Technicians
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1">
                Meet Our Featured Printer Specialists
              </h2>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>Screened, verified, and continuously rated by users</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <Photo
                      alt="David M."
                      className="size-16 rounded-xl object-cover shadow-sm"
                      local="/images/david-m.jpg"
                    />{' '}
                    <span className="absolute -bottom-1 -right-1 size-3.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">
                        David M.
                      </h3>
                      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                    </div>
                    <p className="font-label-md text-label-md text-outline">
                      Senior Peripheral & Hardware Specialist
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-amber-500">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">4.98</span>
                      <span className="font-body-sm text-body-sm text-outline">(3,420+ ratings)</span>
                    </div>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {' '}
                  Specializes in HP, Canon & Brother wireless setup, queue errors, and paper jams. Over 12
                  years of hands-on field diagnostic experience.{' '}
                </p>
              </div>
              <div className="mt-6 pt-4 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                  HP OfficeJet
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Canon PIXMA
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Brother HL
                </span>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <Photo
                      alt="Elena R."
                      className="size-16 rounded-xl object-cover shadow-sm"
                      local="/images/elena-r.jpg"
                    />{' '}
                    <span className="absolute -bottom-1 -right-1 size-3.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">
                        Elena R.
                      </h3>
                      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                    </div>
                    <p className="font-label-md text-label-md text-outline">System & Driver Specialist</p>
                    <div className="flex items-center gap-1 mt-1 text-amber-500">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">4.96</span>
                      <span className="font-body-sm text-body-sm text-outline">(3,180+ ratings)</span>
                    </div>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {' '}
                  Expert in Mac/Windows driver issues, AirPrint troubleshooting, and spooler service crashes.
                  Former OEM certified service trainer.{' '}
                </p>
              </div>
              <div className="mt-6 pt-4 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                  macOS AirPrint
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Epson EcoTank
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Print Spooler
                </span>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <Photo
                      alt="Marcus B."
                      className="size-16 rounded-xl object-cover shadow-sm"
                      local="/images/marcus-b.jpg"
                    />{' '}
                    <span className="absolute -bottom-1 -right-1 size-3.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-lowest" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface truncate">
                        Marcus B.
                      </h3>
                      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                    </div>
                    <p className="font-label-md text-label-md text-outline">Wi-Fi & Network Specialist</p>
                    <div className="flex items-center gap-1 mt-1 text-amber-500">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">4.97</span>
                      <span className="font-body-sm text-body-sm text-outline">(2,410+ ratings)</span>
                    </div>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {' '}
                  Fixes printer IP disconnects, router dual-band conflicts, and office printer sharing.
                  Specializes in multi-device network discovery.{' '}
                </p>
              </div>
              <div className="mt-6 pt-4 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Mesh Networks
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Static IP
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium">
                  Shared Printers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" id="recent-cases">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              Live Activity Log
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1">
              Recent Problem Resolutions
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-label-md text-label-md font-bold">
            <span className="size-2 rounded-full bg-emerald-600 animate-pulse" /> 142 printer sessions
            completed today{' '}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                  Resolved in 7 mins
                </span>
                <span className="font-body-sm text-body-sm text-outline">18 mins ago</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3 leading-snug">
                {' '}
                HP Envy 6055 wireless setup failed after router upgrade{' '}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                User replaced router; printer could not acquire IP address on new Wi-Fi mesh. Specialist
                isolated the 2.4GHz network channel and re-provisioned via HP Smart direct pin.{' '}
              </p>
            </div>
            <div className="mt-6 pt-4 flex items-center justify-between text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Photo
                  alt="David M."
                  className="size-7 rounded-full object-cover"
                  local="/images/david-m.jpg"
                />
                <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                  Solved by David M.
                </span>
              </div>
              <span className="material-symbols-outlined text-emerald-600 text-[20px]">check_circle</span>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                  Resolved in 10 mins
                </span>
                <span className="font-body-sm text-body-sm text-outline">42 mins ago</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3 leading-snug">
                {' '}
                Epson EcoTank error code 0x97 cleared and printing smoothly{' '}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                Hardware stop error halted mid-print. Technician guided electrical static discharge sequence,
                inspected encoder strip timing, and cleared locked registry buffers.{' '}
              </p>
            </div>
            <div className="mt-6 pt-4 flex items-center justify-between text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Photo
                  alt="Elena R."
                  className="size-7 rounded-full object-cover"
                  local="/images/elena-r.jpg"
                />
                <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                  Solved by Elena R.
                </span>
              </div>
              <span className="material-symbols-outlined text-emerald-600 text-[20px]">check_circle</span>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                  Resolved in 8 mins
                </span>
                <span className="font-body-sm text-body-sm text-outline">1 hour ago</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3 leading-snug">
                {' '}
                Brother HL-L2350DW duplex paper feed misalignment resolved{' '}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {' '}
                Two-sided print jobs jammed in reverse roller tray. Guided manual roller clean with isopropyl
                alcohol and reset default page format from Legal to Letter in driver properties.{' '}
              </p>
            </div>
            <div className="mt-6 pt-4 flex items-center justify-between text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Photo
                  alt="David M."
                  className="size-7 rounded-full object-cover"
                  local="/images/david-m.jpg"
                />
                <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                  Solved by David M.
                </span>
              </div>
              <span className="material-symbols-outlined text-emerald-600 text-[20px]">check_circle</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-surface-container-low py-16 lg:py-20" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              Frictionless Experience
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1.5 mb-3">
              How We Fix Your Printer in 3 Simple Steps
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              No phone queues, no automated menus, no hauling heavy hardware to a repair shop.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm relative flex flex-col">
              <span className="font-headline-lg text-headline-lg text-primary font-bold opacity-30 mb-2">
                01
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3">
                Type your printer model & issue
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                Share what's happening in plain English—flashing light color, error code numbers, or simply
                "it won't connect."{' '}
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">edit_note</span> Takes under 30
                seconds{' '}
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm relative flex flex-col">
              <span className="font-headline-lg text-headline-lg text-primary font-bold opacity-30 mb-2">
                02
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3">
                Connect with a brand specialist
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                We immediately route your session to a verified expert who has resolved problems on your exact
                brand and model.{' '}
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">person_check</span> Live 1-on-1 human
                chat{' '}
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm relative flex flex-col">
              <span className="font-headline-lg text-headline-lg text-primary font-bold opacity-30 mb-2">
                03
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3">
                Chat step-by-step to a clean print
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {' '}
                Follow clear, easy instructions. Send pictures of error lights if helpful, and finish once
                your test page comes out crisp.{' '}
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">print</span> Verified test page
                completion{' '}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24" id="faqs">
        <div className="text-center mb-12">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Clear & Direct
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1.5 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Everything you need to know about getting help with your printer or scanner.
          </p>
        </div>
        <div className="space-y-4">
          <details
            className={
              'group bg-surface-container-lowest rounded-xl shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden'
            }
            open
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Do I need technical skills or special tools to fix my printer?
              </h3>
              <span className="material-symbols-outlined text-outline transition-transform duration-200 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {' '}
              Not at all! Our specialists guide you using everyday words and plain instructions. You don’t
              need screwdrivers, diagnostic cables, or special technical knowledge. Most issues are resolved
              by pressing simple button combinations, adjusting settings on your screen, or following guided
              reset procedures.{' '}
            </p>
          </details>
          <details
            className={
              'group bg-surface-container-lowest rounded-xl shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden'
            }
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Can you help if my printer is completely unresponsive?
              </h3>
              <span className="material-symbols-outlined text-outline transition-transform duration-200 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {' '}
              Yes. Unresponsive printers often suffer from power module safety lockouts, firmware boot loop
              interruptions, or stalled data queues blocking subsequent commands. Our specialists will walk
              you through power dissipation cycles and hardware hard-resets specific to your
              manufacturer.{' '}
            </p>
          </details>
          <details
            className={
              'group bg-surface-container-lowest rounded-xl shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden'
            }
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Can I send photos of error codes or flashing lights?
              </h3>
              <span className="material-symbols-outlined text-outline transition-transform duration-200 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {' '}
              Absolutely. You can easily snap a photo with your smartphone of the printer’s small LCD screen,
              the flashing amber/orange LED lights, or the paper feed mechanism and drop it right into the
              chat. Photos often cut resolution time in half by giving the specialist immediate visual
              diagnosis.{' '}
            </p>
          </details>
          <details
            className={
              'group bg-surface-container-lowest rounded-xl shadow-sm p-6 [&_summary::-webkit-details-marker]:hidden'
            }
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                What if I need to restart my printer or computer during our chat?
              </h3>
              <span className="material-symbols-outlined text-outline transition-transform duration-200 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {' '}
              Your chat session remains open and active. If you need to reboot your router, PC, or printer,
              simply come right back to the browser window and your specialist will be waiting for you. You
              won’t lose your place in line or have to explain the issue all over again.{' '}
            </p>
          </details>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-on-primary p-8 sm:p-12 lg:p-16 shadow-xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/40 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-primary/10 text-on-primary font-label-md text-label-md font-bold mb-6">
              <div className="flex items-center text-amber-300">
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <span>Rated 4.9/5 by 8,400+ satisfied printer owners</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg lg:text-display-lg font-medium tracking-tight text-on-primary mb-4 leading-tight">
              {' '}
              Ready to get your printer working again?{' '}
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-8 max-w-xl leading-relaxed">
              {' '}
              Skip the frustrating user manual and manufacturer call centers. Connect with a real technician
              right now and print your documents with peace of mind.{' '}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-surface-container-lowest text-primary font-headline-sm text-headline-sm font-bold shadow-md hover:bg-surface-container-low transition-all text-center" href="#quick-match">
                {' '}
                Connect with a Specialist Now{' '}
              </a>
              <div className="flex items-center gap-3 text-on-primary/90 font-label-md text-label-md sm:ml-2">
                <span className="material-symbols-outlined text-emerald-300 text-[20px]">bolt</span>
                <span>Average connection time under 90 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
