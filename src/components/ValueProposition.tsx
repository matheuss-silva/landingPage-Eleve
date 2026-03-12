import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Target, TrendingUp, MonitorSmartphone } from 'lucide-react';
import Globe from './Globe';

const benefits = [
  {
    title: 'Credibilidade Imediata',
    description: 'Mais autoridade, confiança e valor para sua marca.',
    icon: Award,
  },
  {
    title: 'Base Estratégica para Tráfego',
    description: 'Páginas pensadas para converter, não só receber acessos.',
    icon: Target,
  },
  {
    title: 'Presença que Trabalha por Você',
    description: 'Seu site apresenta, convence e apoia suas vendas.',
    icon: TrendingUp,
  },
  {
    title: 'Experiência Clara e Organizada',
    description: 'Estrutura que guia o usuário e facilita decisões.',
    icon: MonitorSmartphone,
  },
];

const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 lg:px-12 bg-brand-bg relative border-t border-white/5 overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 text-white">
              Por que um site <span className="text-transparent bg-clip-text bg-brand-gradient">Elevation</span> faz diferença?
            </h2>
            <p className="text-white/80 text-base font-medium">
              Não entregamos apenas design e desenvolvimento. Criamos páginas estratégicas para fortalecer sua presença digital, gerar confiança e apoiar seu crescimento.
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
                  className="flex items-start gap-5 group"
                >
                  <div className="mt-1 w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center border border-brand-primary/30 text-brand-primary flex-shrink-0 shadow-[0_0_15px_rgba(28,124,125,0.2)] transition-all duration-300">
                    <Icon className="w-5 h-5 group-hover:animate-[pulse_1s_ease-in-out_infinite]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-sans mb-1 text-white">{item.title}</h4>
                    <p className="text-white/70 font-medium text-xs md:text-sm">{item.description}</p>
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