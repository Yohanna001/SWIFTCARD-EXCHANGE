import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowUpRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WHATS_APP_BASE_URL } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Check Rates', href: '#rates' },
    { name: 'Why Choose Us', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center space-x-2 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-green to-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:scale-105 transition-transform duration-200">
              <Star className="text-slate-950 w-5 h-5 fill-slate-950 stroke-[2.5px]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              SwiftCard<span className="text-brand-green font-extrabold"> Exchange</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                id={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-brand-green text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* WhatsApp CTA Action */}
          <div className="hidden lg:flex items-center">
            <a
              id="cta-desktop-trade"
              href={WHATS_APP_BASE_URL}
              target="_blank"
              rel="noreferrer referrer"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-slate-950 bg-brand-green hover:bg-emerald-500 transition-all duration-250 shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_4px_25px_rgba(34,197,94,0.5)] overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-1.5 font-bold">
                <MessageSquare className="w-4 h-4 fill-slate-950" />
                Trade Now
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#080808]/95 backdrop-blur-xl border-b border-brand-border"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-slate-300 hover:text-brand-green hover:bg-slate-900/60 font-semibold text-base transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-900 px-4">
                <a
                  id="cta-mobile-whatsapp"
                  href={WHATS_APP_BASE_URL}
                  target="_blank"
                  rel="noreferrer referrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-center text-slate-950 bg-brand-green font-bold transition-transform duration-150 active:scale-[0.98] shadow-[0_4px_15px_rgba(34,197,94,0.3)]"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-950" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
