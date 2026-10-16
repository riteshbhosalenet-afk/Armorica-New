export interface CompanyProfile {
  legalName: string;
  tradingName: string;
  entityType: string;
  incorporationDate: string;
  rocOffice: string;
  registrationNumberNotice: string;
  headquarters: string;
  facilityAddress: string;
  district: string;
  state: string;
  pincode: string;
  country: string;
  contactPhones: string[];
  rawPhones: string[];
  email: string;
  primaryClassification: string;
  mainDivision: string;
  strategicFocus: string[];
}

export const armoricaCompanyProfile: CompanyProfile = {
  legalName: "Armorica Technologies LLP",
  tradingName: "Armorica Technologies",
  entityType: "Limited Liability Partnership (LLP)",
  incorporationDate: "June 7, 2024",
  rocOffice: "Registrar of Companies (RoC)-Pune",
  registrationNumberNotice: "Registered with RoC-Pune (LLPIN Active)",
  headquarters: "Satara",
  facilityAddress: "Shed No. W-67-A, Additional MIDC, Satara Industrial Area, Satara Kadoli Village, Satara - 415 001",
  district: "Satara District",
  state: "Maharashtra",
  pincode: "415 001",
  country: "India",
  contactPhones: ["+91 94053 92776", "+91 94220 39888"],
  rawPhones: ["9405392776", "9422039888"],
  email: "riteshbhosale.net@gmail.com",
  primaryClassification: "Manufacture of fabricated metal products, except machinery and equipment",
  mainDivision: "Main Division 25",
  strategicFocus: [
    "Advanced Engineering & Special Purpose Machines (SPM)",
    "Defense Supply Chain & Tactical Systems (Pune DefTech)",
    "Sustainable Manufacturing & Lightweight Materials",
    "Process Industry Equipment & Precision Machine Tools",
    "Electrical, SCADA, IoT & Industrial Automation",
    "Emerging Technologies & Technical Consultancy"
  ]
};

export interface SectorPillar {
  id: string;
  title: string;
  subtitle: string;
  focus: string[];
  technologies: string[];
  keyEmphasis: string;
  deliverables: string[];
  imagePath?: string;
}

