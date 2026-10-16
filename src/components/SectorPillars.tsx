import React, { useState } from 'react';
import { sectorPillars, SectorPillar } from '../data/armoricaData';

interface SectorPillarsProps {
  onSelectSectorForRFP: (sectorTitle: string) => void;
}

export const SectorPillars: React.FC<SectorPillarsProps> = ({ onSelectSectorForRFP }) => {
  const [activeTab, setActiveTab] = useState<string>(sectorPillars[0].id);

  const activeSector = sectorPillars.find((s) => s.id === activeTab) || sectorPillars[0];

  return (
    <section id="sectors" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
            Core Areas of Operation & Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans [text-wrap:balance]">
            Diverse Industrial Ecosystem & Technology Backbone
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Armorica Technologies LLP caters to high-growth industrial domains, combining Division 25 fabricated metal excellence with advanced AI, robotics, defense systems, and technical consultancy.
          </p>
        </div>

        {/* Interactive Segmented Selector Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-lg mb-8">
          {sectorPillars.map((sector, index) => {
            const isActive = sector.id === activeTab;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveTab(sector.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span className="font-mono text-xs opacity-75 mr-1.5">0{index + 1}.</span>
                {sector.title.split('(')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Active Sector Deep Dive Card */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-mono text-amber-400/90 uppercase tracking-wider mb-1">
                  Sector Overview
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeSector.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 font-medium">
                  {activeSector.subtitle}
                </p>
              </div>

              {/* Sector Focus Bullet Breakdown */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Sector Focus & Target Market
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {activeSector.focus.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Integration */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Technology & Engineering Integration
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {activeSector.technologies.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategic Key Emphasis Box */}
              <div className="p-4 rounded-md bg-slate-950/80 border border-slate-800/80 space-y-1">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Strategic Key Emphasis
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeSector.keyEmphasis}
                </p>
              </div>

              {/* Primary Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectSectorForRFP(activeSector.title)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                >
                  Initiate Technical Spec for {activeSector.title.split('(')[0].trim()}
                </button>
              </div>
            </div>

            {/* Right Media / Deliverables Column */}
            <div className="lg:col-span-5 space-y-6">
              {activeSector.imagePath ? (
                <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950 relative h-64 sm:h-72">
                  <img
                    src={activeSector.imagePath}
                    alt={activeSector.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-300 font-medium">
                    {activeSector.subtitle}
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-lg border border-slate-800 bg-slate-950 flex flex-col justify-center min-h-[220px]">
                  <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
                    Industry Domain Alignment
                  </div>
                  <div className="text-lg font-bold text-white mb-2">
                    Division 25 Fabricated Metal & Special Systems
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Engineered to meet stringent industrial tolerances, cleanroom requirements, and continuous high-throughput duty cycles.
                  </p>
                </div>
              )}

              {/* Standard Deliverables Card */}
              <div className="p-5 rounded-lg border border-slate-800 bg-slate-950/70 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Production Deliverables
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {activeSector.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-sm bg-slate-900 border border-slate-800 text-slate-200"
                    >
                      {deliv}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
