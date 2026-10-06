import React, { useState } from 'react';
import { Check, ArrowRight, Calculator, Sparkles, ShoppingBag } from 'lucide-react';

interface PricingSectionProps {
  onOpenOrder: (initialTier?: 'basic' | 'value' | 'premium') => void;
}

export const PricingRevenueSection: React.FC<PricingSectionProps> = ({ onOpenOrder }) => {
  const [selectedTierForCalc, setSelectedTierForCalc] = useState<'basic' | 'value' | 'premium'>('basic');
  const [calculatorKits, setCalculatorKits] = useState<number>(1000);

  const tiers = [
    {
      id: 'basic' as const,
      name: 'Basic Eco Kit',
      price: 49,
      pieces: '3 PIECES',
      badge: 'Starter Choice',
      bgClass: 'bg-[#E9F3EB]',
      borderClass: 'border-[#9EC9A9]',
      dividerClass: 'border-[#7AA786]',
      footerBg: 'bg-[#D6EADA] text-[#143E23]',
      buttonClass: 'bg-[#142E22] hover:bg-[#1E4332] text-white',
      items: [
        '1 Seed Pencil',
        '1 Eco Eraser',
        '1 Plantable Bookmark',
      ],
      description: 'Ideal for trial, classroom giveaways, and individual student note-taking.',
      cogs: 24, // Est production COGS for 3 pcs
    },
    {
      id: 'value' as const,
      name: 'Value Eco Kit',
      price: 99,
      pieces: '6 PIECES',
      badge: 'Most Popular',
      bgClass: 'bg-[#F9ECEB]',
      borderClass: 'border-[#DFB5B2]',
      dividerClass: 'border-[#C88E8B]',
      footerBg: 'bg-[#F2D7D5] text-[#5C2321]',
      buttonClass: 'bg-[#7A3331] hover:bg-[#5C2321] text-white',
      items: [
        '2 Seed Pencils',
        '2 Eco Erasers',
        '2 Plantable Bookmarks',
      ],
      description: 'Best balanced pack for active semesters and multi-seed garden experiments.',
      cogs: 48, // Est production COGS for 6 pcs
    },
    {
      id: 'premium' as const,
      name: 'Premium Eco Kit',
      price: 149,
      pieces: '9 PIECES',
      badge: 'Maximum Value',
      bgClass: 'bg-[#E9EFF8]',
      borderClass: 'border-[#A3BEDD]',
      dividerClass: 'border-[#7193BD]',
      footerBg: 'bg-[#D3E1F4] text-[#1A375F]',
      buttonClass: 'bg-[#1E3B63] hover:bg-[#132A4A] text-white',
      items: [
        '3 Seed Pencils',
        '3 Eco Erasers',
        '3 Plantable Bookmarks',
      ],
      description: 'Complete family or semester hamper with full mix of herbs, flowers, and vegetables.',
      cogs: 72, // Est production COGS for 9 pcs
    },
  ];

  const activeTier = tiers.find((t) => t.id === selectedTierForCalc)!;
  const unitPrice = activeTier.price;
  const unitCogs = activeTier.cogs;
  const grossRevenue = calculatorKits * unitPrice;
  const totalCogs = calculatorKits * unitCogs;
  const grossProfit = grossRevenue - totalCogs;
  const grossMarginPct = Math.round((grossProfit / grossRevenue) * 100);

  return (
    <section id="pricing" className="py-24 bg-[#F5F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header exactly matching Slide 2 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#142E22] mb-4 font-display">
            ECO KIT – PRICING & CONTENT OPTIONS
          </h2>
          <p className="text-base sm:text-lg text-[#526359] font-medium">
            Choose according to customer needs and budget
          </p>
        </div>

        {/* 3 Pricing Cards Grid strictly reproducing Slide 2 presentation design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 items-stretch">
          {tiers.map((tier) => {
            return (
              <div
                key={tier.id}
                className={`rounded-[2.5rem] p-8 sm:p-9 border-2 ${tier.borderClass} ${tier.bgClass} shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl relative`}
              >
                {/* Header Price & Pieces */}
                <div>
                  <div className="text-center mb-6">
                    <div className="text-5xl sm:text-6xl font-black text-[#142E22] tracking-tight tabular-nums mb-1 font-display">
                      ₹{tier.price}
                    </div>
                    <div className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#425248]">
                      {tier.pieces}
                    </div>
                    {/* Divider line like presentation */}
                    <div className={`w-3/4 mx-auto my-5 border-b-2 ${tier.dividerClass}`} />
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-4 mb-8 px-2">
                    {tier.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-base sm:text-lg font-bold text-[#1F2C24]">
                        <span className="w-2 h-2 rounded-full bg-[#142E22] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-[#526359] px-2 mb-6 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Footer and CTA Button */}
                <div className="space-y-3 pt-4">
                  <button
                    onClick={() => onOpenOrder(tier.id)}
                    className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer ${tier.buttonClass}`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Get {tier.name} — ₹{tier.price}</span>
                  </button>

                  {/* Bottom name label exactly like Slide 2 */}
                  <div className={`w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold tracking-wide ${tier.footerBg}`}>
                    {tier.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note exactly matching Slide 2 */}
        <div className="rounded-2xl bg-white border border-[#DCE8DE] py-3.5 px-6 text-center max-w-4xl mx-auto shadow-xs mb-16">
          <p className="text-xs sm:text-sm font-semibold text-[#142E22]">
            🌱 More pieces = better value • All kits use eco-friendly packaging
          </p>
        </div>

        {/* Illustrative Revenue Example & Entrepreneurship Panel Calculator */}
        <div className="rounded-3xl bg-white border border-[#DCE8DE] p-6 sm:p-10 shadow-md">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E7D47] mb-2">
              <Calculator className="w-4 h-4" />
              <span>Entrepreneurship Presentation Model</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#142E22] mb-2 font-display">
              Illustrative Revenue & Unit Economics
            </h3>
            <p className="text-xs sm:text-sm text-[#59655F]">
              Demonstrating the commercial viability across all 3 kit price tiers for college entrepreneurship panels and investors.
            </p>
          </div>

          {/* 3 Tier Quick Selector for Calculation */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs font-bold text-[#142E22] mr-2">Select Tier to Model:</span>
            {tiers.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTierForCalc(t.id)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedTierForCalc === t.id
                    ? 'bg-[#142E22] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#142E22] border border-[#D5E5D8] hover:bg-[#EBF2EC]'
                }`}
              >
                {t.name} (₹{t.price})
              </button>
            ))}
          </div>

          {/* Highlight stat */}
          <div className="p-6 rounded-2xl bg-[#EBF2EC] border border-[#D5E5D8] mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs font-mono font-bold text-[#8B6F55] uppercase tracking-wider block mb-1">
                  {activeTier.name} Baseline Batch (1,000 Units)
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#142E22] tabular-nums font-display">
                  1,000 Kits × ₹{unitPrice} = ₹{(1000 * unitPrice).toLocaleString('en-IN')}
                </span>
              </div>
              <span className="text-xs font-bold bg-[#142E22] text-[#FAF8F5] px-3.5 py-1.5 rounded-lg shadow-xs">
                Illustrative Revenue Example
              </span>
            </div>
          </div>

          {/* Interactive Volume Simulator */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E8E4DC]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <label htmlFor="volume-slider" className="text-xs font-bold text-[#142E22]">
                Simulate Production Volume for {activeTier.name}:
              </label>
              <span className="text-sm font-mono font-bold text-[#2E7D47]">
                {calculatorKits.toLocaleString('en-IN')} Kits
              </span>
            </div>

            <input
              id="volume-slider"
              type="range"
              min="200"
              max="10000"
              step="100"
              value={calculatorKits}
              onChange={(e) => setCalculatorKits(Number(e.target.value))}
              className="w-full h-2.5 bg-[#D8E5DA] rounded-lg appearance-none cursor-pointer accent-[#2E7D47] mb-6"
            />

            {/* Financial breakdown metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3.5 rounded-xl bg-white border border-[#E3ECE4]">
                <span className="text-[10px] font-mono uppercase text-[#8B6F55] block mb-1">
                  Gross Revenue
                </span>
                <span className="text-lg sm:text-xl font-black text-[#142E22] tabular-nums font-display">
                  ₹{grossRevenue.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-[#59655F] block mt-0.5">@ ₹{unitPrice}/kit</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E3ECE4]">
                <span className="text-[10px] font-mono uppercase text-[#8B6F55] block mb-1">
                  Est. COGS (Materials)
                </span>
                <span className="text-lg sm:text-xl font-black text-[#8B6F55] tabular-nums font-display">
                  ₹{totalCogs.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-[#59655F] block mt-0.5">~₹{unitCogs}/kit</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E3ECE4]">
                <span className="text-[10px] font-mono uppercase text-[#8B6F55] block mb-1">
                  Gross Profit
                </span>
                <span className="text-lg sm:text-xl font-black text-[#2E7D47] tabular-nums font-display">
                  ₹{grossProfit.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-[#2E7D47] font-semibold block mt-0.5">
                  Margin: {grossMarginPct}%
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#142E22] text-white">
                <span className="text-[10px] font-mono uppercase text-[#A3C6A9] block mb-1">
                  Plantable Seed Items
                </span>
                <span className="text-lg sm:text-xl font-black text-white tabular-nums font-display">
                  {(calculatorKits * (activeTier.id === 'basic' ? 2 : activeTier.id === 'value' ? 4 : 6)).toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-[#CFE3D1] block mt-0.5">Seeds & Bookmarks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
