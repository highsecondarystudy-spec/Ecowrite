import React from 'react';
import { Sprout, RefreshCw, BookOpen, Gift, Building2, Lightbulb, Check } from 'lucide-react';

export const WhyEcoWrite: React.FC = () => {
  const features = [
    {
      id: 'second-life',
      title: 'Second Life',
      icon: Sprout,
      emoji: '🌱',
      tag: 'Circular Cycle',
      description: 'Used stationery can become part of a growing experience, breaking the linear use-and-throw habit that produces tons of campus landfill waste.',
      highlight: 'Zero waste remaining after pencil planting',
    },
    {
      id: 'eco-conscious',
      title: 'Eco-Conscious',
      icon: RefreshCw,
      emoji: '♻️',
      tag: 'Material Integrity',
      description: 'Designed around more sustainable material choices — reclaimed natural wood, cotton-scrap paper, non-toxic vegetable inks, and plant-derived latex.',
      highlight: '100% plastic-free component architecture',
    },
    {
      id: 'educational',
      title: 'Educational',
      icon: BookOpen,
      emoji: '📚',
      tag: 'Hands-On Pedagogy',
      description: 'Makes environmental awareness practical and engaging. Children and students learn botany, caretaking, and sustainability by doing rather than just reading.',
      highlight: 'Classroom curriculum friendly',
    },
    {
      id: 'giftable',
      title: 'Giftable',
      icon: Gift,
      emoji: '🎁',
      tag: 'Thoughtful Gifting',
      description: 'A meaningful alternative for sustainable gifting. Perfect for birthdays, return-gifts, academic milestones, and teacher appreciation days.',
      highlight: 'Unforgettable living gift that keeps growing',
    },
    {
      id: 'customizable',
      title: 'Customizable',
      icon: Building2,
      emoji: '🏫',
      tag: 'Institutional Scale',
      description: 'Suitable for schools, organizations and events. Custom laser embossing, school emblem prints, and tailored seed variety packages available in bulk.',
      highlight: 'Co-branded packaging for eco-initiatives',
    },
    {
      id: 'innovative',
      title: 'Innovative',
      icon: Lightbulb,
      emoji: '💡',
      tag: 'Simple Genius',
      description: 'Combines everyday stationery with a simple planting concept without adding complexity, high friction, or prohibitive price barriers for everyday students.',
      highlight: 'Priced affordably from ₹149',
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#2E7D47] mb-3">
            Core Value Proposition
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#142E22] mb-5">
            More Than Stationery. It's a New Habit.
          </h2>
          <p className="text-base sm:text-lg text-[#59655F]">
            EcoWrite bridges the gap between daily academic essentials and conscious climate action.
          </p>
        </div>

        {/* 6 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="group bg-white rounded-2xl p-7 border border-[#E3ECE4] hover:border-[#2E7D47]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl">{feat.emoji}</span>
                    <span className="text-xs font-medium text-[#8B6F55] tracking-wide">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#142E22] mb-2 group-hover:text-[#2E7D47] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-[#59655F] leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EBE3] flex items-center gap-2 text-xs font-semibold text-[#1B382B]">
                  <Check className="w-3.5 h-3.5 text-[#2E7D47] shrink-0" />
                  <span>{feat.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
