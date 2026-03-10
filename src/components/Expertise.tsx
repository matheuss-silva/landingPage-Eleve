import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const expertiseItems = [
  {
    title: 'Landing Page',
    description: 'Páginas de alta performance desenhadas com psicologia de consumo. Transforme visitantes em leads qualificados instantaneamente.',
    icon: (
      <svg className="w-16 h-16 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
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
      <svg className="w-16 h-16 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
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
      <svg className="w-16 h-16 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
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
      <svg className="w-16 h-16 text-[#1C7C7D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="4" r="1.5" fill="none" />
        <circle cx="12" cy="20" r="1.5" fill="none" />
        <line x1="12" y1="6" x2="12" y2="10" strokeDasharray="2 2" />
        <line x1="12" y1="14" x2="12" y2="18" strokeDasharray="2 2" />
      </svg>
    )
  }
];

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 px-6 lg:px-12 bg-brand-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block font-bold">NOSSA EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white">Soluções Digitais<br /><span className="text-white/60 font-light">Sob Medida</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-[#080808] rounded-2xl border border-white/5 overflow-hidden transition-colors hover:border-brand-primary/50 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-12 flex justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {exp.icon}
                </div>
                
                <h3 className="text-xl font-sans font-bold mb-4 text-white group-hover:text-brand-primary transition-colors">{exp.title}</h3>
                <p className="text-white/70 mb-8 flex-grow font-medium leading-relaxed text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
