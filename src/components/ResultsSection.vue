<template>
  <section class="py-24 px-6 lg:px-12 bg-brand-bg relative border-t border-white/5 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 fade-in-up" v-intersect>
        <h2 class="text-4xl md:text-5xl font-sans font-bold mb-4">DO CÓDIGO AOS <span class="text-brand-primary">RESULTADOS</span></h2>
        <p class="text-brand-text font-light text-lg">Processo transparente focado em entregar ROAS absoluto.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 relative">
        <!-- Connecting Line -->
        <div class="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>

        <div v-for="(step, index) in steps" :key="index" class="relative z-10 p-8 bg-brand-card rounded-2xl border border-white/5 fade-in-up text-center" :style="`transition-delay: ${index * 200}ms`" v-intersect>
          <div class="w-16 h-16 mx-auto bg-brand-bg rounded-2xl border border-white/10 mb-6 flex items-center justify-center text-brand-primary shadow-[0_0_20px_rgba(28,124,125,0.1)] relative">
            <span class="absolute -top-3 -right-3 text-xs font-mono bg-brand-primary text-black px-2 py-0.5 rounded shadow-lg">{{ '0' + (index + 1) }}</span>
            <component :is="step.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-bold font-sans mb-3">{{ step.title }}</h3>
          <p class="text-brand-text text-sm font-light">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { LayoutTemplate, Code2, Rocket } from 'lucide-vue-next'

const steps = [
  {
    title: 'Wireframe & Estratégia',
    description: 'Mapeamento arquitetural, UX/UI e fluxos de navegação desenhados para retenção.',
    icon: LayoutTemplate
  },
  {
    title: 'Desenvolvimento Kinetic',
    description: 'Implementação pixel-perfect com Vue/React, focada em animações e performance.',
    icon: Code2
  },
  {
    title: 'Lançamento & Escala',
    description: 'Deploy otimizado e estratégias de conversão para dominância de mercado.',
    icon: Rocket
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
