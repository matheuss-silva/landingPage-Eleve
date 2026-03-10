import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const generic = [
  'Design Repetido & Genérico',
  'Código Pesado (Wix/Elementor)',
  'Sem Estratégia de Venda',
  'Lentidão no Carregamento'
];

const premium = [
  'Design 100% Exclusivo',
  'Next.js (Performance Máxima)',
  'Foco Total em Conversão',
  'Consultoria Estratégica Inclusa'
];

const Comparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#050505] relative border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12" ref={ref}>
          {/* Generic */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 bg-[#0A0A0A] rounded-3xl border border-white/5"
          >
            <div className="mb-8">
              <span className="text-white/40 font-mono text-sm tracking-widest uppercase block mb-2">O Padrão do Mercado</span>
              <h3 className="text-3xl font-bold font-sans text-white/50">Outros / Templates</h3>
              <p className="text-white/30 font-light mt-4">Soluções genéricas que limitam seu crescimento.</p>
            </div>
            <ul className="space-y-6">
              {generic.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white/40">
                  <XCircle className="w-6 h-6 flex-shrink-0 text-red-500/50" />
                  <span className="font-light text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Premium */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-12 bg-gradient-to-b from-[#1C7C7D]/10 to-transparent rounded-3xl border border-[#1C7C7D]/30 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#1C7C7D]/5 blur-3xl pointer-events-none group-hover:bg-[#1C7C7D]/10 transition-colors duration-500"></div>
            
            <div className="relative z-10 mb-8">
              <span className="text-[#1C7C7D] font-mono text-sm tracking-widest uppercase block mb-2 font-bold animate-pulse">A Solução Definitiva</span>
              <h3 className="text-3xl font-bold font-sans text-white">Elevation Digital</h3>
              <p className="text-white/80 font-light mt-4">Performance extrema e design exclusivo.</p>
            </div>
            
            <ul className="space-y-6 relative z-10 mb-12">
              {premium.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-[#1C7C7D]" />
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#portfolio" className="relative z-10 inline-flex items-center gap-2 text-white font-sans font-bold bg-[#1C7C7D] px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
              Conhecer Portfólio <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
