import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const expertiseItems = [
  {
    title: 'Landing Page',
    description: 'Páginas de alta performance desenhadas com psicologia de consumo. Transforme visitantes em leads qualificados instantaneamente.',
    icon: (
      <svg className="w-20 h-20 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M4 6h16l-4 8h-8l-4-8z" />
        <path d="M8 14l2 4h4l2-4" />
        <rect x="11" y="18" width="2" height="2" />
        <line x1="4" y1="6" x2="20" y2="6" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    title: 'Site Institucional',
    description: 'A vitrine digital da sua marca. Transmita solidez, autoridade e profissionalismo com um design 100% autoral e exclusivo.',
    icon: (
      <svg className="w-20 h-20 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="7" y="12" width="10" height="8" />
        <rect x="9" y="8" width="6" height="4" />
        <rect x="11" y="4" width="2" height="4" />
        <line x1="6" y1="20" x2="18" y2="20" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    title: 'E-commerce',
    description: 'Lojas virtuais otimizadas para venda. Experiência de compra fluida, checkout seguro e design focado em aumentar seu ticket médio.',
    icon: (
      <svg className="w-20 h-20 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M12 4l-8 4v8l8 4 8-4V8l-8-4z" />
        <path d="M12 4v16" strokeWidth="0.5" />
        <path d="M4 8l8 4 8-4" strokeWidth="0.5" />
        <path d="M12 12l8-4" strokeWidth="0.5" />
      </svg>
    )
  },
  {
    title: 'One-Page',
    description: 'Conte sua história em um único scroll. Ideal para lançamentos, portfólios ou produtos específicos que exigem foco total.',
    icon: (
      <svg className="w-20 h-20 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="4" r="1.5" fill="none" />
        <circle cx="12" cy="20" r="1.5" fill="none" />
        <line x1="12" y1="6" x2="12" y2="10" strokeDasharray="2 2" />
        <line x1="12" y1="14" x2="12" y2="18" strokeDasharray="2 2" />
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="relative border-t border-white/5 bg-brand-bg px-5 py-20 sm:px-6 lg:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center lg:mb-16"
        >
          <span className="mb-4 block font-mono text-xs font-bold uppercase tracking-[0.28em] text-brand-primary sm:text-sm">NOSSA EXPERTISE</span>
          <h2 className="text-3xl font-sans font-bold text-white sm:text-4xl md:text-5xl">Soluções Digitais<br /><span className="text-white/60 font-light">Sob Medida</span></h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {expertiseItems.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-brand-cardHover p-5 transition-all duration-300 hover:border-brand-primary/60 hover:shadow-[0_8px_30px_rgb(28,124,125,0.15)] sm:p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-brand-primary/10 blur-2xl transition-transform duration-500 group-hover:scale-125"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-7 flex justify-center text-brand-primary opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 sm:mb-8">
                  {exp.icon}
                </div>
                
                <h3 className="mb-3 text-lg font-sans font-bold text-white transition-colors sm:text-xl">{exp.title}</h3>
                <p className="mb-2 flex-grow text-sm font-medium leading-relaxed text-white/76 transition-colors group-hover:text-white/95">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
