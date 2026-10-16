import React, { useState, useMemo } from 'react';
import { catalogItems, CatalogItem } from '../data/armoricaData';

interface MachineryCatalogProps {
  onSelectItemForRFP: (item: CatalogItem) => void;
}

export const MachineryCatalog: React.FC<MachineryCatalogProps> = ({ onSelectItemForRFP }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItemModal, setActiveItemModal] = useState<CatalogItem | null>(null);

  const categories = [
    'All',
    'Process Equipment',
    'Machine Tools & Engineering',
    'Defense & DefTech',
    'Pharma & Packaging',
    'Electrical & Automation',
    'Digital & Emerging Tech'
  ];

  const filteredItems = useMemo(() => {
    return catalogItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.subcategory.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.specifications.some((s) => s.toLowerCase().includes(q)) ||
        item.standards.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalog" className="py-20 bg-slate-900/50 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
              Engineering Directory & Inventory
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans [text-wrap:balance]">
              Industrial Machinery, Process Systems & Components
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Browse precision fabricated machinery, process equipment, machine tools, and specialized systems engineered by Armorica Technologies LLP.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono tabular-nums">
            Showing {filteredItems.length} of {catalogItems.length} catalog items
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4 mb-8">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by equipment name, standard (e.g. ASME, API, MIL-STD), or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill, clean segmented control buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 font-semibold shadow-xs'
                      : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center rounded-lg border border-slate-800 bg-slate-950">
            <p className="text-slate-400 text-sm">
              No machinery or components match your query "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 rounded-md hover:bg-amber-300 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-slate-950 border border-slate-800/90 hover:border-slate-700 rounded-lg p-5 flex flex-col justify-between transition-colors group"
              >
                <div className="space-y-3">
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-amber-400/90 font-medium">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.subcategory}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Key specs teaser */}
                  <div className="pt-1 space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Standard Compliance
                    </div>
                    <div className="text-xs font-mono text-slate-300">
                      {item.standards}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveItemModal(item)}
                    className="text-xs text-amber-400 hover:text-amber-300 font-medium cursor-pointer"
                  >
                    View Specifications &rarr;
                  </button>
                  <button
                    onClick={() => onSelectItemForRFP(item)}
                    className="px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors cursor-pointer"
                  >
                    Inquire RFQ
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Specification Detail Modal */}
        {activeItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-700/80 rounded-lg max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <button
                onClick={() => setActiveItemModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
                aria-label="Close details"
              >
                ✕
              </button>

              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <span className="text-amber-400 font-medium">{activeItemModal.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeItemModal.subcategory}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-slate-300">{activeItemModal.standards}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeItemModal.name}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {activeItemModal.description}
                </p>
              </div>

              {/* Technical Specifications List */}
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Engineering Specifications
                </div>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {activeItemModal.specifications.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Applications */}
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Target Industrial Applications
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeItemModal.keyApplications.map((app, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-sm bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const item = activeItemModal;
                    setActiveItemModal(null);
                    onSelectItemForRFP(item);
                  }}
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                >
                  Request Technical Quotation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
