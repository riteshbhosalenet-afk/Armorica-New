import React from 'react';
import { armoricaCompanyProfile } from '../data/armoricaData';

interface HeroProps {
  onOpenRFP: () => void;
  onOpenDossier: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRFP, onOpenDossier }) => {
  return (
    <section className="relative border-b border-slate-800 bg-slate-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[700px] h-[350px] bg-sky-950/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[500px] h-[300px] bg-amber-950/15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        {/* Split grid: Content & Marquee Media Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          {/* Column 1: Value Proposition & Typography */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Quiet unboxed kicker without pill box */}
              <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-amber-400">
                <span>{armoricaCompanyProfile.legalName}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400">{armoricaCompanyProfile.headquarters}, Maharashtra</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400">RoC-Pune</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans [text-wrap:balance]">
                Advanced Engineering, Defense Systems & Sustainable Industrial Manufacturing
              </h1>

              {/* Mission Statement derived directly from PDF */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Providing advanced engineering, manufacturing, and technological solutions across high-growth industrial domains, with a strategic emphasis on sustainable manufacturing and contributions to the Defense Supply Chain.
              </p>

              {/* Industrial Focus Tags (Unboxed Text with Separators) */}
              <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-slate-400 pt-1">
                <span>Automobile & SPM</span>
                <span aria-hidden="true">/</span>
                <span>Robotics & Autonomous Systems</span>
                <span aria-hidden="true">/</span>
                <span>Process Industry Equipment</span>
                <span aria-hidden="true">/</span>
                <span>SCADA & IoT</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenRFP}
                className="px-6 py-3 text-sm font-semibold tracking-wide text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shadow-md cursor-pointer whitespace-nowrap"
              >
                Request Technical RFP
              </button>
              <a
                href="#catalog"
                className="px-6 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-md transition-colors whitespace-nowrap"
              >
                Browse Machinery Catalog
              </a>
              <button
                onClick={onOpenDossier}
                className="text-xs text-slate-400 hover:text-amber-400 underline underline-offset-4 transition-colors cursor-pointer"
              >
                View RoC Dossier & LLP Specs
              </button>
            </div>
          </div>

          {/* Column 2: Marquee Media Asset */}
          <div className="lg:col-span-5 relative group min-h-[320px] lg:min-h-full rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
            <img
              src="/src/assets/images/hero_armorica_precision_1792143969792.jpg"
              alt="Armorica Technologies Precision Manufacturing Facility with Automated Robotic Lines and CNC Equipment"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
            {/* Scrim overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

            {/* Caption anchor */}
            <div className="absolute bottom-4 left-4 right-4 text-xs">
              <div className="text-white font-semibold">Precision Metal Fabrication & Special Purpose Machinery</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Automated AI-assisted inspection and multi-axis CNC cells</div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Corporate Rigor Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">Incorporation Date</div>
            <div className="text-lg font-semibold text-white font-mono tabular-nums">June 7, 2024</div>
            <div className="text-xs text-slate-400">Satara, Maharashtra, India</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">Statutory Registrar</div>
            <div className="text-lg font-semibold text-white">RoC-Pune</div>
            <div className="text-xs text-slate-400">Main Division 25 (Metal Products)</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">Strategic Alignment</div>
            <div className="text-lg font-semibold text-amber-400">Pune DefTech</div>
            <div className="text-xs text-slate-400">Defense PSUs & Private Defense Supply</div>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">Technology Backbone</div>
            <div className="text-lg font-semibold text-white">AI & Robotics</div>
            <div className="text-xs text-slate-400">SPM, SCADA, IoT & Cyber Forensics</div>
          </div>
        </div>
      </div>
    </section>
  );
};
