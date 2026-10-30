import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the #anchor of the URL after a route change (the router does not do this by itself),
// or back to the top when the new page has no anchor.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Wait a tick so the target page has rendered.
    const t = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
}
