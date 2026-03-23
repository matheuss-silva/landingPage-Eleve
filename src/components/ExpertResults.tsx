import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

const expIcons = [
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <path d="M4 6h16l-4 8h-8l-4-8z" />
    <path d="M8 14l2 4h4l2-4" />
    <rect x="11" y="18" width="2" height="2" />
    <line x1="4" y1="6" x2="20" y2="6" strokeWidth="0.5" />
  </svg>,
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <rect x="7" y="12" width="10" height="8" />
    <rect x="9" y="8" width="6" height="4" />
    <rect x="11" y="4" width="2" height="4" />
    <line x1="6" y1="20" x2="18" y2="20" strokeWidth="0.5" />
  </svg>,
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <path d="M12 4l-8 4v8l8 4 8-4V8l-8-4z" />
    <path d="M12 4v16" strokeWidth="0.5" />
    <path d="M4 8l8 4 8-4" strokeWidth="0.5" />
    <path d="M12 12l8-4" strokeWidth="0.5" />
  </svg>,
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="4" r="1.5" fill="none" />
    <circle cx="12" cy="20" r="1.5" fill="none" />
    <line x1="12" y1="6" x2="12" y2="10" strokeDasharray="2 2" />
    <line x1="12" y1="14" x2="12" y2="18" strokeDasharray="2 2" />
  </svg>,
];

const resIcons = [
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    <path d="M4 4h16l-6 8v6l-4 2v-8L4 4z" />
    <path d="M10 12h4" />
    <rect x="11" y="20" width="2" height="2" />
    <path d="M12 2v2" strokeDasharray="1 1" />
    <circle cx="12" cy="16" r="0.5" />
  </svg>,
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    <rect x="8" y="8" width="8" height="14" />
    <rect x="10" y="4" width="4" height="4" />
    <rect x="4" y="14" width="3" height="5" />
    <path d="M17 12l2-1 2 1v3c0 2-2 4-2 4s-2-2-2-4v-3z" />
    <path d="M19 14l-1 1-1-1" />
  </svg>,
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    <path d="M10 14l-6-3V5l6 3v6z" />
    <path d="M10 14l6-3V5l-6 3v6z" />
    <path d="M4 5l6-3 6 3" />
    <rect x="14" y="6" width="8" height="5" rx="1" />
    <path d="M14 8h8" />
    <circle cx="10" cy="8" r="1.5" />
    <circle cx="17" cy="9" r="0.5" />
  </svg>,
  <svg
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    <rect x="5" y="4" width="14" height="16" rx="1" />
    <path d="M5 8h14" />
    <circle cx="7" cy="6" r="0.5" />
    <circle cx="9" cy="6" r="0.5" />
    <rect x="8" y="10" width="8" height="2" rx="0.5" />
    <rect x="10" y="14" width="4" height="1.5" rx="0.5" />
    <line x1="12" y1="12" x2="12" y2="14" />
    <circle cx="12" cy="18" r="1" />
    <line x1="12" y1="15.5" x2="12" y2="17" />
  </svg>,
];

const data = [
  {
    expTitle: "Landing Page",
    expDesc:
      "Páginas de alta performance desenhadas com psicologia de consumo. Transforme visitantes em leads qualificados instantaneamente.",
    resTitle: "Conversão",
    resDesc:
      "O funil captura e o sistema processa. Transformamos tráfego em leads qualificados no seu CRM.",
  },
  {
    expTitle: "Site Institucional",
    expDesc:
      "A vitrine digital da sua marca. Transmita solidez, autoridade e profissionalismo com um design 100% autoral e exclusivo.",
    resTitle: "Autoridade",
    resDesc:
      "Solidez institucional em qualquer tela. Transmita confiança e esteja acessível em todo lugar.",
  },
  {
    expTitle: "E-commerce",
    expDesc:
      "Lojas virtuais otimizadas para venda. Experiência de compra fluida, checkout seguro e design focado em aumentar seu ticket médio.",
    resTitle: "Vendas",
    resDesc:
      "O produto vira receita. Checkout fluido e segurança para maximizar cada transação.",
  },
  {
    expTitle: "One-Page",
    expDesc:
      "Conte sua história em um único scroll. Ideal para lançamentos, portfólios ou produtos específicos que exigem foco total.",
    resTitle: "Experiência",
    resDesc:
      "A jornada se torna tangível. Design de interface completo guiando o usuário ao clique.",
  },
];

