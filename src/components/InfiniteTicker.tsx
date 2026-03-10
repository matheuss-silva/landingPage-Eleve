import React from 'react';

const InfiniteTicker = () => {
  const words = [
    "DIGITAL MASTERPIECES",
    "HIGH-END DESIGN",
    "CONVERSION FOCUSED",
    "NEXT-GEN TECH"
  ];

  // Repeat the array a few times to ensure the marquee covers ultra-wide screens
  const repeatedWords = [...words, ...words, ...words, ...words];

  return (
    <div className="relative w-full border-y border-white/5 bg-[#050505] py-8 md:py-12 overflow-hidden flex flex-col gap-4">
      {/* Top Row - Moves Left */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex items-center min-w-full font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white/[0.03] uppercase">
          {repeatedWords.map((word, i) => (
            <span key={`top-${i}`} className="mx-8 md:mx-16 hover:text-white/[0.08] transition-colors duration-500 cursor-default">
              {word}
            </span>
          ))}
          {/* Duplicate set for seamless looping */}
          {repeatedWords.map((word, i) => (
            <span key={`top-dup-${i}`} className="mx-8 md:mx-16 hover:text-white/[0.08] transition-colors duration-500 cursor-default">
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Row - Moves Right */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee-reverse flex flex-row items-center min-w-full font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-[#1C7C7D]/[0.05] uppercase">
          {repeatedWords.map((word, i) => (
            <span key={`bottom-${i}`} className="mx-8 md:mx-16 hover:text-[#1C7C7D]/[0.15] transition-colors duration-500 cursor-default">
              {word}
            </span>
          ))}
          {/* Duplicate set for seamless looping */}
          {repeatedWords.map((word, i) => (
            <span key={`bottom-dup-${i}`} className="mx-8 md:mx-16 hover:text-[#1C7C7D]/[0.15] transition-colors duration-500 cursor-default">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteTicker;
