import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const comparisons = [
  { before: 'Afternoon energy crashes', after: 'Sustained 8-hour clean energy' },
  { before: 'Difficult concentrating', after: 'Laser-sharp mental focus' },
  { before: 'Relying on multiple cups of coffee', after: 'Single convenient daily dose' },
  { before: 'Jittery from caffeine', after: 'Calm, smooth energy without jitters' },
  { before: 'Mental fatigue by evening', after: 'Sharp, accomplished mind all day' },
];

export default function Difference() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0A121E] via-[#0D1522]/40 to-[#0A121E]">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-gold">TRANSFORMATION</span>
          <h2 className="text-section-title text-gradient-gold">
            Feel The Difference Within Days
          </h2>
          <p className="text-body">
            Join thousands who've transformed their daily performance with Energy & Focus. Experience the different quality ingredients make.
          </p>
        </div>

        {/* Comparison Table / Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {comparisons.map((c, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center border border-[#C9A84C]/15 hover:border-[#C9A84C]/40"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              {/* Before / Problem */}
              <div className="md:col-span-5 flex items-center gap-3 text-sm text-[#8D7556]">
                <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span className="line-through decoration-red-400/50">{c.before}</span>
              </div>

              {/* Arrow Indicator */}
              <div className="hidden md:flex md:col-span-2 justify-center text-[#E0C060]">
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* After / Solution */}
              <div className="md:col-span-5 flex items-center gap-3 text-sm font-bold text-[#EDEBE6]">
                <CheckCircle2 className="w-5 h-5 text-[#E0C060] shrink-0" />
                <span className="text-[#E0C060]">{c.after}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
