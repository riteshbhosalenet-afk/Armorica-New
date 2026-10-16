import React, { useState } from 'react';

interface ServicesConsultancyProps {
  onOpenConsultancyRFP: (serviceName: string) => void;
}

export const ServicesConsultancy: React.FC<ServicesConsultancyProps> = ({ onOpenConsultancyRFP }) => {
  const [activeCategory, setActiveCategory] = useState<'automation' | 'digital' | 'emerging' | 'advisory'>('automation');

  const categories = [
    {
      id: 'automation' as const,
      name: 'Electrical, Electronics & Automation',
      tagline: 'Instrumentation, Power Supplies & Robotics Automation'
    },
    {
      id: 'digital' as const,
      name: 'Digital & IT Solutions',
      tagline: 'SCADA, Server Systems, IoT & Data Centre Management'
    },
    {
      id: 'emerging' as const,
      name: 'Emerging Technologies',
      tagline: 'Cyber Forensics, Drone Tech, Blockchain & Fire Control'
    },
    {
      id: 'advisory' as const,
      name: 'Professional & Institutional Services',
      tagline: 'Technical Consultancy, Telecom, Transport & Educational Institutes'
    }
  ];

  return (
    <section id="consultancy" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
              Technology, Services & Technical Consultancy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans [text-wrap:balance]">
              Comprehensive Technology & Advisory Backbone
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Armorica Technologies LLP extends beyond physical fabrication, delivering advanced cyber-physical integration, SCADA telemetry, cyber forensic data mining, and institutional capacity building.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
              <span className="text-white font-semibold block mb-1">Consultancy Footprint</span>
              Serving Industrial Enterprises, Government Bodies, Banking, Telecom, and Technical Educational Institutes.
            </div>
          </div>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-lg mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Detailed Content Panel */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            {activeCategory === 'automation' && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Pillar 01</div>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Electrical, Electronics, Instrumentation & Automation
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Delivering end-to-end electrical engineering, power stability systems, precision instrumentation, and robotics automation for plant operations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Power & Stability Systems</div>
                    <p className="text-slate-400">Industrial Power Supplies (PS), Heavy Duty Servo Stabilizers, Inverters, and Switchgear.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Testing & Measuring Technology</div>
                    <p className="text-slate-400">High-precision metrology, digital sensors, motors & transformers, and circuit analyzers.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Industrial Electronics & Fabrication</div>
                    <p className="text-slate-400">Control panels, PCB housing, lighting equipment, and custom metal electrical enclosures.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Robotics & Solar Automation</div>
                    <p className="text-slate-400">Robotic cell programming, solar equipment integration, and automated production synchronization.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultancyRFP('Electrical & Robotics Automation')}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                  >
                    Consult on Automation Architecture
                  </button>
                </div>
              </div>
            )}

            {activeCategory === 'digital' && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Pillar 02</div>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Digital & IT Solutions
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Bridging shop floor equipment with enterprise data systems through robust SCADA, server infrastructure, IoT gateways, and IT & ITES services.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">SCADA Systems & Software</div>
                    <p className="text-slate-400">Centralized supervisory control, real-time data acquisition, alarm logging, and mimic dashboards.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Industrial IoT (Internet of Things)</div>
                    <p className="text-slate-400">Edge telemetry units, vibration/temperature health monitoring, and wireless machine telemetry.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Server Systems & Data Centers</div>
                    <p className="text-slate-400">Data centre management, rack server architectures, power redundancy, and thermal control.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">E-Commerce & IT/ITES</div>
                    <p className="text-slate-400">Industrial supply chain portals, enterprise software development, and technical back-office ITES.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultancyRFP('SCADA & Industrial IoT')}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                  >
                    Request SCADA / IoT Architecture Study
                  </button>
                </div>
              </div>
            )}

            {activeCategory === 'emerging' && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Pillar 03</div>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Emerging Technologies & Cyber Intelligence
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Harnessing state-of-the-art computational algorithms, aerial drone systems, cryptographic blockchain, and safety automation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Cyber Forensic Data Mining</div>
                    <p className="text-slate-400">Advanced algorithmic forensics, anomalous network pattern detection, and forensic evidence indexing.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Drone Technology</div>
                    <p className="text-slate-400">Autonomous flight controllers, multi-sensor payload integration, mapping, and defense surveillance.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Blockchain Technology</div>
                    <p className="text-slate-400">Immutable component pedigree tracking, defense supply chain verification, and anti-counterfeiting.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Fire Control & Barcode Systems</div>
                    <p className="text-slate-400">Automated fire suppression trigger electronics, high-speed 2D/laser barcode tracking systems.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultancyRFP('Cyber Forensics & Emerging Tech')}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                  >
                    Initiate Emerging Tech Advisory
                  </button>
                </div>
              </div>
            )}

            {activeCategory === 'advisory' && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Pillar 04</div>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Professional Services & Industrial Educational Institutes
                  </h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Providing strategic technical consultancy across heavily regulated sectors and empowering technical universities with industrial training.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Banking, Finance & Insurance</div>
                    <p className="text-slate-400">Technical asset appraisals, security audits, IT resiliency verification, and risk consultancy.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Telecommunications & Transport</div>
                    <p className="text-slate-400">Cellular tower hardware infrastructure, transport management systems, and fleet logistics IoT.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Industrial Educational Institutes</div>
                    <p className="text-slate-400">Curriculum co-design, CNC & robotics lab setup, skill development workshops, and apprentice programs.</p>
                  </div>
                  <div className="p-3.5 rounded bg-slate-950 border border-slate-800/90 space-y-1">
                    <div className="font-semibold text-white">Travel & Tourism Engineering</div>
                    <p className="text-slate-400">Ropeway equipment fabrication, amusement mechanical verification, and hospitality automation.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultancyRFP('Professional & Institutional Advisory')}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                  >
                    Engage Technical Advisory Team
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Visual Panel */}
          <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950 min-h-[360px] flex flex-col justify-end p-6">
            <img
              src="/src/assets/images/automation_scada_iot_1792143970655.jpg"
              alt="High-Tech Electronics and SCADA Automation Testing Laboratory"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-2">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                Integrated Systems Engineering
              </div>
              <h4 className="text-base font-bold text-white">
                Hardware, Firmware & Cloud Interoperability
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Combining physical precision metal fabrication with modern digital telemetry, SCADA redundancy, and cyber threat isolation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
