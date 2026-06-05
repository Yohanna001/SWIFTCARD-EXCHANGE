import * as Icons from 'lucide-react';
import { features } from '../data';

export default function Features() {

  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-brand-green group-hover:scale-110 transition-transform duration-200" />;
    }
    return <Icons.HelpCircle className="w-6 h-6 text-brand-green" />;
  };

  return (
    <section id="features" className="py-20 bg-brand-bg relative border-t border-brand-border">
      {/* Decorative neon bubble */}
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-brand-green/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-xs font-bold text-brand-green font-mono uppercase">
            Platform Benefits
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
            Why Successful Traders Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-semibold max-w-2xl mx-auto font-sans leading-relaxed">
            SwiftCard Exchange sets the benchmark for speed, rate indexes, and maximum user privacy. Here is the commitment we offer to every single client.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            return (
              <div
                id={`feature-card-${feature.id}`}
                key={feature.id}
                className="group p-6 rounded-3xl bg-brand-card hover:bg-black/80 border border-brand-border hover:border-brand-green/20 transition-all duration-300"
              >
                {/* Visual Cover Image with Overlay & Floating Icon */}
                {feature.imageUrl ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl mb-6 border border-brand-border/60 group-hover:border-brand-green/20 transition-all duration-300">
                    <img
                      src={feature.imageUrl}
                      alt={feature.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.75] group-hover:brightness-[0.90]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/5 to-transparent" />
                    <div className="absolute bottom-3 left-3 z-10 w-10 h-10 rounded-xl bg-[#0a0a0a]/90 backdrop-blur border border-brand-border/80 group-hover:bg-brand-green/10 group-hover:border-brand-green/30 transition-all duration-300 flex items-center justify-center">
                      {renderIcon(feature.iconName)}
                    </div>
                  </div>
                ) : (
                  /* Fallback Icon block if imageUrl is missing */
                  <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center border border-brand-border mb-6 group-hover:bg-brand-green/10 group-hover:border-brand-green/30 transition-all duration-300">
                    {renderIcon(feature.iconName)}
                  </div>
                )}

                {/* Text descriptive block */}
                <h3 className="text-lg font-bold text-white tracking-wide mb-3 group-hover:text-brand-green transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
