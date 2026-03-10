import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 lg:px-12 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,124,125,0.1)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-6 block font-bold">
            [ HORA DA DECISÃO ]
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-sans font-bold text-white mb-8 tracking-tighter leading-none">
            Seu Concorrente Já Está <span className="text-brand-primary">Se Movendo.</span> E Você?
          </h2>
          <p className="text-brand-text font-light text-xl mb-12 max-w-2xl mx-auto">
            Vamos discutir o futuro do seu projeto agora mesmo.
          </p>

          <a href="#whatsapp" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white bg-[#1C7C7D] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(28,124,125,0.4)]">
            <span className="relative z-10 flex items-center gap-3 font-sans text-lg tracking-wide">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Iniciar Conversa no WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
