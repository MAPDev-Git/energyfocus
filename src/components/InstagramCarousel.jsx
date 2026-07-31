import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ChevronLeft, ChevronRight, Instagram, Sparkles } from 'lucide-react';

import c1 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_1.jpg';
import c2 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_2.jpg';
import c3 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_3.jpg';
import c4 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_4.jpg';
import c5 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_5.jpg';

const images = [
  { src: c1, alt: 'Energy & Focus Instagram Showcase 1' },
  { src: c2, alt: 'Energy & Focus Instagram Showcase 2' },
  { src: c3, alt: 'Energy & Focus Instagram Showcase 3' },
  { src: c4, alt: 'Energy & Focus Instagram Showcase 4' },
  { src: c5, alt: 'Energy & Focus Instagram Showcase 5' },
];

export default function InstagramCarousel() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll scrubbing powered by scroll-world engine principles
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Map scroll percentage 0..1 to image index 0..4
    const newIdx = Math.min(
      images.length - 1,
      Math.floor(latest * images.length)
    );
    setActiveIndex(newIdx);
  });

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] bg-gradient-to-b from-[#020306] via-[#050C16] to-[#03060C]"
    >
      {/* Sticky Viewport scrubbed by mouse scroll */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden px-4">
        
        {/* Glow backdrop */}
        <div className="absolute w-[600px] h-[600px] bg-radial from-[#C9A84C]/15 to-transparent blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 z-10">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E0C060] mb-3">
            <Instagram className="w-4 h-4 text-[#E0C060]" />
            SCROLL-DRIVEN SHOWCASE
          </div>
          <h2 className="text-section-title text-gradient-gold">
            Visual Experience
          </h2>
          <p className="text-xs md:text-sm text-[#8D7556] mt-2 font-mono">
            ↓ Scroll mouse to scrub through the gallery • Frame {activeIndex + 1} of {images.length}
          </p>
        </div>

        {/* Main Image Frame scrubbing */}
        <div className="relative z-10 w-full max-w-lg aspect-square flex items-center justify-center">
          {images.map((img, idx) => {
            const isActive = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                className="absolute inset-0 flex items-center justify-center p-2"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.92,
                  zIndex: isActive ? 20 : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className="glass-panel p-3 w-full h-full rounded-2xl border border-[#C9A84C]/40 shadow-[0_0_50px_rgba(201,168,76,0.25)] relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-xl shadow-2xl"
                  />
                  {/* Subtle Gold Overlay Badge */}
                  <div className="absolute top-6 right-6 bg-[#050C16]/80 backdrop-blur-md border border-[#C9A84C]/30 px-3 py-1 rounded-full text-[10px] font-mono text-[#E0C060] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#E0C060]" />
                    @morethan_aromas
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#050C16]/90 text-[#E0C060] border border-[#C9A84C]/40 flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#050C16] transition-all shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#050C16]/90 text-[#E0C060] border border-[#C9A84C]/40 flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#050C16] transition-all shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Scroll Progress Indicator Rail */}
        <div className="z-10 flex items-center gap-3 mt-8">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'bg-gradient-to-r from-[#E0C060] to-[#C9A84C] w-10 shadow-[0_0_15px_rgba(224,192,96,0.6)]'
                  : 'bg-[#8D7556]/30 hover:bg-[#8D7556]/60 w-2.5'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
