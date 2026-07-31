import React from 'react';
import { Instagram, Facebook, Mail, ArrowUp } from 'lucide-react';
import logoImg from '../../Assets/Logo E&F Powerful.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] border-t border-[#C9A84C]/20 pt-16 pb-12 text-[#8D7556] text-xs">
      <div className="container z-10 relative space-y-12">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Energy & Focus" className="h-9 w-auto" />
            </div>
            <p className="text-xs text-[#9A8E6E] max-w-sm leading-relaxed">
              Reach out for inquiries or support. Reach us at support@morethanaromas.com
            </p>
            <div className="flex items-center gap-4 text-[#D8CC9F]">
              <a
                href="https://www.instagram.com/morethan_aromas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#171613] border border-[#C9A84C]/20 flex items-center justify-center hover:text-[#F5D66E] hover:border-[#C9A84C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/morethanaromasllc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#171613] border border-[#C9A84C]/20 flex items-center justify-center hover:text-[#F5D66E] hover:border-[#C9A84C] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@morethanaromas.com"
                className="w-9 h-9 rounded-full bg-[#171613] border border-[#C9A84C]/20 flex items-center justify-center hover:text-[#F5D66E] hover:border-[#C9A84C] transition-colors"
                aria-label="Email support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-[#F0E8C8] text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#" className="hover:text-[#F5D66E] transition-colors">Home</a></li>
              <li><a href="#why-works" className="hover:text-[#F5D66E] transition-colors">Why It Works</a></li>
              <li><a href="#potential" className="hover:text-[#F5D66E] transition-colors">Formula</a></li>
              <li><a href="#pricing" className="hover:text-[#F5D66E] transition-colors">Packages & Pricing</a></li>
              <li><a href="#faq" className="hover:text-[#F5D66E] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-[#F0E8C8] text-sm uppercase tracking-wider">Support</h4>
            <p className="text-xs">Have questions or need assistance?</p>
            <p className="font-mono text-[#F5D66E] text-xs">support@morethanaromas.com</p>
            <div className="pt-2">
              <a
                href="https://www.morethanaromas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D8CC9F] underline hover:text-[#F5D66E]"
              >
                www.morethanaromas.com
              </a>
            </div>
          </div>

        </div>

        {/* Facebook Disclaimer */}
        <div className="border-t border-[#C9A84C]/10 pt-8 text-[11px] leading-relaxed text-[#9A8E6E]/80">
          <p>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>

        {/* Bottom Rights */}
        <div className="border-t border-[#C9A84C]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>More Than Aromas © 2025. Energy & Focus All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.morethanaromas.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5D66E] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.morethanaromas.com/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5D66E] transition-colors"
            >
              Terms and Conditions
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#171613] border border-[#C9A84C]/20 text-[#F5D66E] hover:bg-[#C9A84C] hover:text-[#0E0D0B] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