export const sectorPillars: SectorPillar[] = [
  {
    id: "advanced-manufacturing",
    title: "Advanced Manufacturing & Engineering",
    subtitle: "Automobile, Auto Components, Special Purpose Machines (SPM), AI & Robotics",
    focus: [
      "Automobile OEM and Tier-1 sub-assemblies",
      "High-precision Auto Components fabrication",
      "Custom Special Purpose Machines (SPM) for high-throughput lines"
    ],
    technologies: [
      "Artificial Intelligence (AI) for vision quality inspection",
      "Robotic welding, handling, and precision machining arms",
      "Automated precision jigs, fixtures, and tooling"
    ],
    keyEmphasis: "Implementing Sustainable Manufacturing practices, including resource efficiency, waste reduction, and the adoption of energy-efficient processes and lightweight/recyclable materials.",
    deliverables: [
      "Turnkey SPM Development",
      "Robotic Cell Integration",
      "Tier-1 Auto Precision Parts",
      "Closed-Loop Quality Control"
    ],
    imagePath: "/src/assets/images/hero_armorica_precision_1792143969792.jpg"
  },
  {
    id: "defense-tech",
    title: "Defense Technology & Supply Chain (Pune DefTech)",
    subtitle: "Supplying Defense PSUs, Private Defense Contractors & Strategic Supply Chain SMEs",
    focus: [
      "Defense PSUs (Public Sector Undertakings)",
      "Private Sector Defense Contractors",
      "SMEs in the Pune DefTech and Western Corridor Defense Supply Chain"
    ],
    technologies: [
      "Robotics & Autonomous Systems (Drones, Tactical Unmanned Ground/Aerial Systems)",
      "Advanced Materials and Design (Armor plating, ballistic protection, weapon subsystems)",
      "Electronics, Tactical Communications, and Hardware Cybersecurity solutions",
      "Rigorous Military-Grade Testing and Validation services"
    ],
    keyEmphasis: "End-to-end defense engineering adhering to strict MIL-STD, DRDO/DGQA guidelines, indigenous component integration, and tactical reliability.",
    deliverables: [
      "Autonomous Surveillance Drones",
      "Lightweight Ballistic Armor Solutions",
      "Encrypted Tactical Comms Modules",
      "Environmental & Vibration Testing"
    ],
    imagePath: "/src/assets/images/deftech_robotics_defense_1792143969759.jpg"
  },
  {
    id: "industrial-machinery",
    title: "Industrial Machinery & Components",
    subtitle: "Process Industry Equipment & Precision Engineering Machine Tools",
    focus: [
      "Process Industry Equipment (Chemical, Energy, Water & Metallurgy)",
      "Engineering Machinery, Machine Tools & Hydraulic Systems",
      "Heavy Forging, Castings, and Pressure Boundary Fabrication"
    ],
    technologies: [
      "High-pressure welding, ASME/IBR code compliance",
      "Multi-axis CNC machining, precision gear cutting and honing",
      "Laser marking, pressure die casting, and metallurgical surface treatment"
    ],
    keyEmphasis: "Fabrication of mission-critical metal products under Division 25, maintaining micron-level tolerance for industrial process continuous operation.",
    deliverables: [
      "Pressure Vessels & Boilers",
      "Industrial Pumps & Control Valves",
      "High-Torque Gearboxes & Hydraulics",
      "Cooling Towers & Water Treatment"
    ],
    imagePath: "/src/assets/images/industrial_machinery_heavy_1792143970163.jpg"
  },
  {
    id: "specialized-segments",
    title: "Specialized Industrial Segments",
    subtitle: "Packaging, Food & Pharma Industries, Polymers & Agri-Biotech",
    focus: [
      "Pharma Machine Manufacturers & GMP Packaging Systems",
      "Food Processing Machinery & Sanitary Stainless Solutions",
      "Polymer & Rubber Power Solutions, Agri-Business & Biotechnology"
    ],
    technologies: [
      "Packaging Control Panels and Automated Formers",
      "Hygienic 316L stainless steel process lines",
      "Continuous polymer extrusion and rubber vulcanization tooling"
    ],
    keyEmphasis: "Clean-room compatible fabrication, high-speed automated packaging synchronization, and regulatory compliance for food and life sciences.",
    deliverables: [
      "Blister & Bottle Packaging Lines",
      "Sanitary Liquid Mixers & Tanks",
      "Packaging Formers & Sealers",
      "Bio-Processing Reactor Vessels"
    ]
  },
  {
    id: "tech-services-consultancy",
    title: "Technology, Services & Consultancy",
    subtitle: "Electrical Instrumentation, SCADA/IoT, Cyber Mining & Professional Advisory",
    focus: [
      "Electrical, Electronics, Instrumentation & Robotics Automation",
      "Digital & IT Solutions (SCADA, Server Systems, IoT, Data Centers)",
      "Emerging Technologies (Cyber Forensic Data Mining, Blockchain, Drone Tech)",
      "Technical Consultancy for Banking, Telecom, Transport & Institutes"
    ],
    technologies: [
      "Industrial Automation, Power Supplies (PS), Inverters, Stabilizers",
      "SCADA architecture, Industrial IoT telemetry gateways, IT & ITES",
      "Cyber forensic analytical algorithms, fire control systems, barcode automation"
    ],
    keyEmphasis: "Bridging mechanical fabrication with intelligent cyber-physical systems, data analytics, and institutional technical advisory.",
    deliverables: [
      "SCADA Supervisory Control Systems",
      "Industrial IoT Edge Hubs",
      "Cyber Forensic Mining Platforms",
      "Institutional Capacity Building"
    ],
    imagePath: "/src/assets/images/automation_scada_iot_1792143970655.jpg"
  }
];

