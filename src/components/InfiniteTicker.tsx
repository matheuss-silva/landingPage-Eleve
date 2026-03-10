import React from 'react';

const InfiniteTicker = () => {
  return (
    <div className="relative w-full border-y border-white/10 bg-brand-bg py-3 overflow-hidden flex whitespace-nowrap">
      <div className="animate-marquee flex gap-8 items-center min-w-full font-mono text-sm tracking-widest text-brand-primary opacity-80 uppercase">
        <span>HIGH-PERFORMANCE</span>
        <span className="text-white/30">•</span>
        <span>DIGITAL STRATEGY</span>
        <span className="text-white/30">•</span>
        <span>KINETIC DESIGN</span>
        <span className="text-white/30">•</span>
        <span>REAL-TIME ORCHESTRATION</span>
        <span className="text-white/30">•</span>
        <span>VISIONARY BRANDS</span>
        <span className="text-white/30">•</span>
        <span>HIGH-PERFORMANCE</span>
        <span className="text-white/30">•</span>
        <span>DIGITAL STRATEGY</span>
        <span className="text-white/30">•</span>
        <span>KINETIC DESIGN</span>
        <span className="text-white/30">•</span>
        <span>REAL-TIME ORCHESTRATION</span>
        <span className="text-white/30">•</span>
        <span>VISIONARY BRANDS</span>
        <span className="text-white/30">•</span>
        {/* Duplicate for seamless loop */}
        <span>HIGH-PERFORMANCE</span>
        <span className="text-white/30">•</span>
        <span>DIGITAL STRATEGY</span>
        <span className="text-white/30">•</span>
        <span>KINETIC DESIGN</span>
        <span className="text-white/30">•</span>
        <span>REAL-TIME ORCHESTRATION</span>
        <span className="text-white/30">•</span>
        <span>VISIONARY BRANDS</span>
        <span className="text-white/30">•</span>
      </div>
    </div>
  );
};

export default InfiniteTicker;
