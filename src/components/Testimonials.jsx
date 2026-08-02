import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus K.',
    location: 'Ohio, USA',
    quote:
      'For me, every day felt like a juggling act. Work deadlines, family commitments, personal goals – it was a constant battle. Now, I move with purpose. My thoughts are sharp, my energy is consistent, and I effortlessly manage my packed schedule.',
    stars: 5,
  },
  {
    name: 'Sarah L.',
    location: 'New York, USA',
    quote:
      "I used to dread that feeling. The workday wasn't over, but my focus was. I'd reach for another coffee, knowing it was a bad trade – a short, anxious buzz. I stopped trading my performance for jitters. Energy & Focus gave me clean, sustained clarity.",
    stars: 5,
  },
  {
    name: 'David R.',
    location: 'California, USA',
    quote:
      'I tried pushing through with coffee and endless to-do lists, but the underlying mental fatigue remained. Energy & Focus completely changed my afternoon routine. No crash, just laser focus.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#040912] via-[#03060C] to-[#020306] relative">
      <div className="container z-10 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-gold">REAL REVIEWS</span>
          <h2 className="text-section-title text-gradient-gold">
            Customer Testimonials
          </h2>
          <p className="text-body">
            Discover how Energy & Focus empowers high performers across the USA.
          </p>
        </div>

        {/* 3 Dedicated Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-8 relative flex flex-col justify-between border border-[#C9A84C]/25 hover:border-[#E0C060]/50 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#C9A84C]/20" />
              
              <div>
                {/* Star Rating */}
                <div className="flex text-[#E0C060] mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#EDEBE6] italic mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-[#C9A84C]/15 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#EDEBE6]">{t.name}</h4>
                  <span className="text-xs text-[#8D7556] font-mono">{t.location}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-[#E0C060]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
