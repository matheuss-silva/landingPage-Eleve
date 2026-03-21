import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import InfiniteTicker from "./components/InfiniteTicker";
import TargetAudience from "./components/TargetAudience";
import ValueProposition from "./components/ValueProposition";
import Comparison from "./components/Comparison";
import ExpertResults from "./components/ExpertResults";
import FinalCTA from "./components/FinalCTA";
import FooterBlock from "./components/FooterBlock";
import Portfolio from "./components/Portfolio";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const App = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setShowPortfolio(window.location.hash === "#portfolio");
      if (window.location.hash === "#portfolio") {
        window.scrollTo(0, 0);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const defaultTitle = document.title;
    const hiddenTitles = ["🚀 Volta aqui!", "👀 Tá perdendo algo!"];
    let currentTitleIndex = 0;
    let titleInterval: number | null = null;

    const stopHiddenTitleRotation = () => {
      if (titleInterval !== null) {
        window.clearInterval(titleInterval);
        titleInterval = null;
      }

      document.title = defaultTitle;
    };

    const startHiddenTitleRotation = () => {
      if (titleInterval !== null) {
        return;
      }

      document.title = hiddenTitles[currentTitleIndex];

      titleInterval = window.setInterval(() => {
        currentTitleIndex = (currentTitleIndex + 1) % hiddenTitles.length;
        document.title = hiddenTitles[currentTitleIndex];
      }, 2000);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        startHiddenTitleRotation();
        return;
      }

      stopHiddenTitleRotation();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopHiddenTitleRotation();
    };
  }, []);

  if (showPortfolio) {
    return (
      <div className="relative min-h-screen bg-brand-bg">
        <Portfolio />
        <FloatingWhatsApp />
      </div>
    );
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
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
