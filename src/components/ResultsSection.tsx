import React, { useRef, useEffect } from 'react';
import { LayoutTemplate, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Wireframe & Estratégia',
    description: 'Mapeamento arquitetural, UX/UI e fluxos de navegação desenhados para retenção.',
    icon: LayoutTemplate
  },
  {
    title: 'Desenvolvimento Kinetic',
    description: 'Implementação pixel-perfect com Vue/React, focada em animações e performance.',
    icon: Code2
  },
  {
    title: 'Lançamento & Escala',
    description: 'Deploy otimizado e estratégias de conversão para dominância de mercado.',
    icon: Rocket
  }
];

const ResultsSection = () => {
  const observeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    observeRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (el: HTMLElement | null) => {
    if (el && !observeRefs.current.includes(el)) {
      observeRefs.current.push(el);
    }
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-brand-bg relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={setRef} className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">DO CÓDIGO AOS <span className="text-brand-primary">RESULTADOS</span></h2>
          <p className="text-brand-text font-light text-lg">Processo transparente focado em entregar ROAS absoluto.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                ref={setRef}
                className="relative z-10 p-8 bg-brand-card rounded-2xl border border-white/5 fade-in-up text-center" 
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto bg-brand-bg rounded-2xl border border-white/10 mb-6 flex items-center justify-center text-brand-primary shadow-[0_0_20px_rgba(28,124,125,0.1)] relative">
                  <span className="absolute -top-3 -right-3 text-xs font-mono bg-brand-primary text-black px-2 py-0.5 rounded shadow-lg">{'0' + (index + 1)}</span>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-sans mb-3">{step.title}</h3>
                <p className="text-brand-text text-sm font-light">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
