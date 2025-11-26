import React from 'react';
import { Smartphone, Droplets, ScanLine, ShieldCheck } from 'lucide-react';
import { ProductProps } from '../types';

const ConsumerCard: React.FC<ProductProps & { icon: React.ReactNode }> = ({ category, name, badge, description, specs, icon }) => (
  <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
    <div className="mb-6 flex items-start justify-between">
      <div className="p-3 bg-white rounded-xl shadow-sm text-tyrian group-hover:bg-tyrian group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <span className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider rounded-full">
        {badge}
      </span>
    </div>
    
    <div className="mb-2 text-sm font-semibold text-tyrian uppercase tracking-wide">
      {category}
    </div>
    
    <h3 className="text-3xl font-bold text-gray-900 mb-4">{name}</h3>
    
    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
      {description}
    </p>
    
    {specs && (
      <div className="mt-auto pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 font-mono">
          {specs}
        </p>
      </div>
    )}
  </div>
);

const ConsumerSection: React.FC = () => {
  return (
    <section id="consumer" className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-l-4 border-tyrian pl-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Consumer & Lifestyle</h2>
          <p className="text-xl text-gray-500">Bridging the gap between digital memory and physical wellness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <ConsumerCard
            category="Applied Artificial Intelligence"
            name="Ancestry Scan"
            badge="Coming Soon on iOS"
            description="Discover the history written in your features. Ancestry Scan utilizes advanced computer vision and deep learning to analyze facial biometrics against a global database of phenotypes, providing an instant AI-estimated ancestry breakdown."
            specs="Biometric Analysis • Phenotype Matching • Privacy-First Processing"
            icon={<ScanLine size={32} />}
          />

          <ConsumerCard
            category="Health & Lifestyle"
            name="Hypochlorous Daily Mist"
            badge="Brand Launching Soon"
            description="Incubating modern brands for daily living. We manage the end-to-end brand experience for this 100% natural, shelf-stable antimicrobial mist. Designed to bridge the gap between first aid and daily skincare."
            icon={<Droplets size={32} />}
          />
        </div>
      </div>
    </section>
  );
};

export default ConsumerSection;