import Logo from './Logo.jsx';

// Home page header, sized like the home design (h-20, text-sm).
const NAV_LINK = 'text-on-surface-variant hover:text-primary text-sm font-semibold transition-colors';

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-10">
            <Logo variant="home" />
            <nav className="hidden lg:flex items-center gap-7">
              <a className={NAV_LINK} href="#how-it-works">
                How It Works
              </a>
              <a className={NAV_LINK} href="#categories">
                Categories
              </a>
              <a className={NAV_LINK} href="#faqs">
                FAQs
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-surface-container-low rounded-xl px-3.5 py-2 w-64 border border-outline-variant/40 focus-within:border-primary transition-all">
              <span className="material-symbols-outlined text-outline text-[20px] mr-2">search</span>
              <input
                className="w-full bg-transparent border-none p-0 text-sm text-on-surface placeholder:text-outline focus:ring-0 focus:outline-none"
                placeholder="Search your topics.."
                type="text"
              />
            </div>
            <a
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 bg-primary text-on-primary font-bold text-sm shadow-sm hover:bg-primary-container transition-all"
              href="#quick-match"
            >
              Ask an Expert
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
