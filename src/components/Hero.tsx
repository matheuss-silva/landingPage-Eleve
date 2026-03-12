import React, { useRef, useState, useEffect } from 'react';
import NetworkBackground from './NetworkBackground';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    setIsHovering(true);
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

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

    return () => {
      observer.disconnect();
    };
  }, []);

  const setRef = (el: HTMLElement | null) => {
    if (el && !observeRefs.current.includes(el)) {
      observeRefs.current.push(el);
    }
  };

  return (
    <section id="home" ref={sectionRef}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
    >
      <NetworkBackground />
      {/* Overlay to fade the grid at the edges/center */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)] z-[1] pointer-events-none">
      </div>

      {/* Mouse follow glow */}
      <div
        className={`absolute pointer-events-none z-[2] w-[400px] h-[400px] rounded-full blur-[100px] transition-opacity duration-300 ${isHovering ? 'opacity-80' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle, rgba(28,124,125,0.15) 0%, transparent 70%)',
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`
        }}>
      </div>

      {/* Content (z-10 for keeping it above background) */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Tag */}
        <div
          ref={setRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-[#A1A1AA] text-xs font-mono tracking-widest uppercase fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
DESIGN WEB PREMIUM
        </div>

        {/* Main Title */}
        <h1
          ref={setRef}
          className="text-5xl md:text-7xl lg:text-9xl font-sans font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1] fade-in-up delay-100">
          <span className="text-white block">O FUTURO</span>
          <span className="text-transparent bg-clip-text bg-brand-gradient">COMEÇA
            AGORA</span>
        </h1>

        {/* Subtitle */}
        <p ref={setRef} className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-12 font-sans font-light fade-in-up delay-200">
          Desenvolvemos páginas de alta performance para negócios que querem mais autoridade, mais leads e mais vendas.
        </p>

        {/* CTAs */}
        <div ref={setRef} className="flex flex-col sm:flex-row items-center gap-6 fade-in-up delay-300">
          <a href="#contato"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-black bg-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-brand-primary hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(28,124,125,0.4)]">
            <span className="relative z-10 font-sans tracking-wide">Elevar Meu Nível</span>
          </a>

          <a href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white/70 bg-transparent border border-white/20 rounded-full transition-all duration-300 hover:border-brand-primary/80 hover:text-white hover:shadow-[0_0_20px_rgba(28,124,125,0.2)] hover:bg-brand-primary/5 w-full sm:w-auto">
            <span className="font-sans font-semibold tracking-wide">Ver Portfólio</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