export interface CatalogItem {
  id: string;
  name: string;
  category: "Process Equipment" | "Machine Tools & Engineering" | "Defense & DefTech" | "Pharma & Packaging" | "Electrical & Automation" | "Digital & Emerging Tech";
  subcategory: string;
  description: string;
  specifications: string[];
  keyApplications: string[];
  standards: string;
}

export const catalogItems: CatalogItem[] = [
  // Process Equipment
  {
    id: "cat-pumps-valves",
    name: "Industrial Pumps & Valves",
    category: "Process Equipment",
    subcategory: "Fluid Handling",
    description: "Heavy-duty centrifugal, positive displacement pumps and engineered gate, globe, ball, check, and control valves for aggressive fluids.",
    specifications: ["Flow rates up to 3,500 m³/hr", "Pressure classes ANSI 150 to 2500#", "Duplex stainless, Monel & Hastelloy alloys"],
    keyApplications: ["Chemical processing plants", "Oil & gas flowlines", "Power generation cooling"],
    standards: "API 610 / ASME B16.34"
  },
  {
    id: "cat-boilers",
    name: "Industrial Boilers & Steam Systems",
    category: "Process Equipment",
    subcategory: "Thermal Energy",
    description: "High-efficiency water tube and smoke tube steam boilers with automated fuel feed and combustion management systems.",
    specifications: ["Steam generation: 1 to 50 TPH", "Operating pressure: up to 64 bar", "Thermal efficiency > 88%"],
    keyApplications: ["Sugar mills & distilleries", "Chemical synthesizers", "Textile & paper plants"],
    standards: "IBR (Indian Boiler Regulations) / ASME Section I"
  },
  {
    id: "cat-chem-machinery",
    name: "Chemical Plant Machinery & Reactors",
    category: "Process Equipment",
    subcategory: "Chemical Processing",
    description: "Custom engineered chemical reaction vessels, agitated thin film evaporators (ATFE), condenser units, and distillation columns.",
    specifications: ["Capacity: 500L to 40,000L", "Jacketed / Limpet coil heating", "Mechanical seal with magnetic drive"],
    keyApplications: ["Specialty chemicals", "Bulk drug synthesis", "Agrochemical formulation"],
    standards: "ASME Sec VIII Div 1"
  },
  {
    id: "cat-pressure-vessels",
    name: "Engineered Pressure Vessels",
    category: "Process Equipment",
    subcategory: "Pressure Containment",
    description: "Heavy-gauge fabricated pressure storage vessels and receivers designed for hazardous gas and liquid containment.",
    specifications: ["Shell thickness up to 60mm", "Operating temperature: -40°C to 450°C", "100% Radiographic / Ultrasonic testing"],
    keyApplications: ["Cryogenic and LPG storage", "Compressed air receivers", "Hydrogen holding"],
    standards: "ASME Section VIII Div 1 & 2 / IS 2825"
  },
  {
    id: "cat-water-treatment",
    name: "Water Treatment & Pollution Control Systems",
    category: "Process Equipment",
    subcategory: "Environmental Solutions",
    description: "Industrial Effluent Treatment Plants (ETP), Sewage Treatment Plants (STP), Reverse Osmosis, and Zero Liquid Discharge (ZLD) plants.",
    specifications: ["Capacities from 10 KLD to 5 MLD", "Integrated aeration and membrane bioreactors", "Automated pH and turbidity monitoring"],
    keyApplications: ["Industrial parks & MIDC zones", "Textile dye houses", "Metal finishing facilities"],
    standards: "CPCB / MPCB Industrial Standards"
  },
  {
    id: "cat-cooling-towers",
    name: "Industrial Cooling Towers",
    category: "Process Equipment",
    subcategory: "Thermal Dissipation",
    description: "Crossflow and counterflow induced draft cooling towers constructed with FRP casing and corrosion-resistant PVC fills.",
    specifications: ["Cooling duty from 50 TR to 4,000 TR", "High water recovery rate", "Low acoustic footprint"],
    keyApplications: ["Heavy engineering forging", "Plastic injection molding", "HVAC chillers"],
    standards: "CTI STD-201"
  },
  {
    id: "cat-weighing-equip",
    name: "Industrial Weighing Systems & Load Cells",
    category: "Process Equipment",
    subcategory: "Instrumentation",
    description: "Heavy weighbridges, hopper weighing systems, dynamic conveyor belt weighers, and precision electronic load cells.",
    specifications: ["Capacities from 50 kg to 150 metric tons", "Hermetically sealed IP68 load cells", "RS-485 / Modbus digital readouts"],
    keyApplications: ["Bulk raw material yards", "Logistics terminals", "Continuous batching plants"],
    standards: "OIML R60 / Legal Metrology"
  },

  // Machine Tools & Engineering Machinery
  {
    id: "cat-cnc-machines",
    name: "Multi-Axis CNC Machining Centers",
    category: "Machine Tools & Engineering",
    subcategory: "Machining",
    description: "3-axis to 5-axis vertical and horizontal machining centers equipped with high-speed spindles and robotic pallet changers.",
    specifications: ["Spindle speeds up to 18,000 RPM", "Positioning accuracy ±0.003 mm", "Automatic tool changer (30–60 tools)"],
    keyApplications: ["Automobile engine blocks", "Aerospace structural brackets", "Mold & die manufacture"],
    standards: "ISO 230-2 Machining Tolerances"
  },
  {
    id: "cat-gears-gearboxes",
    name: "Precision Gears & Heavy Gearboxes",
    category: "Machine Tools & Engineering",
    subcategory: "Power Transmission",
    description: "Helical, bevel, planetary, and worm gearboxes engineered for high torque transmission, quiet operation, and longevity.",
    specifications: ["Torque rating up to 450 kNm", "Case carburized & ground DIN Class 5-6", "Efficiency up to 98.5%"],
    keyApplications: ["Material handling cranes", "Heavy rolling mills", "Conveyor drives"],
    standards: "AGMA / ISO 6336"
  },
  {
    id: "cat-hydraulic-fittings",
    name: "Hydraulic Fittings, Cylinders & Power Packs",
    category: "Machine Tools & Engineering",
    subcategory: "Fluid Power",
    description: "High-pressure hydraulic fittings, bespoke hydraulic cylinders, proportional valves, and modular hydraulic power units (HPU).",
    specifications: ["Operating pressures up to 700 bar", "Chrome-plated induction hardened rods", "Zero-leakage SAE / DIN flanges"],
    keyApplications: ["Stamping presses", "Earthmoving machinery", "Robotic lifting SPM"],
    standards: "ISO 6162 / DIN 2353"
  },
  {
    id: "cat-fasteners",
    name: "Industrial Fasteners & High-Tensile Hardware",
    category: "Machine Tools & Engineering",
    subcategory: "Hardware",
    description: "High-tensile bolts, studs, socket head screws, self-locking nuts, and custom machined precision fasteners in steel and exotic alloys.",
    specifications: ["Grades 8.8, 10.9, 12.9 & Stainless A2/A4", "Corrosion protective zinc-flake coating", "Diameters M4 to M90"],
    keyApplications: ["Structural steel fabrication", "Automotive chassis assembly", "Power turbine anchoring"],
    standards: "ISO 898-1 / DIN 931"
  },
  {
    id: "cat-laser-marking",
    name: "Industrial Laser Marking & Engraving Systems",
    category: "Machine Tools & Engineering",
    subcategory: "Traceability",
    description: "Fiber laser and UV laser marking stations for permanent component serialisation, QR codes, DataMatrix, and defense part numbering.",
    specifications: ["Laser power: 20W to 100W Fiber", "Marking speed up to 12,000 mm/s", "Supports metals, plastics, and ceramics"],
    keyApplications: ["Defense ordnance traceability", "Automotive VIN & part coding", "Tool identification"],
    standards: "CE / Class 4 Laser Safety"
  },
  {
    id: "cat-honing-machines",
    name: "Precision Honing Machines",
    category: "Machine Tools & Engineering",
    subcategory: "Finishing",
    description: "Vertical and horizontal precision honing machinery designed for sub-micron bore geometries and cross-hatch surface finishes.",
    specifications: ["Bore diameter range 6mm to 350mm", "Cylindricity within 0.001 mm", "CNC stroke and expansion control"],
    keyApplications: ["Hydraulic cylinder tubes", "IC engine cylinder liners", "Brake master cylinders"],
    standards: "DIN 8611"
  },
  {
    id: "cat-die-casting",
    name: "Pressure Die Casting (HPDC / LPDC)",
    category: "Machine Tools & Engineering",
    subcategory: "Foundry & Casting",
    description: "High-pressure and low-pressure aluminum and zinc die casting units with automated ladling, spraying, and component extraction.",
    specifications: ["Locking force 180 to 2,200 metric tons", "Complex thin-walled geometry support", "Minimal porosity vacuum-assisted"],
    keyApplications: ["Gearbox casings", "Automotive throttle bodies", "Electronic sensor enclosures"],
    standards: "NADCA / ASTM B85"
  },
  {
    id: "cat-bearings",
    name: "Industrial Bearings & Bushings",
    category: "Machine Tools & Engineering",
    subcategory: "Rotary Support",
    description: "Deep groove ball, spherical roller, tapered roller, and cylindrical bearings engineered for extreme shock loads and continuous duty.",
    specifications: ["Dynamic load rating up to 1,200 kN", "High-temperature synthetic lubrication", "Precision grades ABEC 5 / 7"],
    keyApplications: ["Electric motors", "Wind turbines", "Heavy crushers and vibratory screens"],
    standards: "ISO 492 / DIN 620"
  },
  {
    id: "cat-material-handling",
    name: "Material Handling & Conveying Systems",
    category: "Machine Tools & Engineering",
    subcategory: "Logistics Automation",
    description: "Automated overhead chain conveyors, modular belt conveyors, automated guided vehicles (AGV) integration, and jib cranes.",
    specifications: ["Payloads up to 10,000 kg", "Variable frequency drives with PLC sync", "Explosion-proof ATEX options"],
    keyApplications: ["Automotive paint shop lines", "Warehouse dispatch centers", "Foundry casting transfer"],
    standards: "FEM / ISO 5048"
  },

  // Defense Technology & DefTech
  {
    id: "cat-drones-uav",
    name: "Tactical Drones & Unmanned Aerial Systems (UAS)",
    category: "Defense & DefTech",
    subcategory: "Robotics & Autonomous",
    description: "Long-endurance autonomous tactical quadcopters and fixed-wing hybrid VTOL platforms for border surveillance and reconnaissance.",
    specifications: ["Flight endurance up to 120 minutes", "Encrypted military telemetry (AES-256)", "Thermal & 30x optical EO/IR gimbal payload"],
    keyApplications: ["Perimeter defense & border patrol", "Tactical reconnaissance", "Counter-drone early detection"],
    standards: "MIL-STD-810H / DGCA Type Certified"
  },
  {
    id: "cat-unmanned-ground",
    name: "Unmanned Ground Robotic Systems (UGV)",
    category: "Defense & DefTech",
    subcategory: "Robotics & Autonomous",
    description: "Rugged tracked and wheeled autonomous robotic ground rovers for ordnance disposal, hazardous inspection, and base surveillance.",
    specifications: ["Payload capacity up to 80 kg", "All-terrain tracked suspension", "Remote tethered and RF autonomous navigation"],
    keyApplications: ["EOD (Explosive Ordnance Disposal)", "Tactical perimeter sweeping", "Chemical/radiation reconnaissance"],
    standards: "MIL-STD-461G (EMC/EMI)"
  },
  {
    id: "cat-advanced-armor",
    name: "Advanced Armor Plating & Weapon Materials",
    category: "Defense & DefTech",
    subcategory: "Ballistic Materials",
    description: "Multi-layered composite ceramic-metal armor solutions and specialized high-strength metallurgical fabrications for vehicle armor.",
    specifications: ["STANAG Level 1 to 4 ballistic protection", "Weight reduction of 30% vs rolled homogenous armor", "Spall-resistant aramid backing"],
    keyApplications: ["Armored personnel carriers (APC)", "Strategic bunker reinforcement", "Mobile radar shielding"],
    standards: "STANAG 4569 / NIJ Standard 0101.06"
  },
  {
    id: "cat-tactical-comms",
    name: "Tactical Electronics & Secure Communications",
    category: "Defense & DefTech",
    subcategory: "Defense Electronics",
    description: "Ruggedized software-defined radios (SDR), frequency-hopping transceivers, and tamper-resistant military communication gateways.",
    specifications: ["MIL-STD-810 environmental sealing (IP67)", "Anti-jamming spread spectrum", "Zeroize physical security key destruction"],
    keyApplications: ["Command and control (C2) tactical units", "Forward operating vehicle links", "Battlefield sensor mesh"],
    standards: "MIL-STD-810H / MIL-STD-461"
  },
  {
    id: "cat-defense-testing",
    name: "Defense Testing, Shock & Validation Services",
    category: "Defense & DefTech",
    subcategory: "Validation",
    description: "Comprehensive qualification testing including electrodynamic vibration, thermal shock, salt fog corrosion, and structural stress validation.",
    specifications: ["Vibration shaker table up to 50 kN", "Climatic chamber -70°C to +180°C", "Full NDT radiographic and eddy current testing"],
    keyApplications: ["Defense PSU qualification", "Avionics chassis certification", "Munitions packaging compliance"],
    standards: "JSS 55555 / MIL-STD-810"
  },

  // Pharma & Packaging
  {
    id: "cat-pharma-packaging",
    name: "Pharma Packaging Machinery & Blister Lines",
    category: "Pharma & Packaging",
    subcategory: "Pharmaceutical Equipment",
    description: "High-speed automated blister packaging, cartoning machines, and sterile bottle filling and capping equipment.",
    specifications: ["Speed up to 300 blisters/minute", "Tool-less format changeover in < 20 minutes", "SS 316L contact parts"],
    keyApplications: ["Solid dose tablet packaging", "Capsule bottling", "Medical device packaging"],
    standards: "cGMP / 21 CFR Part 11 compliant"
  },
  {
    id: "cat-food-processing",
    name: "Industrial Food Processing Machinery",
    category: "Pharma & Packaging",
    subcategory: "Food & Beverage",
    description: "Continuous industrial fruit pulping, thermal pasteurization, homogenizers, and hygienic stainless steel storage vessels.",
    specifications: ["Sanitary CIP (Clean-in-Place) automation", "Precision thermal control ±0.5°C", "Food grade mirror polish Ra < 0.4 µm"],
    keyApplications: ["Dairy processing", "Fruit beverage production", "Sauce and paste manufacturing"],
    standards: "FSSAI / EHEDG Sanitary Design"
  },
  {
    id: "cat-packaging-formers",
    name: "Packaging Formers & Control Panels",
    category: "Pharma & Packaging",
    subcategory: "Packaging Subsystems",
    description: "Precision CNC milled packaging formers, collar sets, and PLC-driven touch screen packaging control panels.",
    specifications: ["Custom formers for pillow, gusset, and quad bags", "Integrated recipe storage with Siemens/Delta PLC", "High-speed servo motion synchronization"],
    keyApplications: ["Snack food packaging", "Powder chemical pouching", "Grain bagging"],
    standards: "ISO 9001 / CE Machine Directive"
  },

  // Electrical & Automation
  {
    id: "cat-industrial-automation",
    name: "Industrial Automation & Robotics Cells",
    category: "Electrical & Automation",
    subcategory: "Robotics & Motion",
    description: "Integrated robotic assembly cells, 6-axis articulated arms, cobots (collaborative robots), and custom PLC/HMI automation panels.",
    specifications: ["Robotic payload from 5 kg to 500 kg", "EtherCAT and PROFINET bus communication", "Safety Category 4 / PLe interlocks"],
    keyApplications: ["Automotive body welding", "Machine tending & deburring", "High-speed pick and place"],
    standards: "ISO 10218-1 / IEC 61508"
  },
  {
    id: "cat-power-supplies",
    name: "Industrial Power Supplies, Stabilizers & Inverters",
    category: "Electrical & Automation",
    subcategory: "Power Management",
    description: "Heavy servo voltage stabilizers, uninterrupted industrial power supplies (UPS), variable frequency inverters, and switchgear.",
    specifications: ["Ratings from 10 kVA to 2,000 kVA", "Microcontroller-based voltage correction", "Overvoltage, short-circuit and phase reversal protection"],
    keyApplications: ["Sensitive CNC machine protection", "Factory-wide power factor correction", "Solar hybrid plants"],
    standards: "IS 9815 / IEC 60146"
  },
  {
    id: "cat-measuring-testing",
    name: "Measuring & Testing Instrumentation",
    category: "Electrical & Automation",
    subcategory: "Quality Assurance",
    description: "Coordinate Measuring Machines (CMM), surface roughness testers, optical profile projectors, and industrial sensor arrays.",
    specifications: ["Volumetric accuracy: 1.5 + L/350 µm", "Real-time SPC statistical process logging", "Non-contact laser profile scan"],
    keyApplications: ["First-article inspection", "Precision machined parts verification", "Tool room calibration"],
    standards: "ISO 10360 / NABL Accredited Calibrations"
  },

  // Digital & Emerging Tech
  {
    id: "cat-scada-software",
    name: "SCADA Systems & Industrial Software",
    category: "Digital & Emerging Tech",
    subcategory: "Supervisory Control",
    description: "Distributed SCADA software architectures, real-time plant historian databases, automated batch tracking, and alarm routing.",
    specifications: ["Supports OPC UA, Modbus TCP, MQTT protocols", "Cross-platform browser-based SVG visualization", "Role-based access control and audit trails"],
    keyApplications: ["Continuous chemical plant monitoring", "Water distribution networks", "Power substation automation"],
    standards: "ISA-95 / IEC 62443 Security"
  },
  {
    id: "cat-iot-datacentre",
    name: "Industrial IoT Hubs & Data Centre Management",
    category: "Digital & Emerging Tech",
    subcategory: "IoT & Infrastructure",
    description: "Edge IoT gateways with vibration/temperature sensors for predictive maintenance, server rack infrastructure, and data center cooling.",
    specifications: ["Edge ML anomaly detection algorithms", "Cellular 4G/5G and LoRaWAN connectivity", "Tier-2/3 compliant server rack power management"],
    keyApplications: ["Predictive machine tool health", "Remote solar farm monitoring", "Automated utility billing"],
    standards: "ISO/IEC 27001 / IEC 62443"
  },
  {
    id: "cat-cyber-forensics",
    name: "Cyber Forensic Data Mining & Fire Control Systems",
    category: "Digital & Emerging Tech",
    subcategory: "Emerging Technologies",
    description: "Specialized algorithmic data mining tools for forensic threat analysis, blockchain provenance verification, and automatic fire control suppression integration.",
    specifications: ["Hardware-accelerated log analytics", "Immutable cryptographic audit records", "Integrated optical fire detection & gas discharge"],
    keyApplications: ["Critical defense infrastructure protection", "Banking and fintech data compliance", "Industrial plant safety"],
    standards: "NFPA 2001 / ISO 27037"
  },
  {
    id: "cat-consultancy-services",
    name: "Technical Consultancy & Institutional Training",
    category: "Digital & Emerging Tech",
    subcategory: "Professional Advisory",
    description: "Expert engineering feasibility studies, plant modernization roadmaps, telecom network advisory, and syllabus training for industrial technical institutes.",
    specifications: ["Turnkey plant layout optimization", "Industry 4.0 transformation frameworks", "Hands-on robotics and CNC training modules"],
    keyApplications: ["Government technical universities", "Banking & telecom infrastructure audits", "SME modernization"],
    standards: "ISO 21500 Project Management"
  }
];

