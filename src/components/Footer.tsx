import { MessageSquare, Star, ArrowUp, ArrowUpRight } from 'lucide-react';
import { WHATS_APP_BASE_URL } from '../data';

export default function Footer() {
  const scrollHeight = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-brand-bg border-t border-brand-border pt-16 pb-8 relative overflow-hidden">
      {/* Decorative radial background light */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-green/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer widgets */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-12 border-b border-brand-border">
          
          {/* Column A: Branding information */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-brand-green flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <Star className="text-slate-950 w-4.5 h-4.5 fill-slate-950 stroke-[2.5px]" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                SwiftCard<span className="text-brand-green font-extrabold"> Exchange</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-medium">
              Fast, Secure &amp; Trusted Gift Card Trading. Enjoy maximum profit valuation index, zero transaction wait times, and direct cash out straight into your bank accounts.
            </p>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <span className="text-[11px] font-mono font-bold text-brand-green uppercase tracking-widest">
                Support Desk Live Now (24/7)
              </span>
            </div>
          </div>

          {/* Column B: Interactive contact gateway */}
          <div className="space-y-4 w-full md:max-w-xs">
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider font-mono">
              Direct Contact Channels
            </h4>
            
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              We operate exclusively via verified WhatsApp streams to promote maximum speed and absolute privacy.
            </p>

            <a
              id="cta-footer-whatsapp-chat"
              href={WHATS_APP_BASE_URL}
              target="_blank"
              rel="noreferrer referrer"
              className="group flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-brand-green hover:bg-emerald-500 text-slate-950 font-extrabold text-xs transition-all duration-200 shadow-[0_4px_12px_rgba(34,197,94,0.15)]"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              Chat on WhatsApp Now
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

        {/* Lower footer copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-xs text-slate-500 text-center sm:text-left font-sans font-semibold">
            &copy; {new Date().getFullYear()} SwiftCard Exchange. All rights reserved. Registered, secure, and authenticated gift card transactions platform.
          </div>

          {/* Quick legal microclaim and Back upwards */}
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-slate-600 font-bold uppercase tracking-wider block">
              100% SECURE ESCROW
            </span>
            <button
              id="btn-footer-scroll-top"
              onClick={scrollHeight}
              className="p-2.5 rounded-xl bg-[#0d0d0d] hover:bg-[#141414] border border-brand-border hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Scroll back to top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
