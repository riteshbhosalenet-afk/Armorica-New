import React from 'react';
import { armoricaCompanyProfile } from '../data/armoricaData';

interface FooterProps {
  onOpenRFP: () => void;
  onOpenDossier: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRFP, onOpenDossier }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Notice */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-amber-500 rounded-xs" />
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Armorica <span className="text-slate-400 font-medium">Technologies LLP</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Advanced engineering, fabricated metal products (Main division 25), and technological solutions with emphasis on sustainable manufacturing and Defense Supply Chain contributions.
            </p>

            <div className="text-[11px] text-slate-500 font-mono space-y-0.5">
              <div>Incorporated June 7, 2024 · RoC-Pune Registered</div>
              <div>Headquarters: Satara, Maharashtra, India</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Operations
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#sectors" className="hover:text-amber-400 transition-colors">
                  Core Sectors
                </a>
              </li>
              <li>
                <a href="#deftech" className="hover:text-amber-400 transition-colors">
                  Pune DefTech Supply
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Machinery Catalog
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-amber-400 transition-colors">
                  Sustainable Practices
                </a>
              </li>
              <li>
                <a href="#consultancy" className="hover:text-amber-400 transition-colors">
                  SCADA & Consultancy
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Directives */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Statutory
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenDossier}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  LLP Corporate Dossier
                </button>
              </li>
              <li>
                <span className="text-slate-500">Division 25 Fabrication</span>
              </li>
              <li>
                <span className="text-slate-500">MIL-STD & ASME Codes</span>
              </li>
              <li>
                <span className="text-slate-500">RoC-Pune Jurisdiction</span>
              </li>
            </ul>
          </div>

          {/* Technical Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Manufacturing & Office
            </div>
            <div className="text-xs text-slate-400 space-y-1.5">
              <div className="text-white font-medium">Armorica Technologies LLP</div>
              <div className="leading-relaxed">
                Shed No. W-67-A, Additional MIDC, Satara Industrial Area, Satara Kadoli Village, Satara - 415 001
              </div>
              <div className="pt-1.5 space-y-0.5 text-slate-300 font-mono">
                <div>
                  Tel: <a href="tel:9405392776" className="text-amber-400 hover:underline">+91 94053 92776</a>
                </div>
                <div>
                  Tel: <a href="tel:9422039888" className="text-amber-400 hover:underline">+91 94220 39888</a>
                </div>
              </div>
              <div className="pt-1.5 text-slate-300">
                Email: <a href="mailto:riteshbhosale.net@gmail.com" className="text-amber-400 hover:underline">riteshbhosale.net@gmail.com</a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRFP}
                className="w-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer text-center"
              >
                Submit Technical RFQ
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {armoricaCompanyProfile.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Satara, Maharashtra, India</span>
            <span aria-hidden="true">·</span>
            <span>Registrar of Companies (RoC)-Pune</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
