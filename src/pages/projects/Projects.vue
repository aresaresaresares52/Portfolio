<script setup lang="ts">
import bgImage from '@/assets/proyectos.fondo.jpg'
import ProjectsCardsEnvelope from '@/components/projects/ProjectCardsEnvelope.vue'
</script>

<template>
  <section 
    id="projects" 
    class="relative py-32 bg-black border-t border-white/5 overflow-clip group/projects projects-section min-h-[800px]"
    :style="{ 
      '--bg-image': `url(${bgImage})`
    }"
  >

    <ProjectsCardsEnvelope />

    <!-- Overlay sutil opcional para legibilidad si el fondo es muy claro -->
    <div class="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>
    
    <!-- Gradientes de limpieza de 100px en los márgenes -->
    <div class="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-black to-transparent z-[1] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent z-[1] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">

      <div class="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div class="max-w-2xl pointer-events-none">
          <h2 class="font-serif text-4xl md:text-5xl text-white mb-6">Proyectos</h2>
          <p class="font-sans text-lg text-white/40 font-light">Explora mis últimos trabajos</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background-image: none;
}

@media (min-width: 1024px) {
  .projects-section {
    background-image: var(--bg-image);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
}
</style>
