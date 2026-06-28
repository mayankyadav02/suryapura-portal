import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackToTop from '../components/layout/BackToTop';
import ScrollProgress from '../components/layout/ScrollProgress';
import SkipLink from '../components/layout/SkipLink';

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 0.35,
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1.1,
      gestureOrientation: 'vertical',
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-surya-50 text-ink-high transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <SkipLink />
      <ScrollProgress />

      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main
          id="main-content"
          role="main"
          aria-label="Main Content"
          tabIndex={-1}
          className="flex-1 pt-20 pb-24 md:pt-28 md:pb-0"
        >
          <Outlet />
        </main>

        <Footer />
      </div>

      <BackToTop />
    </div>
  );
}