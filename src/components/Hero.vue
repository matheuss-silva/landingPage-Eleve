<template>
  <section id="home" ref="sectionRef"
    class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 flex flex-col items-center justify-center min-h-[90vh] text-center overflow-hidden bg-dot-pattern"
    @mousemove="handleMouseMove">
    <!-- Overlay to fade the grid at the edges/center -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)] z-[1] pointer-events-none">
    </div>

    <!-- Mouse follow glow -->
    <div
      class="absolute pointer-events-none z-[2] w-[400px] h-[400px] rounded-full blur-[100px] transition-opacity duration-300"
      :class="isHovering ? 'opacity-80' : 'opacity-0'"
      :style="`background: radial-gradient(circle, rgba(239,114,116,0.15) 0%, transparent 70%); transform: translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`">
    </div>

    <!-- Content (z-10 for keeping it above background) -->
    <div class="relative z-10 w-full flex flex-col items-center">
      <!-- Tag -->
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-[#A1A1AA] text-xs font-mono tracking-widest uppercase fade-in-up"
        v-intersect>
        <span class="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
        WEB DESIGN HIGH-END
      </div>

      <!-- Main Title -->
      <h1
        class="text-5xl md:text-7xl lg:text-9xl font-sans font-bold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1] fade-in-up delay-100"
        v-intersect>
        <span class="text-white block">O FUTURO</span>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">COMEÇA
          AGORA</span>
      </h1>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-12 font-sans font-light fade-in-up delay-200"
        v-intersect>
        Experiências digitais que unem estética futurista e performance extrema. Domine o digital com profissionalismo
        absoluto.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center gap-6 fade-in-up delay-300" v-intersect>
        <a href="#contato"
          class="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
          <span class="relative z-10 font-sans tracking-wide">Elevar Meu Nível</span>
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-400/20 to-transparent">
          </div>
        </a>

        <a href="#portfolio"
          class="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white/70 bg-transparent border border-white/20 rounded-full transition-all duration-300 hover:border-white/50 hover:text-white w-full sm:w-auto">
          <span class="font-sans font-semibold tracking-wide">Ver Portfólio</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const sectionRef = ref(null)
const mousePos = ref({ x: -9999, y: -9999 })
const isHovering = ref(false)

const handleMouseMove = (e) => {
  if (!sectionRef.value) return
  isHovering.value = true
  const rect = sectionRef.value.getBoundingClientRect()
  mousePos.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

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
