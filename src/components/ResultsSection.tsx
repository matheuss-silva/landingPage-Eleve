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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-transparent px-5 py-20 sm:px-6 lg:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center lg:mb-16"
        >
          <h2 className="mb-4 text-3xl font-sans font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">De Wireframe a <span className="text-[#1C7C7D]/80">Resultados</span></h2>
          <p className="mx-auto max-w-2xl text-base font-medium text-white/60 sm:text-lg">Acompanhe a evolução. O conceito se transforma em uma máquina de vendas.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map((stat, index) => {
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative flex h-full flex-col items-start overflow-hidden rounded-[1.6rem] border border-white/10 bg-brand-cardHover p-5 text-left transition-all duration-300 hover:border-brand-primary/60 hover:shadow-[0_8px_30px_rgb(28,124,125,0.15)] sm:p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-brand-primary/10 blur-2xl transition-transform duration-500 group-hover:scale-125"></div>
                <div className="relative z-10 flex flex-col h-full w-full">
                  <div className="mb-7 flex w-full justify-center text-brand-primary opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 sm:mb-8">
                    {stat.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold font-sans text-white transition-colors sm:text-xl">{stat.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-white/76 transition-colors group-hover:text-white/95">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
