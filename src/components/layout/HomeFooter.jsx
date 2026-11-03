import { Link } from 'react-router-dom';

export default function HomeFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-surface-container py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 space-y-3">
            <img src="/images/logo.png" alt="AskAnythingAnswers" width="296" height="57" className="h-12 w-auto" />
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {' '}
              Friendly, real human expertise when you need fast, dependable answers for devices, appliances,
              and everyday technology.{' '}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">
              Popular Categories
            </h4>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" href="#categories">
                  Computers & Systems
                </a>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/category/printers">
                  Printers & Scanners
                </Link>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#categories">
                  Cars & Vehicles
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#categories">
                  Smart Home & TV
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#categories">
                  Home Appliances
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">About Us</h4>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" href="#how-it-works">
                  How It Works
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#faqs">
                  Frequently Asked Questions
                </a>
              </li>
              </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">Help Desk</h4>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" to="/contact">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/terms">
                  Terms of Service
                </Link>
              </li>
              </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between text-xs text-on-surface-variant gap-4">
          <p>© 2026 AskAnythingAnswers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
