import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import InfiniteTicker from './components/InfiniteTicker';
import TargetAudience from './components/TargetAudience';
import Advantages from './components/Advantages';
import Comparison from './components/Comparison';
import Expertise from './components/Expertise';
import ResultsSection from './components/ResultsSection';
import FooterBlock from './components/FooterBlock';

const App = () => {
  return (
    <div className="relative min-h-screen bg-brand-bg">
      <NavBar />

      <main>
        <Hero />
        <InfiniteTicker />
        <TargetAudience />
        <Advantages />
        <Comparison />
        <Expertise />
        <ResultsSection />
      </main>

      <FooterBlock />
    </div>
  );
};

export default App;
