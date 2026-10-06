import React, { useState } from 'react';
import { Check, Sparkles, Sprout } from 'lucide-react';

export const CustomisableSeedsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'flower' | 'herb' | 'vegetable'>('herb');
  const [selectedSeed, setSelectedSeed] = useState<string>('Basil');

  const seedCategories = [
    {
      id: 'flower',
      title: 'Flower Seeds',
      icon: '🌻',
      seeds: ['Marigold', 'Sunflower'],
      description: 'Bright, pollinator-friendly floral blooms that bring vibrant color and support honeybees.',
      days: '4–7 Days',
      idealFor: 'Gifting, aesthetic balconies, floral lovers',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
      id: 'herb',
      title: 'Herb Seeds',
      icon: '🌿',
      seeds: ['Basil', 'Coriander'],
      description: 'Aromatic kitchen and medicinal herbs that are easy to harvest fresh right from a student desk.',
      days: '5–8 Days',
      idealFor: 'Hostel rooms, daily cooking, herbal tea',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    },
    {
      id: 'vegetable',
      title: 'Vegetable Seeds',
      icon: '🥕',
      seeds: ['Tomato', 'Spinach'],
      description: 'Fast-growing kitchen garden greens and cherry tomatoes rich in nutrition and gardening joy.',
      days: '6–10 Days',
      idealFor: 'Home planters, biology science projects',
      badgeColor: 'bg-orange-100 text-orange-900 border-orange-300',
    },
  ];

  const howItWorksPoints = [
    'Customer selects a preferred seed type.',
    'The selected seeds are placed inside the plantable product.',
    'Different seed choices can suit different users and occasions.',
    'Seed options can be offered subject to availability.',
  ];

  const currentCategoryData = seedCategories.find((c) => c.id === selectedCategory)!;

  return (
    <section id="customisable-seeds" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Heading from Slide 1 */}
        <div className="max-w-4xl mx-auto mb-14 text-center">
          <div className="inline-block w-full py-4 px-6 rounded-2xl bg-[#2A4B37] text-white shadow-md mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide uppercase font-display">
              CUSTOMISABLE SEEDS – YOUR CHOICE, YOUR GREEN GROWTH
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4A5B52] font-medium max-w-xl mx-auto">
            Consumers can choose the seed type according to their preference.
          </p>
        </div>

        {/* 2 Main Cards Grid from Presentation Slide 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-stretch">
          {/* Left Card: How Customisation Works */}
          <div className="lg:col-span-5 rounded-3xl p-7 sm:p-9 bg-[#EBF3EC] border-2 border-[#C8DFCD] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-[#D4E8D8]">
                <span className="text-2xl">🌱</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#142E22]">
                  How Customisation Works
                </h3>
              </div>

              <ul className="space-y-4">
                {howItWorksPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#142E22] text-[#FAF8F5] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#25382E] font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-[#D4E8D8] bg-white/60 -mx-3 -mb-3 p-4 rounded-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2A4B37] block mb-1">
                Zero Plastic Encapsulation
              </span>
              <p className="text-xs text-[#526359] leading-normal">
                Every seed is preserved in a 100% natural water-soluble plant capsule that dissolves safely in damp soil within 48 hours.
              </p>
            </div>
          </div>

          {/* Right Card: Possible Seed Choices */}
          <div className="lg:col-span-7 rounded-3xl p-7 sm:p-9 bg-[#F9F5F0] border-2 border-[#E7DCD0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8DDCE]">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">🌱</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#142E22]">
                    Possible Seed Choices
                  </h3>
                </div>
                <span className="text-xs font-semibold text-[#8B6F55] hidden sm:inline">
                  Interactive Selector
                </span>
              </div>

              {/* 3 Categories exactly matching Slide 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                {seedCategories.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.id as any);
                        setSelectedSeed(cat.seeds[0]);
                      }}
                      className={`p-4 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-between ${
                        isSelected
                          ? 'bg-white border-[#2A4B37] shadow-md -translate-y-1'
                          : 'bg-white/80 border-[#E8DFC8] hover:border-[#CADACD] hover:bg-white'
                      }`}
                    >
                      <div className="text-3xl mb-2">{cat.icon}</div>
                      <h4 className="text-sm font-bold text-[#142E22] mb-1">
                        {cat.title}
                      </h4>
                      <p className="text-xs font-semibold text-[#2E7D47] mt-1">
                        {cat.seeds.join(' · ')}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Active Category Seed Detail Showcase */}
              <div className="p-5 rounded-2xl bg-white border border-[#E3ECE4] shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{currentCategoryData.icon}</span>
                    <span className="text-sm font-bold text-[#142E22]">
                      {currentCategoryData.title} Details
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#EBF2EC] text-[#2E7D47]">
                    Germination: {currentCategoryData.days}
                  </span>
                </div>

                <p className="text-xs text-[#526359] mb-4 leading-relaxed">
                  {currentCategoryData.description}
                </p>

                {/* Individual Seed Selection Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-[#F2ECE4]">
                  <span className="text-xs font-bold text-[#142E22]">Pick Seed:</span>
                  {currentCategoryData.seeds.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSeed(s)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        selectedSeed === s
                          ? 'bg-[#142E22] text-white shadow-xs'
                          : 'bg-[#FAF8F5] text-[#142E22] border border-[#D5E5D8] hover:bg-[#EBF2EC]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-[#8B6F55]">
              <span>Ideal for: {currentCategoryData.idealFor}</span>
              <span className="font-semibold text-[#2E7D47]">100% Viable Native Seeds</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner USP from Slide 1 */}
        <div className="rounded-2xl bg-[#D8E6DA] border-2 border-[#B9D4BD] py-3.5 px-6 text-center max-w-4xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm font-bold text-[#1B3E28] tracking-wide">
            USP: Personalised eco-products that let customers choose what they want to grow.
          </p>
        </div>
      </div>
    </section>
  );
};
