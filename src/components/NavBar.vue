<template>
  <div class="fixed top-6 left-0 w-full z-50 pointer-events-none flex justify-center px-4">
    <!-- Desktop Logo (Outside Card, far left) -->
    <div class="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden md:flex items-center pointer-events-auto">
      <a href="#home">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69af675ea05cf7d9680cd06a/f2e0aaa23_logo.png"
          alt="Logo" class="h-10 w-auto object-contain hover:scale-105 transition-transform" />
      </a>
    </div>

    <!-- The Nav Pill -->
    <nav
      class="pointer-events-auto flex items-center px-3 py-2 gap-4 md:gap-10 backdrop-blur-md bg-[#0A0A0A]/90 border border-white/10 rounded-full shadow-2xl">
      <!-- Mobile Logo (Inside Card) -->
      <div class="flex md:hidden items-center pl-2 flex-shrink-0">
        <a href="#home">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69af675ea05cf7d9680cd06a/f2e0aaa23_logo.png"
            alt="Logo" class="h-8 w-auto object-contain" />
        </a>
      </div>

      <!-- Links -->
      <div class="flex items-center gap-4 md:gap-8 text-xs font-sans font-medium text-white/50 tracking-wider">
        <a href="#home" class="hidden md:block hover:text-white transition-colors">HOME</a>
        <a href="#expertise" class="hover:text-white transition-colors">EXPERTISE</a>
        <a href="#contato" class="hover:text-white transition-colors">CONTATO</a>
      </div>

      <!-- CTA Button -->
      <div>
        <a href="#portfolio"
          class="relative inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-2.5 text-sm font-bold text-white bg-[#0f0f0f] border border-white/5 rounded-full overflow-hidden transition-all duration-300 hover:bg-[#1a1a1a]">
          <span class="relative z-10 font-sans tracking-wide">Portfólio</span>

          <!-- Bottom Glow effect -->
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-red-400 blur-sm opacity-40"></div>
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-white opacity-60"></div>
        </a>
      </div>
    </nav>
  </div>
</template>
