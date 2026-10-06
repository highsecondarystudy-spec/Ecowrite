import React from 'react';
import { Package, Feather, Leaf, Recycle, CheckCircle } from 'lucide-react';
import { IMAGES } from '../constants/images';

export const PackagingShowcase: React.FC = () => {
  const packagingFeatures = [
    {
      title: '100% Recycled Kraft Cardboard',
      desc: 'Made from unbleached post-consumer fiber that breaks down naturally without releasing microplastics.',
      icon: Package,
    },
    {
      title: 'Soy-Based Botanical Inks',
      desc: 'Printed with non-toxic, VOC-free vegetable and soy inks that do not contaminate compost soil.',
      icon: Feather,
    },
    {
      title: 'Minimalist Debossed Motifs',
      desc: 'Clean typography and leaf illustrations debossed with low environmental footprint and no plastic lamination.',
      icon: Leaf,
    },
    {
      title: 'Zero Single-Use Plastic Wrap',
      desc: 'No shrink-wrap, no plastic window inserts, and zero nylon ribbons — true cradle-to-cradle packaging.',
      icon: Recycle,
    },
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#2E7D47] mb-3">
            Conscious Industrial Design
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#142E22] mb-5">
            Designed for the Shelf. Built for the Earth.
          </h2>
          <p className="text-base sm:text-lg text-[#59655F]">
            Every EcoWrite package is thoughtfully crafted to feel tactile, premium, and 100% biodegradable.
          </p>
        </div>

        {/* Visual Box Presentation */}
        <div className="bg-white rounded-3xl border border-[#DCE8DE] p-6 sm:p-10 lg:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Box Image */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#E3ECE4] bg-[#FAF8F5] group shadow-inner">
              <img
                src={IMAGES.packagingBox}
                alt="EcoWrite premium kraft cardboard packaging box with botanical debossing"
                className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#142E22] shadow-sm">
                ECOWRITE 🌱 Box Mockup
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#142E22]/85 backdrop-blur-md p-3.5 rounded-xl text-white text-xs">
                <span className="font-bold text-[#A3C6A9] block text-[11px] uppercase tracking-wider">
                  Store Shelf Ready
                </span>
                <span className="text-white/90 font-medium">
                  “Write. Erase. Plant. Grow.” printed in solvent-free water ink.
                </span>
              </div>
            </div>

            {/* Technical Specifications & Details */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B6F55] mb-2">
                <span>Sustainable Packaging Specifications</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#142E22] mb-4">
                Tactile Kraft Cardboard with Natural Fiber Texture
              </h3>
              <p className="text-xs sm:text-sm text-[#59655F] mb-8 leading-relaxed">
                We designed the EcoWrite box to look distinct on stationery retail shelves, bookstore displays, and exhibition stalls without resorting to glossy, non-recyclable plastic laminations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {packagingFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EBF2EC] text-[#2E7D47] flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-[#142E22] mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] text-[#59655F] leading-tight">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Shelf display trust note */}
              <div className="p-3.5 rounded-xl bg-[#EBF2EC] border border-[#D5E5D8] flex items-center gap-2.5 text-xs text-[#142E22]">
                <CheckCircle className="w-4 h-4 text-[#2E7D47] shrink-0" />
                <span className="font-medium">
                  Compact 18cm × 5cm form factor easily stacks in retail displays and school backpacks.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
