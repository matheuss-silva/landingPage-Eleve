import React, { useRef, useEffect } from 'react';
import { Building2, ShoppingCart, User, Briefcase, Users, LayoutTemplate } from 'lucide-react';

const audience = [
  {
    title: 'Empresas Consolidadas',
    description: 'Que buscam modernização e autoridade digital.',
    icon: Building2
  },
  {
    title: 'Infoprodutores',
    description: 'Que precisam de High-Converting Landing Pages.',
    icon: LayoutTemplate
  },
  {
    title: 'Criadores de Conteúdo',
    description: 'Que desejam um hub central profissional.',
    icon: Users
  },
  {
    title: 'Profissionais Autônomos',
    description: 'Médicos, Advogados que exigem uma imagem premium.',
    icon: User
  },
  {
    title: 'Pessoas Jurídicas (PJ)',
    description: 'Negócios que entendem que o amadorismo custa caro.',
    icon: Briefcase
  },
  {
    title: 'E-commerce & Varejo',
    description: 'Lojas que buscam experiência de compra fluida e vendas.',
    icon: ShoppingCart
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
        <div ref={setRef} className="mb-16 fade-in-up text-center">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">Para Quem a <span className="text-brand-primary">Keelon</span> Constrói?</h2>
          <p className="text-brand-text font-light text-xl">Se você leva seu negócio a sério, nós somos o seu parceiro técnico.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                ref={setRef}
                className="group relative p-8 bg-[#0A0A0A] rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-brand-primary/40 hover:-translate-y-1 fade-in-up" 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 mb-6 text-brand-primary group-hover:bg-brand-primary/10 transition-colors duration-500">
                    <Icon className="w-5 h-5" />
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
