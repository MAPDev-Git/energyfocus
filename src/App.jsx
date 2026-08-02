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
  const [currentRoute, setCurrentRoute] = useState(() => {
    return typeof window !== 'undefined' ? window.location.hash : '';
  });

  useEffect(() => {
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

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
