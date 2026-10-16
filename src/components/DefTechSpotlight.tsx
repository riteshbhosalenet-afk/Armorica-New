import React, { useState } from 'react';
import { defenseCapabilities } from '../data/armoricaData';

interface DefTechSpotlightProps {
  onOpenRFPForDefense: () => void;
}

export const DefTechSpotlight: React.FC<DefTechSpotlightProps> = ({ onOpenRFPForDefense }) => {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <section id="deftech" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
              Defense Technology & Supply Chain (Pune DefTech)
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans [text-wrap:balance]">
              Indigenous Defense Engineering, Autonomous Systems & Tactical Materials
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Positioned strategically within the Pune DefTech defense corridor, Armorica Technologies LLP partners with Defense PSUs, private defense primes, and specialized supply chain SMEs to supply critical systems and qualification services.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="text-white font-semibold block mb-1">Defense Ecosystem Target Audience</span>
              Defense Sector (PSUs, Private Sector Contractors, and Tier-2/Tier-3 SMEs in the Indian & Global Defense Supply Chain).
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenRFPForDefense}
                className="w-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer text-center"
              >
                Inquire Defense RFP / Vendor Registration
              </button>
            </div>
          </div>
        </div>

        {/* Feature Split: Media Showcase & Capability Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Defense Visual Asset */}
          <div className="lg:col-span-6 relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900 min-h-[340px]">
            <img
              src="/src/assets/images/deftech_robotics_defense_1792143969759.jpg"
              alt="Autonomous Defense Tactical Systems and Drone Platform Testing in Armorica Facility"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-xs font-mono text-amber-400">PUNE DEFTECH CORRIDOR CAPABILITY</div>
              <div className="text-sm font-semibold text-white mt-1">Autonomous Tactical Systems, Robotics & Weapon Materials</div>
              <div className="text-xs text-slate-400 mt-0.5">Compliant with MIL-STD-810H, STANAG 4569 & JSS 55555 standards</div>
            </div>
          </div>

          {/* Interactive Defense Capability Navigator */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              {defenseCapabilities.map((cap, idx) => {
                const isSelected = activeCapability === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCapability(idx)}
                    className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-amber-400/80 shadow-xs'
                        : 'bg-slate-950 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs text-amber-400 font-mono">0{idx + 1}.</div>
                        <div className="text-sm font-bold text-white">{cap.pillar}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{cap.focusArea}</div>
                      </div>
                      <span className="text-xs font-mono text-slate-400 shrink-0">
                        {cap.compliance}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                        <ul className="space-y-1.5">
                          {cap.capabilityDetails.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Looking for custom weapon mounts or classified fabrication?</span>
              <button
                onClick={onOpenRFPForDefense}
                className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4 cursor-pointer"
              >
                Submit Defense NDA / RFI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
