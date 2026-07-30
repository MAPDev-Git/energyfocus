import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Award } from 'lucide-react';
import logoImg from '../../Assets/Logo E&F Powerful.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D1522]/90 backdrop-blur-md border-b border-[#C9A84C]/25 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Energy & Focus Logo"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider text-gradient-gold">
              ENERGY & FOCUS
            </span>
            <span className="text-[10px] tracking-widest text-[#9A8E6E] uppercase font-mono">
              More Than Aromas
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="text-[#F0E8C8] hover:text-[#F5D66E] transition-colors">
            Home
          </a>
          <a href="#why-works" className="text-[#D8CC9F] hover:text-[#F5D66E] transition-colors">
            Why It Works
          </a>
          <a href="#potential" className="text-[#D8CC9F] hover:text-[#F5D66E] transition-colors">
            Formula
          </a>
          <a href="#testimonials" className="text-[#D8CC9F] hover:text-[#F5D66E] transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-[#D8CC9F] hover:text-[#F5D66E] transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-[#D8CC9F] hover:text-[#F5D66E] transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#pricing" className="btn-gold text-sm py-2.5 px-6">
            <ShoppingCart className="w-4 h-4" /> Buy Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#F0E8C8] p-2 hover:text-[#F5D66E]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1522] border-b border-[#C9A84C]/30 px-6 py-6 space-y-4">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="block text-[#F0E8C8] font-medium">
            Home
          </a>
          <a href="#why-works" onClick={() => setMobileMenuOpen(false)} className="block text-[#F0E8C8] font-medium">
            Why It Works
          </a>
          <a href="#potential" onClick={() => setMobileMenuOpen(false)} className="block text-[#F0E8C8] font-medium">
            Formula
          </a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-[#F0E8C8] font-medium">
            Testimonials
          </a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-[#F0E8C8] font-medium">
            Pricing
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-[#F0E8C8] font-medium">
            FAQ
          </a>
          <div className="pt-2">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold w-full text-center py-3 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" /> Buy Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
