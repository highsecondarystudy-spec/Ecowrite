import React, { useState } from 'react';
import { PenLine, Eraser, Bookmark, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export const IntroducingEcoWrite: React.FC = () => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const products = [
    {
      id: 'pencil',
      title: 'Plantable Pencil',
      tagline: 'Write smoothly. Plant when short.',
      icon: PenLine,
      emoji: '✏️',
      description: 'Crafted from sustainable reclaimed wood and graphite. A water-soluble seed capsule replaces the typical metal ferrule.',
      specs: ['Non-GMO Basil, Tomato or Marigold seeds', '2B smooth graphite core', 'Recycled graphite shavings safe for compost'],
    },
    {
      id: 'eraser',
      title: 'Eco-Friendly Eraser',
      tagline: 'Smudge-free correction without plastics.',
      icon: Eraser,
      emoji: '🌱',
      description: 'Made from natural tree latex and plant-derived cellulose. Completely free of PVC, phthalates, and toxic petroleum softeners.',
      specs: ['100% Biodegradable & non-toxic', 'Dust-free crumb composition', 'Safe for curious younger students'],
    },
    {
      id: 'bookmark',
      title: 'Seed Paper Bookmark',
      tagline: 'Hold your page. Grow wildflowers.',
      icon: Bookmark,
      emoji: '📖',
      description: 'Handmade cotton-rag paper infused with live pollinator wildflower seeds. Reads your favourite chapter today, blooms tomorrow.',
      specs: ['Embedded with 12+ live seeds', 'Zero wood pulp used in making', 'Biodegradable vegetable soy ink'],
    },
    {
      id: 'guide',
      title: 'Planting Guide',
      tagline: 'Clear instructions anyone can follow.',
      icon: BookOpen,
      emoji: '🌿',
      description: 'Foldable illustrated card showing soil preparation, sunlight requirements, watering rhythm, and harvest tips.',
      specs: ['Step-by-step visual diagram', 'Simple English & regional tips', 'Printed on 100% recycled paper'],
    },
  ];

  const processSteps = [
    {
      id: 'use',
      name: 'USE',
      label: 'Everyday Writing',
      desc: 'Use your pencil and eraser for lectures, sketches, homework, and journaling just like premium stationery.',
    },
    {
      id: 'finish',
      name: 'FINISH',
      label: 'Natural Lifecycle',
      desc: 'When the pencil reaches its stub length or you complete your book, do not toss it into the waste basket.',
    },
    {
      id: 'plant',
      name: 'PLANT',
      label: 'Return to Earth',
      desc: 'Insert the green seed end downwards into moist soil at a 45-degree angle in a small pot or your garden.',
    },
    {
      id: 'grow',
      name: 'GROW',
      label: 'New Beginning',
      desc: 'Add gentle water, 4–6 hours of sunlight daily, and watch fragrant herbs or flowers sprout in under 10 days.',
    },
  ];

  return (
    <section id="the-kit" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#2E7D47] mb-3">
            Holistic Sustainable Design
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#142E22] mb-5">
            Introducing EcoWrite
          </h2>
          <p className="text-base sm:text-lg text-[#59655F] leading-relaxed">
            “EcoWrite brings together practical stationery and planting into one simple, meaningful kit.”
          </p>
        </div>

        {/* Central Kit Concept with 4 Orbiting Products */}
        <div className="relative mb-20 bg-white border border-[#E3ECE4] rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Top Label */}
          <div className="flex items-center justify-between pb-6 border-b border-[#F0EBE3] mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D47]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#142E22]">
                Kit Anatomy · 4 Essential Components
              </span>
            </div>
            <span className="text-xs text-[#8B6F55] font-medium hidden sm:inline">
              Select any component to inspect specifications
            </span>
          </div>

          {/* 4 Cards Grid with center highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, idx) => {
              const Icon = p.icon;
              const isSelected = activeProductIndex === idx;
              return (
                <div
                  key={p.id}
                  onClick={() => setActiveProductIndex(idx)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#EBF2EC] border-[#2E7D47] shadow-md scale-[1.02]'
                      : 'bg-[#FAF8F5] border-[#E8E4DC] hover:border-[#CADACD] hover:bg-[#F4F8F4]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{p.emoji}</span>
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#142E22] text-white'
                            : 'bg-white text-[#142E22] border border-[#D8E5DA]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#142E22] mb-1">
                      {p.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#2E7D47] mb-3">
                      {p.tagline}
                    </p>
                    <p className="text-xs text-[#59655F] leading-relaxed mb-4">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#DDE8DF]">
                    <ul className="space-y-1 text-[11px] text-[#33463B]">
                      {p.specs.slice(0, 2).map((s, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-[#2E7D47] shrink-0" />
                          <span className="truncate">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Inspection Banner for Active Product */}
          <div className="mt-8 p-5 rounded-2xl bg-[#142E22] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{products[activeProductIndex].emoji}</span>
              <div>
                <p className="text-xs text-[#D8E5DA] uppercase tracking-wider font-semibold">
                  Inspecting: {products[activeProductIndex].title}
                </p>
                <p className="text-sm font-medium text-white">
                  {products[activeProductIndex].specs.join(' · ')}
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                setActiveProductIndex((prev) => (prev + 1) % products.length)
              }
              className="text-xs font-semibold px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors whitespace-nowrap"
            >
              Next Component →
            </button>
          </div>
        </div>

        {/* Visual Process Section: USE → FINISH → PLANT → GROW */}
        <div className="rounded-3xl bg-[#EBF2EC] border border-[#D5E5D8] p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E7D47] mb-2 block">
              The EcoWrite Lifecycle
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#142E22]">
              USE → FINISH → PLANT → GROW
            </h3>
            <p className="text-xs sm:text-sm text-[#59655F] mt-2">
              An effortless transition from writing tool to living flora.
            </p>
          </div>

          {/* Interactive Steps Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, idx) => {
              const isCurrent = activeProcessStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 relative border ${
                    isCurrent
                      ? 'bg-white border-[#2E7D47] shadow-md -translate-y-1'
                      : 'bg-white/70 border-[#D8E5DA] hover:bg-white'
                  }`}
                >
                  {/* Step badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isCurrent
                          ? 'bg-[#142E22] text-white'
                          : 'bg-[#EBF2EC] text-[#2E7D47]'
                      }`}
                    >
                      {step.name}
                    </span>
                    <span className="text-xs text-[#8B6F55] font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#142E22] mb-1">
                    {step.label}
                  </h4>
                  <p className="text-xs text-[#59655F] leading-relaxed">
                    {step.desc}
                  </p>

                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#EBF2EC] border border-[#CDE0D0] text-[#2E7D47] flex items-center justify-center text-xs">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
