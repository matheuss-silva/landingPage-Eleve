<template>
  <section id="contato" class="py-24 px-6 lg:px-12 bg-black relative border-t border-white/10 overflow-hidden flex flex-col items-center justify-center text-center">
    <!-- Pulse Effect Background -->
    <div class="absolute inset-0 bg-brand-primary/5 animate-pulse pointer-events-none mix-blend-screen"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-brand-primary/10 blur-[150px] pointer-events-none"></div>

    <div class="relative z-10 max-w-4xl mx-auto w-full">
      <h2 class="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-8 fade-in-up" v-intersect>
        INICIE SUA<br><span class="text-brand-primary">DOMINAÇÃO DIGITAL</span>
      </h2>
      <p class="text-xl text-brand-text mb-12 max-w-2xl mx-auto font-light fade-in-up delay-100" v-intersect>
        O mercado não espera. Assuma a vanguarda do seu nicho com uma engenharia digital que converte e impressiona.
      </p>

      <a href="https://wa.me/5511999999999" target="_blank" class="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black bg-brand-primary rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(28,124,125,0.6)] fade-in-up delay-200" v-intersect>
        <span class="relative z-10 font-sans tracking-wide">FALAR COM ESPECIALISTA</span>
        <svg class="relative z-10 w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        <div class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-20"></div>
      </a>
    </div>

    <!-- Minimal Footer -->
    <footer class="w-full mt-32 pt-8 border-t border-white/10 flex items-center justify-between text-brand-text text-sm font-mono relative z-10 px-6 lg:px-12">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
        <span>© 2026 NeuralFlow. SYSTEM V2</span>
      </div>
      <div class="flex gap-6">
        <a href="#" class="hover:text-white transition-colors">INSTAGRAM</a>
        <a href="#" class="hover:text-white transition-colors">LINKEDIN</a>
      </div>
    </footer>
  </section>
</template>

<script setup>
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
