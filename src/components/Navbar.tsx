import React, { useState } from 'react';

interface NavbarProps {
  onOpenRFP: (preselectedCategory?: string) => void;
  onOpenDossier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFP, onOpenDossier }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
            <span className="w-2.5 h-6 bg-amber-500 rounded-xs transition-transform group-hover:scale-y-110" />
            <span className="text-xl font-bold tracking-tight text-white font-sans">
              Armorica <span className="text-slate-400 font-medium">Technologies</span> <span className="text-slate-300 font-semibold text-sm tracking-wider">LLP</span>
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#sectors" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Core Sectors
            </a>
            <a href="#deftech" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Pune DefTech
            </a>
            <a href="#catalog" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Machinery Catalog
            </a>
            <a href="#sustainability" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Sustainability
            </a>
            <a href="#consultancy" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Consultancy & IT
            </a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
            <button
              onClick={onOpenDossier}
              className="text-slate-400 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer text-xs"
            >
              LLP Profile
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenRFP()}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
            >
              Request Technical RFP
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenRFP()}
              className="px-3 py-1.5 text-xs font-medium text-slate-950 bg-amber-400 rounded-md whitespace-nowrap"
            >
              RFP
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 space-y-3">
            <a
              href="#sectors"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-md"
            >
              Core Sectors
            </a>
            <a
              href="#deftech"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-md"
            >
              Pune DefTech Defense
            </a>
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-md"
            >
              Machinery & Equipment Catalog
            </a>
            <a
              href="#sustainability"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-md"
            >
              Sustainable Manufacturing
            </a>
            <a
              href="#consultancy"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-md"
            >
              Digital & Technical Consultancy
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-900 rounded-md"
            >
              Contact & Satara Facility
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDossier();
              }}
              className="block w-full text-left px-3 py-2 text-sm text-amber-400 hover:bg-slate-900 rounded-md"
            >
              View Official LLP Profile Dossier
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
