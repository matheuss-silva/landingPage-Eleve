<template>
  <section id="expertise" class="py-24 px-6 lg:px-12 bg-brand-bg relative border-t border-white/5">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16 fade-in-up" v-intersect>
        <span class="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">[ EXPERTISE TÉCNICA ]</span>
        <h2 class="text-4xl md:text-5xl font-sans font-bold">SOLUÇÕES DE<br><span class="text-white/50">ALTO IMPACTO</span></h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="(exp, index) in expertiseItems" :key="index" class="group relative p-8 md:p-10 bg-brand-card rounded-2xl border border-white/5 overflow-hidden transition-colors hover:border-brand-primary/50 fade-in-up" :style="`transition-delay: ${index * 150}ms`" v-intersect>
          <div class="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10 flex flex-col h-full">
            <div class="flex flex-wrap gap-2 mb-8">
              <span v-for="tag in exp.tags" :key="tag" class="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-xs text-white/70">{{ tag }}</span>
            </div>
            
            <h3 class="text-3xl font-sans font-bold mb-4 group-hover:text-brand-primary transition-colors">{{ exp.title }}</h3>
            <p class="text-brand-text mb-8 flex-grow font-light leading-relaxed">{{ exp.description }}</p>
            
            <a href="#contato" class="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white group/btn w-fit">
              Solicitar Proposta
              <svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const expertiseItems = [
  {
    title: 'Landing Pages',
    description: 'Máquinas de vendas desenhadas do zero. Copywriting incisivo e design kinetic para maximizar a captação de leads e vendas diretas.',
    tags: ['[ CONVERSÃO ]', '[ VENDAS ]']
  },
  {
    title: 'Institucional Premium',
    description: 'Posicione sua marca como líder inquestionável. Portfólios e sites corporativos que transmitem autoridade, luxo e confiança.',
    tags: ['[ AUTORIDADE ]', '[ BRANDING ]']
  },
  {
    title: 'E-commerce High-End',
    description: 'Lojas virtuais ultrarrápidas com UX imersiva, focadas em diminuir o atrito de checkout e explodir a retenção de clientes.',
    tags: ['[ PERFORMANCE ]', '[ LTV ]']
  },
  {
    title: 'Arquitetura de Sistemas',
    description: 'Sistemas customizados, Web Apps (Vue/React) e plataformas integradas desenvolvidas para resolver desafios complexos.',
    tags: ['[ ENGENHARIA ]', '[ ESCALA ]']
  }
]

const vIntersect = {
  mounted: (el) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })
    observer.observe(el)
  }
}
</script>
