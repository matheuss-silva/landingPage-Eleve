import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import InfiniteTicker from './components/InfiniteTicker';
import TargetAudience from './components/TargetAudience';
import ValueProposition from './components/ValueProposition';
import Comparison from './components/Comparison';
import ExpertResults from './components/ExpertResults';
import FinalCTA from './components/FinalCTA';
import FooterBlock from './components/FooterBlock';
import Portfolio from './components/Portfolio';

const App = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setShowPortfolio(window.location.hash === '#portfolio');
      if (window.location.hash === '#portfolio') {
        window.scrollTo(0, 0);
      }
    };
    
    // Check initial hash
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (showPortfolio) {
    return <Portfolio />;
  }

  return (
    <div className="relative min-h-screen bg-brand-bg">
      <NavBar />

      <main>
        <Hero />
        <InfiniteTicker />
        <TargetAudience />
        <ValueProposition />
        <Comparison />
        <ExpertResults />
        <FinalCTA />
      </main>

      <FooterBlock />
    </div>
  );
};

export default App;
