import React, { useState } from 'react';
import { armoricaCompanyProfile, sectorPillars } from '../data/armoricaData';

interface CompanyDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyDossierModal: React.FC<CompanyDossierModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const text = `
ARMORICA TECHNOLOGIES LLP PROFILE
Entity: ${armoricaCompanyProfile.legalName}
Entity Type: ${armoricaCompanyProfile.entityType}
Location: ${armoricaCompanyProfile.headquarters}, ${armoricaCompanyProfile.state}, ${armoricaCompanyProfile.country}
Facility Address: ${armoricaCompanyProfile.facilityAddress}
Contact Phones: ${armoricaCompanyProfile.contactPhones.join(' / ')}
Email: ${armoricaCompanyProfile.email}
Incorporation Date: ${armoricaCompanyProfile.incorporationDate}
RoC Office: ${armoricaCompanyProfile.rocOffice}
Primary Classification: ${armoricaCompanyProfile.primaryClassification} (${armoricaCompanyProfile.mainDivision})

Strategic Focus:
- Advanced Engineering & Special Purpose Machines (SPM)
- Defense Technology & Supply Chain (Pune DefTech)
- Industrial Machinery & Process Equipment
- Sustainable Manufacturing (Resource Efficiency & Waste Reduction)
- Electrical, SCADA, IoT, Cyber Forensics & Technical Consultancy
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-lg max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1"
          aria-label="Close dossier"
        >
          ✕
        </button>

        <div className="border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono uppercase tracking-wider mb-1">
            <span>Official Corporate Profile</span>
            <span aria-hidden="true">·</span>
            <span>RoC-Pune Registered</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {armoricaCompanyProfile.legalName}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Statutory profile & industrial classification overview as registered with the Ministry of Corporate Affairs, India.
          </p>
        </div>

        {/* Corporate Identity Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div>
            <span className="text-slate-500 block">Legal Entity Form:</span>
            <span className="text-white font-medium">{armoricaCompanyProfile.entityType}</span>
          </div>
          <div>
            <span className="text-slate-500 block">Incorporation Date:</span>
            <span className="text-white font-mono font-medium">{armoricaCompanyProfile.incorporationDate}</span>
          </div>
          <div>
            <span className="text-slate-500 block">Registered Office Jurisdiction:</span>
            <span className="text-white font-medium">{armoricaCompanyProfile.headquarters}, Maharashtra, India</span>
          </div>
          <div>
            <span className="text-slate-500 block">Registrar of Companies:</span>
            <span className="text-white font-medium">{armoricaCompanyProfile.rocOffice}</span>
          </div>
          <div className="sm:col-span-2 border-t border-slate-900 pt-3">
            <span className="text-slate-500 block">Works & Manufacturing Facility Address:</span>
            <span className="text-white font-medium">
              {armoricaCompanyProfile.facilityAddress}
            </span>
          </div>
          <div className="sm:col-span-2 border-t border-slate-900 pt-2">
            <span className="text-slate-500 block">Direct Contact Numbers:</span>
            <span className="text-amber-400 font-mono font-medium">
              {armoricaCompanyProfile.contactPhones.join(' / ')}
            </span>
          </div>
          <div className="sm:col-span-2 border-t border-slate-900 pt-2">
            <span className="text-slate-500 block">Official Engineering Email:</span>
            <span className="text-amber-400 font-mono font-medium">
              {armoricaCompanyProfile.email}
            </span>
          </div>
          <div className="sm:col-span-2 border-t border-slate-900 pt-3">
            <span className="text-slate-500 block">Primary Industrial Activity Classification:</span>
            <span className="text-amber-400 font-medium">
              {armoricaCompanyProfile.primaryClassification} ({armoricaCompanyProfile.mainDivision})
            </span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Executive Scope & Mission
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-md border border-slate-800/80">
            Armorica Technologies LLP is strategically categorized under the Manufacture of fabricated metal products, except machinery and equipment business activity (Main division 25). The company provides advanced engineering, manufacturing, and technological solutions across high-growth industrial domains, with a strategic emphasis on sustainable manufacturing practices and contributions to the Defense Supply Chain (Pune DefTech).
          </p>
        </div>

        {/* Five Pillars Summary */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Chartered Core Areas & Capabilities
          </h4>
          <div className="space-y-3 text-xs">
            {sectorPillars.map((s, idx) => (
              <div key={idx} className="p-3 rounded-md bg-slate-950 border border-slate-800/90 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">0{idx + 1}. {s.title}</span>
                </div>
                <div className="text-slate-400 text-[11px]">{s.subtitle}</div>
                <div className="text-slate-300 text-[11px] pt-1">
                  <span className="text-amber-400 font-medium">Emphasis: </span>
                  {s.keyEmphasis}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
          >
            {copied ? '✓ Copied to Clipboard' : 'Copy Dossier Text'}
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
            >
              Print Official Record
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
