import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ShieldCheck, Truck, Award, Star } from 'lucide-react';
import heroVideo from '../../Assets/Video_EF_CIma_Vertical.mp4';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-[#000000]">
      {/* Background Radial Glow */}
      <div className="hero-glow-bg" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/35 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#E0C060]">
              <Award className="w-4 h-4 text-[#E0C060]" />
              #1 Premium Supplement in the USA
            </div>

            {/* H1 Title */}
            <h1 className="text-hero text-gradient-gold">
              Unlock Your Peak Performance
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#EDEBE6] max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience unmatched energy and laser-sharp focus with our scientifically-formulated supplement. Trusted by thousands of high performers.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="https://www.amazon.com/dp/B0G2KL7Y28"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-lg py-4 px-10 rounded-xl shadow-[0_0_30px_rgba(201,168,76,0.35)]"
              >
                <ShoppingCart className="w-5 h-5" /> Buy Now
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-[#C9A84C]/20 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center text-[#E0C060]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-[#EDEBE6]">FDA Approved Facility</h4>
                  <p className="text-xs text-[#8D7556]">GMP Certified Standards</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center text-[#E0C060]">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-[#EDEBE6]">Free Shipping</h4>
                  <p className="text-xs text-[#8D7556]">Fast Delivery Across USA</p>
                </div>
              </div>
            </div>

            {/* Star Ratings */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 w-full">
              <div className="flex text-[#E0C060]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-mono text-[#8D7556]">
                4.9/5 Rating • 10,000+ Happy Customers
              </span>
            </div>

          </motion.div>

          {/* Right Product Video */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#C9A84C]/30 to-transparent blur-3xl" />
            
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 w-full max-w-sm h-auto object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-h-[500px]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
