import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Boost Energy',
    description:
      'Experience enhanced energy levels to power through your day with confidence and clarity.',
  },
  {
    icon: Target,
    title: 'Enhance Focus',
    description:
      'Achieve laser-sharp focus to maximize productivity and tackle any challenge head-on.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description:
      'Third-party tested, GMP certified and made in FDA-approved facilities with the highest quality standards.',
  },
  {
    icon: Clock,
    title: 'All-Day Performance',
    description:
      'Sustained 8-hour energy without crashes. Thanks to our time-release formula and natural adaptogens.',
  },
];

export default function Benefits() {
  return (
    <section id="why-works" className="py-24 bg-[#0D1522]/40 relative">
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-gold">SCIENCE BACKED</span>
          <h2 className="text-section-title text-gradient-gold">
            Why Energy & Focus Works
          </h2>
          <p className="text-body">
            Scientifically formulated with premium ingredients to deliver consistent, reliable performance enhancement without side effects.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => {
            const IconComp = f.icon;
            return (
              <motion.div
                key={idx}
                className="glass-panel p-8 flex flex-col items-center text-center justify-between border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-all"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/35 flex items-center justify-center text-[#E0C060] mb-6 mx-auto">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#EDEBE6] mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#8D7556] leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
