import { ArrowUpRight, MessageSquare, ShieldCheck, Heart, Star, CheckCircle, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { WHATS_APP_BASE_URL, statistics, giftCards } from '../data';
// @ts-ignore
import razerGoldImage from '../razer_gold_giftcard.jpg';

export default function Hero() {
  const steamCard = giftCards.find(c => c.id === 'steam');
  const appleCard = giftCards.find(c => c.id === 'apple');
  const amazonCard = giftCards.find(c => c.id === 'amazon');

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 bg-brand-bg overflow-hidden hero flex items-center w-full"
    >
      {/* Background Hero Image */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `url(${razerGoldImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          opacity: 0.45
        }}
      />
      {/* Color blending overrides to match the dark brand background */}
      <div className="absolute inset-0 z-[1] bg-brand-bg/50 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-brand-bg/30 via-brand-bg/75 to-brand-bg pointer-events-none" />


      {/* Background Neon Gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-gradient-to-br from-brand-green/10 via-brand-green/5 to-transparent rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-brand-green/3 to-transparent rounded-full blur-[80px] -ml-20 pointer-events-none" />

      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Left Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/60 border border-brand-green/20 shadow-[0_0_15px_rgba(34,197,94,0.1)] mx-auto lg:mx-0">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-green"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green font-mono">
                Active &amp; Buying: Rates updated 2m ago
              </span>
            </div>

            {/* Headline and Subheadline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-50 tracking-tight leading-none">
                Sell Your Gift Cards at the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-300 to-teal-400 font-extrabold relative">
                  Best Rates
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-400 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fast, Secure and Trusted Gift Card Trading Platform. Direct bank integrations for instant, hassle-free payout transfers right inside Nigeria.
              </p>
            </div>

            {/* CTA action cluster */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                id="cta-hero-sell-now"
                href={WHATS_APP_BASE_URL}
                target="_blank"
                rel="noreferrer referrer"
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-green hover:bg-emerald-500 text-slate-950 font-extrabold text-base transition-all duration-200 shadow-[0_0_30px_rgba(34,197,94,0.25)] hover:shadow-[0_0_35px_rgba(34,197,94,0.4)] active:scale-[0.99] overflow-hidden"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950 stroke-[2px]" />
                Sell Card on WhatsApp
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                id="cta-hero-secondary-view-rates"
                href="#rates"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800/80 text-white font-bold text-base border border-slate-800 hover:border-slate-700 transition-colors duration-200"
              >
                View Live Rates
              </a>
            </div>

            {/* Quick trust microcopy */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-brand-green" /> No Registration Needed
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-brand-green" /> Under 5 Minute Transfers
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-green" /> Direct WhatsApp Escrow
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Gift Cards Floating Visuals */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end py-8 sm:py-12">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[320px] sm:h-[380px] flex items-center justify-center">
              {/* Central glowing core element */}
              <div className="absolute w-44 h-44 bg-brand-green/10 blur-[60px] rounded-full pointer-events-none" />

              {/* Steam card styled visual floating */}
              <motion.div
                initial={{ y: 15, rotate: -12 }}
                animate={{ y: -15, rotate: -7 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 4.5,
                  ease: "easeInOut"
                }}
                className="absolute left-4 top-4 w-[240px] h-[150px] sm:w-[280px] sm:h-[175px] rounded-2xl bg-gradient-to-tr from-slate-900 via-[#102a45] to-[#171a21] border border-blue-500/30 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden relative group"
              >
                {/* Real Physical 3D Card Background Image */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  {steamCard?.imageUrl && (
                    <img
                      src={steamCard.imageUrl}
                      alt="Steam Gift Card"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 ease-out"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&w=400&q=80`;
                      }}
                    />
                  )}
                  {/* Gloss reflection overlay */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.06] to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                </div>

                <div className="flex justify-between items-start h-full flex-col relative z-10">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">STEAM CARDS</span>
                    <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-blue-400 tracking-tight">₦72,000 <span className="text-xs font-medium text-slate-400">per $100</span></h3>
                    <p className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-400 mt-1">STEAM DIGITAL WALLET</p>
                  </div>
                </div>
              </motion.div>

              {/* iTunes/Apple Gift Card floating visual */}
              <motion.div
                initial={{ y: -10, rotate: 6 }}
                animate={{ y: 20, rotate: 12 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 5.2,
                  ease: "easeInOut"
                }}
                className="absolute right-4 bottom-4 w-[240px] h-[150px] sm:w-[280px] sm:h-[175px] rounded-2xl bg-gradient-to-tr from-slate-950 via-[#1e112c] to-[#0a001a] border border-fuchsia-500/30 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden group"
              >
                {/* Real Physical 3D Card Background Image */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  {appleCard?.imageUrl && (
                    <img
                      src={appleCard.imageUrl}
                      alt="Apple Gift Card"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 ease-out"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=400&q=80`;
                      }}
                    />
                  )}
                  {/* Gloss reflection overlay */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.06] to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a001a] via-[#0a001a]/50 to-transparent" />
                </div>

                <div className="flex justify-between items-start h-full flex-col relative z-10">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">APPLE STORE</span>
                    <div className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_#e879f9]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-fuchsia-400 tracking-tight">₦78,000 <span className="text-xs font-medium text-slate-400">per $100</span></h3>
                    <p className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-400 mt-1">ITUNES &amp; MUSIC PLATFORM</p>
                  </div>
                </div>
              </motion.div>

              {/* Amazon Gift Card visual */}
              <motion.div
                initial={{ scale: 0.95, rotate: -3, y: 30 }}
                animate={{ scale: 1, rotate: -2, y: 10 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 4.8,
                  ease: "easeInOut"
                }}
                className="absolute z-10 w-[220px] h-[135px] sm:w-[250px] sm:h-[155px] rounded-2xl bg-gradient-to-tr from-slate-900 via-[#331e05] to-[#0a0601] border border-[#FF9900]/30 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.7)] backdrop-blur-md overflow-hidden group"
              >
                {/* Real Physical 3D Card Background Image */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  {amazonCard?.imageUrl && (
                    <img
                      src={amazonCard.imageUrl}
                      alt="Amazon Gift Card"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 ease-out"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=400&q=80`;
                      }}
                    />
                  )}
                  {/* Gloss reflection overlay */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.06] to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0601] via-[#0a0601]/50 to-transparent" />
                </div>

                <div className="flex justify-between items-start h-full flex-col relative z-10">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs font-mono font-bold text-amber-500 tracking-tight">AMAZON SHOP</span>
                    <div className="py-0.5 px-2 rounded-full bg-[#FF9900]/20 text-[8px] font-bold text-[#FF9900]">FAST TRADES</div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-amber-400">₦75,000 <span className="text-[10px] font-normal text-slate-400">per $100</span></h3>
                    <p className="text-[9px] font-mono tracking-widest text-[#FF9900] mt-0.5">AMAZON PAY USA</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Statistics Grid section inside / right below Hero */}
        <div className="mt-16 lg:mt-24 pt-12 border-t border-brand-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center lg:text-left">
            {statistics.map((stat, idx) => (
              <div key={idx} className="space-y-1 sm:space-y-2 group">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center lg:justify-start gap-1 justify-items-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
                    {stat.label}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-200 tracking-wide">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 max-w-xs mx-auto lg:mx-0 leading-relaxed font-medium">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
