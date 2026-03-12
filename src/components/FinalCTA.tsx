import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 lg:px-12 bg-brand-bg relative overflow-hidden flex flex-col items-center justify-center text-center">
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
            Seu Concorrente Já Está <span className="text-transparent bg-clip-text bg-brand-gradient">Se Movendo.</span> E Você?
          </h2>
          <p className="text-brand-text font-light text-xl mb-12 max-w-2xl mx-auto">
            Vamos discutir o futuro do seu projeto agora mesmo.
          </p>

          <a href="#whatsapp" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-black bg-[#00E676] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,230,118,0.4)] hover:shadow-[0_0_40px_rgba(0,230,118,0.6)]">
            <span className="relative z-10 flex items-center gap-3 font-sans text-lg tracking-wide">
              <MessageCircle className="w-6 h-6" />
              Iniciar Conversa no WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
