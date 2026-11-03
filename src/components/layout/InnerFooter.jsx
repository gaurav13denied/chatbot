import { Link } from 'react-router-dom';
import BrandMark from '../BrandMark.jsx';

export default function InnerFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-surface-container py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                <BrandMark className="size-4" />
              </div>
              <span className="font-headline-lg text-lg font-bold text-on-surface">AskAnythingAnswers</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {' '}
              Friendly, real human expertise when you need fast, dependable answers for devices, printers, and
              everyday technology.{' '}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">
              Popular Categories
            </h4>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              <li>
                <Link
                  className="hover:text-primary transition-colors font-medium text-primary"
                  to="/category/printers"
                >
                  Printers & Scanners
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/#categories">
                  Computers & Laptops
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/#categories">
                  Smart Home & TV
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/#categories">
                  Cars & Vehicles
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/#categories">
                  Home Appliances
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">About Us</h4>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" to="/#how-it-works">
                  How It Works
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/#specialists">
                  Meet Our Specialists
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/#recent-cases">
                  Recent Problem Resolutions
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/#faqs">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/contact">
                  Apply as an Expert
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">Help & Legal</h4>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" to="/contact">
                  Contact Us
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
          <p>© 2026 AskAnythingAnswers. Dedicated to high-trust human guidance.</p>
        </div>
      </div>
    </footer>
  );
}
