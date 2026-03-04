<script setup lang="ts">
import About from '@/pages/about/About.vue'
import Contact from '@/pages/contact/Contact.vue'
import CV from '@/pages/cv/CV.vue'
import Projects from '@/pages/projects/Projects.vue'
</script>

<template>
  <div class="bg-black text-white" id="top">
    <!-- Hero Section / "La Portada" -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <!-- Background Glows -->
      <div class="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <!-- Video Logo Container -->
      <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <video 
          autoplay 
          loop 
          muted 
          playsinline
          class="w-full h-full object-contain mix-blend-screen opacity-90 transition-opacity duration-1000 -translate-y-16"
        >
          <source src="/assets/videos/logofinal.webm" type="video/webm">
          Tu navegador no soporta vídeos WebM con transparencia.
        </video>
      </div>

      <div class="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none"></div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30 z-20">
       <!-- <span class="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>-->
        <div class="w-[1px] h-12 bg-gradient-to-b from-brand to-transparent"></div>
      </div>
    </section>

    <!-- Projects Section -->
    <Projects />

    <!-- About Section -->
    <section id="about" class="border-t border-white/5"> 
      <About />
    </section>

    <!-- Contact Section -->
    <section id="contact" class="border-t border-white/5">
      <Contact />
    </section>

    <!-- CV Section -->
    <section id="cv" class="border-t border-white/5">
      <CV />
    </section>
  </div>
</template>