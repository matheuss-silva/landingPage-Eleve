import React from 'react';

const InfiniteTicker = () => {
  return (
    <div className="relative w-full border-y border-white/5 bg-[#050505] py-4 overflow-hidden flex whitespace-nowrap">
      <div className="animate-marquee flex gap-12 items-center min-w-full font-mono text-sm tracking-widest text-[#1C7C7D] uppercase">
        <span className="font-bold">DIGITAL MASTERPIECES</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">HIGH-END DESIGN</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">CONVERSION FOCUSED</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">DIGITAL MASTERPIECES</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">HIGH-END DESIGN</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">CONVERSION FOCUSED</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">DIGITAL MASTERPIECES</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">HIGH-END DESIGN</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">CONVERSION FOCUSED</span>
        <span className="text-white/20">•</span>
        {/* Duplicate for seamless loop */}
        <span className="font-bold">DIGITAL MASTERPIECES</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">HIGH-END DESIGN</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">CONVERSION FOCUSED</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">DIGITAL MASTERPIECES</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">HIGH-END DESIGN</span>
        <span className="text-white/20">•</span>
        <span className="font-bold">CONVERSION FOCUSED</span>
        <span className="text-white/20">•</span>
      </div>
    </div>
  );
};

export default InfiniteTicker;
