/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandStoryProblem } from './components/BrandStoryProblem';
import { IntroducingEcoWrite } from './components/IntroducingEcoWrite';
import { ProductKitShowcase } from './components/ProductKitShowcase';
import { CustomisableSeedsSection } from './components/CustomisableSeedsSection';
import { HowItWorksSimulation } from './components/HowItWorksSimulation';
import { WhyEcoWrite } from './components/WhyEcoWrite';
import { UspSection } from './components/UspSection';
import { TargetAudience } from './components/TargetAudience';
import { PricingRevenueSection } from './components/PricingRevenueSection';
import { BusinessModel } from './components/BusinessModel';
import { MarketingStrategy } from './components/MarketingStrategy';
import { ImpactCycle } from './components/ImpactCycle';
import { SwotAnalysis } from './components/SwotAnalysis';
import { PackagingShowcase } from './components/PackagingShowcase';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { OrderDrawer, KitTierId } from './components/OrderDrawer';
import { PartnerModal } from './components/PartnerModal';
import { PitchDeckModal } from './components/PitchDeckModal';

export default function App() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedOrderTier, setSelectedOrderTier] = useState<KitTierId>('basic');
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [partnerCategory, setPartnerCategory] = useState('Schools');
  const [isPitchModeOpen, setIsPitchModeOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOrder = (tier: KitTierId = 'basic') => {
    setSelectedOrderTier(tier);
    setIsOrderOpen(true);
  };

  const handleOpenPartner = (category = 'Schools') => {
    setPartnerCategory(category);
    setIsPartnerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2320] flex flex-col font-sans selection:bg-[#1B382B] selection:text-[#FAF8F5]">
      {/* Top Sticky Navbar */}
      <Navbar
        onOpenOrder={() => handleOpenOrder('basic')}
        onOpenPitchMode={() => setIsPitchModeOpen(true)}
        pitchModeActive={isPitchModeOpen}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 2: Hero */}
        <HeroSection
          onExplore={() => scrollToSection('the-kit')}
          onHowItWorks={() => scrollToSection('how-it-works')}
          onOpenOrder={() => handleOpenOrder('basic')}
        />

        {/* Section 3: Brand Story / Problem */}
        <BrandStoryProblem />

        {/* Section 4: Introducing EcoWrite */}
        <IntroducingEcoWrite />

        {/* Section 5: Product Kit Showcase */}
        <ProductKitShowcase />

        {/* Section: Customisable Seeds (From User Presentation Slide 1) */}
        <CustomisableSeedsSection />

        {/* Section 6: How It Works & Interactive Growth Simulation */}
        <HowItWorksSimulation />

        {/* Section 7: Why EcoWrite? */}
        <WhyEcoWrite />

        {/* Section 8: Dramatic USP Section */}
        <UspSection onOpenOrder={() => handleOpenOrder('basic')} />

        {/* Section 9: Target Customer / Audience Personas */}
        <TargetAudience onPartnerInquiry={handleOpenPartner} />

        {/* Section 10: Pricing & Content Options (From User Presentation Slide 2) */}
        <PricingRevenueSection onOpenOrder={(tier) => handleOpenOrder(tier || 'basic')} />

        {/* Section 11: Business Model & Monetization Ecosystem */}
        <BusinessModel />

        {/* Section 12: Marketing Channels */}
        <MarketingStrategy />

        {/* Section 13: Environmental & Social Impact Cycle */}
        <ImpactCycle />

        {/* Section 14: SWOT Analysis */}
        <SwotAnalysis />

        {/* Section 15: Sustainable Packaging Showcase */}
        <PackagingShowcase />

        {/* Section 16: Final Dramatic CTA */}
        <FinalCta
          onExploreKit={() => scrollToSection('the-kit')}
          onPartner={() => handleOpenPartner('Schools')}
        />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Interactive Drawers & Modals */}
      <OrderDrawer
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        initialTier={selectedOrderTier}
      />

      <PartnerModal
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
        defaultCategory={partnerCategory}
      />

      <PitchDeckModal
        isOpen={isPitchModeOpen}
        onClose={() => setIsPitchModeOpen(false)}
        onNavigateSection={scrollToSection}
      />
    </div>
  );
}
