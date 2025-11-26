import React from 'react';
import { Droplets, ArrowRight } from 'lucide-react';

const Lifestyle: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 border-l-4 border-tyrian pl-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Consumer Lifestyle</h2>
          <p className="text-lg text-gray-500">Formulations for modern living.</p>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          
          {/* Content Side */}
          <div className="flex-1 space-y-8">
             <div className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
              Brand Launching Soon
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                Personal Care
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Hypochlorous Daily Mist
              </h2>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Incubating modern brands for daily living. We manage the end-to-end brand experience for this 100% natural, shelf-stable antimicrobial mist. Designed to bridge the gap between first aid and daily skincare.
            </p>
          </div>

          {/* Visual Side */}
          <div className="flex-1 flex justify-center items-center w-full">
               <div className="relative w-full max-w-md aspect-[4/5] bg-white rounded-3xl overflow-hidden flex items-center justify-center border border-gray-200 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-white to-white"></div>
                  <div className="relative z-10 text-tyrian opacity-90 flex flex-col items-center">
                      <Droplets size={120} strokeWidth={0.5} />
                      <span className="mt-8 font-mono text-xs text-gray-400 tracking-[0.2em] uppercase">
                          Pure Formulation
                      </span>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Lifestyle;