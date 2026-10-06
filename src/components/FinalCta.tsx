import React from 'react';
import { ArrowUpRight, Sprout, ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onExploreKit: () => void;
  onPartner: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onExploreKit, onPartner }) => {
  return (
    <section className="py-28 bg-[#142E22] text-[#FAF8F5] relative overflow-hidden">
      {/* Decorative organic blur elements */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#2E7D47]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#1B382B] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#CFE3D1] mb-8">
          <Sprout className="w-3.5 h-3.5" />
          <span>Join the EcoWrite Movement</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
          READY TO GROW A GREENER HABIT?
        </h2>

        <p className="text-lg sm:text-2xl font-light text-[#D8E5DA] max-w-xl mx-auto mb-10">
          “Start with something as simple as a pencil.”
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onExploreKit}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-[#142E22] bg-[#FAF8F5] hover:bg-white active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Explore the Kit</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onPartner}
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Partner With EcoWrite</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Closing Logo Mark */}
        <div className="pt-10 border-t border-white/10 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 text-2xl font-black tracking-tight mb-2">
            <span>🌱</span>
            <span>ECOWRITE</span>
          </div>
          <p className="text-sm font-medium tracking-widest uppercase text-[#A3C6A9]">
            Write. Erase. Plant. Grow.
          </p>
        </div>
      </div>
    </section>
  );
};
