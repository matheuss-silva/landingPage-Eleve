import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    title: 'Conversão',
    label: 'O funil captura e o sistema processa. Transformamos tráfego em leads qualificados no seu CRM.',
    icon: (
      <svg className="w-28 h-28 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M4 4h16l-6 8v6l-4 2v-8L4 4z" />
        <path d="M10 12h4" />
        <rect x="11" y="20" width="2" height="2" />
        <path d="M12 2v2" strokeDasharray="1 1" />
        <circle cx="12" cy="16" r="0.5" />
      </svg>
    )
  },
  {
    title: 'Autoridade',
    label: 'Solidez institucional em qualquer tela. Transmita confiança e esteja acessível em todo lugar.',
    icon: (
      <svg className="w-28 h-28 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
        <rect x="8" y="8" width="8" height="14" />
        <rect x="10" y="4" width="4" height="4" />
        <rect x="4" y="14" width="3" height="5" />
        <path d="M17 12l2-1 2 1v3c0 2-2 4-2 4s-2-2-2-4v-3z" />
        <path d="M19 14l-1 1-1-1" />
      </svg>
    )
  },
  {
    title: 'Vendas',
    label: 'O produto vira receita. Checkout fluido e segurança para maximizar cada transação.',
    icon: (
      <svg className="w-28 h-28 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M10 14l-6-3V5l6 3v6z" />
        <path d="M10 14l6-3V5l-6 3v6z" />
        <path d="M4 5l6-3 6 3" />
        <rect x="14" y="6" width="8" height="5" rx="1" />
        <path d="M14 8h8" />
        <circle cx="10" cy="8" r="1.5" />
        <circle cx="17" cy="9" r="0.5" />
      </svg>
    )
  },
  {
    title: 'Experiência',
    label: 'A jornada se torna tangível. Design de interface completo guiando o usuário ao clique.',
    icon: (
      <svg className="w-28 h-28 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
        <rect x="5" y="4" width="14" height="16" rx="1" />
        <path d="M5 8h14" />
        <circle cx="7" cy="6" r="0.5" />
        <circle cx="9" cy="6" r="0.5" />
        <rect x="8" y="10" width="8" height="2" rx="0.5" />
        <rect x="10" y="14" width="4" height="1.5" rx="0.5" />
        <line x1="12" y1="12" x2="12" y2="14" />
        <circle cx="12" cy="18" r="1" />
        <line x1="12" y1="15.5" x2="12" y2="17" />
      </svg>
    )
  }
];

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 lg:px-12 bg-transparent relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-4">De Wireframe a <span className="text-[#1C7C7D]/80">Resultados</span></h2>
          <p className="text-white/60 font-medium text-lg max-w-2xl mx-auto">Acompanhe a evolução. O conceito se transforma em uma máquina de vendas.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                className="group relative p-6 bg-brand-cardHover rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-brand-primary/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(28,124,125,0.15)] flex flex-col items-start text-left h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full w-full">
                  <div className="flex justify-center w-full text-brand-primary opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 mb-10">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl font-bold font-sans text-white mb-3 transition-colors">{stat.title}</h3>
                  <p className="text-white/80 group-hover:text-white/95 font-medium text-sm leading-relaxed transition-colors">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
