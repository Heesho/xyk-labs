import React from 'react';
import { ScanLine, ShieldCheck, Zap, Eye } from 'lucide-react';

const ConsumerAI: React.FC = () => {
  return (
    <section id="consumer-ai" className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 border-l-4 border-tyrian pl-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Applied Artificial Intelligence</h2>
          <p className="text-lg text-gray-500">Democratizing access to advanced computer vision.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-3 py-1 bg-gray-100 text-tyrian text-xs font-bold uppercase tracking-widest rounded-full">
              Coming Soon on iOS
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                Biometric Identity
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Ancestry Scan
              </h2>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Discover the history written in your features. Ancestry Scan utilizes advanced computer vision to analyze facial phenotypical markers against a global dataset of anthropological regions. This provides an instant, AI-driven estimation of your potential heritage.
            </p>

            <div className="space-y-8 pt-8 border-t border-gray-100">
               {/* Feature 1 */}
               <div className="flex items-start gap-5">
                  <div className="p-3 bg-purple-50 rounded-xl text-tyrian mt-1">
                    <Eye size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Biometric Phenotyping</h4>
                    <p className="text-gray-500 text-base mt-2 leading-relaxed">Analyzes facial geometry for non-invasive lineage estimation.</p>
                  </div>
               </div>
               
               {/* Feature 2 */}
               <div className="flex items-start gap-5">
                  <div className="p-3 bg-purple-50 rounded-xl text-tyrian mt-1">
                    <Zap size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Ephemeral Processing</h4>
                    <p className="text-gray-500 text-base mt-2 leading-relaxed">Images are processed in real-time and immediately discarded.</p>
                  </div>
               </div>

               {/* Feature 3 */}
               <div className="flex items-start gap-5">
                  <div className="p-3 bg-purple-50 rounded-xl text-tyrian mt-1">
                    <ShieldCheck size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Zero-Retention Policy</h4>
                    <p className="text-gray-500 text-base mt-2 leading-relaxed">We utilize a stateless architecture. We do not store, archive, or train models on user biometric data.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="flex-1 flex justify-center items-center w-full">
              <div className="relative w-full max-w-lg aspect-square bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center border border-gray-100 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-gray-100 opacity-60"></div>
                  {/* Decorative Grid */}
                  <div className="absolute inset-0 opacity-[0.05]" 
                      style={{
                          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                          backgroundSize: '30px 30px'
                      }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-6">
                      <div className="p-10 bg-white rounded-3xl shadow-xl ring-1 ring-gray-100 text-tyrian">
                          <ScanLine size={100} strokeWidth={1} />
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsumerAI;