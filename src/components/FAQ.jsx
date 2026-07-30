import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What ingredients are included?',
    answer:
      'Our formula includes Ashwagandha, Creatine, and Caffeine for optimal energy and focus.',
  },
  {
    question: 'How should I take it?',
    answer:
      'Take one serving daily (2 capsules), preferably one in the morning or before a workout for best results and other after lunch.',
  },
  {
    question: 'Is it safe to use?',
    answer:
      'Yes, our product is formulated with clinically studied ingredients and is safe for most individuals when used as directed and above ages 18 years or older.',
  },
  {
    question: 'Can I take it daily?',
    answer:
      'Absolutely! It is designed for daily use to help maintain consistent energy and focus levels.',
  },
  {
    question: 'Where can I buy it?',
    answer:
      'You can purchase it directly from here in our website, with shipping available across the USA, click below to buy now.',
  },
  {
    question: 'How many capsules are in each bottle?',
    answer: '60 Capsules.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#050C16] relative">
      <div className="container max-w-4xl mx-auto z-10 relative">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="badge-gold">FAQ</span>
          <h2 className="text-section-title text-gradient-gold">
            Frequently Asked Questions
          </h2>
          <p className="text-body">
            Find answers to common questions about Energy & Focus.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                className="glass-panel overflow-hidden border border-[#C9A84C]/20"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#EDEBE6] hover:text-[#E0C060] transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3 text-base md:text-lg">
                    <HelpCircle className="w-5 h-5 text-[#C9A84C] shrink-0" />
                    {f.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C9A84C] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#E0C060]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 pb-6 pt-0 text-sm text-[#8D7556] leading-relaxed border-t border-[#C9A84C]/10"
                    >
                      <p className="pt-4">{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
