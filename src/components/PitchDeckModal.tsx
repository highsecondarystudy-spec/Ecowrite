import React, { useState } from 'react';
import { X, Sparkles, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PitchDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const PitchDeckModal: React.FC<PitchDeckModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
}) => {
  if (!isOpen) return null;

  const slides = [
    {
      num: '01',
      title: 'Problem Statement',
      badge: 'Market Pain',
      sectionId: 'story',
      bullets: [
        'Millions of plastic stationery items end up in Indian landfills annually.',
        'Disposable culture starts at school desks; students lack tangible green alternatives.',
        'Current "eco" options are either non-functional novelty items or overpriced.',
      ],
    },
    {
      num: '02',
      title: 'The EcoWrite Solution',
      badge: 'Product Kit',
      sectionId: 'the-kit',
      bullets: [
        'Plantable Pencils, Biodegradable Eco Erasers, and Plantable Bookmarks.',
        'Customisable Seeds: Flower (Marigold, Sunflower), Herb (Basil, Coriander), Vegetable (Tomato, Spinach).',
        'Full regenerative lifecycle: WRITE → FINISH → PLANT → GROW.',
      ],
    },
    {
      num: '03',
      title: 'Market & Target Personas',
      badge: 'TAM & SAM',
      sectionId: 'story',
      bullets: [
        'Primary Audience: 250M+ Indian school and college students.',
        'Institutional B2B: Schools adopting green curriculums and CBSE eco-guidelines.',
        'Corporate ESG & sustainable celebration gifting market.',
      ],
    },
    {
      num: '04',
      title: 'Tiered Pricing & Unit Economics',
      badge: 'Financials',
      sectionId: 'pricing',
      bullets: [
        '3 Tiered Kits: Basic Eco Kit (₹49 / 3 pcs), Value Eco Kit (₹99 / 6 pcs), Premium Eco Kit (₹149 / 9 pcs).',
        'More pieces = better value for customers, higher average order value for brand.',
        'Gross Profit Margin: ~50% across blended D2C and institutional volume.',
        'Low ₹49 entry price removes adoption barrier for any student budget.',
      ],
    },
    {
      num: '05',
      title: '5 Scalable Revenue Streams',
      badge: 'Business Model',
      sectionId: 'business',
      bullets: [
        'D2C Individual kit web sales.',
        'School & college annual stationery procurement contracts.',
        'Customized corporate ESG welcome kits.',
        'Event return-gifts & festive hampers.',
        'Eco marketplace & quick-commerce listings.',
      ],
    },
    {
      num: '06',
      title: 'Strategic SWOT Summary',
      badge: 'Defensibility',
      sectionId: 'pricing',
      bullets: [
        'Strengths: High emotional resonance, educational value, circular zero-waste.',
        'Mitigation: Certified germination rates, local artisan supply chain partners.',
        'Moat: Campus brand loyalty, school institutional relationships, and community.',
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#DCE8DE] max-h-[90vh] overflow-y-auto z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE3] mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#142E22] text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#142E22]">
                Entrepreneurship Pitch Deck Companion
              </h3>
              <p className="text-xs text-[#59655F]">
                Executive summary structured for college entrepreneurship panels & startup jury
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#59655F] hover:bg-[#FAF8F5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 6 Deck Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {slides.map((slide) => (
            <div
              key={slide.num}
              className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] flex flex-col justify-between hover:border-[#2E7D47]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#8B6F55]">
                    SLIDE {slide.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E7D47] bg-[#EBF2EC] px-2 py-0.5 rounded">
                    {slide.badge}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[#142E22] mb-3">
                  {slide.title}
                </h4>

                <ul className="space-y-2 mb-4 text-xs text-[#59655F]">
                  {slide.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D47] shrink-0 mt-0.5" />
                      <span className="leading-tight">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  onNavigateSection(slide.sectionId);
                  onClose();
                }}
                className="pt-2 border-t border-[#E8E4DC] text-[11px] font-bold text-[#142E22] hover:text-[#2E7D47] flex items-center justify-between transition-colors"
              >
                <span>Jump to Section</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Panel Note */}
        <div className="p-4 rounded-xl bg-[#EBF2EC] border border-[#D5E5D8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-[#142E22] font-semibold text-center sm:text-left">
            Pitch Tip: Use the interactive volume calculator in the Pricing section to demonstrate live gross profit sensitivities.
          </span>
          <button
            onClick={() => {
              onNavigateSection('pricing');
              onClose();
            }}
            className="px-4 py-2 bg-[#142E22] text-white rounded-lg font-bold text-xs shrink-0"
          >
            Go to Revenue Model →
          </button>
        </div>
      </div>
    </div>
  );
};