const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function MobileCard({ item, index }: { item: typeof data[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 75%", "start 25%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 400 : 120,
    damping: reduceMotion ? 90 : 28,
    mass: 0.35,
  });

  const expOpacity = useTransform(progress, [0.1, 0.45], [1, 0]);
  const resOpacity = useTransform(progress, [0.45, 0.8], [0, 1]);
  const iconScale = useTransform(
    progress,
    [0, 0.45, 0.8, 1],
    [0.94, 0.84, 1, 1],
  );
  const iconRotate = useTransform(progress, [0, 0.5, 1], [0, -5, 0]);
  const expIconOpacity = useTransform(progress, [0.35, 0.5], [1, 0]);
  const resIconOpacity = useTransform(progress, [0.45, 0.6], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group relative min-h-[355px] overflow-hidden rounded-[1.75rem] border border-brand-primary/30 bg-gradient-to-b from-brand-primary/10 to-transparent transition-all duration-300 hover:border-brand-primary/60 hover:shadow-[0_8px_30px_rgb(28,124,125,0.15)]"
    >
      <div className="absolute inset-0 bg-brand-primary/5 blur-3xl transition-colors duration-500 group-hover:bg-brand-primary/10" />
      <div className="relative z-10 flex h-full flex-col p-6">
        <div className="mb-7 flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-white/35">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 ml-4 bg-gradient-to-r from-brand-primary/40 to-transparent" />
        </div>

        <motion.div
          style={
            reduceMotion ? undefined : { scale: iconScale, rotate: iconRotate }
          }
          className="mb-8 flex justify-center"
        >
          <div className="relative grid h-24 w-24 place-items-center">
            <motion.div
              style={reduceMotion ? undefined : { opacity: expIconOpacity }}
              className="col-start-1 row-start-1 flex h-20 w-20 items-center justify-center text-brand-primary"
            >
              {expIcons[index]}
            </motion.div>
            <motion.div
              style={reduceMotion ? undefined : { opacity: resIconOpacity }}
              className="col-start-1 row-start-1 flex h-24 w-24 items-center justify-center text-brand-primary"
            >
              {resIcons[index]}
            </motion.div>
          </div>
        </motion.div>

        <div className="grid flex-grow">
          <motion.div
            style={reduceMotion ? undefined : { opacity: expOpacity }}
            className="col-start-1 row-start-1 flex flex-col pointer-events-none"
          >
            <span className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-brand-primary/90">
              Expertise
            </span>
            <h3 className="mb-3 text-xl font-bold text-white">
              {item.expTitle}
            </h3>
            <p className="text-sm font-medium leading-relaxed text-white/62">
              {item.expDesc}
            </p>
          </motion.div>

          <motion.div
            style={reduceMotion ? undefined : { opacity: resOpacity }}
            className="col-start-1 row-start-1 flex flex-col pointer-events-none"
          >
            <span className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-brand-primary/90">
              Resultado
            </span>
            <h3 className="mb-3 text-xl font-bold text-white">
              {item.resTitle}
            </h3>
            <p className="text-sm font-medium leading-relaxed text-white/78">
              {item.resDesc}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExpertResults() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 400 : 120,
    damping: reduceMotion ? 90 : 28,
    mass: 0.35,
  });

  const expOpacity = useTransform(progress, [0.16, 0.4], [1, 0]);
  const resOpacity = useTransform(progress, [0.36, 0.64], [0, 1]);
  const expY = useTransform(progress, [0.16, 0.4], [0, -22]);
  const resY = useTransform(progress, [0.36, 0.64], [22, 0]);
  const iconScale = useTransform(
    progress,
    [0, 0.35, 0.5, 0.7, 1],
    [0.94, 1, 0.84, 1, 1],
  );
  const iconRotate = useTransform(progress, [0, 0.5, 1], [0, -5, 0]);
  const expIconOpacity = useTransform(progress, [0.34, 0.52], [1, 0]);
  const resIconOpacity = useTransform(progress, [0.4, 0.6], [0, 1]);
  const auraOpacity = useTransform(
    progress,
    [0.12, 0.5, 0.9],
    [0.22, 0.45, 0.3],
  );

  return (
    <section
      id="expertise"
      className="relative border-t border-white/5 bg-transparent"
    >
      <div className="relative z-10 block px-5 py-20 sm:px-6 md:hidden">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-brand-primary">
              Nossa expertise
            </span>
            <h2 className="mb-2 text-3xl font-bold leading-[1.1] text-white">
              Soluções Digitais <span className="text-brand-primary">Sob Medida</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[280px] text-sm font-medium leading-relaxed text-white/70">
              De Wireframe a <span className="text-brand-primary font-bold">Resultados</span>. O conceito amadurece, a interface ganha intenção e a
              experiência se torna rentável. Role para ver:
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {data.map((item, index) => (
              <MobileCard key={item.expTitle} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      <section
        ref={containerRef}
        className="relative hidden h-[220vh] bg-transparent md:block lg:h-[235vh]"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 py-10 lg:px-12">
          <motion.div
            style={{ opacity: auraOpacity }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(28,124,125,0.24)_0%,rgba(28,124,125,0.08)_35%,transparent_70%)] blur-[140px]"
          />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center">
            <div className="relative mb-10 h-28 text-center lg:mb-12 lg:h-32">
              <motion.div
                style={
                  reduceMotion ? undefined : { opacity: expOpacity, y: expY }
                }
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <span className="mb-4 block font-mono text-sm font-bold uppercase tracking-[0.28em] text-brand-primary">
                  Nossa expertise
                </span>
                <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                  Soluções Digitais{" "}
                  <span className="text-brand-primary">Sob Medida</span>
                </h2>
              </motion.div>

              <motion.div
                style={
                  reduceMotion ? undefined : { opacity: resOpacity, y: resY }
                }
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <span className="mb-4 block font-mono text-sm font-bold uppercase tracking-[0.28em] text-brand-primary">
                  Resultado percebido
                </span>
                <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                  De Wireframe a{" "}
                  <span className="text-brand-primary">Resultados</span>
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-base font-medium text-white/62">
                  O conceito amadurece, a interface ganha intenção e a
                  experiência vira resultado.
                </p>
              </motion.div>
            </div>

            <div className="relative grid grid-cols-2 gap-5 xl:grid-cols-4">
              {data.map((item, index) => (
                <div
                  key={item.expTitle}
                  className="group relative min-h-[355px] overflow-hidden rounded-[1.75rem] border border-brand-primary/30 bg-gradient-to-b from-brand-primary/10 to-transparent transition-all duration-300 hover:border-brand-primary/60 hover:shadow-[0_8px_30px_rgb(28,124,125,0.15)]"
                >
                  <div className="absolute inset-0 bg-brand-primary/5 blur-3xl transition-colors duration-500 group-hover:bg-brand-primary/10" />
                  <div className="relative z-10 flex h-full flex-col p-6">
                    <div className="mb-7 flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-white/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px w-14 bg-gradient-to-r from-brand-primary/40 to-transparent" />
                    </div>

                    <motion.div
                      style={
                        reduceMotion
                          ? undefined
                          : { scale: iconScale, rotate: iconRotate }
                      }
                      className="mb-8 flex justify-center"
                    >
                      <div className="relative grid h-24 w-24 place-items-center">
                        <motion.div
                          style={
                            reduceMotion
                              ? undefined
                              : { opacity: expIconOpacity }
                          }
                          className="col-start-1 row-start-1 flex h-20 w-20 items-center justify-center text-brand-primary"
                        >
                          {expIcons[index]}
                        </motion.div>
                        <motion.div
                          style={
                            reduceMotion
                              ? undefined
                              : { opacity: resIconOpacity }
                          }
                          className="col-start-1 row-start-1 flex h-24 w-24 items-center justify-center text-brand-primary"
                        >
                          {resIcons[index]}
                        </motion.div>
                      </div>
                    </motion.div>

                    <div className="grid flex-grow">
                      <motion.div
                        style={
                          reduceMotion ? undefined : { opacity: expOpacity }
                        }
                        className="col-start-1 row-start-1 flex flex-col pointer-events-none"
                      >
                        <span className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-brand-primary/90">
                          Expertise
                        </span>
                        <h3 className="mb-3 text-xl font-bold text-white">
                          {item.expTitle}
                        </h3>
                        <p className="text-sm font-medium leading-relaxed text-white/62">
                          {item.expDesc}
                        </p>
                      </motion.div>

                      <motion.div
                        style={
                          reduceMotion ? undefined : { opacity: resOpacity }
                        }
                        className="col-start-1 row-start-1 flex flex-col pointer-events-none"
                      >
                        <span className="mb-2 font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-brand-primary/90">
                          Resultado
                        </span>
                        <h3 className="mb-3 text-xl font-bold text-white">
                          {item.resTitle}
                        </h3>
                        <p className="text-sm font-medium leading-relaxed text-white/78">
                          {item.resDesc}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
