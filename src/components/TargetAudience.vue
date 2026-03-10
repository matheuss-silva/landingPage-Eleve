<template>
  <section id="publico" class="py-24 px-6 lg:px-12 bg-brand-bg relative border-t border-white/5">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16 fade-in-up" v-intersect>
        <span class="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">[ PÚBLICO-ALVO ]</span>
        <h2 class="text-4xl md:text-5xl font-sans font-bold">PARA QUEM É O<br><span class="text-white/50">NEURALFLOW?</span></h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(item, index) in audience" :key="index" class="group relative p-8 bg-brand-card rounded-2xl border border-white/5 overflow-hidden transition-colors hover:border-brand-primary/50 fade-in-up" :style="`transition-delay: ${index * 100}ms`" v-intersect>
          <div class="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <div class="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center border border-white/10 mb-6 text-brand-primary group-hover:scale-110 transition-transform duration-500">
              <component :is="item.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-sans font-bold mb-3">{{ item.title }}</h3>
            <p class="text-brand-text text-sm font-light leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Briefcase, Building2, Store, Rocket } from 'lucide-vue-next'

const audience = [
  {
    title: 'Startups & Tech',
    description: 'Empresas de base tecnológica buscando acelerar o crescimento e dominar o mercado com presença digital agressiva.',
    icon: Rocket
  },
  {
    title: 'Corporates',
    description: 'Grandes corporações que necessitam modernizar sua atuação digital com arquitetura escalável e design premium.',
    icon: Building2
  },
  {
    title: 'E-commerce',
    description: 'Operações de varejo digital focadas em alta conversão, retenção e experiência de compra imersiva.',
    icon: Store
  },
  {
    title: 'Infoprodutores',
    description: 'Especialistas e criadores de conteúdo que precisam de funis de alta performance e autoridade inquestionável.',
    icon: Briefcase
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
