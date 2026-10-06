import React, { useState } from 'react';
import { Trash2, Sprout, BookOpen, Smile, HeartHandshake, Users, RefreshCw } from 'lucide-react';

export const ImpactCycle: React.FC = () => {
  const [activeCycleStep, setActiveCycleStep] = useState(0);

  const impactCards = [
    {
      id: 'reduce-waste',
      title: 'Reduce Waste',
      icon: Trash2,
      emoji: '♻️',
      tag: 'Zero-Landfill Target',
      description: 'Replaces single-use plastic pens, synthetic erasers, and laminated paper bookmarks with 100% biodegradable, compostable materials.',
    },
    {
      id: 'encourage-planting',
      title: 'Encourage Planting',
      icon: Sprout,
      emoji: '🌱',
      tag: 'Urban Afforestation',
      description: 'Democratizes gardening by turning ordinary school desks into launchpads for homegrown basil, marigold, and cherry tomato saplings.',
    },
    {
      id: 'education',
      title: 'Environmental Education',
      icon: BookOpen,
      emoji: '📚',
      tag: 'Experiential Science',
      description: 'Transforms abstract textbook chapters about climate change into a tactile, daily experience of nurturing living biology.',
    },
    {
      id: 'fun-learning',
      title: 'Fun Learning',
      icon: Smile,
      emoji: '👧',
      tag: 'Childhood Curiosity',
      description: 'Children experience the excitement of watching their own handwriting instrument blossom into a green plant on their window ledge.',
    },
    {
      id: 'responsible-consumption',
      title: 'Responsible Consumption',
      icon: HeartHandshake,
      emoji: '💚',
      tag: 'Mindful Habits',
      description: 'Cultivates mindfulness in young consumers, teaching them that every manufactured item possesses a life before and after usage.',
    },
    {
      id: 'local-employment',
      title: 'Local Employment',
      icon: Users,
      emoji: '👥',
      tag: 'Community Empowerment',
      description: 'Partners with local Indian artisans, paper recyclers, and rural women self-help groups for handmade seed paper crafting and box assembly.',
    },
  ];

  const cycleSteps = [
    { id: 1, name: 'STATIONERY', desc: 'Sustainably crafted from reclaimed cedar wood and cotton rag scraps.' },
    { id: 2, name: 'USE', desc: 'Used for daily handwriting, journaling, artwork, and classroom study.' },
    { id: 3, name: 'PLANT', desc: 'Embedded seeds are introduced into soil when the pencil becomes a stub.' },
    { id: 4, name: 'GROW', desc: 'Sunshine and water awaken fragrant herbs, vegetables, and pollinator flowers.' },
    { id: 5, name: 'AWARENESS', desc: 'Students witness the regenerative power of nature and share with peers.' },
    { id: 6, name: 'CIRCULARITY', desc: 'Inspires lifelong ecological responsibility and conscious consumer choices.' },
  ];

  return (
    <section id="impact" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#2E7D47] mb-3">
            Systemic Ecological Value
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#142E22] mb-5">
            Small Stationery. Big Change.
          </h2>
          <p className="text-base sm:text-lg text-[#59655F]">
            By rethinking the humblest object in a student's backpack, we spark a ripple effect across campuses, homes, and communities.
          </p>
        </div>

        {/* Animated Circular Impact Cycle */}
        <div className="rounded-3xl bg-[#EBF2EC] border border-[#D5E5D8] p-8 sm:p-12 mb-16 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D47] block mb-1">
              Continuous Regenerative Loop
            </span>
            <h3 className="text-2xl font-bold text-[#142E22]">
              The EcoWrite Impact Cycle
            </h3>
            <p className="text-xs text-[#59655F] mt-1">
              Click any stage in the circular journey to explore its transformative role.
            </p>
          </div>

          {/* Circular loop timeline */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {cycleSteps.map((step, idx) => {
              const isSelected = activeCycleStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveCycleStep(idx)}
                  className={`cursor-pointer rounded-2xl p-4 text-center border transition-all duration-300 ${
                    isSelected
                      ? 'bg-white border-[#2E7D47] shadow-md scale-105'
                      : 'bg-white/60 border-[#D8E5DA] hover:bg-white'
                  }`}
                >
                  <div
                    className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center font-mono text-xs font-bold mb-2 ${
                      isSelected
                        ? 'bg-[#142E22] text-white'
                        : 'bg-[#EBF2EC] text-[#2E7D47]'
                    }`}
                  >
                    0{step.id}
                  </div>
                  <h4 className="text-xs font-bold text-[#142E22] tracking-wider uppercase mb-1">
                    {step.name}
                  </h4>
                  <p className="text-[10px] text-[#59655F] leading-tight">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Loop connection banner */}
          <div className="mt-8 pt-6 border-t border-[#D5E5D8] flex items-center justify-center gap-2 text-xs font-bold text-[#142E22]">
            <RefreshCw className="w-4 h-4 text-[#2E7D47] animate-spin" style={{ animationDuration: '8s' }} />
            <span>STATIONERY → USE → PLANT → GROW → AWARENESS → STATIONERY</span>
          </div>
        </div>

        {/* 6 Impact Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E3ECE4] hover:border-[#2E7D47]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{card.emoji}</span>
                    <span className="text-[11px] font-semibold text-[#8B6F55]">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#142E22] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#59655F] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EBE3] flex items-center gap-2 text-xs text-[#2E7D47] font-semibold">
                  <span>Qualitative Impact Pillar</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
