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
  <div 
    class="relative flex flex-col justify-end group cursor-pointer bg-black border-[3px] border-[#00FF00] aspect-[5/4] overflow-hidden p-5 md:p-8 transition-all duration-300"
  >
    <!-- Contenido -->
    <div class="relative z-10">
      
      <!-- Texto al doble de tamaño (4xl en vez de xl), en Kanit y en Medium -->
      <h3 class="text-3xl md:text-5xl font-kanit font-medium text-white mb-4 md:mb-8">
        {{ project.title }}
      </h3>
      
      <!-- El texto ver detalle visible siempre, pero que cambia de color y la flecha se mueve al pasar ratón por la tarjeta -->
      <span class="inline-flex items-center gap-2 text-white/70 text-sm md:text-base font-light transition-colors group-hover:text-[#00FF00]">
        Ver más <ArrowRight :size="24" class="group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </div>
</template>

