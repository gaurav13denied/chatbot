import { Link } from 'react-router-dom';

const linkClass = 'hover:text-primary transition-colors';

const CATEGORIES = [
  { label: 'Plumbing', to: '/category/plumbing' },
  { label: 'Housekeeping', to: '/#categories' },
  { label: 'Maid Services', to: '/#categories' },
  { label: 'Property and Legal', to: '/#categories' },
  { label: 'Home Appliances', to: '/#categories' },
];

const ABOUT = [
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Meet Our Specialists', to: '/#specialists' },
  { label: 'Recent Problem Resolutions', to: '/#recent-cases' },
  { label: 'Frequently Asked Questions', to: '/#faqs' },
  { label: 'Apply as an Expert', to: '/contact' },
];

// Every page of the site is linked from here.
const HELP = [
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Cookies Policy', to: '/cookies' },
  { label: 'Refund Policy', to: '/refund-policy' },
  { label: 'Cancellation Policy', to: '/cancellation-policy' },
  { label: 'Taxes & Fees (10% Service Fee)', to: '/taxes-and-fees' },
];

function Column({ title, items }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">{title}</h4>
      <ul className="space-y-2 text-xs text-on-surface-variant">
        {items.map((item) => (
          <li key={item.label}>
            <Link className={linkClass} to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-surface-container py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 space-y-3">
            <img
              src="/images/logo.png"
              alt="AskAnythingAnswers"
              width="296"
              height="57"
              className="h-12 w-auto"
            />
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Friendly, real human expertise when you need fast, dependable answers for your daily problems,
              from simple leakages to legal queries.
            </p>
          </div>
          <Column title="Popular Categories" items={CATEGORIES} />
          <Column title="About Us" items={ABOUT} />
          <Column title="Help & Legal" items={HELP} />
        </div>
        <div className="pt-8 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between text-xs text-on-surface-variant gap-4">
          <p>© 2026 AskAnythingAnswers, a service of TECH-FIN SOLUTIONS LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link className={linkClass} to="/privacy">
              Privacy
            </Link>
            <Link className={linkClass} to="/terms">
              Terms
            </Link>
            <Link className={linkClass} to="/contact">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
