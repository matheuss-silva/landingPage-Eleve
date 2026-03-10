<template>
  <section class="py-24 px-6 lg:px-12 bg-brand-bg relative overflow-hidden flex items-center justify-center border-t border-white/5">
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
    
    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="fade-in-up" v-intersect>
        <span class="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">[ VANTAGENS ABSOLUTAS ]</span>
        <h2 class="text-4xl md:text-5xl font-sans font-bold mb-6">ESTÉTICA ENCONTRA<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">PERFORMANCE.</span></h2>
        <p class="text-brand-text text-lg font-light mb-8 max-w-md">Cortamos o ruído. Implementamos sistemas digitais focados puramente em resultados, velocidade e uma experiência de marca inesquecível.</p>
        
        <a href="#contato" class="inline-flex items-center gap-2 text-white font-sans font-medium hover:text-brand-primary transition-colors group">
          Descubra o Método
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      <div class="grid gap-6">
        <div v-for="(adv, index) in advantages" :key="index" class="flex gap-6 items-start fade-in-up" :style="`transition-delay: ${index * 150}ms`" v-intersect>
          <div class="flex-shrink-0 w-12 h-12 rounded-full bg-brand-card border border-brand-primary/30 flex items-center justify-center text-brand-primary shadow-[0_0_15px_rgba(28,124,125,0.2)]">
            <component :is="adv.icon" class="w-5 h-5" />
          </div>
          <div>
            <h4 class="text-xl font-bold font-sans mb-2">{{ adv.title }}</h4>
            <p class="text-brand-text text-sm font-light leading-relaxed">{{ adv.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Zap, Shield, Maximize } from 'lucide-vue-next'

const advantages = [
  {
    title: 'Velocidade Extrema',
    description: 'Arquitetura Otimizada para carregamento instantâneo, reduzindo o bounce rate e explodindo suas conversões.',
    icon: Zap
  },
  {
    title: 'Segurança Criptográfica',
    description: 'Implementações robustas, garantindo que seus dados e de seus clientes estejam protegidos contra vulnerabilidades.',
    icon: Shield
  },
  {
    title: 'Escalabilidade Infinita',
    description: 'Sistemas desenhados para suportar picos massivos de tráfego, prontos para crescer junto com sua operação.',
    icon: Maximize
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
