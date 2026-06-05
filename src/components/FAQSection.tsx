import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, HelpCircle } from 'lucide-react';
import { faqs, WHATS_APP_BASE_URL } from '../data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-bg relative border-t border-brand-border">
      {/* Glow dot */}
      <div className="absolute top-1/3 right-1/4 w-[280px] h-[280px] bg-brand-green/3 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-xs font-bold text-brand-green font-mono uppercase">
            Have Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-semibold max-w-xl mx-auto font-sans leading-relaxed">
            Everything you need to know about trading your gift cards safely with SwiftCard Exchange.
          </p>
        </div>

        {/* FAQ Accordion Lists */}
        <div className="space-y-4">
          {faqs.map((faqItem, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                id={`faq-item-${index}`}
                key={index}
                className={`bg-brand-card rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-brand-green/35 bg-black' : 'border-brand-border hover:border-slate-700'
                }`}
              >
                <button
                  id={`faq-button-${index}`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-100 select-none">
                    {faqItem.question}
                  </span>
                  <div className={`p-1 rounded-lg bg-slate-950 border border-brand-border transition-colors ${isOpen ? 'text-brand-green border-brand-green/20' : 'text-slate-400'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                <div
                  id={`faq-answer-container-${index}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-brand-border' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <p className="px-5 sm:px-6 py-5 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-medium">
                    {faqItem.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support gateway banner */}
        <div className="mt-12 text-center bg-brand-card/40 border border-brand-border rounded-2xl py-6 px-4">
          <HelpCircle className="w-6 h-6 text-brand-green/70 mx-auto mb-2" />
          <p className="text-xs sm:text-sm text-slate-350 font-bold mb-3 font-sans">
            Have a different question not listed here?
          </p>
          <a
            id="faq-unresolved-whatsapp"
            href={WHATS_APP_BASE_URL}
            target="_blank"
            rel="noreferrer referrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-brand-green hover:text-brand-green border border-brand-green/10 hover:border-brand-green/30 text-xs font-bold transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Talk directly to an Agent
          </a>
        </div>

      </div>
    </section>
  );
}
