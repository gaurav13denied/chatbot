import { useEffect } from 'react';
import InnerHeader from './InnerHeader.jsx';
import InnerFooter from './InnerFooter.jsx';

// Shell shared by the printers, contact, privacy and terms pages (fixed header + footer).
export default function InnerLayout({ active, children }) {
  // The inner pages of the design use smooth anchor scrolling, no overscroll bounce and the body-md font
  useEffect(() => {
    const html = document.documentElement.classList;
    const body = document.body.classList;
    html.add('scroll-smooth');
    body.add('font-body-md', 'overscroll-y-none');
    return () => {
      html.remove('scroll-smooth');
      body.remove('font-body-md', 'overscroll-y-none');
    };
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <InnerHeader active={active} />
      <main className="flex-1 pt-14">{children}</main>
      <InnerFooter />
    </div>
  );
}
