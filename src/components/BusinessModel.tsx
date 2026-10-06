import React, { useState } from 'react';
import { ShoppingBag, School, Building, Gift, Globe, Layers, ArrowUpRight } from 'lucide-react';

export const BusinessModel: React.FC = () => {
  const [activeStream, setActiveStream] = useState<number>(0);

  const streams = [
    {
      id: 1,
      title: 'Individual Kit Sales',
      channel: 'Direct-to-Consumer (D2C)',
      icon: ShoppingBag,
      emoji: '🛍️',
      share: '35% Core Target',
      description: 'Online direct orders from students, parents, and stationery collectors seeking premium sustainable kits.',
      strategy: 'Low barrier entry starting at ₹149 with attractive combo multi-packs and refill seed capsules.',
    },
    {
      id: 2,
      title: 'School Bulk Orders',
      channel: 'B2B Educational Institutions',
      icon: School,
      emoji: '🏫',
      share: '25% High-Volume',
      description: 'Pre-ordered annual stationery supply contracts for private and public schools, universities, and coaching institutes.',
      strategy: 'Curriculum-tied bulk packs with educational discounts and teacher guides.',
    },
    {
      id: 3,
      title: 'Customized Corporate Kits',
      channel: 'B2B Corporate ESG & CSR',
      icon: Building,
      emoji: '🏢',
      share: '20% High-Margin',
      description: 'Co-branded corporate welcome packages, summit giveaways, ESG sustainability kits, and client appreciation favors.',
      strategy: 'Custom laser engraving on wooden pencils and bespoke printed seed bookmarks.',
    },
    {
      id: 4,
      title: 'Festival & Return-Gift Packages',
      channel: 'Seasonal & Event Occasions',
      icon: Gift,
      emoji: '🎁',
      share: '12% Seasonal Surge',
      description: 'Special celebration hampers for birthdays, eco-friendly weddings, Diwali, Rakhi, and Earth Day return gifts.',
      strategy: 'Festive botanical packaging bundles with celebratory greeting wrappers.',
    },
    {
      id: 5,
      title: 'Online Sales & Marketplaces',
      channel: 'E-commerce & Quick Commerce',
      icon: Globe,
      emoji: '🌐',
      share: '8% Scalable Reach',
      description: 'Listing across major pan-India eco-aggregators, Amazon Green Store, and quick-commerce school supply hubs.',
      strategy: 'High-visibility discovery channel driving recurring brand awareness back to primary web store.',
    },
  ];

  return (
    <section id="business" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#2E7D47] mb-3">
            Monetization & Scalability
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#142E22] mb-5">
            How EcoWrite Can Grow
          </h2>
          <p className="text-base sm:text-lg text-[#59655F]">
            A diversified multi-channel business model combining steady D2C cash flow with high-volume institutional contracts.
          </p>
        </div>

        {/* Clean Ecosystem Diagram */}
        <div className="bg-white rounded-3xl border border-[#DCE8DE] p-6 sm:p-10 shadow-sm mb-12">
          {/* Central Brand Node */}
          <div className="flex flex-col items-center justify-center text-center mb-10 pb-8 border-b border-[#F0EBE3]">
            <div className="w-16 h-16 rounded-2xl bg-[#142E22] text-[#FAF8F5] flex items-center justify-center text-2xl shadow-md mb-3">
              🌱
            </div>
            <h3 className="text-xl font-extrabold text-[#142E22]">
              EcoWrite Core Platform
            </h3>
            <p className="text-xs text-[#59655F] max-w-md mt-1">
              Centralized sustainable supply chain, certified seed sourcing, and standardized biodegradable manufacturing.
            </p>
          </div>

          {/* 5 Revenue Streams Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {streams.map((stream, idx) => {
              const Icon = stream.icon;
              const isSelected = activeStream === idx;
              return (
                <div
                  key={stream.id}
                  onClick={() => setActiveStream(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#EBF2EC] border-[#2E7D47] shadow-sm -translate-y-1'
                      : 'bg-[#FAF8F5] border-[#E8E4DC] hover:border-[#CADACD] hover:bg-[#F4F8F4]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#8B6F55]">
                        0{stream.id}
                      </span>
                      <span className="text-xl">{stream.emoji}</span>
                    </div>

                    <h4 className="text-sm font-bold text-[#142E22] mb-1">
                      {stream.title}
                    </h4>
                    <p className="text-[11px] font-semibold text-[#2E7D47] mb-2">
                      {stream.channel}
                    </p>
                    <p className="text-xs text-[#59655F] leading-snug">
                      {stream.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#DDE8DF] flex items-center justify-between text-[11px]">
                    <span className="font-mono text-[#8B6F55] font-semibold">
                      {stream.share}
                    </span>
                    <span className="text-[#142E22] font-bold">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stream Deep Dive Banner */}
        <div className="rounded-2xl bg-[#142E22] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{streams[activeStream].emoji}</span>
              <h4 className="text-lg font-bold">
                Stream 0{streams[activeStream].id}: {streams[activeStream].title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#D8E5DA]">
              <span className="text-[#A3C6A9] font-semibold">Go-to-Market Strategy: </span>
              {streams[activeStream].strategy}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs font-mono font-bold bg-white/10 px-3 py-1.5 rounded-lg text-[#CFE3D1]">
              Target Contribution: {streams[activeStream].share}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
