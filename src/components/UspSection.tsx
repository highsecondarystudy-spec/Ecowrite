import React, { useState } from 'react';
import { Check, X, Sprout, ArrowRight } from 'lucide-react';

interface UspSectionProps {
  onOpenOrder: () => void;
}

export const UspSection: React.FC<UspSectionProps> = ({ onOpenOrder }) => {
  const [comparisonTab, setComparisonTab] = useState<'overall' | 'materials' | 'afterlife'>('overall');

  const comparisonData = [
    {
      metric: 'End-of-Life Fate',
      conventional: 'Dumped into municipal trash; takes 400+ years to degrade',
      ecoWrite: 'Planted in potting soil; transforms into edible basil or fresh flowers',
      badge: 'Zero Landfill',
    },
    {
      metric: 'Core Material',
      conventional: 'Virgin plastic polymer barrels & synthetic vinyl rubber',
      ecoWrite: 'Reclaimed cedar wood, graphite, natural tree latex, and seed paper',
      badge: '100% Renewable',
    },
    {
      metric: 'Educational Value',
      conventional: 'Promotes mindless disposable consumer culture',
      ecoWrite: 'Direct hands-on botany, patience, and environmental empathy',
      badge: 'Experiential Learning',
    },
    {
      metric: 'Student Accessibility',
      conventional: 'Cheap but harmful mass-produced plastic',
      ecoWrite: 'Affordable sustainable alternative starting at ₹149',
      badge: 'Accessible D2C',
    },
  ];

  return (
    <section className="py-28 bg-[#142E22] text-[#FAF8F5] relative overflow-hidden">
      {/* Background glow effects */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2E7D47]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1B382B] rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Dramatic Typography Treatment */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#CFE3D1] mb-6">
            <Sprout className="w-3.5 h-3.5" />
            <span>The EcoWrite Core Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4">
            DON’T JUST FINISH YOUR STATIONERY.
          </h2>

          <div className="text-3xl sm:text-5xl md:text-6xl font-black text-[#57A773] tracking-tight leading-tight mb-6">
            GROW SOMETHING FROM IT. 🌱
          </div>

          <p className="text-base sm:text-xl text-[#D8E5DA] max-w-2xl mx-auto leading-relaxed">
            “EcoWrite transforms an everyday stationery experience into an opportunity to connect with nature.”
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="max-w-4xl mx-auto bg-[#0B1912]/80 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Conventional Stationery vs. EcoWrite Green Kit
            </h3>
            <p className="text-xs text-[#A3C6A9]">
              A direct comparison of life cycle, materials, and long-term impact.
            </p>
          </div>

          <div className="space-y-4">
            {comparisonData.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-all"
              >
                {/* Metric Title */}
                <div className="md:col-span-3 flex md:flex-col justify-between items-start">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {item.metric}
                  </span>
                  <span className="text-[10px] font-mono text-[#57A773] bg-[#2E7D47]/20 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>

                {/* Conventional */}
                <div className="md:col-span-4 p-3 rounded-lg bg-red-950/20 border border-red-900/30 flex items-start gap-2">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-red-300 block">
                      Conventional
                    </span>
                    <span className="text-xs text-red-200/90 leading-tight">
                      {item.conventional}
                    </span>
                  </div>
                </div>

                {/* EcoWrite */}
                <div className="md:col-span-5 p-3 rounded-lg bg-[#2E7D47]/20 border border-[#409159]/40 flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#57A773] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#A3C6A9] block">
                      EcoWrite Solution
                    </span>
                    <span className="text-xs text-white leading-tight font-medium">
                      {item.ecoWrite}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action inside USP */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#D8E5DA] text-center sm:text-left">
              Join thousands of students and eco-conscious schools making the switch.
            </p>
            <button
              onClick={onOpenOrder}
              className="px-6 py-2.5 text-xs font-bold text-[#142E22] bg-[#FAF8F5] hover:bg-white rounded-xl shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Get the Starter Kit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
