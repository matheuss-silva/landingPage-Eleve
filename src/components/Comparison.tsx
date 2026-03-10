import React, { useRef, useEffect } from 'react';

const generic = [
  'Templates genéricos e repetitivos.',
  'Design focado apenas no visual, esquecendo a conversão.',
  'Código pesado e lento, penalizando o SEO.',
  'Falta de estratégia digital integrada.'
];

const premium = [
  'Design Exclusivo e Kinetic, focado na sua autoridade.',
  'Ecossistema construído para Máxima Conversão.',
  'Alta Performance: Stack tecnológica moderna (Vue/React).',
  'Consultoria Estratégica Ponta a Ponta.'
];

const Comparison = () => {
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
    <section className="py-24 px-6 lg:px-12 bg-[#0A0A0A] relative border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div ref={setRef} className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4">A ABORDAGEM <span className="text-brand-primary">PREMIUM</span></h2>
          <p className="text-brand-text font-light text-lg">Por que nos destacamos do mercado tradicional.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Generic */}
          <div ref={setRef} className="p-8 md:p-12 bg-brand-bg rounded-3xl border border-white/5 fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </div>
              <h3 className="text-2xl font-bold font-sans text-white/50">Agências Tradicionais</h3>
            </div>
            <ul className="space-y-6">
              {generic.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-brand-text">
                  <span className="mt-1 text-white/20">—</span>
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium */}
          <div ref={setRef} className="p-8 md:p-12 bg-gradient-to-b from-brand-primary/10 to-transparent rounded-3xl border border-brand-primary/30 relative overflow-hidden fade-in-up delay-200">
            <div className="absolute inset-0 bg-brand-primary/5 blur-3xl pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/50 shadow-[0_0_10px_rgba(28,124,125,0.5)]">
                <svg className="w-4 h-4 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3 className="text-2xl font-bold font-sans text-white">Elevation Digital</h3>
            </div>
            <ul className="space-y-6 relative z-10">
              {premium.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white">
                  <svg className="w-5 h-5 flex-shrink-0 text-brand-primary mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
