import { Star, MessageSquare } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-brand-bg relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-xs font-bold text-brand-green font-mono uppercase">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
            Trusted by Modern Traders
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-semibold max-w-2xl mx-auto font-sans leading-relaxed">
            Don&apos;t just take our word for it. Explore review feedback from some of our 5,000+ satisfied clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review) => {
            return (
              <div
                id={`testimonial-${review.id}`}
                key={review.id}
                className="bg-brand-card border border-brand-border hover:border-brand-green/20 p-6 rounded-3xl transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.15)] flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-350 italic font-medium leading-relaxed font-sans">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Trader Identifiers */}
                <div className="mt-6 pt-4 border-t border-brand-border flex justify-between items-center text-[11px] font-mono">
                  <div>
                    <h4 className="font-bold text-white tracking-wide">{review.name}</h4>
                    <span className="text-brand-green text-[10px] font-bold uppercase tracking-tight block mt-0.5">
                      {review.cardTraded}
                    </span>
                  </div>
                  <span className="text-slate-500 font-semibold">{review.date}</span>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
