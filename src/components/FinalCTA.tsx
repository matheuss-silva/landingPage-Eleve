import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-brand-bg px-5 py-24 text-center sm:px-6 md:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,124,125,0.1)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10 mx-auto w-full max-w-4xl" ref={ref}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
           transition={{ duration: 0.8 }}
        >
          <span className="mb-5 block font-mono text-xs font-bold uppercase tracking-[0.28em] text-brand-primary sm:mb-6 sm:text-sm">
            [ HORA DA DECISÃO ]
          </span>
          <h2 className="mx-auto mb-6 max-w-[16ch] font-sans text-4xl font-bold leading-[1.1] tracking-tight text-white sm:mb-8 sm:max-w-[12ch] sm:text-5xl md:max-w-none md:text-6xl md:leading-none lg:text-8xl">
            Seu Concorrente Já Está{" "}
            <span className="text-transparent bg-clip-text bg-brand-gradient whitespace-nowrap">Se Movendo.</span>{" "}
            E Você?
          </h2>
          <p className="mx-auto mb-10 max-w-[24rem] text-lg font-light leading-relaxed text-brand-text sm:mb-12 sm:max-w-2xl sm:text-xl">
            Vamos discutir o futuro do seu projeto agora mesmo.
          </p>

          <a href="#whatsapp" className="group relative inline-flex w-full max-w-[21rem] items-center justify-center overflow-hidden rounded-full bg-[#00E676] px-6 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(0,230,118,0.4)] hover:shadow-[0_0_40px_rgba(0,230,118,0.6)] sm:w-auto sm:max-w-none sm:px-10 sm:py-5">
            <span className="relative z-10 flex items-center gap-2.5 whitespace-nowrap font-sans text-[0.95rem] tracking-wide sm:gap-3 sm:text-lg">
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              Iniciar Conversa no WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
