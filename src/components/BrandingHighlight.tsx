import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BrandingHighlight = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section 
      ref={containerRef}
      className="py-32 md:py-48 px-6 lg:px-12 bg-[#050505] relative border-t border-white/5 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,124,125,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <motion.div style={{ scale, opacity, y }} className="max-w-5xl mx-auto z-10 w-full">
        <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-8 block font-bold">
          [ A Essência da Sua Marca ]
        </span>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
          ZERO TEMPLATES.<br />
          <span className="text-brand-primary">100% AUTORAL.</span>
        </h2>
      </motion.div>
    </section>
  );
};

export default BrandingHighlight;
