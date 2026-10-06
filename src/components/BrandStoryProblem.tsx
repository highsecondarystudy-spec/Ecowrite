import React, { useState } from 'react';
import { Trash2, ShieldAlert, Sparkles, Sprout, ArrowRight } from 'lucide-react';

export const BrandStoryProblem: React.FC = () => {
  const [transitionStage, setTransitionStage] = useState<number>(0);

  const problemCards = [
    {
      num: '01',
      title: 'Everyday Waste',
      desc: 'Traditional stationery is frequently discarded after use, accumulating silently in dustbins across thousands of classrooms daily.',
      icon: Trash2,
      accent: 'from-[#142E22] to-[#2E7D47]',
    },
    {
      num: '02',
      title: 'Plastic Dependency',
      desc: 'Many everyday stationery items rely on synthetic plastics, petroleum binders, and non-recyclable polymer casings that endure for centuries.',
      icon: ShieldAlert,
      accent: 'from-[#8B6F55] to-[#59655F]',
    },
    {
      num: '03',
      title: 'Limited Green Choices',
      desc: 'Students and institutions actively want eco-conscious choices, but face overpriced or hard-to-source alternatives.',
      icon: Sparkles,
      accent: 'from-[#2E7D47] to-[#409159]',
    },
    {
      num: '04',
      title: 'Missed Opportunity',
      desc: 'Discarded stationery can become a hands-on vehicle to teach ecological responsibility and reconnect learners with the soil.',
      icon: Sprout,
      accent: 'from-[#1B382B] to-[#2E7D47]',
    },
  ];

  const transitionStages = [
    {
      step: 'Stage 1',
      title: 'The Used Pencil Stub',
      subtitle: 'Too short to write with, but packed with latent potential.',
      visualIcon: '✏️',
      color: 'bg-[#F3EFE9]',
      borderColor: 'border-[#D9C8B7]',
      textColor: 'text-[#8B6F55]',
      detail: 'Instead of heading to the landfill, the cellulose capsule protects active organic seeds awaiting moisture.',
    },
    {
      step: 'Stage 2',
      title: 'Plant In Soil',
      subtitle: 'Insert tip-first into soil at a 45° angle.',
      visualIcon: '🌱',
      color: 'bg-[#EBF2EC]',
      borderColor: 'border-[#C4DCB]',
      textColor: 'text-[#2E7D47]',
      detail: 'Moisture dissolves the plant-based gelatin capsule within 48 hours, freeing the seeds into rich soil.',
    },
    {
      step: 'Stage 3',
      title: 'The First Sprout',
      subtitle: 'Water gently and place in natural sunlight.',
      visualIcon: '🌿',
      color: 'bg-[#DCE8DE]',
      borderColor: 'border-[#A3C6A9]',
      textColor: 'text-[#142E22]',
      detail: 'Within 5–10 days, strong green cotyledons emerge. Basil, tomato, or marigold begins photosynthesizing.',
    },
    {
      step: 'Stage 4',
      title: 'A Living Plant',
      subtitle: 'A full-grown herb or flower yielding fresh leaves.',
      visualIcon: '🌸',
      color: 'bg-[#CFE3D1]',
      borderColor: 'border-[#8AB992]',
      textColor: 'text-[#0B1912]',
      detail: 'What began as an everyday school tool is now purifying indoor air, producing herbs, and continuing the green cycle.',
    },
  ];

  return (
    <section id="story" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#2E7D47] mb-3">
            Our Purpose & Problem Statement
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#142E22] leading-tight mb-6">
            What if stationery didn’t have to become waste?
          </h2>
          <p className="text-base sm:text-lg text-[#59655F] leading-relaxed">
            Millions of pencils, erasers, and bookmarks are bought every academic year. Most end up discarded the moment they wear down. EcoWrite was born to question that convention.
          </p>
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problemCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-[#E3ECE4] hover:border-[#2E7D47]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-[#8B6F55]">
                      {card.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F5] border border-[#EBE6DE] flex items-center justify-center text-[#142E22] group-hover:bg-[#EBF2EC] group-hover:text-[#2E7D47] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#142E22] mb-3 group-hover:text-[#2E7D47] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#59655F] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2ECE4] flex items-center gap-1.5 text-xs font-medium text-[#8B6F55]">
                  <span>Linear Consumption Loop</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Central Statement with Interactive Pencil-to-Plant Transformation */}
        <div className="rounded-3xl bg-gradient-to-br from-[#142E22] to-[#1B382B] text-[#FAF8F5] p-8 sm:p-12 lg:p-14 shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase bg-white/10 text-[#CFE3D1] rounded-md mb-4">
              The EcoWrite Breakthrough
            </span>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              “What if the end of a pencil could be the beginning of a plant?”
            </h3>
            <p className="text-sm sm:text-base text-[#D8E5DA] max-w-xl mx-auto">
              Click through the transformation stages below to experience how a simple writing tool turns into botanical life.
            </p>
          </div>

          {/* Interactive Stepper Navigation */}
          <div className="max-w-4xl mx-auto">
            {/* Step tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 p-1.5 bg-black/20 rounded-xl backdrop-blur-xs">
              {transitionStages.map((stage, idx) => (
                <button
                  key={stage.step}
                  onClick={() => setTransitionStage(idx)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                    transitionStage === idx
                      ? 'bg-white text-[#142E22] shadow-sm'
                      : 'text-[#D8E5DA] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-sm">{stage.visualIcon}</span>
                  <span className="truncate">{stage.step}</span>
                </button>
              ))}
            </div>

            {/* Stage Display Box */}
            <div className="bg-white/95 text-[#1E2320] rounded-2xl p-6 sm:p-8 shadow-inner border border-white/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Visual Icon / Illustration container */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-[#EBF2EC] border-2 border-[#D8E5DA] flex flex-col items-center justify-center shrink-0 shadow-sm transition-transform duration-300 transform scale-105">
                  <span className="text-5xl sm:text-6xl mb-2 animate-bounce">
                    {transitionStages[transitionStage].visualIcon}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#2E7D47] tracking-wider uppercase">
                    {transitionStages[transitionStage].step}
                  </span>
                </div>

                {/* Text details */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#2E7D47] mb-1">
                    Cyclical Lifecycle Transformation
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#142E22] mb-2">
                    {transitionStages[transitionStage].title}
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-[#4A5750] mb-3">
                    {transitionStages[transitionStage].subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#59655F] leading-relaxed mb-4">
                    {transitionStages[transitionStage].detail}
                  </p>

                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <button
                      onClick={() =>
                        setTransitionStage((prev) => (prev + 1) % transitionStages.length)
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142E22] hover:text-[#2E7D47] transition-colors"
                    >
                      <span>Next Stage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs text-[#8B6F55]">
                      Step {transitionStage + 1} of 4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
