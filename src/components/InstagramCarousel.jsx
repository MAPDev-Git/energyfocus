import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import c1 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_1.jpg';
import c2 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_2.jpg';
import c3 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_3.jpg';
import c4 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_4.jpg';
import c5 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_5.jpg';

// 4 complete sets (20 images total) so moving from 0% to -50% is a 100% seamless infinite loop
const galleryImages = [
  c1, c2, c3, c4, c5,
  c1, c2, c3, c4, c5,
  c1, c2, c3, c4, c5,
  c1, c2, c3, c4, c5,
];

export default function InstagramCarousel() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-[#000000] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute w-[800px] h-[400px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-radial from-[#C9A84C]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Center Viewport Container: Exactly 3 cards visible with side gradients */}
      <div className="max-w-[1020px] mx-auto relative overflow-hidden px-4">
        
        {/* Left Gradient Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />

        {/* Right Gradient Edge Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />

        {/* Continuous Infinite Marquee Track */}
        <motion.div
          className="flex items-center gap-6"
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
              onClick={() => setSelectedImage(src)}
              className="shrink-0 w-72 md:w-80 group cursor-zoom-in relative"
            >
              {/* Pure Freestanding Poster Image with Click to Expand */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.9)] border border-[#C9A84C]/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(201,168,76,0.5)] group-hover:border-[#E0C060]">
                <img
                  src={src}
                  alt={`Gallery Image ${(idx % 5) + 1}`}
                  className="w-full h-[380px] md:h-[430px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle Zoom Hint Overlay on Hover */}
                <div className="absolute inset-0 bg-[#050C16]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#050C16]/80 border border-[#E0C060] text-[#E0C060] flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Lightbox Modal when Image is Clicked */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-[#C9A84C]/50 shadow-[0_0_80px_rgba(201,168,76,0.5)]"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-[#050C16]/90 text-[#E0C060] border border-[#C9A84C]/40 flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#050C16] transition-all shadow-lg"
                aria-label="Close enlarged view"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged Gallery View"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
