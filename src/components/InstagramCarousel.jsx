import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import c1 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_1.jpg';
import c2 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_2.jpg';
import c3 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_3.jpg';
import c4 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_4.jpg';
import c5 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_5.jpg';

// Doubled infinite array of 10 items
const galleryImages = [c1, c2, c3, c4, c5, c1, c2, c3, c4, c5];

export default function InstagramCarousel() {
  const targetRef = useRef(null);

  // Pin scroll target tracking using Framer Motion scroll-world engine pattern
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Map vertical scroll distance (0 to 1) to horizontal movement (5vw to -62%)
  // This pins the section so scrolling the mouse moves cards horizontally
  // and only advances to the next section when the scroll reaches the last card!
  const x = useTransform(scrollYProgress, [0, 1], ['5vw', '-62%']);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-[#000000]"
    >
      {/* Sticky Viewport: Pins screen while mouse scrolling through cards */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Background Radial Glow */}
        <div className="absolute w-[800px] h-[400px] left-1/2 -translate-x-1/2 bg-radial from-[#C9A84C]/15 to-transparent blur-3xl pointer-events-none" />

        {/* Horizontal Card Track driven by page scroll */}
        <motion.div style={{ x }} className="flex items-center gap-8 pl-4">
          <motion.div
            className="flex items-center gap-8"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 35,
              repeat: Infinity,
            }}
          >
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="shrink-0 w-72 md:w-96 group cursor-pointer"
              >
                {/* Pure Freestanding Poster Image (No text, no titles, no buttons) */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.9)] border border-[#C9A84C]/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(201,168,76,0.5)] group-hover:border-[#E0C060]">
                  <img
                    src={src}
                    alt={`Gallery Image ${(idx % 5) + 1}`}
                    className="w-full h-[400px] md:h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
