import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// SVG Paths for Expertise
const expIcons = [
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M4 6h16l-4 8h-8l-4-8z" /><path d="M8 14l2 4h4l2-4" /><rect x="11" y="18" width="2" height="2" /><line x1="4" y1="6" x2="20" y2="6" strokeWidth="0.5" /></svg>,
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="7" y="12" width="10" height="8" /><rect x="9" y="8" width="6" height="4" /><rect x="11" y="4" width="2" height="4" /><line x1="6" y1="20" x2="18" y2="20" strokeWidth="0.5" /></svg>,
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 4l-8 4v8l8 4 8-4V8l-8-4z" /><path d="M12 4v16" strokeWidth="0.5" /><path d="M4 8l8 4 8-4" strokeWidth="0.5" /><path d="M12 12l8-4" strokeWidth="0.5" /></svg>,
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="2" /><circle cx="12" cy="4" r="1.5" fill="none" /><circle cx="12" cy="20" r="1.5" fill="none" /><line x1="12" y1="6" x2="12" y2="10" strokeDasharray="2 2" /><line x1="12" y1="14" x2="12" y2="18" strokeDasharray="2 2" /></svg>
];

// SVG Paths for Results
const resIcons = [
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M4 4h16l-6 8v6l-4 2v-8L4 4z" /><path d="M10 12h4" /><rect x="11" y="20" width="2" height="2" /><path d="M12 2v2" strokeDasharray="1 1" /><circle cx="12" cy="16" r="0.5" /></svg>,
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><rect x="8" y="8" width="8" height="14" /><rect x="10" y="4" width="4" height="4" /><rect x="4" y="14" width="3" height="5" /><path d="M17 12l2-1 2 1v3c0 2-2 4-2 4s-2-2-2-4v-3z" /><path d="M19 14l-1 1-1-1" /></svg>,
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M10 14l-6-3V5l6 3v6z" /><path d="M10 14l6-3V5l-6 3v6z" /><path d="M4 5l6-3 6 3" /><rect x="14" y="6" width="8" height="5" rx="1" /><path d="M14 8h8" /><circle cx="10" cy="8" r="1.5" /><circle cx="17" cy="9" r="0.5" /></svg>,
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><rect x="5" y="4" width="14" height="16" rx="1" /><path d="M5 8h14" /><circle cx="7" cy="6" r="0.5" /><circle cx="9" cy="6" r="0.5" /><rect x="8" y="10" width="8" height="2" rx="0.5" /><rect x="10" y="14" width="4" height="1.5" rx="0.5" /><line x1="12" y1="12" x2="12" y2="14" /><circle cx="12" cy="18" r="1" /><line x1="12" y1="15.5" x2="12" y2="17" /></svg>
];

const data = [
  {
    expTitle: 'Landing Page', expDesc: 'Páginas de alta performance desenhadas com psicologia de consumo. Transforme visitantes em leads qualificados instantaneamente.',
    resTitle: 'Conversão', resDesc: 'O funil captura e o sistema processa. Transformamos tráfego em leads qualificados no seu CRM.'
  },
  {
    expTitle: 'Site Institucional', expDesc: 'A vitrine digital da sua marca. Transmita solidez, autoridade e profissionalismo com um design 100% autoral e exclusivo.',
    resTitle: 'Autoridade', resDesc: 'Solidez institucional em qualquer tela. Transmita confiança e esteja acessível em todo lugar.'
  },
  {
    expTitle: 'E-commerce', expDesc: 'Lojas virtuais otimizadas para venda. Experiência de compra fluida, checkout seguro e design focado em aumentar seu ticket médio.',
    resTitle: 'Vendas', resDesc: 'O produto vira receita. Checkout fluido e segurança para maximizar cada transação.'
  },
  {
    expTitle: 'One-Page', expDesc: 'Conte sua história em um único scroll. Ideal para lançamentos, portfólios ou produtos específicos que exigem foco total.',
    resTitle: 'Experiência', resDesc: 'A jornada se torna tangível. Design de interface completo guiando o usuário ao clique.'
  }
];

export default function ExpertResults() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll over a tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const expOpacity = useTransform(scrollYProgress, [0.35, 0.45], [1, 0]);
  const resOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  
  // Icon animation
  const iconScale = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [1, 1, 0.8, 1, 1]);
  const iconExpOp = useTransform(scrollYProgress, [0.4, 0.55], [1, 0]);
  const iconResOp = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  
  // Background gradient shift
  const bgOpacityExp = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const bgOpacityRes = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className="h-[250vh] bg-transparent relative border-t border-white/5">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden py-12 px-6 lg:px-12">
        
        {/* Glow behind everything */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-[150px]">
           <motion.div style={{ opacity: bgOpacityExp }} className="absolute inset-0 bg-white/5" />
           <motion.div style={{ opacity: bgOpacityRes }} className="absolute inset-0 bg-[#1C7C7D]/10" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col h-full justify-center">
          
          {/* Header area (Crossfading) */}
          <div className="relative h-24 md:h-32 mb-8 md:mb-12 flex justify-center text-center">
            {/* Expertise Header */}
            <motion.div style={{ opacity: expOpacity }} className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block font-bold">NOSSA EXPERTISE</span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans font-bold text-white mb-2 leading-tight">Soluções Digitais <span className="text-[#1C7C7D]">Sob Medida</span></h2>
            </motion.div>
            {/* Results Header */}
            <motion.div style={{ opacity: resOpacity }} className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans font-bold text-white mb-2 leading-tight">De Wireframe a <span className="text-[#1C7C7D]">Resultados</span></h2>
              <p className="text-white/60 font-medium text-lg max-w-2xl mx-auto">Acompanhe a evolução. O conceito se transforma em uma máquina de vendas.</p>
            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {data.map((item, index) => (
              <div key={index} className="relative min-h-[400px] rounded-2xl border border-white/5 bg-[#080808] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 p-8 flex flex-col w-full h-full">
                  {/* Animating Icon Area */}
                  <motion.div 
                    style={{ scale: iconScale }} 
                    className="flex justify-center w-full mb-10"
                  >
                    <div className="relative w-20 h-20 grid place-items-center">
                      <motion.div style={{ opacity: iconExpOp }} className="col-start-1 row-start-1 flex items-center justify-center text-[#1C7C7D] w-16 h-16">
                        {expIcons[index]}
                      </motion.div>
                      <motion.div style={{ opacity: iconResOp }} className="col-start-1 row-start-1 flex items-center justify-center text-[#1C7C7D] w-20 h-20">
                        {resIcons[index]}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Text Morph Area (CSS Grid ensures parents stretch to fit child automatically) */}
                  <div className="grid w-full flex-grow items-start">
                    {/* Expertise Text */}
                    <motion.div style={{ opacity: expOpacity }} className="col-start-1 row-start-1 flex flex-col items-start text-left pointer-events-none">
                      <h3 className="text-xl font-bold font-sans text-white mb-3">{item.expTitle}</h3>
                      <p className="text-white/60 font-medium text-sm leading-relaxed">{item.expDesc}</p>
                    </motion.div>

                    {/* Results Text */}
                    <motion.div style={{ opacity: resOpacity }} className="col-start-1 row-start-1 flex flex-col items-start text-left pointer-events-none">
                      <h3 className="text-xl font-bold font-sans text-white mb-3 transition-colors">{item.resTitle}</h3>
                      <p className="text-white/80 font-medium text-sm leading-relaxed">{item.resDesc}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
