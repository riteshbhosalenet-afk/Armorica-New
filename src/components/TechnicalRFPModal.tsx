import React, { useState, useEffect } from 'react';
import { CatalogItem } from '../data/armoricaData';

interface TechnicalRFPModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedItem?: CatalogItem | null;
  preselectedSector?: string;
}

export const TechnicalRFPModal: React.FC<TechnicalRFPModalProps> = ({
  isOpen,
  onClose,
  preselectedItem,
  preselectedSector
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    sector: preselectedSector || 'Advanced Manufacturing & Engineering',
    machineryName: preselectedItem ? preselectedItem.name : '',
    quantity: '1 Unit / Pilot Batch',
    specifications: preselectedItem ? preselectedItem.specifications.join('; ') : '',
    timeline: 'Within 30–60 Days',
    requiresNDA: false,
    notes: ''
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (preselectedItem) {
      setFormData((prev) => ({
        ...prev,
        machineryName: preselectedItem.name,
        sector:
          preselectedItem.category === 'Defense & DefTech'
            ? 'Defense Technology & Supply Chain (Pune DefTech)'
            : preselectedItem.category === 'Pharma & Packaging'
            ? 'Specialized Industrial Segments'
            : preselectedItem.category === 'Electrical & Automation' || preselectedItem.category === 'Digital & Emerging Tech'
            ? 'Technology, Services & Consultancy'
            : 'Industrial Machinery & Components',
        specifications: preselectedItem.specifications.join('; ')
      }));
    } else if (preselectedSector) {
      setFormData((prev) => ({
        ...prev,
        sector: preselectedSector
      }));
    }
  }, [preselectedItem, preselectedSector]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName.trim() || !formData.email.trim() || !formData.contactName.trim()) {
      setErrorMsg('Please enter your company name, contact person name, and valid email.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please provide a valid corporate email address.');
      return;
    }

    setErrorMsg('');
    const refCode = `ARM-RFP-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const newRecord = {
      referenceId: refCode,
      ...formData,
      status: 'UNDER_TECHNICAL_REVIEW',
      submittedAt: new Date().toISOString()
    };
    try {
      const existing = JSON.parse(localStorage.getItem('armorica_rfp_registry') || '[]');
      existing.unshift(newRecord);
      localStorage.setItem('armorica_rfp_registry', JSON.stringify(existing.slice(0, 50)));
    } catch {
      // Local storage fallback
    }
    setSubmittedRef(refCode);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      sector: 'Advanced Manufacturing & Engineering',
      machineryName: '',
      quantity: '1 Unit / Pilot Batch',
      specifications: '',
      timeline: 'Within 30–60 Days',
      requiresNDA: false,
      notes: ''
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-lg max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submittedRef ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">
                ✓
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Technical RFP Transmitted Successfully</h3>
                <div className="text-xs text-slate-400">
                  Armorica Technologies LLP · Satara Engineering Desk
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Tracking Reference</span>
                <span className="text-sm font-mono font-bold text-amber-400">{submittedRef}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 block">Organization:</span>
                  <span className="text-white font-medium">{formData.companyName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Representative:</span>
                  <span className="text-white font-medium">{formData.contactName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Target Sector:</span>
                  <span className="text-white font-medium">{formData.sector}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">System / Component:</span>
                  <span className="text-white font-medium">{formData.machineryName || 'Custom Specification'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Required Timeline:</span>
                  <span className="text-white font-medium">{formData.timeline}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Confidentiality:</span>
                  <span className="text-white font-medium">
                    {formData.requiresNDA ? 'Defense NDA Required' : 'Standard Commercial Inquiry'}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Our engineering & metallurgy specialists in Satara and Pune DefTech liaison team will review your specifications and contact your representative within 24 business hours.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
              >
                Print / Save PDF Copy
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-md transition-colors cursor-pointer"
              >
                Submit Another Specification
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                Official Technical Inquiry & RFQ Form
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Request Engineering Specifications & Quotation
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Direct submission to Armorica Technologies LLP Engineering & Procurement Division (Satara, Maharashtra).
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-md bg-rose-950/60 border border-rose-800 text-xs text-rose-200">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Company / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bharat Forge, DRDO Lab, Tata Motors"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Contact Person & Designation *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Patil (Chief Engineer)"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Corporate Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Contact Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Primary Sector
                </label>
                <select
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white focus:outline-hidden focus:border-amber-400"
                >
                  <option value="Advanced Manufacturing & Engineering">Advanced Manufacturing & Engineering</option>
                  <option value="Defense Technology & Supply Chain (Pune DefTech)">Defense Technology & Supply Chain (Pune DefTech)</option>
                  <option value="Industrial Machinery & Components">Industrial Machinery & Components</option>
                  <option value="Specialized Industrial Segments">Specialized Industrial Segments (Pharma/Food)</option>
                  <option value="Technology, Services & Consultancy">Technology, Services & Consultancy</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Target Component / Machinery Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. CNC Honing, Pressure Vessel, Tactical Drone"
                  value={formData.machineryName}
                  onChange={(e) => setFormData({ ...formData, machineryName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Estimated Quantity / Scope
                </label>
                <input
                  type="text"
                  placeholder="e.g. 5 Units / 500 Parts/Month / Turnkey Plant"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Target Delivery / Deployment Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white focus:outline-hidden focus:border-amber-400"
                >
                  <option value="Urgent (Immediate Prototyping)">Urgent (Immediate Prototyping)</option>
                  <option value="Within 30–60 Days">Within 30–60 Days</option>
                  <option value="Within 90–180 Days">Within 90–180 Days</option>
                  <option value="Annual Supply Contract / Vendor Registration">Annual Supply Contract / Vendor Registration</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Technical Specifications & Dimensional / Material Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Mention material grades (e.g. SS316L, Titanium, EN8), pressure ratings, ASME/IBR codes, tolerance requirements, or application specifics..."
                value={formData.specifications}
                onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400"
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="requiresNDA"
                checked={formData.requiresNDA}
                onChange={(e) => setFormData({ ...formData, requiresNDA: e.target.checked })}
                className="w-4 h-4 rounded-sm border-slate-800 bg-slate-950 text-amber-400 focus:ring-amber-400"
              />
              <label htmlFor="requiresNDA" className="text-xs text-slate-300 cursor-pointer">
                Require Mutual Non-Disclosure Agreement (NDA) prior to CAD / drawing exchange (Standard for Defense & Custom SPM)
              </label>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer shadow-sm"
              >
                Generate & Transmit RFP
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
