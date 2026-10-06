import React from 'react';
import { Smartphone, School, Tent, Tag, Play, CheckCircle } from 'lucide-react';

export const MarketingStrategy: React.FC = () => {
  const channels = [
    {
      id: 'social',
      title: 'Social Media',
      icon: Smartphone,
      emoji: '📱',
      tag: 'Digital Reach',
      headline: 'Viral #PlantYourPencil Reels & Time-Lapses',
      desc: 'Instagram, YouTube Shorts, and Facebook reels showing 10-day time-lapse videos of pencils sprouting into kitchen herbs. Student challenges and UGC (User Generated Content).',
      tactics: ['10-day sprout time-lapses', 'Influencer collaborations with student creators', 'Environmental meme advocacy'],
    },
    {
      id: 'schools',
      title: 'School Campaigns',
      icon: School,
      emoji: '🏫',
      tag: 'Grassroots Education',
      headline: 'Eco Workshops & “Plant Your Pencil” Days',
      desc: 'Interactive hands-on workshops in private and municipal schools. Science teachers organize classroom planting competitions with certificates for best herb growth.',
      tactics: ['On-campus planting drives', 'Teacher-led germination experiments', 'Assembly announcements & poster exhibits'],
    },
    {
      id: 'events',
      title: 'Events & Stalls',
      icon: Tent,
      emoji: '🎪',
      tag: 'Physical Engagement',
      headline: 'College Fairs & Entrepreneurship Pop-Ups',
      desc: 'Live experience stalls at university tech fests, cultural festivals, green literature festivals, and startup expos where visitors plant their own live test pot on the spot.',
      tactics: ['Live DIY planting test benches', 'Entrepreneurship panel showcases', 'Eco-market weekend pop-ups'],
    },
    {
      id: 'offers',
      title: 'Targeted Offers',
      icon: Tag,
      emoji: '🎁',
      tag: 'Conversion Drivers',
      headline: 'Student Discounts & Festive Combos',
      desc: 'Student ID discounts, semester-start "Exam Survival Kits", teacher day bundles, and buy-3-get-1-free community packs designed to spur word-of-mouth adoption.',
      tactics: ['Verified student ID 15% discount', 'Return-gift party 10-packs', 'Semester-starter stationery bundles'],
    },
  ];

  return (
    <section className="py-24 bg-[#F5F2EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#2E7D47] mb-3">
            Go-To-Market & Brand Building
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#142E22] mb-5">
            Growing the Idea, One Student at a Time
          </h2>
          <p className="text-base sm:text-lg text-[#59655F]">
            Our multi-pronged marketing engine turns students from passive stationery buyers into active sustainability ambassadors.
          </p>
        </div>

        {/* Prominent Marketing Message Banner */}
        <div className="mb-14 p-8 rounded-3xl bg-white border border-[#DCE8DE] shadow-sm text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#8B6F55] mb-2">
            The Universal Brand Promise & Hook
          </p>
          <div className="text-2xl sm:text-4xl font-extrabold text-[#142E22] tracking-tight mb-2">
            “Write. Erase. Plant. Grow.”
          </div>
          <p className="text-xs sm:text-sm text-[#59655F] max-w-lg mx-auto">
            A punchy, 4-word mnemonic phrase instantly understood by an 8-year-old child, a university professor, and a corporate purchaser alike.
          </p>
        </div>

        {/* 4 Marketing Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((chan) => {
            const Icon = chan.icon;
            return (
              <div
                key={chan.id}
                className="bg-white rounded-2xl p-7 border border-[#E3ECE4] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EBF2EC] text-[#2E7D47] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#142E22] leading-tight">
                          {chan.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#8B6F55]">
                          {chan.tag}
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl">{chan.emoji}</span>
                  </div>

                  <h4 className="text-sm font-bold text-[#2E7D47] mb-2">
                    {chan.headline}
                  </h4>
                  <p className="text-xs text-[#59655F] leading-relaxed mb-6">
                    {chan.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EBE3]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#142E22] mb-2">
                    Execution Tactics:
                  </p>
                  <ul className="space-y-1.5">
                    {chan.tactics.map((tac, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-2 text-xs text-[#33463B]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2E7D47] shrink-0" />
                        <span>{tac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
