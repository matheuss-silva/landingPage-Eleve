<template>
  <div class="relative min-h-screen bg-brand-bg">
    <NavBar />

    <main>
      <Hero />
      <InfiniteTicker />
      <TargetAudience />
      <Advantages />
      <Comparison />
      <Expertise />
      <ResultsSection />
    </main>

    <FooterBlock />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import InfiniteTicker from './components/InfiniteTicker.vue'
import TargetAudience from './components/TargetAudience.vue'
import Advantages from './components/Advantages.vue'
import Comparison from './components/Comparison.vue'
import Expertise from './components/Expertise.vue'
import ResultsSection from './components/ResultsSection.vue'
import FooterBlock from './components/FooterBlock.vue'
</script>
