import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectorPillars } from './components/SectorPillars';
import { DefTechSpotlight } from './components/DefTechSpotlight';
import { MachineryCatalog } from './components/MachineryCatalog';
import { SustainableManufacturing } from './components/SustainableManufacturing';
import { ServicesConsultancy } from './components/ServicesConsultancy';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TechnicalRFPModal } from './components/TechnicalRFPModal';
import { CompanyDossierModal } from './components/CompanyDossierModal';
import { CatalogItem } from './data/armoricaData';

export default function App() {
  const [isRFPOpen, setIsRFPOpen] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [selectedRFPItem, setSelectedRFPItem] = useState<CatalogItem | null>(null);
  const [selectedRFPSector, setSelectedRFPSector] = useState<string | undefined>(undefined);

  const handleOpenRFP = (preselectedCategory?: string) => {
    setSelectedRFPItem(null);
    setSelectedRFPSector(preselectedCategory);
    setIsRFPOpen(true);
  };

  const handleSelectItemForRFP = (item: CatalogItem) => {
    setSelectedRFPItem(item);
    setSelectedRFPSector(undefined);
    setIsRFPOpen(true);
  };

  const handleSelectSectorForRFP = (sectorTitle: string) => {
    setSelectedRFPItem(null);
    setSelectedRFPSector(sectorTitle);
    setIsRFPOpen(true);
  };

  const handleOpenDossier = () => {
    setIsDossierOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenRFP={() => handleOpenRFP()}
        onOpenDossier={handleOpenDossier}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenRFP={() => handleOpenRFP()}
          onOpenDossier={handleOpenDossier}
        />

        <SectorPillars
          onSelectSectorForRFP={handleSelectSectorForRFP}
        />

        <DefTechSpotlight
          onOpenRFPForDefense={() =>
            handleOpenRFP('Defense Technology & Supply Chain (Pune DefTech)')
          }
        />

        <MachineryCatalog
          onSelectItemForRFP={handleSelectItemForRFP}
        />

        <SustainableManufacturing />

        <ServicesConsultancy
          onOpenConsultancyRFP={(serviceName) =>
            handleOpenRFP(`Technology & Consultancy: ${serviceName}`)
          }
        />

        <ContactSection
          onOpenRFP={() => handleOpenRFP('Direct Site Contact')}
        />
      </main>

      {/* Quiet Corporate Footer */}
      <Footer
        onOpenRFP={() => handleOpenRFP()}
        onOpenDossier={handleOpenDossier}
      />

      {/* Interactive Technical RFP & Quotation Modal */}
      <TechnicalRFPModal
        isOpen={isRFPOpen}
        onClose={() => setIsRFPOpen(false)}
        preselectedItem={selectedRFPItem}
        preselectedSector={selectedRFPSector}
      />

      {/* Official Corporate Dossier Modal */}
      <CompanyDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
