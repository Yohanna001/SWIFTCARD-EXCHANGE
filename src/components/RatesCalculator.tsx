import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { giftCards, WHATS_APP_NUMBER } from '../data';
import { GiftCard } from '../types';

interface RatesCalculatorProps {
  selectedCardId?: string;
  onSelectCard?: (id: string) => void;
}

export default function RatesCalculator({ selectedCardId: selectedCardIdProp, onSelectCard }: RatesCalculatorProps) {
  const [selectedCardId, setSelectedCardId] = useState<string>(selectedCardIdProp || giftCards[0].id);
  const [inputAmount, setInputAmount] = useState<number>(100);
  const [payoutNaira, setPayoutNaira] = useState<number>(75000);

  useEffect(() => {
    if (selectedCardIdProp) {
      setSelectedCardId(selectedCardIdProp);
    }
  }, [selectedCardIdProp]);

  const handleSelectCard = (id: string) => {
    setSelectedCardId(id);
    if (onSelectCard) {
      onSelectCard(id);
    }
  };

  const selectedCard = giftCards.find((card) => card.id === selectedCardId) || giftCards[0];

  useEffect(() => {
    // Recalculate anytime card or amount changes
    const payout = inputAmount * selectedCard.ratePerDollar;
    setPayoutNaira(payout);
  }, [selectedCardId, inputAmount, selectedCard]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value) || 0;
    setInputAmount(val);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value) || 0;
    setInputAmount(val > 10000 ? 10000 : val);
  };

  // Generate dynamic, pre-filled WhatsApp link
  const getWhatsAppLink = () => {
    const formattedNaira = payoutNaira.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 });
    const message = `Hi SwiftCard Exchange, I have a $${inputAmount} ${selectedCard.name} gift card that I want to sell. \n\nDetails:\n• Card: ${selectedCard.name}\n• Amount: $${inputAmount.toLocaleString()}\n• Rate: ₦${selectedCard.ratePerDollar}/$\n• Expected Payout: ${formattedNaira}\n\nPlease check my card and make the transfer. Thanks!`;
    return `https://wa.me/2347010749941?text=${encodeURIComponent(message)}`;
  };

  const renderIcon = (iconName: string) => {
    // Dynamic icon lookup using Lucide
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-brand-green group-hover:scale-110 transition-transform duration-200" />;
    }
    return <Icons.HelpCircle className="w-5 h-5 text-brand-green" />;
  };

  // Quick preset amounts for easy tap-to-select
  const presetAmounts = [50, 100, 200, 500, 1000];

  return (
    <div
      id="rates-calculator-container"
      className="bg-brand-card backdrop-blur-xl border border-brand-border rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center border border-brand-green/20">
          <Icons.Calculator className="w-5 h-5 text-brand-green" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">Interactive Rates Calculator</h3>
          <p className="text-xs text-slate-400 font-medium font-sans">Check exact conversion payouts instantly</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Step 1: Select Gift Card brand */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-bold text-slate-300 tracking-wide block">
            1. Select Your Gift Card Brand
          </label>
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {giftCards.map((card) => {
              const isSelected = card.id === selectedCardId;
              return (
                <button
                  id={`calc-select-card-${card.id}`}
                  key={card.id}
                  type="button"
                  onClick={() => handleSelectCard(card.id)}
                  className={`group flex flex-col items-center justify-center py-3.5 px-2 rounded-xl text-center border transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? 'bg-brand-green/12 border-brand-green text-white shadow-[0_0_20px_rgba(34,197,94,0.15)]'
                      : 'bg-black border-brand-border text-slate-400 hover:border-slate-700 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  <div className={`p-2 rounded-lg mb-2 transition-colors ${isSelected ? 'bg-brand-green/20' : 'bg-slate-900'}`}>
                    {renderIcon(card.iconName)}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-tight line-clamp-1">
                    {card.name.replace(' USA', '')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Step 2: Dollar Value Input */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs sm:text-sm font-bold text-slate-300 tracking-wide block">
                  2. Enter Gift Card Balance
                </label>
                <div className="text-xs font-mono font-bold text-brand-green px-2 py-0.5 rounded bg-brand-green/10">
                  Rate Per $: ₦{selectedCard.ratePerDollar.toLocaleString()}
                </div>
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg sm:text-xl font-bold font-mono text-slate-505">
                  $
                </span>
                <input
                  id="calc-usd-input"
                  type="number"
                  min="10"
                  max="10000"
                  value={inputAmount === 0 ? '' : inputAmount}
                  onChange={handleNumberChange}
                  className="w-full bg-black border border-brand-border rounded-2xl py-4 pl-9 pr-24 text-lg sm:text-xl font-black text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all font-mono"
                  placeholder="100"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold font-mono text-slate-400 tracking-wide uppercase bg-slate-900 border border-brand-border px-3 py-1.5 rounded-xl">
                  {selectedCard.currencyCode}
                </span>
              </div>
            </div>

            {/* Slider control */}
            <div className="space-y-2 pt-1">
              <input
                id="calc-usd-slider"
                type="range"
                min="20"
                max="1000"
                step="10"
                value={inputAmount}
                onChange={handleSliderChange}
                className="w-full h-1.5 bg-black rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono font-bold text-slate-500">
                <span>$20</span>
                <span>$1,000</span>
              </div>
            </div>

            {/* Presets Button Clusters */}
            <div className="flex flex-wrap items-center gap-2 pt-1.5">
              {presetAmounts.map((preset) => (
                <button
                  id={`calc-preset-${preset}`}
                  key={preset}
                  type="button"
                  onClick={() => setInputAmount(preset)}
                  className={`py-1.5 px-3.5 rounded-xl text-xs font-bold font-mono border transition-all duration-150 ${
                    inputAmount === preset
                      ? 'bg-slate-100 border-slate-100 text-slate-950 font-black'
                      : 'bg-black border-brand-border text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Naira Output Section */}
          <div className="flex flex-col justify-between bg-black/80 border border-brand-border rounded-2xl p-5 relative overflow-hidden">
            {/* Glossy radial pattern indicator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-green font-mono bg-brand-green/10 border border-brand-green/20 px-2.5 py-1 rounded-full inline-block">
                Guaranteed Payout
              </span>
              <p className="text-xs text-slate-500 font-semibold tracking-wide">You will receive exactly:</p>
              <div className="flex items-baseline flex-wrap">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mr-1">
                  ₦{payoutNaira.toLocaleString('en-NG')}
                </span>
                <span className="text-xs font-bold text-slate-400 font-mono">NGN</span>
              </div>
            </div>

            {/* Dynamic Physical Gift Card Preview */}
            <div className="my-5 relative aspect-[1.586/1] w-full max-w-[210px] mx-auto rounded-xl bg-gradient-to-tr from-[#121212] to-[#0a0a0a] overflow-hidden border border-brand-border shadow-[0_8px_20px_rgba(0,0,0,0.5)] z-10 hover:scale-[1.03] transition-transform duration-300">
              <img 
                src={selectedCard.imageUrl} 
                alt={`${selectedCard.name} Gift Card Preview`}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] to-transparent pointer-events-none" />
              <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 opacity-60" />
              <div className="absolute bottom-2 left-2.5 w-4.5 h-3 rounded bg-amber-400 border border-amber-300/30 opacity-70 p-[1px]">
                <div className="w-full h-full bg-amber-600/30" />
              </div>
            </div>

            <div className="space-y-3 pt-2 relative z-10">
              {/* Quick dynamic invoice review */}
              <div className="space-y-1 border-t border-brand-border pt-3 text-[11px] font-mono font-bold text-slate-400">
                <div className="flex justify-between">
                  <span>Card Type:</span>
                  <span className="text-slate-300">{selectedCard.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Transfer Speed:</span>
                  <span className="text-brand-green">{selectedCard.payoutSpeed}</span>
                </div>
              </div>

              {/* Direct WhatsApp trigger */}
              <a
                id="calc-cta-whatsapp"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer referrer"
                className="group flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl text-center text-slate-950 bg-brand-green hover:bg-emerald-500 font-extrabold text-sm transition-all duration-200 shadow-[0_4px_15px_rgba(34,197,94,0.3)] hover:shadow-[0_4px_20px_rgba(34,197,94,0.45)]"
              >
                <Icons.MessageSquare className="w-4 h-4 fill-slate-950 stroke-[2px]" />
                Sell Now &amp; Cash Out
                <Icons.ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
