import { useState } from 'react';
import * as Icons from 'lucide-react';
import { giftCards } from '../data';
import { GiftCard } from '../types';

interface RatesGridProps {
  onSelectCard?: (cardId: string) => void;
}

export default function RatesGrid({ onSelectCard }: RatesGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'popular' | 'gaming' | 'shopping' | 'beauty'>('all');

  // Filter gift cards based on search query and category tags
  const filteredCards = giftCards.filter((card) => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          card.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'popular') return matchesSearch && card.popular;
    if (activeTab === 'gaming') return matchesSearch && (card.category.includes('Gaming') || card.id === 'razer-gold');
    if (activeTab === 'shopping') return matchesSearch && (card.category.includes('Shopping') || card.id === 'walmart');
    if (activeTab === 'beauty') return matchesSearch && card.id === 'sephora';
    
    return matchesSearch;
  });

  const getWhatsAppLink = (card: GiftCard) => {
    const message = `Hi SwiftCard Exchange, I have a $100 ${card.name} gift card that I want to sell at your rate of ₦${card.ratePer100.toLocaleString()} per $100. Please assist with my trade.`;
    return `https://wa.me/2347010749941?text=${encodeURIComponent(message)}`;
  };

  const renderIcon = (iconName: string, sizeClass = "w-6 h-6") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={`${sizeClass} text-brand-green`} />;
    }
    return <Icons.HelpCircle className={`${sizeClass} text-brand-green`} />;
  };

  const categories = [
    { id: 'all', label: 'All Cards' },
    { id: 'popular', label: '🔥 High Demand' },
    { id: 'gaming', label: '🎮 Gaming' },
    { id: 'shopping', label: '🛍️ Shopping' },
    { id: 'beauty', label: '💄 Beauty' },
  ];

  return (
    <section id="rates" className="py-20 bg-brand-bg relative">
      {/* Glow asset */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-xs font-bold text-brand-green font-mono uppercase">
            Live Market Rates
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
            Supported Gift Cards &amp; Payouts
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-semibold max-w-2xl mx-auto font-sans leading-relaxed">
            We purchase a wide variety of assets at the standard highest market index rates. Payout estimates are calculated in real-time. Fast execution.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-brand-border">
          
          {/* Quick Categories filter */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                id={`rates-tab-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`py-2 px-4 rounded-xl text-xs font-extrabold tracking-wide border whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-brand-green/12 border-brand-green text-brand-green font-black'
                    : 'bg-black border-brand-border text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick search input filter */}
          <div className="relative min-w-[280px]">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
              <Icons.Search className="w-4 h-4" />
            </span>
            <input
              id="rates-search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search e.g. Amazon, Steam..."
              className="w-full bg-black border border-brand-border rounded-xl py-2.5 pl-10 pr-4 text-xs font-bold text-white focus:outline-none focus:border-brand-green transition-colors placeholder:text-slate-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                aria-label="Clear Search"
              >
                <Icons.X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Cards Grid */}
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCards.map((card) => {
              return (
                <div
                  id={`rate-card-${card.id}`}
                  key={card.id}
                  className={`relative group rounded-3xl bg-brand-card hover:bg-black/95 border-2 border-brand-border hover:border-brand-green/40 p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.1)] flex flex-col justify-between overflow-hidden`}
                >
                  {/* Subtle brand graphic color background strip */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr opacity-[0.03] group-hover:opacity-10 rounded-bl-full pointer-events-none transition-opacity duration-300 bg-brand-green" />
                  
                  <div>
                    {/* Real Physical 3D-Look Gift Card Image Visualizer */}
                    <div className="relative w-full aspect-[1.586/1] mb-5 rounded-2xl bg-gradient-to-tr from-[#141414] to-[#0c0c0c] overflow-hidden border border-brand-border group-hover:border-brand-green/30 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex items-center justify-center">
                      {/* Realistic Plastic Specular Gloss Effect */}
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none z-10" />
                      
                      {/* Actual Gift card Image with Referrer Safety constraint */}
                      <img 
                        src={card.imageUrl} 
                        alt={`${card.name} Gift Card`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                        onError={(e) => {
                          // Clean fallback in case of loading issues, matching the main corporate branding color
                          (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80`;
                        }}
                      />
                      
                      {/* Specular Slide Highlight on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />
                      
                      {/* Small Golden Contact Chip to represent actual physical card */}
                      <div className="absolute bottom-2.5 left-2.5 w-6 h-4.5 rounded-[3px] bg-gradient-to-br from-yellow-100 via-amber-400 to-amber-600 border border-amber-300/30 opacity-85 shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)] flex flex-col justify-between p-[2px] z-10 pointer-events-none">
                        <div className="flex justify-between w-full h-[1px]">
                          <div className="w-[1px] h-full bg-amber-950/25" />
                          <div className="w-[4px] h-full bg-amber-950/25" />
                          <div className="w-[1px] h-full bg-amber-950/25" />
                        </div>
                        <div className="w-full h-[1px] bg-amber-950/25" />
                        <div className="flex justify-between w-full h-[1px]">
                          <div className="w-[1px] h-full bg-amber-950/25" />
                          <div className="w-[4px] h-full bg-amber-950/25" />
                          <div className="w-[1px] h-full bg-amber-950/25" />
                        </div>
                      </div>

                      {/* Holographic round sticker to reinforce premium authentication */}
                      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-teal-400 via-violet-500 to-amber-300 opacity-70 shadow-[0_0_6px_rgba(255,255,255,0.3)] flex items-center justify-center z-10 pointer-events-none">
                        <span className="text-[4px] font-mono text-white opacity-60 font-black">VALID</span>
                      </div>
                    </div>

                    {/* Header: icon and category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center border border-brand-border shadow-inner">
                        {renderIcon(card.iconName, "w-4 h-4")}
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono font-bold text-slate-505 px-2 py-0.5 rounded bg-black border border-brand-border inline-block uppercase">
                          {card.country} • {card.currencyCode}
                        </span>
                        {card.popular && (
                          <span className="text-[9px] font-extrabold uppercase text-brand-green mt-1 flex items-center gap-0.5 font-mono">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-green inline-block animate-pulse" /> Popular
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Body: name and pricing */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-black text-white tracking-wide">{card.name}</h3>
                      <div className="space-y-1">
                        <p className="text-[10px] font-mono font-bold text-slate-550 uppercase tracking-widest">PER $100 FACE VALUE</p>
                        <div className="flex items-baseline">
                          <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                            ₦{card.ratePer100.toLocaleString('en-NG')}
                          </span>
                          <span className="text-xs font-bold text-brand-green ml-1.5 font-mono">
                            ₦{card.ratePerDollar}/$
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Speed indicator & metrics */}
                    <div className="mt-4 pt-4 border-t border-brand-border flex justify-between items-center text-[11px] font-mono font-medium text-slate-400">
                      <span className="flex items-center gap-1">
                        <Icons.Clock className="w-3.5 h-3.5 text-brand-green/70" /> Payout: {card.payoutSpeed}
                      </span>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="mt-6 pt-2 space-y-2">
                    <a
                      id={`sell-cta-card-${card.id}`}
                      href={getWhatsAppLink(card)}
                      target="_blank"
                      rel="noreferrer referrer"
                      className="group/btn flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-slate-950 bg-brand-green hover:bg-emerald-505 font-extrabold text-xs transition-all duration-200 shadow-[0_4px_10px_rgba(34,197,94,0.15)] hover:shadow-[0_4px_15px_rgba(34,197,94,0.35)]"
                    >
                      <Icons.MessageSquareText className="w-3.5 h-3.5 fill-slate-950" />
                      Sell Now
                      <Icons.ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                    
                    {onSelectCard && (
                      <button
                        onClick={() => {
                          onSelectCard(card.id);
                          const element = document.getElementById('rates-calculator-container');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full text-center py-2.5 px-4 rounded-xl text-slate-400 hover:text-white bg-black bg-opacity-40 border border-brand-border hover:border-slate-700 font-bold text-[11px] transition-all cursor-pointer"
                      >
                        Calculate Value
                      </button>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-brand-card border border-brand-border rounded-2xl p-10 text-center max-w-md mx-auto">
            <Icons.AlertCircle className="w-8 h-8 text-slate-500 mx-auto mb-4" />
            <h4 className="text-white font-bold text-base mb-1">No supported cards found</h4>
            <p className="text-xs text-slate-400">We couldn&apos;t find any cards matching your query. Please search something else or contact us directly.</p>
            <a
              href={getWhatsAppLink({ id: 'custom', name: 'Other Card', category: 'General', ratePer100: 0, ratePerDollar: 0, currencyCode: 'USD', country: 'USA', payoutSpeed: 'Instant', iconName: 'HelpCircle', colorTheme: '', imageUrl: '' })}
              target="_blank"
              rel="noreferrer referrer"
              className="inline-flex items-center gap-1.5 mt-5 px-4 py-2.5 rounded-xl bg-black hover:bg-slate-800 border border-brand-border text-xs font-bold text-white transition-all"
            >
              Ask on WhatsApp
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
