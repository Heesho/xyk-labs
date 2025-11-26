import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-white px-6 py-20">
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-6">
          XYK Labs
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
          A multi-disciplinary venture studio building at the intersection of AI, cryptography, and material science.
        </p>
        
        <div className="flex flex-col items-center gap-4 mt-8">
          <span className="text-sm font-medium tracking-widest text-gray-400 uppercase">
            APPLIED BIOMETRICS • MOLECULAR HYGIENE • ECONOMIC PRIMITIVES
          </span>
          
          <button 
            className="mt-8 px-8 py-4 bg-tyrian text-white text-lg font-medium rounded-full hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2"
            onClick={() => document.getElementById('consumer-ai')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Portfolio
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      
      {/* Decorative background element - subtle math grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
      />
    </section>
  );
};

export default Hero;