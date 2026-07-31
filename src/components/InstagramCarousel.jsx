import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Film } from 'lucide-react';

import c1 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_1.jpg';
import c2 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_2.jpg';
import c3 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_3.jpg';
import c4 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_4.jpg';
import c5 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_5.jpg';

const images = [
  { id: 1, src: c1, title: 'Peak Energy', tag: 'Instagram Story' },
  { id: 2, src: c2, title: 'Laser Focus', tag: 'Community Post' },
  { id: 3, src: c3, title: 'Clean Formula', tag: 'Supplement Facts' },
  { id: 4, src: c4, title: 'Daily Stamina', tag: 'Customer Story' },
  { id: 5, src: c5, title: 'Powerful Mind', tag: 'Official Release' },
];

export default function InstagramCarousel() {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.75;
      rowRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#000000] via-[#050C16] to-[#0A121E] relative overflow-hidden">
      <div className="container relative z-10 space-y-6">
        
        {/* Header Netflix Style */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-[#C9A84C]/20 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[#E0C060] font-mono text-xs uppercase tracking-widest mb-1">
              <Film className="w-4 h-4 text-[#E0C060]" />
              NETFLIX STYLE SHOWCASE
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gradient-gold">
              More Than Aromas Gallery
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8D7556] font-mono hidden sm:inline">
              Deslize para ver mais
            </span>
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-[#0D1522] border border-[#C9A84C]/30 text-[#E0C060] flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#050C16] transition-all shadow-md"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-[#0D1522] border border-[#C9A84C]/30 text-[#E0C060] flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#050C16] transition-all shadow-md"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Freestanding Netflix Row Slider */}
        <div
          ref={rowRef}
          className="flex items-center gap-6 overflow-x-auto scrollbar-none scroll-smooth py-4 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              className="relative group shrink-0 w-64 md:w-80 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              {/* Freestanding poster image without box container */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.85)] border border-[#C9A84C]/25 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] group-hover:border-[#E0C060]">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050C16] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Tag & Title on hover / bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] font-mono text-[#E0C060] uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#E0C060]" /> {img.tag}
                  </span>
                  <h3 className="text-base font-bold text-[#EDEBE6] drop-shadow-md">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
