import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenOrder: () => void;
  onOpenPitchMode: () => void;
  pitchModeActive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrder,
  onOpenPitchMode,
  pitchModeActive,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'The Kit', href: '#the-kit' },
    { label: 'Seeds', href: '#customisable-seeds' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Impact', href: '#impact' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/92 backdrop-blur-md shadow-xs border-b border-[#E3ECE4] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-[#142E22] group"
          >
            <span className="font-display">ECOWRITE</span>
            <span className="text-base transition-transform group-hover:rotate-12 duration-200">
              🌱
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#2C302E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 transition-colors hover:text-[#1B382B] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#2E7D47] after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPitchMode}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                pitchModeActive
                  ? 'bg-[#142E22] text-[#FAF8F5]'
                  : 'bg-[#EBF2EC] text-[#1B382B] hover:bg-[#DCE8DE]'
              }`}
              title="Toggle Entrepreneurship Pitch Highlights"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pitch Deck View</span>
            </button>

            <button
              onClick={onOpenOrder}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-[#FAF8F5] bg-[#142E22] rounded-lg hover:bg-[#1B382B] active:scale-[0.98] transition-all shadow-xs whitespace-nowrap"
            >
              Get EcoWrite
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#142E22] hover:bg-[#EBF2EC] rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D8E5DA] bg-[#FAF8F5] px-6 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 py-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1E2320] py-2 border-b border-[#F0EBE3]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onOpenPitchMode();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-xs font-medium text-center bg-[#EBF2EC] text-[#142E22] rounded-lg"
            >
              Toggle Pitch Deck Highlights
            </button>
            <button
              onClick={() => {
                onOpenOrder();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 px-4 text-sm font-semibold text-center text-white bg-[#142E22] rounded-lg"
            >
              Get EcoWrite Kit — From ₹49
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
