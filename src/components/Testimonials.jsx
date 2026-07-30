import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import c1 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_1.jpg';
import c2 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_2.jpg';
import c3 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_3.jpg';
import c4 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_4.jpg';
import c5 from '../../Assets/EF_Carrossel/EF_Insta_Carrossel_5.jpg';

const carouselImages = [c1, c2, c3, c4, c5];

const testimonials = [
  {
    location: 'Ohio, USA',
    quote:
      'For me, every day felt like a juggling act. Work deadlines, family commitments, personal goals – it was a constant battle. Now, I move with purpose. My thoughts are sharp, my energy is consistent, and I effortlessly manage my packed schedule.',
    stars: 5,
  },
  {
    location: 'New York, USA',
    quote:
      "I used to dread that feeling. The workday wasn't over, but my focus was. I'd reach for another coffee, knowing it was a bad trade – a short, anxious buzz. I stopped trading my performance for jitters. Energy & Focus gave me clean, sustained clarity.",
    stars: 5,
  },
  {
    location: 'California, USA',
    quote:
      'I tried pushing through with coffee and endless to-do lists, but the underlying mental fatigue remained. Energy & Focus completely changed my afternoon routine. No crash, just laser focus.',
    stars: 5,
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0D1522]/40 relative">
      <div className="container z-10 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-gold">REAL REVIEWS</span>
          <h2 className="text-section-title text-gradient-gold">
            Customer Testimonials
          </h2>
          <p className="text-body">
            See what our customers are saying about Energy & Focus.
          </p>
        </div>

        {/* Carousel & Quotes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Carousel */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative glass-panel p-3 w-full max-w-md aspect-square overflow-hidden rounded-2xl border border-[#C9A84C]/30">
              <img
                src={carouselImages[activeSlide]}
                alt={`Testimonial ${activeSlide + 1}`}
                className="w-full h-full object-cover rounded-xl transition-all duration-500"
              />

              {/* Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0E0D0B]/80 text-[#F5D66E] border border-[#C9A84C]/40 flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#0E0D0B] transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0E0D0B]/80 text-[#F5D66E] border border-[#C9A84C]/40 flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#0E0D0B] transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-4">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeSlide === i ? 'bg-[#F5D66E] w-6' : 'bg-[#9A8E6E]/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Quotes */}
          <div className="lg:col-span-6 space-y-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="glass-panel p-6 relative border border-[#C9A84C]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#C9A84C]/20" />
                <div className="flex text-[#E0C060] mb-3">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#EDEBE6] italic mb-4 leading-relaxed">
                  "{t.quote}"
                </p>
                <span className="text-xs text-[#8D7556] font-mono font-semibold">
                  Verified Customer • {t.location}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
