<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { projects } from '@/data/projects'
import bgImage from '@/assets/proyectos.fondo.jpg'
import pixel1 from '@/assets/pixelado1.png'
import pixel2 from '@/assets/pixelado2.png'
import pixel3 from '@/assets/pixelado3.png'
import pixel4 from '@/assets/pixelado4.png'
import PixelLayer from '@/components/common/PixelLayer.vue'
</script>

<template>
  <section 
    id="projects" 
    class="relative py-32 bg-black border-t border-white/5 overflow-hidden group/projects"
    :style="{ 
      backgroundImage: `url(${bgImage})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto'
    }"
  >
    <!-- Capas de Píxeles (Componentes) -->
    <PixelLayer :image="pixel1" />
    <PixelLayer :image="pixel2" />
    <PixelLayer :image="pixel3" />
    <PixelLayer :image="pixel4" />

    <!-- Overlay sutil opcional para legibilidad si el fondo es muy claro -->
    <div class="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>
    
    <!-- Gradientes de limpieza de 100px en los márgenes -->
    <div class="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-black to-transparent z-[1] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent z-[1] pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">

      <div class="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div class="max-w-2xl">
          <h2 class="font-serif text-4xl md:text-5xl text-white mb-6">Proyectos</h2>
          <p class="font-sans text-lg text-white/40 font-light">Le voy a quitar los titulos </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div 
          v-for="project in projects.slice(0, 3)" 
          :key="project.id" 
          class="group relative"
        >
          <div class="bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-500 hover:border-brand/40 hover:shadow-[0_20px_50px_-20px_rgba(255,0,0,0.3)]">
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
</template>
