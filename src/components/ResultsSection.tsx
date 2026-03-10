import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Filter, Star, ShoppingBag, MousePointer2 } from 'lucide-react';

const stats = [
  {
    icon: Filter,
    value: 'Conversão',
    label: 'O funil captura e o sistema processa. Transformamos tráfego em leads qualificados no seu CRM.'
  },
  {
    icon: Star,
    value: 'Autoridade',
    label: 'Solidez institucional em qualquer tela. Transmita confiança e esteja acessível em todo lugar.'
  },
  {
    icon: ShoppingBag,
    value: 'Vendas',
    label: 'O produto vira receita. Checkout fluido e segurança para maximizar cada transação.'
  },
  {
    icon: MousePointer2,
    value: 'Experiência',
    label: 'A jornada se torna tangível. Design de interface completo guiando o usuário ao clique.'
  }
];

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#050505] relative border-y border-white/5 border-t-transparent overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1C7C7D]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-16 lg:p-24 text-center overflow-hidden"
        >
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-white mb-6">De Wireframe<br />a <span className="text-[#1C7C7D]">Resultados</span></h2>
            <p className="text-white/60 font-light text-xl max-w-2xl mx-auto">Acompanhe a evolução. O conceito se transforma em uma máquina de vendas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1C7C7D]/10 flex items-center justify-center mb-6 border border-[#1C7C7D]/20 shadow-[0_0_20px_rgba(28,124,125,0.2)]">
                    <Icon className="w-8 h-8 text-[#1C7C7D]" />
                  </div>
                  <div className="text-3xl font-bold font-sans text-white mb-4">{stat.value}</div>
                  <div className="text-white/50 font-light text-sm leading-relaxed">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
