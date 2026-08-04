import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Difference from './components/Difference';
import Potential from './components/Potential';
import Testimonials from './components/Testimonials';
import InstagramCarousel from './components/InstagramCarousel';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    // Force browser to disable automatic scroll restoration on refresh
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Reset scroll position to top (Hero section) immediately on load/refresh
    window.scrollTo(0, 0);

    // Remove hash from URL on page refresh to ensure it always lands on Hero
    if (typeof window !== 'undefined' && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentRoute(hash);

      if (hash === '#privacy-policy' || hash === '#terms-and-conditions' || hash === '' || hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    };

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const renderContent = () => {
    if (currentRoute === '#privacy-policy') {
      return <PrivacyPolicy />;
    }
    if (currentRoute === '#terms-and-conditions') {
      return <TermsAndConditions />;
    }
    return (
      <main>
        <Hero />
        <InstagramCarousel />
        <Benefits />
        <Difference />
        <Potential />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-[#050C16] text-[#EDEBE6] selection:bg-[#C9A84C] selection:text-[#050C16]">
      {renderContent()}
      <Footer />
    </div>
  );
}
