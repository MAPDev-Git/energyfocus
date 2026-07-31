import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, Sparkles, ExternalLink } from 'lucide-react';
import bottleImg from '../../Assets/EnergyFocus_Bottle_Base_SF.png';

const packages = [
  {
    title: 'SINGLE',
    bottles: '1 Bottle',
    supply: '30-days supply',
    price: '$33',
    originalPrice: '',
    perBottle: '/ Bottle',
    badge: 'AVAILABLE',
    popular: true,
    inStock: true,
    link: 'https://www.amazon.com/dp/B0G2KL7Y28',
  },
  {
    title: 'MOST POPULAR',
    bottles: '3 Bottles',
    supply: '90-days supply',
    price: '$26',
    originalPrice: '$84',
    perBottle: '/ Bottle ($78 Total)',
    badge: 'OUT OF STOCK',
    popular: false,
    inStock: false,
    link: '#',
  },
  {
    title: 'GREAT DEAL',
    bottles: '5 Bottles',
    supply: '150-days supply',
    price: '$28',
    originalPrice: '$145',
    perBottle: '/ Bottle ($140 Total)',
    badge: 'OUT OF STOCK',
    popular: false,
    inStock: false,
    link: '#',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#08101C] via-[#050C16] to-[#040912]">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C9A84C]/5 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="badge-gold">PACKAGES & PRICING</span>
          <h2 className="text-section-title text-gradient-gold">
            Choose Your Performance Level
          </h2>
          <p className="text-body">
            Click any package below to order. All packages include premium ingredients, Fast and FREE USA Shipping - Satisfaction Guaranteed.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              className={`glass-panel p-8 relative flex flex-col justify-between transition-all duration-300 ${
                pkg.inStock
                  ? 'border-2 border-[#E0C060] shadow-[0_0_45px_rgba(201,168,76,0.35)] bg-[#0D1522]'
                  : 'border border-gray-800 bg-[#080E17]/60 opacity-60 grayscale'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Badge */}
              {pkg.badge && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 font-black text-xs tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 ${
                    pkg.inStock
                      ? 'bg-gradient-to-r from-[#E0C060] to-[#C9A84C] text-[#050C16]'
                      : 'bg-gray-800 text-gray-400 border border-gray-700'
                  }`}
                >
                  {pkg.inStock && <Sparkles className="w-3.5 h-3.5" />}
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="text-center pb-6 border-b border-[#C9A84C]/15">
                  <span className="text-xs font-mono text-[#8D7556] uppercase tracking-widest block mb-1">
                    {pkg.title}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#EDEBE6]">{pkg.bottles}</h3>
                  <span className="text-xs text-[#8D7556] font-mono block mt-1">{pkg.supply}</span>

                  <div className="mt-6 flex items-baseline justify-center gap-2">
                    {pkg.originalPrice && (
                      <span className="text-lg text-[#8D7556] line-through font-mono">
                        {pkg.originalPrice}
                      </span>
                    )}
                    <span className={`text-5xl font-black font-mono ${pkg.inStock ? 'text-[#E0C060]' : 'text-gray-500'}`}>
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#EDEBE6] mt-1 font-mono font-semibold">{pkg.perBottle}</p>
                </div>

                {/* Bottle Image */}
                <div className="py-6 flex justify-center">
                  <img
                    src={bottleImg}
                    alt={pkg.bottles}
                    className="h-36 w-auto object-contain drop-shadow-md"
                  />
                </div>

                {/* Benefits List */}
                <ul className="space-y-3 text-xs text-[#EDEBE6] mb-8">
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${pkg.inStock ? 'text-[#E0C060]' : 'text-gray-600'}`} /> Free US shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${pkg.inStock ? 'text-[#E0C060]' : 'text-gray-600'}`} /> Ashwagandha, Creatine & Caffeine
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${pkg.inStock ? 'text-[#E0C060]' : 'text-gray-600'}`} /> 60 Capsules per bottle
                  </li>
                </ul>
              </div>

              <div>
                {pkg.inStock ? (
                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-gold py-3.5 text-center flex items-center justify-center gap-2 text-sm font-bold"
                  >
                    <ShoppingCart className="w-4 h-4" /> Buy Now
                  </a>
                ) : (
                  <div className="w-full py-3.5 bg-gray-800/80 text-gray-400 rounded-xl text-center text-sm font-bold tracking-wider uppercase border border-gray-700/50 cursor-not-allowed select-none">
                    OUT OF STOCK
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amazon Buying Option Button */}
        <div className="text-center pt-4">
          <a
            href="https://www.amazon.com/dp/B0G2KL7Y28"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(201,168,76,0.3)] inline-flex items-center gap-2 uppercase tracking-wider"
          >
            BUY NOW ON AMAZON! <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
