import React, { useState } from 'react';
import { GraduationCap, School, UserCheck, Gift, Building2, Check, Star } from 'lucide-react';

interface TargetAudienceProps {
  onPartnerInquiry: (category: string) => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onPartnerInquiry }) => {
  const [activeAudience, setActiveAudience] = useState('students');

  const audiences = [
    {
      id: 'students',
      title: 'Students',
      category: 'Primary Audience',
      isPrimary: true,
      icon: GraduationCap,
      emoji: '🎓',
      scope: 'School and college students across India',
      whyTheyLoveIt: 'Affordable, trendy, eco-conscious daily stationery that brings practical green action to their study table.',
      useCases: ['Daily lecture notes & exams', 'Hostel room potted herb plants', 'Meaningful friendship gifts'],
      packRecommendation: 'EcoWrite Student Starter Kit (₹149)',
    },
    {
      id: 'schools',
      title: 'Schools',
      category: 'Institutional',
      isPrimary: false,
      icon: School,
      emoji: '🏫',
      scope: 'K-12 schools, CBSE / ICSE / State board institutions',
      whyTheyLoveIt: 'Integrates hands-on environmental science into the academic syllabus and reduces campus plastic footprints.',
      useCases: ['World Environment Day drives', 'Science lab planting projects', 'Eco-club starter kits'],
      packRecommendation: 'School Bulk Box (50–500 kits with school logo)',
    },
    {
      id: 'teachers',
      title: 'Teachers',
      category: 'Educators',
      isPrimary: false,
      icon: UserCheck,
      emoji: '👩‍🏫',
      scope: 'Educators, science tutors, and activity heads',
      whyTheyLoveIt: 'Exciting tangible rewards for quiz winners and classroom star performers that reinforce ecological values.',
      useCases: ['Merit and attendance rewards', 'Biology germination demonstrations', 'Green classroom culture'],
      packRecommendation: 'Teacher Appreciation Bundle',
    },
    {
      id: 'gifts',
      title: 'Gift Buyers',
      category: 'Celebration & Events',
      isPrimary: false,
      icon: Gift,
      emoji: '🎁',
      scope: 'Parents, friends, and party hosts',
      whyTheyLoveIt: 'Replaces cheap plastic trinkets with living gifts that guests cherish long after birthdays and weddings.',
      useCases: ['Birthday return gifts', 'Festival hampers (Diwali / New Year)', 'Graduation keepsakes'],
      packRecommendation: 'EcoGift Custom Favor Packs',
    },
    {
      id: 'corporates',
      title: 'Companies & NGOs',
      category: 'Corporate ESG & Non-Profit',
      isPrimary: false,
      icon: Building2,
      emoji: '🏢',
      scope: 'Corporate CSR divisions, startups, and green NGOs',
      whyTheyLoveIt: 'Co-branded sustainable kits that physically manifest corporate sustainability commitments to clients and employees.',
      useCases: ['Employee onboarding welcome kits', 'Sustainability summits & delegate kits', 'NGO outreach programs'],
      packRecommendation: 'Custom Corporate Co-Branded Kits',
    },
  ];

  const currentAudience = audiences.find((a) => a.id === activeAudience)!;

  return (
    <section className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#2E7D47] mb-3">
            Ecosystem & Personas
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#142E22] mb-5">
            Made for People Who Want to Make a Difference
          </h2>
          <p className="text-base sm:text-lg text-[#59655F]">
            From curious school children to multinational CSR teams, EcoWrite creates real touchpoints with the natural world.
          </p>
        </div>

        {/* Primary Audience Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#EBF2EC] border border-[#D5E5D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#2E7D47] text-white flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 fill-current" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#142E22] block">
                Primary Target Audience: School & College Students
              </span>
              <span className="text-xs text-[#59655F]">
                India has over 250 million school and higher-education students — our most receptive generation for environmental innovation.
              </span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-[#2E7D47] bg-white px-3 py-1 rounded-md border border-[#D5E5D8] shrink-0">
            Gen Z & Gen Alpha Focus
          </span>
        </div>

        {/* 5 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            const isSelected = activeAudience === aud.id;
            return (
              <div
                key={aud.id}
                onClick={() => setActiveAudience(aud.id)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#2E7D47] shadow-md scale-[1.02]'
                    : 'bg-white/80 border-[#E8E4DC] hover:border-[#CADACD] hover:bg-white'
                } ${aud.isPrimary ? 'ring-2 ring-[#2E7D47]/20' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{aud.emoji}</span>
                    {aud.isPrimary && (
                      <span className="text-[10px] font-bold bg-[#142E22] text-white px-2 py-0.5 rounded">
                        Primary
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-[#142E22] mb-1">
                    {aud.title}
                  </h3>
                  <p className="text-[11px] font-medium text-[#2E7D47] mb-2">
                    {aud.category}
                  </p>
                  <p className="text-xs text-[#59655F] leading-snug">
                    {aud.scope}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EBE3] text-[11px] font-medium text-[#8B6F55]">
                  <span>Click to view details</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Selected Persona Panel */}
        <div className="rounded-3xl bg-white border border-[#DCE8DE] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{currentAudience.emoji}</span>
                <h4 className="text-xl font-bold text-[#142E22]">
                  {currentAudience.title} — {currentAudience.category}
                </h4>
              </div>
              <p className="text-sm text-[#59655F] mb-4">
                {currentAudience.whyTheyLoveIt}
              </p>

              <div className="space-y-2 mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8B6F55]">
                  Key Real-World Applications:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {currentAudience.useCases.map((uc, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EBE6DE] text-xs text-[#1E2320] flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-[#2E7D47] shrink-0" />
                      <span className="truncate">{uc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 p-5 rounded-2xl bg-[#FAF8F5] border border-[#E3ECE4] text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8B6F55] block mb-1">
                Recommended Solution
              </span>
              <p className="text-sm font-bold text-[#142E22] mb-3">
                {currentAudience.packRecommendation}
              </p>
              <button
                onClick={() => onPartnerInquiry(currentAudience.title)}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#142E22] hover:bg-[#1B382B] rounded-xl transition-all shadow-xs"
              >
                Inquire For {currentAudience.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
