import React, { useRef, useEffect } from 'react';

const FooterBlock = () => {
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
    <section id="contato" className="py-24 px-6 lg:px-12 bg-black relative border-t border-white/10 overflow-hidden flex flex-col items-center justify-center text-center">



      {/* Minimal Footer */}
      <footer className="w-full mt-32 pt-8 border-t border-white/10 flex items-center justify-between text-brand-text text-sm font-mono relative z-10 px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <span>Keelon © 2026. Todos os direitos reservados.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
        </div>
      </footer>
    </section>
  );
};

export default FooterBlock;
