import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Zap, Shield, Check } from 'lucide-react';
import labelImg from '../../Assets/EnergyFocus_NewLabel.png';

const stats = [
  { value: '95%', label: 'Improved Focus' },
  { value: '92%', label: 'Better Memory' },
  { value: '98%', label: 'Increased Energy' },
  { value: '99%', label: 'User Satisfaction' },
];

const blend = [
  {
    name: 'Ashwagandha (KSM-66)',
    desc: 'Adaptogen scientifically proven to reduce stress and anxiety while enhancing cognitive stamina and brain function.',
  },
  {
    name: 'Creatine Monohydrate',
    desc: 'Fuels brain cell bioenergetics (ATP production) for faster decision-making, mental speed, and memory recall.',
  },
  {
    name: 'Natural Caffeine',
    desc: 'Delivers immediate, clean alertness without jitters, spikes, or energy crashes.',
  },
];

export default function Potential() {
  return (
    <section id="potential" className="py-24 bg-[#0D1522]/30 relative overflow-hidden">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-gold">NOOTROPIC BLEND</span>
          <h2 className="text-section-title text-gradient-gold">
            Unlock Your Mental Potential
          </h2>
          <p className="text-body">
            Our advanced nootropic blend is designed to optimize your brain's performance, helping you think clearer, focus for longer, and achieve more.
          </p>
        </div>

        {/* 4 Stat Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-6 text-center border border-[#C9A84C]/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <span className="font-extrabold text-4xl md:text-5xl text-gradient-gold block mb-2 font-mono">
                {s.value}
              </span>
              <span className="text-xs md:text-sm font-semibold text-[#EDEBE6] uppercase tracking-wider">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Formula Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Blend breakdown */}
          <div className="lg:col-span-7 space-y-6">
            {blend.map((b, idx) => (
              <motion.div
                key={idx}
                className="glass-panel p-6 border-l-4 border-l-[#C9A84C] flex gap-5 items-start"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/15 flex items-center justify-center text-[#E0C060] shrink-0 mt-1">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#EDEBE6] mb-1">{b.name}</h3>
                  <p className="text-sm text-[#8D7556] leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Label Showcase */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel p-6 max-w-md w-full text-center border border-[#C9A84C]/25">
              <img
                src={labelImg}
                alt="Energy & Focus Supplement Label"
                className="w-full h-auto rounded-xl border border-[#C9A84C]/20 shadow-2xl mb-4"
              />
              <span className="text-xs font-mono text-[#E0C060] block mb-1">
                100% TRANSPARENT LABEL
              </span>
              <p className="text-xs text-[#8D7556]">
                No proprietary blends. Full clinical dosages of every key ingredient for maximum safety and efficacy.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
