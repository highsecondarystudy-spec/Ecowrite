import React from 'react';
import { ShieldCheck, AlertTriangle, TrendingUp, AlertOctagon, Check } from 'lucide-react';

export const SwotAnalysis: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F2EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#2E7D47] mb-3">
            Strategic Startup Assessment
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#142E22] mb-5">
            Startup SWOT Analysis
          </h2>
          <p className="text-base sm:text-lg text-[#59655F]">
            A candid evaluation of EcoWrite’s internal capabilities, operational considerations, market opportunities, and strategic defenses.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* STRENGTHS */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#D5E5D8] shadow-xs">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EBF2EC] text-[#2E7D47] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-[#142E22] tracking-tight">
                  STRENGTHS
                </h3>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#2E7D47] bg-[#EBF2EC] px-2.5 py-1 rounded-md">
                Internal Positive
              </span>
            </div>

            <ul className="space-y-4">
              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2E7D47] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">Eco-friendly concept</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Eliminates single-use plastics from daily writing instruments with zero toxic residues.
                    </p>
                  </div>
                </div>
              </li>

              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2E7D47] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">Unique product idea</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Memorable and shareable emotional hook: planting a pencil transforms ordinary waste into living flora.
                    </p>
                  </div>
                </div>
              </li>

              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2E7D47] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">Educational value</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Creates immediate experiential biology and environmental awareness in classrooms and homes.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* WEAKNESSES */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DEC8] shadow-xs">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#F5EFE6] text-[#8B6F55] flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-[#142E22] tracking-tight">
                  WEAKNESSES
                </h3>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#8B6F55] bg-[#F5EFE6] px-2.5 py-1 rounded-md">
                Internal Consideration
              </span>
            </div>

            <ul className="space-y-4">
              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#8B6F55] shrink-0 mt-1.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">Higher production cost</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Handmade seed paper and vegetable gelatin capsules incur higher unit manufacturing costs than plastic extrusions.
                    </p>
                  </div>
                </div>
              </li>

              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#8B6F55] shrink-0 mt-1.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">Seeds may not always germinate</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Germination depends on soil moisture, climate, and user care. Mitigated by including resilient certified native seeds.
                    </p>
                  </div>
                </div>
              </li>

              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#8B6F55] shrink-0 mt-1.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">Requires customer awareness</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Users accustomed to throwing away pencil stubs must be educated to follow the planting step rather than binning.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* OPPORTUNITIES */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#CFE0D3] shadow-xs">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#EBF2EC] text-[#1B382B] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-[#142E22] tracking-tight">
                  OPPORTUNITIES
                </h3>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#1B382B] bg-[#EBF2EC] px-2.5 py-1 rounded-md">
                External Potential
              </span>
            </div>

            <ul className="space-y-4">
              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1B382B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">Growing interest in sustainable products</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Conscious youth consumerism and Indian green lifestyle trends are expanding at record rates.
                    </p>
                  </div>
                </div>
              </li>

              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1B382B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">School/college partnerships</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Annual recurring supply tie-ups with progressive educational institutions mandated to adopt green practices.
                    </p>
                  </div>
                </div>
              </li>

              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1B382B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">Corporate gifting</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Companies seeking tangible ESG gift hampers for employees, conferences, and stakeholder appreciation.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* THREATS */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8D0C8] shadow-xs">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FAECE8] text-[#9E3B2A] flex items-center justify-center">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-extrabold text-[#142E22] tracking-tight">
                  THREATS
                </h3>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#9E3B2A] bg-[#FAECE8] px-2.5 py-1 rounded-md">
                External Risks
              </span>
            </div>

            <ul className="space-y-4">
              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#9E3B2A] shrink-0 mt-1.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">Competition from low-cost stationery</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Mass-produced plastic pens sell for as low as ₹5–₹10, requiring strong value proposition messaging.
                    </p>
                  </div>
                </div>
              </li>

              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#9E3B2A] shrink-0 mt-1.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">Imitation by competitors</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Legacy stationery giants could launch copycat plantable lines; EcoWrite builds moat through community and institutional contracts.
                    </p>
                  </div>
                </div>
              </li>

              <li className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE]">
                <div className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#9E3B2A] shrink-0 mt-1.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#142E22]">Raw material availability</h4>
                    <p className="text-xs text-[#59655F] mt-0.5">
                      Seasonal fluctuations in certified non-GMO seed batches and high-grade seed paper cotton rags require buffer stocking.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Strategic Takeaway for Entrepreneurship Panel */}
        <div className="p-6 rounded-2xl bg-white border border-[#DCE8DE] shadow-xs text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-[#2E7D47] mb-1">
            Strategic Takeaway for Judges & Investors
          </p>
          <p className="text-xs sm:text-sm text-[#142E22] font-medium">
            EcoWrite counters cost sensitivities by positioning as an experiential lifestyle and educational kit (rather than mere commodity graphite), commanding healthy gross margins and institutional volume.
          </p>
        </div>
      </div>
    </section>
  );
};
