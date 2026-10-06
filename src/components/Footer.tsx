import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E3ECE4] py-14 text-[#59655F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-1.5 text-xl font-bold text-[#142E22] mb-3">
              <span className="font-display">ECOWRITE</span>
              <span>🌱</span>
            </a>
            <p className="text-sm text-[#59655F] max-w-sm mb-4 leading-relaxed">
              Sustainable green stationery kits designed to give everyday handwriting instruments a regenerative second life.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#8B6F55]">
              <span>Startup Presentation Concept</span>
              <span>·</span>
              <span>Made in India</span>
              <span>·</span>
              <span>Zero-Waste Mission</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#142E22] mb-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#story" className="hover:text-[#142E22] transition-colors">Our Story & Purpose</a>
              </li>
              <li>
                <a href="#the-kit" className="hover:text-[#142E22] transition-colors">The 4-Part Stationery Kit</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#142E22] transition-colors">How It Works & Simulator</a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#142E22] transition-colors">Systemic Ecological Impact</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#142E22] transition-colors">Starter Kit & Volume Economics</a>
              </li>
            </ul>
          </div>

          {/* Audiences & Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#142E22] mb-3">
              Institutional & Partner Inquiries
            </h4>
            <p className="text-xs text-[#59655F] leading-relaxed mb-3">
              Are you an educator, student council leader, or NGO coordinator looking to bring EcoWrite to your campus?
            </p>
            <div className="text-xs font-medium text-[#142E22]">
              <p>Email: hello@ecowrite.in</p>
              <p className="mt-0.5">Campus Outreach: +91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} EcoWrite. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#8B6F55]">
            <span>Write. Erase. Plant. Grow.</span>
            <span>·</span>
            <span>Designed with Sustainable Restraint</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
