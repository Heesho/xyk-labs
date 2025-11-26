import React from 'react';
import Hero from './components/Hero';
import ConsumerAI from './components/ConsumerAI';
import Lifestyle from './components/Lifestyle';
import ResearchSection from './components/ResearchSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <Hero />
      <ConsumerAI />
      <Lifestyle />
      <ResearchSection />
      <Footer />
    </main>
  );
}

export default App;