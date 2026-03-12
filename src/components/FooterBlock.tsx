import React from 'react';

const FooterBlock = () => {
  return (
    <footer id="contato" className="w-full py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-brand-text text-sm font-mono bg-black px-6 lg:px-12 z-10 relative">
      <div className="flex items-center gap-2 mb-4 md:mb-0 text-center md:text-left">
        <span>Elevation Digital © 2026. Todos os direitos reservados.</span>
      </div>

    </footer>
  );
};

export default FooterBlock;
