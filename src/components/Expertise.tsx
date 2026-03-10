import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const expertiseItems = [
  {
    title: 'Landing Page',
    description: 'Páginas de alta performance desenhadas com psicologia de consumo. Transforme visitantes em leads qualificados instantaneamente.',
    tags: ['[ CONVERSÃO ]', '[ LEADS ]']
  },
  {
    title: 'Site Institucional',
    description: 'A vitrine digital da sua marca. Transmita solidez, autoridade e profissionalismo com um design 100% autoral e exclusivo.',
    tags: ['[ AUTORIDADE ]', '[ PRESENÇA ]']
  },
  {
    title: 'E-commerce',
    description: 'Lojas virtuais otimizadas para venda. Experiência de compra fluida, checkout seguro e design focado em aumentar seu ticket médio.',
    tags: ['[ VENDAS ]', '[ RETENÇÃO ]']
  },
  {
    title: 'One-Page',
    description: 'Conte sua história em um único scroll. Ideal para lançamentos, portfólios ou produtos específicos que exigem foco total.',
    tags: ['[ IMPACTO ]', '[ OBJETIVIDADE ]']
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
          className="mb-16"
        >
          <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block font-bold">[ EXPERTISE ]</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold">SOLUÇÕES DIGITAIS<br /><span className="text-white/50">SOB MEDIDA</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertiseItems.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 md:p-10 bg-[#0A0A0A] rounded-2xl border border-white/5 overflow-hidden transition-colors hover:border-brand-primary/50 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-wrap gap-2 mb-8">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-xs text-white/70">{tag}</span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-sans font-bold mb-4 group-hover:text-brand-primary transition-colors">{exp.title}</h3>
                <p className="text-brand-text mb-8 flex-grow font-light leading-relaxed text-lg">{exp.description}</p>
                
                <a href="#contato" className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white group/btn w-fit">
                  Solicitar Proposta
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
