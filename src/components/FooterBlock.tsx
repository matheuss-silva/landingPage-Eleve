import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";

const supportLinks = [
  { label: "Falar no WhatsApp", href: "#whatsapp" },
  { label: "Ver portfólio", href: "#portfolio" },
  { label: "Voltar ao topo", href: "#home" },
];

const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "Público", href: "#publico" },
  { label: "Expertise", href: "#expertise" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  { label: "Falar no WhatsApp", href: "#whatsapp", icon: MessageCircle },
  { label: "Instagram", href: "#", icon: Instagram },
];

const columnMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const FooterBlock = () => {
  return (
    <footer
      id="contato"
      className="relative overflow-hidden border-t border-white/10 bg-brand-bg"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(28,124,125,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(159,220,111,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-9 pb-5 sm:px-6 md:pt-12 md:pb-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
          <motion.div
            {...columnMotion}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <div className="flex flex-col items-center gap-4 text-center md:grid md:grid-cols-[5.25rem_minmax(0,1fr)] md:items-start md:gap-5 md:text-left">
              <a
                href="#home"
                className="inline-flex shrink-0 items-center justify-center md:pt-1"
              >
                <img
                  src="/logo.png"
                  alt="Elevation Digital Logo"
                  className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.02] md:h-14"
                />
              </a>

              <p className="max-w-xl font-sans text-[0.96rem] font-normal leading-[1.7] text-white/72 sm:text-base">
                A Elevation Digital cria soluções digitais sob medida para
                destacar sua marca no ambiente online com estratégia, inovação e
                performance.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:justify-start">
              <a
                href="#portfolio"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 py-2.5 text-sm font-bold text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(28,124,125,0.18)] sm:px-5"
              >
                <span className="pointer-events-none absolute -inset-px rounded-full bg-[conic-gradient(from_0deg,rgba(255,255,255,0.04)_0deg,rgba(255,255,255,0.04)_240deg,rgba(28,124,125,0.95)_300deg,rgba(158,220,111,0.95)_332deg,rgba(255,255,255,0.04)_360deg)] animate-[spin_8s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite]" />
                <span className="pointer-events-none absolute inset-[1px] rounded-full bg-brand-cardHover" />
                <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary/0 via-brand-primary/12 to-brand-accent/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/10 blur-md opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
                <span className="relative z-10 inline-flex items-center gap-2 font-sans tracking-wide">
                  Ver portfólio
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              </a>

              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-brand-cardHover text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/50 hover:bg-brand-primary/10 hover:text-white hover:shadow-[0_8px_30px_rgb(28,124,125,0.15)] sm:h-11 sm:w-11"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <motion.div
              {...columnMotion}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <h3 className="mb-4 font-sans text-lg font-bold text-white sm:text-xl">
                Suporte
              </h3>
              <nav className="space-y-3">
                {supportLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-[0.96rem] font-medium text-white/70 transition-colors duration-300 hover:text-white sm:text-[1.02rem]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                ))}
              </nav>
            </motion.div>

            <motion.div
              {...columnMotion}
              transition={{ duration: 0.55, delay: 0.14 }}
            >
              <h3 className="mb-4 font-sans text-lg font-bold text-white sm:text-xl">
                Navegação
              </h3>
              <nav className="space-y-3">
                {companyLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-[0.96rem] font-medium text-white/70 transition-colors duration-300 hover:text-white sm:text-[1.02rem]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 pr-20 text-[11px] font-mono uppercase leading-relaxed tracking-[0.14em] text-white/45 sm:pr-24 md:mt-7 md:flex-row md:items-center md:justify-between md:pr-0 md:text-xs md:tracking-[0.18em]">
          <span>Elevation Digital © 2026. Todos os direitos reservados.</span>
          <span className="hidden md:inline">Design autoral. Performance real.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
