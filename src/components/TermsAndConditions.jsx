import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  AlertCircle,
  Sparkles,
  Lock,
  Globe,
  ShieldCheck,
  Mail,
  ArrowLeft,
} from 'lucide-react';
import logoImg from '../../Assets/Logo E&F Powerful.png';

export default function TermsAndConditions() {
  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-[#E0C060]" />,
      title: '1. Agreement to Terms',
      content:
        'By accessing, browsing, or placing an order on www.morethanaromas.com for Energy & Focus products, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all of these Terms, you should not access this website or purchase our products.',
      isAlert: false,
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#E0C060]" />,
      title: '2. FDA Legal Disclaimer & Health Notice',
      content:
        'CRITICAL NOTICE:\n\n• The statements made regarding Energy & Focus dietary supplements have NOT been evaluated by the Food and Drug Administration (FDA).\n• The efficacy of these products has not been confirmed by FDA-approved research. These products are NOT intended to diagnose, treat, cure, or prevent any disease.\n• All information presented here is not meant as a substitute for or alternative to information from healthcare practitioners. Please consult your physician or licensed healthcare provider about potential interactions or other possible complications before using any product, especially if you are pregnant, nursing, taking prescription medication, or have a medical condition.',
      isAlert: true,
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#E0C060]" />,
      title: '3. Product Information & Recommended Dosage',
      content:
        'Each bottle of Energy & Focus contains 60 premium capsules formulated with Ashwagandha, Creatine, and Caffeine. You agree to read all product labels, warnings, and instructions prior to use. Never exceed the recommended dosage indicated on the product packaging.',
      isAlert: false,
    },
    {
      icon: <Lock className="w-6 h-6 text-[#E0C060]" />,
      title: '4. Orders, Pricing & Payment Terms',
      content:
        'All prices listed on our website are in U.S. Dollars ($ USD).\n\n• Right to Refuse Orders: We reserve the right to refuse, limit, or cancel any order placed with us for reasons including product availability, pricing errors, or suspected unauthorized or fraudulent transactions.\n• Payment Processing: Payments are processed securely via our checkout partners and Amazon Fulfillment. By submitting payment details, you confirm that you are authorized to use the payment method provided.',
      isAlert: false,
    },
    {
      icon: <Globe className="w-6 h-6 text-[#E0C060]" />,
      title: '5. Fast & Free USA Shipping',
      content:
        'All eligible orders within the United States receive Fast and FREE Shipping. Delivery estimates are provided for convenience and depend on third-party carriers (USPS, UPS, or Amazon Logistics). While we strive for prompt dispatch, More Than Aromas LLC is not liable for carrier delays beyond our reasonable control.',
      isAlert: false,
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E0C060]" />,
      title: '6. Returns & Customer Satisfaction Guarantee',
      content:
        'We stand behind the quality of Energy & Focus with our Customer Satisfaction Guarantee. If you are not satisfied with your order:\n\n• Please contact our support team at support@morethanaromas.com to initiate a support request or return authorization.\n• Refunds or exchanges will be processed in accordance with our return guidelines and verification procedures.',
      isAlert: false,
    },
    {
      icon: <FileText className="w-6 h-6 text-[#E0C060]" />,
      title: '7. Intellectual Property & Trademarks',
      content:
        'All graphics, logos, product names, formulas, text, imagery, and design elements associated with Energy & Focus and More Than Aromas LLC are protected by copyright, trademark, and intellectual property laws. You may not copy, reproduce, modify, or distribute any site content without our prior written consent.',
      isAlert: false,
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#E0C060]" />,
      title: '8. Limitation of Liability',
      content:
        'To the maximum extent permitted by applicable law, More Than Aromas LLC, its officers, employees, and affiliates shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from your use of this website, product purchases, or reliance on any site information.',
      isAlert: false,
    },
    {
      icon: <Globe className="w-6 h-6 text-[#E0C060]" />,
      title: '9. Governing Law & Dispute Resolution',
      content:
        'These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States without regard to conflict of law principles. Any legal action or proceeding relating to your access to or use of the site shall be resolved amicably or in appropriate state/federal courts.',
      isAlert: false,
    },
    {
      icon: <Mail className="w-6 h-6 text-[#E0C060]" />,
      title: '10. Contact Information',
      content:
        'If you have any questions or concerns regarding these Terms and Conditions or your Energy & Focus purchase, please contact us:\n\n• Company: More Than Aromas LLC\n• Support Email: support@morethanaromas.com\n• Website: www.morethanaromas.com',
      isAlert: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08101C] via-[#050C16] to-[#040912] text-[#EDEBE6] pb-24 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-[#C9A84C]/10 to-transparent pointer-events-none blur-3xl" />

      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-[#050C16]/90 backdrop-blur-md border-b border-[#C9A84C]/20 py-4">
        <div className="container flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img src={logoImg} alt="Energy & Focus" className="h-9 w-auto" />
            <span className="font-bold tracking-wider text-sm text-[#EDEBE6] group-hover:text-[#E0C060] transition-colors">
              ENERGY & FOCUS
            </span>
          </a>
          <a
            href="#"
            className="btn-gold text-xs px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 uppercase tracking-wider shadow-[0_0_20px_rgba(201,168,76,0.3)]"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="container relative z-10 pt-16 max-w-4xl mx-auto">
        {/* Title Section */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-gold">LEGAL AGREEMENT</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-gold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-[#8D7556] font-mono">
            Effective Date: August 1, 2025 • More Than Aromas LLC
          </p>
          <p className="text-body max-w-2xl mx-auto pt-2">
            Please read these terms carefully before ordering. By placing an order, you agree to our policies, FDA disclaimers, and satisfaction guarantee.
          </p>
        </motion.div>

        {/* Policy Cards Grid */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className={`p-6 md:p-8 rounded-2xl transition-all duration-300 shadow-lg ${
                section.isAlert
                  ? 'bg-gradient-to-r from-[#17140B] to-[#14120D] border-2 border-[#E0C060] shadow-[0_0_35px_rgba(201,168,76,0.25)]'
                  : 'glass-panel border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 bg-[#080E17]/80'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
            >
              <div className="flex items-center gap-4 mb-4 pb-3 border-b border-[#C9A84C]/15">
                <div
                  className={`p-2.5 rounded-xl ${
                    section.isAlert
                      ? 'bg-[#29200D] border border-[#E0C060]/50'
                      : 'bg-[#171613] border border-[#C9A84C]/30'
                  }`}
                >
                  {section.icon}
                </div>
                <h2
                  className={`text-lg md:text-xl font-bold ${
                    section.isAlert ? 'text-[#E0C060]' : 'text-[#EDEBE6]'
                  }`}
                >
                  {section.title}
                </h2>
              </div>
              <div
                className={`text-sm leading-relaxed whitespace-pre-line pl-1 font-sans ${
                  section.isAlert ? 'text-[#F0E8C8] font-medium' : 'text-gray-300'
                }`}
              >
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation Callout */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#0D1522] to-[#121B2B] border-2 border-[#E0C060]/40 text-center space-y-4 shadow-[0_0_40px_rgba(201,168,76,0.15)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Sparkles className="w-8 h-8 text-[#E0C060] mx-auto" />
          <h3 className="text-xl font-bold text-[#EDEBE6]">
            Ready to Elevate Your Daily Performance?
          </h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Order your bottle of Energy & Focus today with Fast and FREE USA Shipping.
          </p>
          <div className="pt-2">
            <a
              href="#pricing"
              className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-extrabold uppercase tracking-wider text-xs"
            >
              View Packages & Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
