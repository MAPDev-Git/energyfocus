import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, Sparkles, ExternalLink } from 'lucide-react';
import bottleImg from '../../Assets/EF_Base_Promo_SF_Upscale.png';

const packages = [
  {
    title: 'SINGLE BOTTLE',
    bottles: '1 Bottle',
    supply: '30-days supply',
    price: '$33',
    originalPrice: '',
    perBottle: '/ Bottle',
    badge: 'AVAILABLE',
    popular: true,
    inStock: true,
    link: 'https://buy.stripe.com/00w4gB3Qa7DCeYkglA3Nm00',
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

        {/* Package Card */}
        <div className="grid grid-cols-1 gap-8 items-center mb-16 max-w-md mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              className={`relative flex flex-col justify-between transition-all duration-300 ${
                pkg.inStock
                  ? 'p-8 md:p-10 md:scale-105 z-20 available-card-neon'
                  : 'glass-panel p-6 md:p-7 md:scale-95 z-10 border border-gray-800 bg-[#080E17]/60 opacity-50 grayscale'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Badge */}
              {pkg.badge && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-30 whitespace-nowrap ${
                    pkg.inStock
                      ? 'text-xs bg-gradient-to-r from-[#E0F2FE] via-[#38BDF8] to-[#0284C7] text-[#030712] shadow-[0_4px_20px_rgba(56,189,248,0.8)] border border-[#7DD3FC] scale-110'
                      : 'text-[10px] bg-gray-800 text-gray-400 border border-gray-700'
                  }`}
                >
                  {pkg.inStock && <Sparkles className="w-3.5 h-3.5" />}
                  {pkg.badge}
                </div>
              )}

              <div className="relative z-10">
                <div className="text-center pb-6 border-b border-[#C9A84C]/20">
                  <span className={`font-mono uppercase tracking-widest block mb-1 ${
                    pkg.inStock ? 'text-xs text-[#E0C060] font-bold' : 'text-[11px] text-[#8D7556]'
                  }`}>
                    {pkg.title}
                  </span>
                  <h3 className={`font-extrabold ${pkg.inStock ? 'text-3xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]' : 'text-xl text-gray-300'}`}>
                    {pkg.bottles}
                  </h3>
                  <span className="text-xs text-[#E0C060]/90 font-mono block mt-1">{pkg.supply}</span>

                  <div className="mt-6 flex items-baseline justify-center gap-2">
                    {pkg.originalPrice && (
                      <span className="text-sm text-[#8D7556] line-through font-mono">
                        {pkg.originalPrice}
                      </span>
                    )}
                    <span className={`font-black font-mono ${
                      pkg.inStock ? 'text-6xl text-[#E0C060] drop-shadow-[0_2px_15px_rgba(224,192,96,0.3)]' : 'text-4xl text-gray-500'
                    }`}>
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-xs text-white mt-1 font-mono font-semibold">{pkg.perBottle}</p>
                </div>

                {/* Bottle Image */}
                <div className="py-8 flex justify-center">
                  <img
                    src={bottleImg}
                    alt={pkg.bottles}
                    className={`object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-all duration-300 ${
                      pkg.inStock ? 'h-64 md:h-72 scale-105 hover:scale-110' : 'h-32 opacity-70'
                    }`}
                  />
                </div>

                {/* Benefits List */}
                <ul className="space-y-3 text-xs text-white mb-8 font-medium">
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

              <div className="relative z-10">
                {pkg.inStock ? (
                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-gold py-4 text-center flex items-center justify-center gap-2 text-base font-extrabold shadow-[0_0_25px_rgba(201,168,76,0.35)]"
                  >
                    <ShoppingCart className="w-5 h-5" /> Buy Now
                  </a>
                ) : (
                  <div className="w-full py-3 bg-gray-800/80 text-gray-400 rounded-xl text-center text-xs font-bold tracking-wider uppercase border border-gray-700/50 cursor-not-allowed select-none">
                    OUT OF STOCK
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amazon and TikTok Buying Option Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://www.amazon.com/dp/B0G2KL7Y28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base py-4 px-10 rounded-xl border-2 border-[#E0C060] bg-[#080E17]/90 text-[#E0C060] hover:bg-[#E0C060] hover:text-[#050C16] shadow-[0_0_30px_rgba(201,168,76,0.25)] inline-flex items-center justify-center gap-2 uppercase tracking-wider transition-all duration-300 font-extrabold w-full sm:w-auto"
          >
            BUY NOW ON AMAZON! <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://www.tiktok.com/@morethan_aromas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base py-4 px-10 rounded-xl border-2 border-[#E0C060] bg-[#080E17]/90 text-[#E0C060] hover:bg-[#E0C060] hover:text-[#050C16] shadow-[0_0_30px_rgba(201,168,76,0.25)] inline-flex items-center justify-center gap-2 uppercase tracking-wider transition-all duration-300 font-extrabold w-full sm:w-auto"
          >
            BUY NOW ON TIKTOK! <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
