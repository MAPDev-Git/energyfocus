import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import c1 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_1.jpg';
import c2 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_2.jpg';
import c3 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_3.jpg';
import c4 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_4.jpg';
import c5 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_5.jpg';

// Doubled list for seamless continuous infinite marquee
const galleryImages = [c1, c2, c3, c4, c5, c1, c2, c3, c4, c5];

export default function InstagramCarousel() {
  const containerRef = useRef(null);

  // Scroll scrubbing powered by scroll-world engine
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Map mouse scroll position to horizontal translation
  const scrollX = useTransform(scrollYProgress, [0, 1], ['5%', '-35%']);

  return (
    <section
      ref={containerRef}
      className="py-12 bg-gradient-to-b from-[#000000] via-[#050C16] to-[#0A121E] relative overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute w-[600px] h-[300px] left-1/2 -translate-x-1/2 bg-radial from-[#C9A84C]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Pure Freestanding Image Track: Continuous Motion + Mouse Scroll Scrubbing */}
      <div className="relative z-10 w-full overflow-hidden py-4">
        <motion.div style={{ x: scrollX }} className="flex items-center gap-6 w-max">
          <motion.div
            className="flex items-center gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            }}
          >
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="shrink-0 w-64 md:w-80 group cursor-pointer"
              >
                {/* Pure Freestanding Poster Image (No text, no title, no buttons) */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.85)] border border-[#C9A84C]/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(201,168,76,0.5)] group-hover:border-[#E0C060]">
                  <img
                    src={src}
                    alt={`Gallery Image ${idx + 1}`}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
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
