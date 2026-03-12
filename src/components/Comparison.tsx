import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight, X, Zap } from 'lucide-react';

const generic = [
  'Design Repetido & Genérico',
  'Código Pesado (Wix/Elementor)',
  'Sem Estratégia de Venda',
  'Lentidão no Carregamento'
];

const premium = [
  'Design 100% Exclusivo',
  'React.js (Performance Máxima)',
  'Foco Total em Conversão',
  'Consultoria Estratégica Inclusa'
];

const Comparison = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const btnRef = useRef(null);
  const btnInView = useInView(btnRef, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-24 px-6 lg:px-12 bg-brand-bg relative border-y border-white/5 flex flex-col items-center justify-center">
      
      {/* Integrated Branding Highlight Header */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto z-10 w-full text-center mb-10 md:mb-16"
      >
        <span className="text-[#1C7C7D] font-mono text-sm tracking-widest uppercase mb-8 block font-bold">
          A ESSÊNCIA DA SUA MARCA
        </span>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-sans font-black tracking-tighter leading-[1.1] md:leading-[1.1]">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 block">
            ZERO TEMPLATES.
          </span>
          <span className="text-brand-primary block mt-2 md:mt-4">
            100% AUTORAL.
          </span>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8" ref={cardsRef}>
          {/* Generic */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-8 bg-brand-cardHover rounded-3xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <X className="w-5 h-5 text-red-500/80" />
              </div>
              <h3 className="text-2xl font-bold font-sans text-white">Outros / Templates</h3>
              <p className="text-white/60 font-medium mt-2 text-sm">Soluções genéricas que limitam seu crescimento.</p>
            </div>
            <ul className="space-y-6">
              {generic.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white/70">
                  <XCircle className="w-6 h-6 flex-shrink-0 text-red-500/80" />
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Premium */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 md:p-8 bg-gradient-to-b from-brand-primary/10 to-transparent rounded-3xl border border-brand-primary/30 relative overflow-hidden group hover:border-brand-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(28,124,125,0.15)]"
          >
            <div className="absolute inset-0 bg-brand-primary/5 blur-3xl pointer-events-none group-hover:bg-brand-primary/10 transition-colors duration-500"></div>
            
            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#1C7C7D]/10 flex items-center justify-center mb-6 border border-[#1C7C7D]/30">
                <Zap className="w-5 h-5 text-[#1C7C7D]" />
              </div>
              <h3 className="text-2xl font-bold font-sans text-white">Elevation</h3>
              <p className="text-white/80 font-light mt-2 text-sm">Performance extrema e design exclusivo.</p>
            </div>
            
            <ul className="space-y-6 relative z-10 mb-12">
              {premium.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-[#1C7C7D]" />
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Centered CTA Button */}
        <motion.div 
          ref={btnRef}
          initial={{ opacity: 0, y: 30 }}
          animate={btnInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center w-full"
        >
          <a href="#portfolio" className="relative group inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-transparent border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-white/50 hover:bg-white/5">
            <span className="relative z-10 flex items-center gap-2">
              Conhecer Portfólio <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
