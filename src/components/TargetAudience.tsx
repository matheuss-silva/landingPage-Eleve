import React, { useRef, useEffect } from 'react';
import { Building2, ShoppingCart, User, Briefcase, Users, LayoutTemplate } from 'lucide-react';

const audience = [
  {
    title: 'Empresas Consolidadas',
    description: 'Que buscam modernizar sua presença digital e fortalecer sua autoridade no mercado.',
    icon: Building2
  },
  {
    title: 'Infoprodutores',
    description: 'Que precisam de landing pages estratégicas para vender mais e escalar suas ofertas.',
    icon: LayoutTemplate
  },
  {
    title: 'Criadores de Conteúdo',
    description: 'Que desejam uma presença digital profissional para apresentar, organizar e monetizar seu trabalho.',
    icon: Users
  },
  {
    title: 'Profissionais Autônomos',
    description: 'Como médicos, advogados e consultores que precisam transmitir credibilidade e percepção de alto valor.',
    icon: User
  },
  {
    title: 'Empresas e Prestadores de Serviço',
    description: 'Negócios que precisam transmitir profissionalismo, gerar confiança e conquistar mais oportunidades.',
    icon: Briefcase
  },
  {
    title: 'E-commerce e Varejo',
    description: 'Marcas que buscam uma experiência de compra mais fluida, estratégica e orientada à conversão.',
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
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-white">Para Quem a <span className="text-transparent bg-clip-text bg-brand-gradient">Elevation</span> é ideal</h2>
          <p className="text-white/80 font-medium text-xl">Para negócios que entendem que uma presença digital bem construída gera percepção, confiança e resultados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                ref={setRef}
                className="group relative p-6 bg-brand-cardHover rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-brand-primary/60 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(28,124,125,0.15)] fade-in-up" 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20 mb-5 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-sans font-bold mb-2 text-white group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-white/80 group-hover:text-white/95 text-sm font-medium leading-relaxed transition-colors">{item.description}</p>
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
