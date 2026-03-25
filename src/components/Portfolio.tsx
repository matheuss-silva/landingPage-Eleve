import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Cooperenf',
    subtitle: 'Site institucional',
    image: '/images/cooperenf.png',
    category: 'Site Institucionais',
    tags: ['SAÚDE', 'INSTITUCIONAL', 'COOPERATIVA'],
    link: 'https://www.cooperenf.com/'
  },
  {
    id: 2,
    title: 'Mendes Advogacia',
    subtitle: 'Site institucional para advogados',
    image: '/images/mendes.png',
    category: 'Landing page',
    tags: ['DIREITO', 'INSTITUCIONAL', 'ADVOGACIA'],
    link: 'https://mendes-advogacia.base44.app/'
  },
  {
    id: 3,
    title: 'Alto Traço Engenharia',
    subtitle: 'Landing page',
    image: '/images/AltoEngenharia.png',
    category: 'Landing page',
    tags: ['Engenharia Civil', 'Arquitetura', 'Projetos'],
    link: 'https://build-elite-space.base44.app/'
  },
  {
    id: 4,
    title: 'Vida Plena Clínica',
    subtitle: 'Landing page para clínica de saúde e bem-estar',
    image: '/images/VidaPlena.png',
    category: 'Landing page',
    tags: ['SAÚDE', 'CLÍNICA', 'BEM-ESTAR'],
    link: 'https://pragmatic-vida-plena-clinica.base44.app/'
  },
  {
    id: 5,
    title: 'Nexus B2B',
    subtitle: 'Landing page para desenvolvimento',
    image: '/images/NexuxCorp.png',
    category: 'Landing page',
    tags: ['Resultados', 'Gestão', 'B2B', 'Consultoria'],
    link: 'https://spiritual-nexus-growth-bridge.base44.app/'
  },
  {
    id: 6,
    title: 'Dash Cooperenf',
    subtitle: 'Dashboard administrativo da cooperativa',
    image: '/images/dastCooperenf.png',
    category: 'Dashboard',
    tags: ['SISTEMA', 'DASHBOARD', 'Finanças', 'Gestão'],
    link: 'https://dash-cooperenf-xi.vercel.app/'
  },
  {
    id: 7,
    title: 'Converto Web',
    subtitle: 'Landing page de alta conversão',
    image: '/images/converto.jpg',
    category: 'Site Institucionais',
    tags: ['CONVERSÃO', 'WEB', 'MARKETING', 'DESIGN'],
    link: 'https://converto-web-seven.vercel.app/'
  }
];

// Fallback image in case the placeholder doesn't exist
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80';
};

const categories = ['Todos', 'Landing page', 'Site Institucionais', 'Dashboard'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleBack = () => {
    window.location.hash = '#home';
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white pt-10 pb-24 px-5 md:px-12 lg:px-24 font-sans font-light">
      
      {/* Header */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
        <button 
          onClick={handleBack}
          className="flex items-center gap-3 px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-white/5 bg-brand-card hover:bg-[#1a1a1a] transition-all text-[10px] md:text-xs font-bold tracking-widest text-[#A1A1AA] hover:text-white group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          VOLTAR
        </button>

        <div className="text-left md:text-right w-full md:w-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight mb-3">
            Projetos <span className="text-transparent bg-clip-text bg-brand-gradient font-normal italic pr-2">Selecionados</span>
          </h1>
          <p className="text-[#A1A1AA] text-sm md:text-base font-light tracking-wide">
            Navegue por nossas categorias de excelência.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex overflow-x-auto snap-x snap-mandatory items-center gap-3 mb-12 pb-2 md:flex-wrap md:overflow-visible md:mb-16 md:gap-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 snap-start px-5 py-2 md:px-6 md:py-2.5 rounded-xl text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
              activeCategory === category
                ? 'bg-brand-primary text-white shadow-[0_0_20px_rgba(28,124,125,0.3)]'
                : 'text-[#A1A1AA] hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              key={project.id}
              className="group block relative bg-brand-card border border-white/5 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden hover:border-brand-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(28,124,125,0.1)] flex flex-col"
            >
              {/* Image Container with Badge */}
              <div className="relative h-56 md:h-64 overflow-hidden rounded-t-[1.5rem] md:rounded-t-[2rem]">
                <img 
                  src={project.image} 
                  onError={handleImageError}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                
                {/* Fade into the card background smoothly */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card to-transparent h-1/2 mt-auto"></div>
                
                {/* Badge top-left */}
                <div className="absolute top-5 left-5 bg-brand-primary/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase drop-shadow-lg border border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="relative p-6 pt-5 md:p-8 md:pt-4 flex-1 flex flex-col justify-between z-10">
                
                <div className="mb-6 md:mb-8">
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="text-xl md:text-2xl font-sans font-bold text-white group-hover:text-brand-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Circle Arrow Button */}
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    >
                      <ArrowUpRight size={18} className="text-white/70 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                  
                  <p className="text-[#A1A1AA] text-sm font-light leading-relaxed pr-6">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags bottom */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-white/50 tracking-wider uppercase group-hover:border-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
    </div>
  );
};

export default Portfolio;
