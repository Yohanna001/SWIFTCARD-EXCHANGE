import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RatesCalculator from './components/RatesCalculator';
import RatesGrid from './components/RatesGrid';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FAQSection from './components/FAQSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [selectedCardId, setSelectedCardId] = useState<string>('amazon');

  const handleSelectCard = (cardId: string) => {
    setSelectedCardId(cardId);
  };

  return (
    <div className="bg-brand-bg min-h-screen text-slate-100 font-sans selection:bg-brand-green/30 selection:text-brand-green antialiased overflow-x-hidden scroll-smooth">
      {/* Absolute positioning neon dust decorations */}
      <div className="absolute top-[1200px] right-1/4 w-[350px] h-[350px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[2600px] left-1/4 w-[280px] h-[280px] bg-brand-green/3 rounded-full blur-[90px] pointer-events-none" />

      {/* Sticky Header Navigation bar */}
      <Navbar />

      {/* Hero Header Presentation */}
      <main>
        <Hero />

        {/* Dynamic Transition Area containing the Interactive Calculator */}
        <section id="rates-calculator-section" className="relative pb-20 -mt-10 lg:-mt-20 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            <RatesCalculator selectedCardId={selectedCardId} onSelectCard={handleSelectCard} />
          </div>
        </section>

        {/* Live Rates Search & Filter Grid */}
        <RatesGrid onSelectCard={handleSelectCard} />

        {/* Platform Benefits Features section */}
        <Features />

        {/* Logical Step-by-Step guide */}
        <HowItWorks />

        {/* Authentic Customer Testimonials feedback */}
        <Testimonials />

        {/* Interactive accordion Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Premium Footer with brand widgets & legal disclaimers */}
      <Footer />
    </div>
  );
}
