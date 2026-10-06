import React, { useState } from 'react';
import { ArrowDown, Sprout, Sparkles, Check, Play } from 'lucide-react';
import { IMAGES } from '../constants/images';

interface HeroSectionProps {
  onExplore: () => void;
  onHowItWorks: () => void;
  onOpenOrder: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onHowItWorks,
  onOpenOrder,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const kitHighlights = [
    {
      id: 'pencil',
      label: 'Plantable Pencil',
      tag: 'Seeds in tip',
      desc: 'Infused with non-GMO basil & tomato seeds inside a water-soluble plant capsule.',
      pos: 'top-[35%] left-[18%]',
    },
    {
      id: 'eraser',
      label: 'Eco Eraser',
      tag: '100% Biodegradable',
      desc: 'Plant-derived natural rubber and non-toxic cellulose.',
      pos: 'top-[60%] left-[28%]',
    },
    {
      id: 'bookmark',
      label: 'Seed Bookmark',
      tag: 'Wildflower Cotton',
      desc: 'Handmade cotton-scrap paper embedded with living seeds.',
      pos: 'top-[42%] right-[16%]',
    },
    {
      id: 'box',
      label: 'Kraft Box',
      tag: 'Recyclable Packaging',
      desc: 'Unbleached kraft cardboard printed with natural soy inks.',
      pos: 'bottom-[20%] right-[32%]',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden bg-[#FAF8F5]"
    >
      {/* Subtle organic background shapes */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#EBF2EC]/70 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#E3EFE5]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2EC] border border-[#D5E5D8] text-xs font-semibold text-[#142E22] tracking-wide shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#2E7D47] animate-pulse" />
            <span>100% Nature-Inspired</span>
            <span className="text-[#8B6F55] font-normal">|</span>
            <span className="text-[#3A5043] font-medium">Sustainable D2C Stationery</span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#142E22] leading-[1.08] mb-6">
            WRITE. ERASE.{' '}
            <span className="text-[#2E7D47] block sm:inline">PLANT. GROW.</span>
          </h1>

          <p className="text-lg sm:text-2xl font-medium text-[#22392D] max-w-2xl mx-auto mb-4 leading-snug">
            Meet EcoWrite — the stationery kit that gives everyday writing a second life.
          </p>

          <p className="text-sm sm:text-base text-[#59655F] max-w-xl mx-auto leading-relaxed">
            An eco-friendly stationery kit designed to turn everyday stationery into an opportunity to grow something new.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onExplore}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-[#FAF8F5] bg-[#142E22] hover:bg-[#1B382B] active:scale-[0.98] rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore EcoWrite</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onHowItWorks}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-[#142E22] bg-[#FAF8F5] hover:bg-[#EBF2EC] border border-[#D8E5DA] rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#2E7D47]" />
              <span>See How It Works</span>
            </button>
          </div>
        </div>

        {/* Hero Product Visual Composition */}
        <div className="relative max-w-5xl mx-auto mt-4">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#DCE8DE] bg-[#FFFFFF] shadow-xl p-2 sm:p-4 transition-transform duration-500 hover:shadow-2xl">
            {/* Visual presentation */}
            <div className="relative aspect-[16/9] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#FAF8F5]">
              <img
                src={IMAGES.heroProduct}
                alt="EcoWrite green stationery kit with plantable pencil, biodegradable eraser, seed paper bookmark, and growing plant"
                className="w-full h-full object-cover object-center transform scale-100 hover:scale-[1.015] transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Subtle top gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating interactive hotspot indicators */}
              <div className="hidden md:block">
                {kitHighlights.map((item) => (
                  <div
                    key={item.id}
                    className={`absolute ${item.pos} z-20 group`}
                    onMouseEnter={() => setActiveHotspot(item.id)}
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    <button
                      aria-label={`Inspect ${item.label}`}
                      className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#142E22] text-white shadow-lg border-2 border-white transition-all transform group-hover:scale-110 active:scale-95"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#409159] animate-ping absolute inset-0 m-auto" />
                      <span className="text-xs font-bold font-mono">+</span>
                    </button>

                    {/* Popover card */}
                    <div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 rounded-xl bg-[#FAF8F5] border border-[#D5E5D8] shadow-xl text-left pointer-events-none transition-all duration-200 ${
                        activeHotspot === item.id
                          ? 'opacity-100 translate-y-0 scale-100'
                          : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-bold text-[#142E22]">
                          {item.label}
                        </span>
                        <span className="text-[10px] text-[#2E7D47] font-semibold bg-[#EBF2EC] px-1.5 py-0.5 rounded">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#59655F] leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-20">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#E3ECE4] shadow-md text-xs">
                  <div className="w-6 h-6 rounded-lg bg-[#EBF2EC] flex items-center justify-center text-[#2E7D47]">
                    <Sprout className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#142E22] leading-none">Seed-Infused Tip</p>
                    <p className="text-[11px] text-[#59655F] mt-0.5">Basil · Tomato · Marigold</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20">
                <button
                  onClick={onOpenOrder}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#142E22]/90 hover:bg-[#142E22] backdrop-blur-md rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Eco Kits from ₹49</span>
                  <span className="text-xs">→</span>
                </button>
              </div>
            </div>

            {/* Quick 4-pill feature strip underneath hero image */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-3 px-1">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF8F5] border border-[#EBE6DE]">
                <Check className="w-4 h-4 text-[#2E7D47] shrink-0" />
                <span className="text-xs font-semibold text-[#142E22]">100% Wood & Cotton</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF8F5] border border-[#EBE6DE]">
                <Check className="w-4 h-4 text-[#2E7D47] shrink-0" />
                <span className="text-xs font-semibold text-[#142E22]">Non-GMO Native Seeds</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF8F5] border border-[#EBE6DE]">
                <Check className="w-4 h-4 text-[#2E7D47] shrink-0" />
                <span className="text-xs font-semibold text-[#142E22]">Biodegradable Eraser</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF8F5] border border-[#EBE6DE]">
                <Check className="w-4 h-4 text-[#2E7D47] shrink-0" />
                <span className="text-xs font-semibold text-[#142E22]">Zero Plastic Packaging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
