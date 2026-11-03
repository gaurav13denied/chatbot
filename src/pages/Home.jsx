import { useEffect } from 'react';
import HomeHeader from '../components/layout/HomeHeader.jsx';
import HomeFooter from '../components/layout/HomeFooter.jsx';
import Hero from '../components/home/Hero.jsx';
import Categories from '../components/home/Categories.jsx';
import Specialists from '../components/home/Specialists.jsx';
import HowItWorks from '../components/home/HowItWorks.jsx';
import RecentCases from '../components/home/RecentCases.jsx';
import Faqs from '../components/home/Faqs.jsx';
import FinalCta from '../components/home/FinalCta.jsx';

export default function Home() {
  // The home design sets its font on the body itself (with a sans-serif fallback)
  useEffect(() => {
    document.body.style.fontFamily = 'Manrope, sans-serif';
    return () => {
      document.body.style.fontFamily = '';
    };
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <HomeHeader />
      <main className="flex-1">
        <Hero />
        <Categories />
        <Specialists />
        <HowItWorks />
        <RecentCases />
        <Faqs />
        <FinalCta />
      </main>
      <HomeFooter />
    </div>
  );
}
