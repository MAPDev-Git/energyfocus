import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Difference from './components/Difference';
import Potential from './components/Potential';
import Testimonials from './components/Testimonials';
import InstagramCarousel from './components/InstagramCarousel';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050C16] text-[#EDEBE6] selection:bg-[#C9A84C] selection:text-[#050C16]">
      <main>
        <Hero />
        <Benefits />
        <Difference />
        <Potential />
        <Pricing />
        <Testimonials />
        <InstagramCarousel />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
