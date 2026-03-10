<script setup lang="ts">
import pixel1 from '@/assets/pixel1.png'

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
  <div class="relative w-fit h-fit flex items-center justify-start pointer-events-none mb-4">
    <!-- El pixel art de fondo sobredimensionado y desplazado sutilmente, repetido para salir de la pantalla -->
    <div class="absolute -left-12 -top-12 flex flex-nowrap pointer-events-none origin-top-left scale-[0.6] md:scale-75 lg:scale-[0.8]">
      <img 
        v-for="n in 10" 
        :key="n"
        :src="pixel1" 
        alt="Fondo Pixelado" 
        class="w-auto h-auto max-w-none select-none opacity-80 mix-blend-screen shrink-0" 
      />
    </div>
    
    <!-- La tarjeta de detalle superpuesta -->
    <div class="relative z-10 pointer-events-auto">
      <div class="relative flex flex-col justify-center bg-black border-[3px] border-[#00FF00] w-fit overflow-hidden p-6 md:p-8 shadow-2xl">
        <div class="relative z-10 w-full md:pr-8">
          <h1 class="text-3xl md:text-4xl font-kanit font-bold text-white leading-none break-words whitespace-normal">
            {{ project.title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
