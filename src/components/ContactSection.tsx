import React, { useState } from 'react';
import { armoricaCompanyProfile } from '../data/armoricaData';

interface ContactSectionProps {
  onOpenRFP: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenRFP }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Machinery & Engineering Inquiries',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhones, setCopiedPhones] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setErrorMsg('');
    try {
      const existing = JSON.parse(localStorage.getItem('armorica_contact_inquiries') || '[]');
      existing.unshift({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('armorica_contact_inquiries', JSON.stringify(existing.slice(0, 50)));
    } catch {
      // Local storage fallback
    }

    setSubmitted(true);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(armoricaCompanyProfile.facilityAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const copyPhones = () => {
    navigator.clipboard.writeText("9405392776, 9422039888");
    setCopiedPhones(true);
    setTimeout(() => setCopiedPhones(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
            Direct Engineering & Facility Coordinates
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans [text-wrap:balance]">
            Contact Armorica Technologies LLP
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Reach out directly to our manufacturing headquarters and engineering office in Satara. For defense vendor procurement, special purpose machinery, or process plant inquiries, contact our team below.
          </p>
        </div>

        {/* Content Split: Coordinates & Direct Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Facility Address, Contact Numbers, Operating Hours */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Physical Facility Card */}
            <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                  Manufacturing Facility & Registered Works
                </div>
                <button
                  onClick={copyAddress}
                  className="text-[11px] text-slate-400 hover:text-amber-400 font-medium cursor-pointer transition-colors"
                >
                  {copiedAddress ? '✓ Copied Address' : 'Copy Address'}
                </button>
              </div>

              <div className="space-y-1.5">
                <div className="text-lg font-bold text-white">
                  {armoricaCompanyProfile.legalName}
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-sans">
                  {armoricaCompanyProfile.facilityAddress}
                </p>
                <div className="text-xs text-slate-400 pt-1 font-mono">
                  Satara District · Maharashtra · Pincode: {armoricaCompanyProfile.pincode}
                </div>
              </div>

              {/* Quick Actions for Address */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    armoricaCompanyProfile.facilityAddress
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                >
                  Open in Google Maps &rarr;
                </a>
                <span className="text-xs text-slate-500">
                  Near Pune-Bengaluru NH48 Industrial Belt
                </span>
              </div>
            </div>

            {/* Direct Contact Numbers Card */}
            <div className="p-6 rounded-lg bg-slate-900 border border-slate-800 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                  Direct Telephone & Mobile Inquiries
                </div>
                <button
                  onClick={copyPhones}
                  className="text-[11px] text-slate-400 hover:text-amber-400 font-medium cursor-pointer transition-colors"
                >
                  {copiedPhones ? '✓ Copied Numbers' : 'Copy Numbers'}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Contact Number 1 */}
                <div className="p-4 rounded-md bg-slate-950 border border-slate-800/90 space-y-2">
                  <div className="text-xs text-slate-400 font-medium">Primary Line</div>
                  <div className="text-lg font-bold text-white font-mono tracking-tight">
                    +91 94053 92776
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href="tel:9405392776"
                      className="px-3 py-1 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-sm transition-colors"
                    >
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/919405392776"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 rounded-sm transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Contact Number 2 */}
                <div className="p-4 rounded-md bg-slate-950 border border-slate-800/90 space-y-2">
                  <div className="text-xs text-slate-400 font-medium">Secondary Direct Line</div>
                  <div className="text-lg font-bold text-white font-mono tracking-tight">
                    +91 94220 39888
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href="tel:9422039888"
                      className="px-3 py-1 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-sm transition-colors"
                    >
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/919422039888"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 rounded-sm transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 rounded-md bg-slate-950 border border-slate-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Official Corporate & Engineering Email</div>
                  <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                    riteshbhosale.net@gmail.com
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:riteshbhosale.net@gmail.com"
                    className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-sm transition-colors whitespace-nowrap"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours & Dispatch Notice */}
            <div className="p-5 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div>
                <span className="text-white font-semibold block">Facility Working Hours</span>
                <span className="text-slate-400">Monday to Saturday: 08:30 AM – 06:30 PM IST</span>
              </div>
              <button
                onClick={onOpenRFP}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                Submit Formal RFQ
              </button>
            </div>
          </div>

          {/* Right Column: Direct Message / Callback Request Form */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-lg p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-2xl mx-auto">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Message Transmitted</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Armorica Technologies LLP. Our engineering and administrative desk at Satara will contact you shortly via email or phone.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'Machinery & Engineering Inquiries',
                      message: ''
                    });
                  }}
                  className="mt-4 px-5 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-1">
                    Direct Inquiry Form
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Send a Message to Engineering Desk
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Receive quick responses for manufacturing quotes, vendor inquiries, or site visits.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-md bg-rose-950/60 border border-rose-800 text-xs text-rose-200">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name or company name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 Mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2.5 text-xs text-white focus:outline-hidden focus:border-amber-400"
                  >
                    <option value="Machinery & Engineering Inquiries">Machinery & Engineering Inquiries</option>
                    <option value="Defense Technology & Supply Chain (Pune DefTech)">Defense Technology & Supply Chain (Pune DefTech)</option>
                    <option value="Auto Components & Special Purpose Machines (SPM)">Auto Components & Special Purpose Machines (SPM)</option>
                    <option value="Process Equipment & Pressure Vessels">Process Equipment & Pressure Vessels</option>
                    <option value="SCADA & Industrial IoT">SCADA & Industrial IoT</option>
                    <option value="General Corporate / Site Visit">General Corporate / Site Visit Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Message / Technical Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your requirements, dimensions, target timelines, or request a call back..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer shadow-sm"
                >
                  Send Inquiry to Satara Desk
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
