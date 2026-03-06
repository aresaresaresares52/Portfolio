<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

interface Project {
  id: string | number
  title: string
  category: string
  image: string
}

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="relative group bg-black border-[3px] border-[#00FF00] aspect-square overflow-hidden flex flex-col justify-end p-6 transition-all duration-300">
    <!-- Imagen de fondo que ocupa el cuadrado exacto (en escala de grises inicial) -->
    <img 
      v-if="project.image"
      :src="project.image" 
      :alt="project.title"
      class="absolute inset-0 w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
    />
    
    <!-- Gradiente para asegurar legibilidad del texto -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
    
    <!-- Contenido encima de la imagen -->
    <div class="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
      <span class="text-[#00FF00] text-xs font-bold uppercase tracking-widest mb-1 block">
        {{ project.category }}
      </span>
      <h3 class="text-xl font-bold text-white mb-3">
        {{ project.title }}
      </h3>
      <router-link 
        :to="`/projects/${project.id}`"
        class="inline-flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100 hover:text-[#00FF00]"
      >
        Ver detalle <ArrowRight :size="14" />
      </router-link>
    </div>
  </div>
</template>
