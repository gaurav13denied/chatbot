import { Link } from 'react-router-dom';

// The site logo image (public/images/logo.png), as used before the design's icon + wordmark.
// `variant` picks the size for the header (home and inner pages) or the footer.
const SIZE = {
  home: 'h-8 sm:h-10 w-auto transition-transform group-hover:scale-[1.03]',
  inner: 'h-8 sm:h-10 w-auto transition-transform group-hover:scale-[1.03]',
  footer: 'h-12 w-auto',
};

export default function Logo({ variant = 'inner', linked = true }) {
  const img = (
    <img src="/images/logo.png" alt="AskAnythingAnswers" width="296" height="57" className={SIZE[variant]} />
  );
  return linked ? (
    <Link className="flex items-center gap-2.5 group" to="/" aria-label="AskAnythingAnswers home">
      {img}
    </Link>
  ) : (
    img
  );
}
