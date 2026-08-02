import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Mail,
  Database,
  UserCheck,
  Globe,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import logoImg from '../../Assets/Logo E&F Powerful.png';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E0C060]" />,
      title: '1. Overview & Commitment to Privacy',
      content:
        'More Than Aromas LLC ("we," "our," or "us") respects your privacy and is dedicated to protecting the personal information you share with us when accessing our website or purchasing Energy & Focus products. This Privacy Policy outlines our transparent practices regarding data collection, usage, security, and your privacy rights under applicable data protection regulations.',
    },
    {
      icon: <Database className="w-6 h-6 text-[#E0C060]" />,
      title: '2. Information We Collect',
      content:
        'We collect information required to deliver a seamless shopping experience and customer support:\n\n• Personal Identification Information: Name, billing address, shipping address, email address, and phone number when you place an order or contact support.\n• Transactional Data: Order numbers, items purchased, and shipment details. Payment transactions are processed via secure, PCI-compliant third-party gateways; we never store your raw credit card numbers.\n• Technical & Usage Data: IP address, browser type, device identifiers, and interaction metrics on our website to optimize performance and security.',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#E0C060]" />,
      title: '3. How We Use Your Data',
      content:
        'Your information is used strictly for legitimate business and operational purposes:\n\n• Fulfilling and shipping your Energy & Focus orders with Fast & FREE USA Shipping.\n• Sending transactional notifications, order confirmations, and shipping tracking updates.\n• Responding to your customer service inquiries via support@morethanaromas.com.\n• Improving website navigation, product offerings, and fraud prevention controls.',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#E0C060]" />,
      title: '4. Information Sharing & Third Parties',
      content:
        'We do NOT sell, rent, trade, or lease your personal information to third-party data brokers or marketing agencies. We only share necessary data with trusted service partners who assist in our operations, including:\n\n• Shipping & Logistics Carriers (USPS, UPS, Amazon Fulfillment) to deliver your bottles.\n• Encrypted Payment Gateways to process transactions securely.\n• Legal authorities when required by law or to protect against fraudulent activities.',
    },
    {
      icon: <Lock className="w-6 h-6 text-[#E0C060]" />,
      title: '5. Data Security & Retention',
      content:
        'We enforce rigorous technical and organizational security measures, including industry-standard SSL/TLS encryption, firewall protection, and restricted internal access. We retain your personal data only for as long as necessary to fulfill your orders, provide customer service, and satisfy legal or accounting obligations.',
    },
    {
      icon: <Eye className="w-6 h-6 text-[#E0C060]" />,
      title: '6. Cookies & Tracking Technologies',
      content:
        'Our website utilizes essential session cookies and analytical cookies to ensure smooth functionality and understand how visitors interact with our pages. You may configure your browser settings to refuse cookies; however, some interactive features of the site may function with reduced speed.',
    },
    {
      icon: <FileText className="w-6 h-6 text-[#E0C060]" />,
      title: '7. Your Privacy Rights (CCPA / GDPR / LGPD)',
      content:
        'Depending on your jurisdiction, you have applicable consumer privacy rights:\n\n• Right to Access: Request a copy of the personal data we hold about you.\n• Right to Rectification: Request correction of any inaccurate or incomplete data.\n• Right to Deletion ("Right to be Forgotten"): Request erasure of your personal data where legally permissible.\n• Right to Opt-Out: Unsubscribe from optional promotional emails at any time by clicking the footer link or emailing us.',
    },
    {
      icon: <Mail className="w-6 h-6 text-[#E0C060]" />,
      title: '8. Contact Our Privacy Team',
      content:
        'If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal information is handled, please contact our dedicated support team:\n\n• Entity: More Than Aromas LLC (Energy & Focus)\n• Email: support@morethanaromas.com\n• Website: www.morethanaromas.com',
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
          <span className="badge-gold">PRIVACY & SECURITY</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-gold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#8D7556] font-mono">
            Effective Date: August 1, 2025 • More Than Aromas LLC
          </p>
          <p className="text-body max-w-2xl mx-auto pt-2">
            We are committed to safeguarding your personal data with institutional security standards while delivering premium supplements and customer satisfaction.
          </p>
        </motion.div>

        {/* Policy Cards Grid */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-6 md:p-8 rounded-2xl border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 transition-all duration-300 bg-[#080E17]/80 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
            >
              <div className="flex items-center gap-4 mb-4 pb-3 border-b border-[#C9A84C]/15">
                <div className="p-2.5 rounded-xl bg-[#171613] border border-[#C9A84C]/30">
                  {section.icon}
                </div>
                <h2 className="text-lg md:text-xl font-bold text-[#EDEBE6]">
                  {section.title}
                </h2>
              </div>
              <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-line pl-1 font-sans">
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
            Ready to Experience Premium Energy & Focus?
          </h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            All orders include Fast and FREE USA Shipping and are backed by our Satisfaction Guarantee.
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
