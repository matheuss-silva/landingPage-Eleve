import React from 'react';

const InfiniteTicker = () => {
const words = [
  "DESIGN DIGITAL",
  "ALTA PERFORMANCE",
  "EXPERIÊNCIAS QUE CONVERTEM",
  "TECNOLOGIA DE PONTA"
];

  // Repeat the array a few times to ensure the marquee covers ultra-wide screens
  const repeatedWords = [...words, ...words, ...words, ...words];

  return (
    <div className="relative w-full border-y border-white/5 bg-[#050505] py-4 md:py-6 overflow-hidden flex flex-col gap-2">
      {/* Top Row - Moves Left */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex items-center min-w-full font-sans font-bold text-2xl md:text-4xl lg:text-5xl tracking-tighter text-white/[0.08] uppercase">
          {repeatedWords.map((word, i) => (
            <span key={`top-${i}`} className="mx-8 md:mx-16 hover:text-white/[0.70] transition-colors duration-500 cursor-default">
              {word}
            </span>
          ))}
          {/* Duplicate set for seamless looping */}
          {repeatedWords.map((word, i) => (
            <span key={`top-dup-${i}`} className="mx-8 md:mx-16 hover:text-white/[0.70] transition-colors duration-500 cursor-default">
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Row - Moves Right */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee-reverse flex flex-row items-center min-w-full font-sans font-bold text-2xl md:text-4xl lg:text-5xl tracking-tighter text-[#1C7C7D]/[0.15] uppercase">
          {repeatedWords.map((word, i) => (
            <span key={`bottom-${i}`} className="mx-8 md:mx-16 hover:text-[#1C7C7D]/[0.70] transition-colors duration-500 cursor-default">
              {word}
            </span>
          ))}
          {/* Duplicate set for seamless looping */}
          {repeatedWords.map((word, i) => (
            <span key={`bottom-dup-${i}`} className="mx-8 md:mx-16 hover:text-[#1C7C7D]/[0.70] transition-colors duration-500 cursor-default">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteTicker;
