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
      
      <!-- Título de proyecto con peso regular (font-normal) e interlineado ajustado con leading Class -->
      <h3 
        class="max-md:text-[50px] text-4xl md:text-5xl font-kanit font-normal text-white mb-4 md:mb-8 leading-[1.05]"
      >
        {{ project.title }}
      </h3>
      
      <!-- Texto "Ver más" con interlineado ajustado con clase leading -->
      <span 
        class="inline-flex items-center gap-2 text-white/70 max-md:text-[18px] text-sm md:text-base font-light transition-colors group-hover:text-[#00FF00] leading-none"
      >
        Ver más <ArrowRight :size="24" class="group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </div>
</template>
