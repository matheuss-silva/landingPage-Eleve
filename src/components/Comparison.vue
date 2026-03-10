<template>
  <section class="py-24 px-6 lg:px-12 bg-[#0A0A0A] relative border-y border-white/5">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 fade-in-up" v-intersect>
        <h2 class="text-4xl md:text-5xl font-sans font-bold mb-4">A ABORDAGEM <span class="text-brand-primary">PREMIUM</span></h2>
        <p class="text-brand-text font-light text-lg">Por que nos destacamos do mercado tradicional.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Generic -->
        <div class="p-8 md:p-12 bg-brand-bg rounded-3xl border border-white/5 fade-in-up" v-intersect>
          <div class="flex items-center gap-3 mb-8">
            <div class="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
              <svg class="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </div>
            <h3 class="text-2xl font-bold font-sans text-white/50">Agências Tradicionais</h3>
          </div>
          <ul class="space-y-6">
            <li v-for="(item, i) in generic" :key="i" class="flex items-start gap-4 text-brand-text">
              <span class="mt-1 text-white/20">—</span>
              <span class="font-light">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Premium -->
        <div class="p-8 md:p-12 bg-gradient-to-b from-brand-primary/10 to-transparent rounded-3xl border border-brand-primary/30 relative overflow-hidden fade-in-up delay-200" v-intersect>
          <div class="absolute inset-0 bg-brand-primary/5 blur-3xl pointer-events-none"></div>
          <div class="flex items-center gap-3 mb-8 relative z-10">
            <div class="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center border border-brand-primary/50 shadow-[0_0_10px_rgba(28,124,125,0.5)]">
              <svg class="w-4 h-4 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h3 class="text-2xl font-bold font-sans text-white">NeuralFlow</h3>
          </div>
          <ul class="space-y-6 relative z-10">
            <li v-for="(item, i) in premium" :key="i" class="flex items-start gap-4 text-white">
              <svg class="w-5 h-5 flex-shrink-0 text-brand-primary mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
              <span class="font-medium">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const generic = [
  'Templates genéricos e repetitivos.',
  'Design focado apenas no visual, esquecendo a conversão.',
  'Código pesado e lento, penalizando o SEO.',
  'Falta de estratégia digital integrada.'
]

const premium = [
  'Design Exclusivo e Kinetic, focado na sua autoridade.',
  'Ecossistema construído para Máxima Conversão.',
  'Alta Performance: Stack tecnológica moderna (Vue/React).',
  'Consultoria Estratégica Ponta a Ponta.'
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
