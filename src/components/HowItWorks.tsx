import { MessageSquare, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { tradeSteps, WHATS_APP_BASE_URL } from '../data';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-brand-bg relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-xs font-bold text-brand-green font-mono uppercase">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-semibold max-w-2xl mx-auto font-sans leading-relaxed">
            Trade your gift card in 5 seamless steps with zero complexity. No accounts to register, no waiting lists.
          </p>
        </div>

        {/* Steps container */}
        <div className="relative mt-8">
          
          {/* Timeline Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-green/10 via-brand-green/30 to-brand-green/10 -translate-y-12 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {tradeSteps.map((stepItem, index) => {
              return (
                <div
                  id={`trade-step-${index + 1}`}
                  key={index}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 group"
                >
                  {/* Step bubble and number */}
                  <div className="relative flex items-center justify-center">
                    {/* Background ripple ring effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-brand-green/5 opacity-0 group-hover:opacity-100 scale-125 transition-all duration-300 pointer-events-none" />
                    
                    <div className="relative w-14 h-14 rounded-2xl bg-slate-900 border-2 border-brand-border group-hover:border-brand-green/40 text-brand-green group-hover:text-slate-950 group-hover:bg-brand-green flex items-center justify-center font-mono font-black text-lg transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>

                  {/* Step metadata info */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold uppercase font-mono tracking-widest text-brand-green/80">
                      {stepItem.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-100 group-hover:text-brand-green lg:group-hover:text-brand-green transition-colors duration-200">
                      {stepItem.title}
                    </h3>
                    <p className="text-xs text-slate-450 leading-relaxed font-semibold max-w-xs font-sans">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic CTA Banner inside how it works */}
        <div className="mt-16 bg-gradient-to-tr from-[#0d0d0d] to-[#141414] border border-brand-border rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">Have a card ready to trade right now?</h3>
            <p className="text-xs sm:text-sm text-slate-450 font-semibold max-w-xl">
              Lock in the highest marketplace value instantly. Our automated agents are waiting on the other side of WhatsApp. No signups required.
            </p>
          </div>
          <div>
            <a
              id="cta-how-it-works"
              href={WHATS_APP_BASE_URL}
              target="_blank"
              rel="noreferrer referrer"
              className="group flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-brand-green hover:bg-emerald-500 text-slate-950 font-extrabold text-sm transition-all duration-200 shadow-[0_4px_15px_rgba(34,197,94,0.2)] whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              Trade Live Now
              <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
