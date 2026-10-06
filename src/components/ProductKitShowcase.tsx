import React, { useState } from 'react';
import { Pen, Eraser, BookmarkCheck, FileText, ChevronRight, Sprout, Check } from 'lucide-react';
import { IMAGES } from '../constants/images';

export const ProductKitShowcase: React.FC = () => {
  const [selectedSeed, setSelectedSeed] = useState<string>('basil');

  const seedVarieties = [
    {
      id: 'basil',
      name: 'Basil (Tulsi)',
      category: 'Herb',
      daysToGerminate: '5–7 Days',
      care: 'Moderate sunlight & daily gentle misting',
      benefit: 'Aromatic herb with culinary and medicinal leaves',
      color: 'bg-emerald-600',
    },
    {
      id: 'coriander',
      name: 'Coriander',
      category: 'Herb',
      daysToGerminate: '8–12 Days',
      care: 'Partial shade in warm months',
      benefit: 'Essential kitchen herb for everyday meals',
      color: 'bg-green-600',
    },
    {
      id: 'marigold',
      name: 'Marigold',
      category: 'Flower',
      daysToGerminate: '4–6 Days',
      care: 'High light tolerance & well-draining pot',
      benefit: 'Bright vibrant blossoms that repel garden pests',
      color: 'bg-amber-500',
    },
    {
      id: 'sunflower',
      name: 'Sunflower',
      category: 'Flower',
      daysToGerminate: '6–9 Days',
      care: 'Full direct sunlight and moist rich soil',
      benefit: 'Golden cheerful petals that attract pollinators',
      color: 'bg-yellow-500',
    },
    {
      id: 'tomato',
      name: 'Tomato',
      category: 'Vegetable',
      daysToGerminate: '7–10 Days',
      care: 'Direct sunshine & rich organic compost',
      benefit: 'Sweet, juicy kitchen tomatoes in 60 days',
      color: 'bg-red-500',
    },
    {
      id: 'spinach',
      name: 'Spinach (Palak)',
      category: 'Vegetable',
      daysToGerminate: '5–8 Days',
      care: 'Cooler shade and rich organic potting mix',
      benefit: 'Nutrient-packed leafy greens for healthy salads',
      color: 'bg-emerald-700',
    },
  ];

  const productCards = [
    {
      id: 'pencil',
      title: 'Plantable Pencil',
      quote: 'Contains seeds at the end, giving the pencil a second life after use.',
      icon: Pen,
      tag: 'Core Writing Tool',
      specs: [
        'Graphite: Smooth 2B, break-resistant',
        'Wood: Certified sustainable cedar/pine scrap',
        'Seed Capsule: Non-gelatin vegetable cellulose',
        'Seed Count: 3–5 viable seeds per pencil',
      ],
      hoverDetail: 'Once sharpened down to ~3cm, invert the pencil and press into damp soil. The capsule dissolves within 48 hours.',
    },
    {
      id: 'eraser',
      title: 'Eco Eraser',
      quote: 'A biodegradable/plantable alternative designed with sustainability in mind.',
      icon: Eraser,
      tag: 'Plastic-Free Correction',
      specs: [
        'Material: 100% Natural latex & plant cellulose',
        'Toxicity: Zero PVC, phthalates, or microplastics',
        'Performance: Clean graphite pickup with minimal debris',
        'Disposal: 100% home compostable within 90 days',
      ],
      hoverDetail: 'Unlike synthetic vinyl erasers that break down into microscopic ocean pollutants, this eraser naturally composts.',
    },
    {
      id: 'bookmark',
      title: 'Seed Paper Bookmark',
      quote: 'Use it as a bookmark, then plant it and watch it grow.',
      icon: BookmarkCheck,
      tag: 'Botanical Reading Companion',
      specs: [
        'Paper Base: 100% Recycled cotton garment rags',
        'Infusion: Mixed wildflower & herb seeds embedded',
        'Printing: Water-based non-toxic soy ink',
        'Planting: Tear into small pieces, cover with thin soil',
      ],
      hoverDetail: 'Keep your place in your textbook, novel, or journal. When finished, bury the paper in a garden pot.',
    },
    {
      id: 'guide',
      title: 'Planting Guide',
      quote: 'Simple instructions to help customers turn the used stationery into a growing plant.',
      icon: FileText,
      tag: 'Educational Accordion',
      specs: [
        'Format: Pocket-sized 4-panel illustrated accordion',
        'Language: Clear pictorial guide suitable for all ages',
        'Tips: Seasonality chart, watering frequency, sunlight',
        'Paper: Unbleached recycled kraft paper',
      ],
      hoverDetail: 'Step-by-step illustrations ensure a high germination success rate for beginners, classrooms, and kids.',
    },
  ];

  return (
    <section className="py-24 bg-[#F5F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#2E7D47] mb-3">
            Premium Sustainable Stationery
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#142E22] mb-5">
            Everything You Need to Write Something That Grows
          </h2>
          <p className="text-base sm:text-lg text-[#59655F]">
            Every single item inside the EcoWrite kit has been re-engineered from the ground up to replace disposable plastics with living seeds.
          </p>
        </div>

        {/* 4 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-white rounded-2xl p-7 border border-[#E3ECE4] shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF2EC] text-[#2E7D47] flex items-center justify-center group-hover:bg-[#142E22] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#8B6F55] tracking-wide">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#142E22] mb-2 group-hover:text-[#2E7D47] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs italic text-[#22392D] mb-5 font-medium leading-relaxed">
                    “{card.quote}”
                  </p>

                  <div className="space-y-2 border-t border-[#F2ECE4] pt-4 mb-4">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-[#8B6F55]">
                      Material Specs:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#59655F]">
                      {card.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#2E7D47] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EBE3] bg-[#FAF8F5] -mx-7 -mb-7 p-4 rounded-b-2xl group-hover:bg-[#EBF2EC] transition-colors">
                  <p className="text-[11px] text-[#33463B] leading-snug">
                    <span className="font-bold">Lifecycle Tip:</span> {card.hoverDetail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Flatlay Showcase + Seed Variety Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-[#DCE8DE] p-6 sm:p-10 shadow-md">
          {/* Flatlay image */}
          <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-[#E3ECE4] relative group">
            <img
              src={IMAGES.kitUnboxing}
              alt="EcoWrite complete kit unboxing showcase with pencils, eraser, and bookmark"
              className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#142E22] shadow-sm">
              EcoWrite Kit Unboxing Flatlay
            </div>
          </div>

          {/* Seed Variety Explorer */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E7D47] mb-2">
              <Sprout className="w-4 h-4" />
              <span>Choose What You Grow</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#142E22] mb-3">
              6 Non-GMO Native Seed Varieties Available
            </h3>
            <p className="text-xs sm:text-sm text-[#59655F] mb-6 leading-relaxed">
              Every EcoWrite kit can be custom-selected across flower, herb, and vegetable varieties tailored for Indian window sills and classrooms.
            </p>

            {/* Seed selection buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {seedVarieties.map((seed) => {
                const isActive = selectedSeed === seed.id;
                return (
                  <button
                    key={seed.id}
                    onClick={() => setSelectedSeed(seed.id)}
                    className={`p-3 text-left rounded-xl border transition-all text-xs ${
                      isActive
                        ? 'bg-[#EBF2EC] border-[#2E7D47] shadow-xs'
                        : 'bg-[#FAF8F5] border-[#E8E4DC] hover:border-[#CADACD]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[#142E22]">{seed.name}</span>
                      <span className={`w-2 h-2 rounded-full ${seed.color}`} />
                    </div>
                    <span className="text-[11px] text-[#59655F]">
                      Germinates in {seed.daysToGerminate}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Seed Card */}
            {(() => {
              const active = seedVarieties.find((s) => s.id === selectedSeed)!;
              return (
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E3ECE4]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#142E22]">
                      Plant Profile: {active.name}
                    </span>
                    <span className="text-[11px] font-medium text-[#2E7D47]">
                      {active.daysToGerminate}
                    </span>
                  </div>
                  <p className="text-xs text-[#59655F] mb-2">
                    <span className="font-semibold text-[#142E22]">Care:</span> {active.care}
                  </p>
                  <p className="text-xs text-[#33463B]">
                    <span className="font-semibold text-[#142E22]">Harvest & Value:</span> {active.benefit}
                  </p>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
