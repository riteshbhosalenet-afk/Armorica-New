import React from 'react';
import { sustainablePractices } from '../data/armoricaData';

export const SustainableManufacturing: React.FC = () => {
  return (
    <section id="sustainability" className="py-20 bg-slate-900/40 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-2">
            Strategic Environmental Mandate
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans [text-wrap:balance]">
            Sustainable Manufacturing & Resource Optimization
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            In full alignment with global decarbonization frameworks and Indian ESG manufacturing mandates, Armorica Technologies LLP integrates resource efficiency, waste reduction, and recyclable lightweight metallurgy into every fabrication cycle.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sustainablePractices.map((practice, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400">0{index + 1}.</span>
                  <span className="text-xs font-mono text-slate-400 tabular-nums">
                    {practice.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {practice.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {practice.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 text-[11px] text-slate-500 font-mono">
                Division 25 Green Protocol
              </div>
            </div>
          ))}
        </div>

        {/* Closed Loop Callout Strip */}
        <div className="mt-10 p-6 rounded-lg bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-white">
              Green Supply Chain Partner for Automotive & Defense OEMs
            </div>
            <div className="text-xs text-slate-400">
              Auditable material traceability, scrap recovery certifications, and RoHS/REACH compliance documentation.
            </div>
          </div>
          <a
            href="#catalog"
            className="px-4 py-2 text-xs font-medium text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 rounded-md transition-colors whitespace-nowrap"
          >
            Explore Eco-Engineered Lines
          </a>
        </div>
      </div>
    </section>
  );
};
