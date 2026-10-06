import React, { useState } from 'react';
import { Sparkles, Droplets, Sun, Sprout, CheckCircle2, RotateCcw } from 'lucide-react';
import { IMAGES } from '../constants/images';

export const HowItWorksSimulation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [simulationDay, setSimulationDay] = useState(7);
  const [waterCount, setWaterCount] = useState(2);
  const [sunlightActive, setSunlightActive] = useState(true);

  const steps = [
    {
      num: 'STEP 01',
      title: 'WRITE',
      subtitle: 'Daily classroom & study companion',
      desc: 'Use your EcoWrite stationery normally for lecture notes, exams, sketches, and homework. Enjoy smooth 2B writing and clean erasing.',
      emoji: '✏️',
      tip: 'Sharpen as needed. Keep graphite shavings for home compost.',
    },
    {
      num: 'STEP 02',
      title: 'FINISH',
      subtitle: 'Reaching end of conventional life',
      desc: 'When the stationery reaches the end of its useful life and the pencil becomes too short to hold comfortably, do not throw it away.',
      emoji: '🌱',
      tip: 'The green transparent end contains intact viable herb seeds.',
    },
    {
      num: 'STEP 03',
      title: 'PLANT',
      subtitle: 'Seed capsule meets moist soil',
      desc: 'Follow the simple planting instructions. Insert the pencil seed-capsule down into a pot with soil at an angle of roughly 45 degrees.',
      emoji: '🌿',
      tip: 'Cover with approximately 1-2 cm of loose, damp potting mix.',
    },
    {
      num: 'STEP 04',
      title: 'GROW',
      subtitle: 'Watch green life emerge',
      desc: 'Water it, care for it and watch something new grow. Place the pot where it receives gentle sunlight and keep the topsoil consistently moist.',
      emoji: '🌳',
      tip: 'First cotyledons appear in 5–8 days depending on seed variety.',
    },
  ];

  // Simulation day stages
  const getGrowthStage = (day: number) => {
    if (day <= 2) {
      return {
        stage: 'Day 0–2: Capsule Dissolution',
        desc: 'The moisture in the soil begins dissolving the vegetable cellulose capsule. Seeds activate within the damp soil.',
        height: 'h-2',
        sproutStatus: 'Seeds waking up underground',
        visualBadge: 'Capsule Softening',
      };
    } else if (day <= 6) {
      return {
        stage: 'Day 3–6: Germination & Radical Root',
        desc: 'The seed coat cracks. A primary root anchors downwards while the embryonic shoot reaches toward the sunlight.',
        height: 'h-6',
        sproutStatus: 'Root anchored, shoot emerging',
        visualBadge: 'Early Germination',
      };
    } else if (day <= 14) {
      return {
        stage: 'Day 7–14: First True Leaves',
        desc: 'Vibrant green cotyledons burst through the soil! First true jagged leaves form and active photosynthesis commences.',
        height: 'h-14',
        sproutStatus: 'Healthy two-leaf seedling',
        visualBadge: 'Active Photosynthesis',
      };
    } else {
      return {
        stage: 'Day 15–30: Bushy Fragrant Herb',
        desc: 'A thriving potted plant with multiple leaf nodes and aromatic oils. Ready to harvest fresh leaves for your kitchen!',
        height: 'h-24',
        sproutStatus: 'Full botanical life established',
        visualBadge: 'Mature Plant',
      };
    }
  };

  const currentStage = getGrowthStage(simulationDay);

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#2E7D47] mb-3">
            Simple 4-Step Cycle
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#142E22] mb-5">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#59655F]">
            From your study desk to a living green plant in 4 intuitive steps. No gardening experience required.
          </p>
        </div>

        {/* Center Visual Cycle Strip: ✏️ → 🌱 → 🌿 → 🌳 */}
        <div className="max-w-xl mx-auto mb-16 py-3 px-6 rounded-2xl bg-white border border-[#E3ECE4] shadow-xs flex items-center justify-between text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">✏️</span>
            <span className="text-[11px] font-bold text-[#142E22]">Write</span>
          </div>
          <span className="text-[#8B6F55] font-mono text-sm">→</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">🌱</span>
            <span className="text-[11px] font-bold text-[#2E7D47]">Finish</span>
          </div>
          <span className="text-[#8B6F55] font-mono text-sm">→</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">🌿</span>
            <span className="text-[11px] font-bold text-[#1B382B]">Plant</span>
          </div>
          <span className="text-[#8B6F55] font-mono text-sm">→</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">🌳</span>
            <span className="text-[11px] font-bold text-[#142E22]">Grow</span>
          </div>
        </div>

        {/* 4-Step Interactive Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((st, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={st.num}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 border transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#2E7D47] shadow-lg -translate-y-1.5'
                    : 'bg-white/80 border-[#E8E4DC] hover:border-[#CADACD] hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#8B6F55]">
                      {st.num}
                    </span>
                    <span className="text-2xl">{st.emoji}</span>
                  </div>

                  <h3 className="text-2xl font-black text-[#142E22] mb-1 tracking-tight">
                    {st.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#2E7D47] mb-3">
                    {st.subtitle}
                  </p>

                  <p className="text-xs text-[#59655F] leading-relaxed mb-6">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EBE3] flex items-center gap-1.5 text-[11px] text-[#33463B]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D47] shrink-0" />
                  <span className="italic">{st.tip}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Plant Growth Simulator & Macro Photo Section */}
        <div className="rounded-3xl bg-white border border-[#DCE8DE] shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Macro Photo on Left */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#E3ECE4] bg-[#FAF8F5]">
              <img
                src={IMAGES.sproutMacro}
                alt="Close-up macro photo of plantable pencil sprouted in soil with green seedling"
                className="w-full h-auto aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-[#142E22]">
                Seed Capsule In Soil
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md p-3 rounded-xl text-white text-xs">
                <p className="font-medium">
                  Actual sprout stage at Day 8: Non-toxic dissolved gelatin sleeve with basil leaves.
                </p>
              </div>
            </div>

            {/* Interactive Growth Simulator Controls */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2E7D47]">
                    <Sparkles className="w-4 h-4" />
                    <span>Interactive Classroom Simulator</span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[#EBF2EC] text-[#142E22]">
                    Day {simulationDay} of 30
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#142E22] mb-2">
                  {currentStage.stage}
                </h3>
                <p className="text-xs sm:text-sm text-[#59655F] mb-6 leading-relaxed">
                  {currentStage.desc}
                </p>

                {/* Days Slider */}
                <div className="mb-6 bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E4DC]">
                  <div className="flex justify-between text-xs font-bold text-[#142E22] mb-2">
                    <span>Day 0 (Planting)</span>
                    <span>Day 7 (Sprouting)</span>
                    <span>Day 14 (Leaves)</span>
                    <span>Day 30 (Full Plant)</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={simulationDay}
                    onChange={(e) => setSimulationDay(Number(e.target.value))}
                    className="w-full h-2.5 bg-[#D8E5DA] rounded-lg appearance-none cursor-pointer accent-[#2E7D47]"
                  />
                  <div className="flex justify-between text-[11px] text-[#8B6F55] mt-1 font-mono">
                    <span>Stub In Soil</span>
                    <span>Dissolved Capsule</span>
                    <span>Cotyledons</span>
                    <span>Fresh Harvest</span>
                  </div>
                </div>

                {/* Interactive Caring Controls: Water and Sun */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  <button
                    onClick={() => setWaterCount((prev) => prev + 1)}
                    className="p-3 rounded-xl border border-[#D5E5D8] bg-[#EBF2EC] hover:bg-[#DCE8DE] transition-colors flex items-center justify-center gap-2 text-xs font-bold text-[#142E22]"
                  >
                    <Droplets className="w-4 h-4 text-blue-600" />
                    <span>Watered: {waterCount}x</span>
                  </button>

                  <button
                    onClick={() => setSunlightActive(!sunlightActive)}
                    className={`p-3 rounded-xl border transition-colors flex items-center justify-center gap-2 text-xs font-bold ${
                      sunlightActive
                        ? 'bg-amber-50 border-amber-200 text-amber-900'
                        : 'bg-gray-100 border-gray-200 text-gray-700'
                    }`}
                  >
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>{sunlightActive ? 'Sun: Optimal' : 'Sun: Shadowed'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setSimulationDay(0);
                      setWaterCount(0);
                    }}
                    className="col-span-2 sm:col-span-1 p-3 rounded-xl border border-[#E8E4DC] bg-white hover:bg-[#FAF8F5] transition-colors flex items-center justify-center gap-2 text-xs font-medium text-[#59655F]"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Status summary box */}
              <div className="p-4 rounded-xl bg-[#142E22] text-[#FAF8F5] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#A3C6A9] font-mono uppercase tracking-wider block">
                    Active Growth Status
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">
                    {currentStage.sproutStatus}
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#2E7D47] text-white rounded-md">
                  {currentStage.visualBadge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
