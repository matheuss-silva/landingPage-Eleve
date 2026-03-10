import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import InfiniteTicker from './components/InfiniteTicker';
import TargetAudience from './components/TargetAudience';
import ValueProposition from './components/ValueProposition';
import BrandingHighlight from './components/BrandingHighlight';
import Comparison from './components/Comparison';
import ExpertResults from './components/ExpertResults';
import FinalCTA from './components/FinalCTA';
import FooterBlock from './components/FooterBlock';

const App = () => {
  return (
    <div className="relative min-h-screen bg-brand-bg">
      <NavBar />

      <main>
        <Hero />
        <InfiniteTicker />
        <TargetAudience />
        <ValueProposition />
        <BrandingHighlight />
        <Comparison />
        <ExpertResults />
        <FinalCTA />
      </main>

      <FooterBlock />
    </div>
  );
};

export default App;
