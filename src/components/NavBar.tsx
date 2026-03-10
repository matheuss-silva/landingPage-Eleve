import React from 'react';
import GeometricLogo from './GeometricLogo';

const NavBar = () => {
  return (
    <div className="fixed top-6 left-0 w-full z-50 pointer-events-none flex justify-center px-4">
      {/* Desktop Logo (Outside Card, far left) */}
      <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden md:flex items-center pointer-events-auto">
        <a href="#home" className="flex items-center gap-3 group">
          <GeometricLogo size={40} />
          <span className="font-sans font-bold text-xl tracking-wide group-hover:text-brand-primary transition-colors">Elevation Digital</span>
        </a>
      </div>

      {/* The Nav Pill */}
      <nav
        className="pointer-events-auto flex items-center px-3 py-2 gap-4 md:gap-10 backdrop-blur-md bg-[#0A0A0A]/90 border border-white/10 rounded-full shadow-2xl">
        {/* Mobile Logo (Inside Card) */}
        <div className="flex md:hidden items-center pl-2 flex-shrink-0">
          <a href="#home" className="flex items-center gap-2">
            <GeometricLogo size={28} />
            <span className="font-sans font-bold text-sm tracking-wide">Elevation</span>
          </a>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 md:gap-8 text-xs font-sans font-medium text-white/50 tracking-wider">
          <a href="#home" className="hidden md:block hover:text-white transition-colors">HOME</a>
          <a href="#expertise" className="hover:text-white transition-colors">EXPERTISE</a>
          <a href="#contato" className="hover:text-white transition-colors">CONTATO</a>
        </div>

        {/* CTA Button */}
        <div>
          <a href="#portfolio"
            className="relative inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-2.5 text-sm font-bold text-white bg-[#0f0f0f] border border-white/5 rounded-full overflow-hidden transition-all duration-300 hover:bg-[#1a1a1a]">
            <span className="relative z-10 font-sans tracking-wide">Portfólio</span>

            {/* Bottom Glow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-brand-primary blur-sm opacity-40"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-white opacity-60"></div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
