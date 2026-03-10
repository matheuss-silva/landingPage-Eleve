import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Target, TrendingUp, MonitorSmartphone } from 'lucide-react';
import Globe from './Globe';

const benefits = [
  {
    title: 'Credibilidade Instantânea',
    description: 'Sua marca passa de "mais uma" para "líder de mercado".',
    icon: Award,
  },
  {
    title: 'Fundação para Ads',
    description: 'Destinos otimizados para converter, não apenas receber cliques.',
    icon: Target,
  },
  {
    title: 'Vendedor 24/7',
    description: 'Um site que explica, convence e vende enquanto você dorme.',
    icon: TrendingUp,
  },
  {
    title: 'Centralização',
    description: 'Um Link na Bio que realmente impressiona e organiza seu ecossistema.',
    icon: MonitorSmartphone,
  },
];

const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Copy & Benefits */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-white">
              Por que um site <span className="text-brand-primary">Elevation</span> muda o jogo?
            </h2>
            <p className="text-white/80 text-lg font-medium">
              Não entregamos apenas código. Entregamos resultados tangíveis e conectamos você ao mundo.
            </p>
          </div>

          <div className="space-y-8">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-5"
                >
                  <div className="mt-1 w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center border border-brand-primary/30 text-brand-primary flex-shrink-0 shadow-[0_0_15px_rgba(28,124,125,0.2)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-sans mb-1 text-white">{item.title}</h4>
                    <p className="text-white/70 font-medium text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side: Interactive 3D Globe */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          className="relative h-[400px] lg:h-[600px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          <Globe />
        </motion.div>

      </div>
    </section>
  );
};

export default ValueProposition;
