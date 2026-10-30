import { Link } from 'react-router-dom';
import BrandMark from '../BrandMark.jsx';

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-7">
            <Link className="flex items-center gap-2.5 group" to="/">
              <div className="size-7 rounded-lg bg-primary text-on-primary flex items-center justify-center shadow-sm shadow-primary/20 transition-transform group-hover:scale-105">
                <BrandMark className="size-4" />
              </div>
              <span className="text-on-surface font-headline-lg text-xl font-bold tracking-tight">
                ExpertHelp
              </span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              <a
                className="text-on-surface-variant hover:text-primary text-xs font-semibold py-1 transition-colors"
                href="#how-it-works"
              >
                How It Works
              </a>
              <a
                className="text-on-surface-variant hover:text-primary text-xs font-semibold py-1 transition-colors"
                href="#categories"
              >
                Categories
              </a>
              <a
                className="text-on-surface-variant hover:text-primary text-xs font-semibold py-1 transition-colors"
                href="#faqs"
              >
                FAQs
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-surface-container-low rounded-lg px-3 py-1.5 w-56 border border-outline-variant/40 focus-within:border-primary transition-all">
              <span className="material-symbols-outlined text-outline text-[18px] mr-1.5">search</span>
              <input
                className="w-full bg-transparent border-none p-0 text-xs text-on-surface placeholder:text-outline focus:ring-0 focus:outline-none"
                placeholder="Search topics or devices..."
                type="text"
              />
            </div>
            <a
              className="inline-flex items-center justify-center rounded-lg px-3.5 py-1.5 bg-primary text-on-primary font-bold text-xs shadow-sm hover:bg-primary-container transition-all"
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
