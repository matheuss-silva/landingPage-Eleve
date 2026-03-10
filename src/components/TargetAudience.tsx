import React, { useRef, useEffect } from 'react';
import { Briefcase, Building2, Store, Rocket } from 'lucide-react';

const audience = [
  {
    title: 'Startups & Tech',
    description: 'Empresas de base tecnológica buscando acelerar o crescimento e dominar o mercado com presença digital agressiva.',
    icon: Rocket
  },
  {
    title: 'Corporates',
    description: 'Grandes corporações que necessitam modernizar sua atuação digital com arquitetura escalável e design premium.',
    icon: Building2
  },
  {
    title: 'E-commerce',
    description: 'Operações de varejo digital focadas em alta conversão, retenção e experiência de compra imersiva.',
    icon: Store
  },
  {
    title: 'Infoprodutores',
    description: 'Especialistas e criadores de conteúdo que precisam de funis de alta performance e autoridade inquestionável.',
    icon: Briefcase
  }
];

const TargetAudience = () => {
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
    <section id="publico" className="py-24 px-6 lg:px-12 bg-brand-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div ref={setRef} className="mb-16 fade-in-up">
          <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">[ PÚBLICO-ALVO ]</span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold">PARA QUEM É O<br /><span className="text-white/50">NEURALFLOW?</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                ref={setRef}
                className="group relative p-8 bg-brand-card rounded-2xl border border-white/5 overflow-hidden transition-colors hover:border-brand-primary/50 fade-in-up" 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center border border-white/10 mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-sans font-bold mb-3">{item.title}</h3>
                  <p className="text-brand-text text-sm font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