export interface DefenseSpecification {
  pillar: string;
  focusArea: string;
  capabilityDetails: string[];
  compliance: string;
}

export const defenseCapabilities: DefenseSpecification[] = [
  {
    pillar: "Robotics & Autonomous Systems",
    focusArea: "Drones, UAS & Unmanned Ground Vehicles",
    capabilityDetails: [
      "Custom tactical airframes using aerospace-grade carbon composite structures",
      "Autonomous waypoint navigation in GPS-denied tactical environments",
      "Rugged tracked rovers for ordnance disposal and hazardous exploration"
    ],
    compliance: "MIL-STD-810H / DGCA Guidelines"
  },
  {
    pillar: "Advanced Materials & Design",
    focusArea: "Armor, Weapon Systems & High-Strength Fabrication",
    capabilityDetails: [
      "Specialized Division 25 fabricated metal solutions for armored hulls",
      "Composite ceramic-metal ballistic backing and spall mitigation",
      "Precision structural assemblies for weapon mounting and turret rings"
    ],
    compliance: "STANAG 4569 / NIJ 0101.06"
  },
  {
    pillar: "Electronics, Communications & Cybersecurity",
    focusArea: "Tactical Data Links & Cyber Forensics",
    capabilityDetails: [
      "Ruggedized tactical communications modules with low thermal and RF signatures",
      "Hardware-enforced encryption and anti-tamper security mechanisms",
      "Forensic data mining engines for cyber intelligence and threat auditing"
    ],
    compliance: "MIL-STD-461G / ISO/IEC 27001"
  },
  {
    pillar: "Testing & Validation Services",
    focusArea: "Military-Grade Environmental & Mechanical Testing",
    capabilityDetails: [
      "Electrodynamic shock and vibration profiling under simulated field stress",
      "Thermal cycling (-50°C to +150°C) and salt spray accelerated corrosion testing",
      "Non-destructive testing (NDT), ultrasonic flaw detection, and hydrostatic proof tests"
    ],
    compliance: "JSS 55555 / DRDO Standards"
  }
];

export const sustainablePractices = [
  {
    title: "Resource Efficiency & Material Optimization",
    metric: "Up to 24% scrap reduction",
    description: "Employing advanced nesting algorithms and near-net-shape metal fabrication to minimize raw billet consumption across Division 25 production."
  },
  {
    title: "Energy-Efficient Manufacturing Processes",
    metric: "35% lower kWh per unit fabricated",
    description: "Deployment of variable speed drives, regenerative braking on heavy stamping/CNC machinery, and waste heat recovery on boilers."
  },
  {
    title: "Lightweight & Recyclable Metallurgy",
    metric: "100% recyclable alloy tracking",
    description: "Promoting high-strength lightweight aluminum alloys and structural composites to reduce operational carbon footprints in automotive and defense."
  },
  {
    title: "Closed-Loop Coolant & Effluent Systems",
    metric: "Zero Liquid Discharge (ZLD) capable",
    description: "On-site filtration and recycling of cutting fluids, machine coolants, and chemical rinse water, preventing groundwater contamination."
  }
];
