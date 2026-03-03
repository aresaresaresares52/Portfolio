<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { projects } from '@/data/projects'
</script>

<template>
  <div class="bg-black text-white">
    <!-- Hero Section / "La Portada" -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <!-- Background Glows (Sutiles para dar profundidad al glitch) -->
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

      <!-- Sutil Overlay de degradado -->
      <div class="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none"></div>

      <!-- Contenedor para futuro contenido -->
      <div class="container mx-auto px-4 relative z-10 text-center">
      </div>

      <!-- Indicador de Scroll -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30 z-20">
        <span class="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
        <div class="w-[1px] h-12 bg-gradient-to-b from-brand to-transparent"></div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-32 bg-[#050505]">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div class="max-w-2xl">
            <h2 class="font-serif text-4xl md:text-5xl text-white mb-6">Trabajos Seleccionados</h2>
            <p class="font-sans text-lg text-white/40 font-light">Explora una selección curada de proyectos donde el diseño y la tecnología convergen.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div 
            v-for="project in projects.slice(0, 3)" 
            :key="project.id" 
            class="group relative"
          >
            <!-- Card Content Wrapper -->
            <div class="bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-500 hover:border-brand/40 hover:shadow-[0_20px_50px_-20px_rgba(255,0,0,0.3)]">
              <!-- Image -->
              <div class="aspect-[4/5] overflow-hidden relative">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover grayscale opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span class="text-brand text-xs font-bold uppercase tracking-widest mb-2 block">{{ project.category }}</span>
                    <h3 class="text-2xl font-bold text-white mb-4">{{ project.title }}</h3>
                    <router-link 
                      :to="`/projects/${project.id}`"
                      class="inline-flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100"
                    >
                      Ver detalle <ArrowRight :size="14" />
                    </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>