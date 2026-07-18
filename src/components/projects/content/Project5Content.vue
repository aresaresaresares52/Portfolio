<script setup lang="ts">
import { ref } from 'vue'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Skeleton } from '@/components/ui/skeleton'

const isVideoLoaded = ref(false)

const handleVideoLoad = () => {
  isVideoLoaded.value = true
}

defineProps<{
  project: {
    id: string | number
    title: string
    category: string
    image: string
    description: string
    longDescription: string
    technologies: string[]
    date: string
  }
}>()
</script>

<template>
  <div class="pt-16 translate-y-[-50px] flex flex-col gap-12 max-w-6xl w-full">
    
    <!-- Explora el proyecto por ti mismo -->
    <div class="flex flex-col items-start gap-4 mb-10">
      <h3 class="text-2xl md:text-3xl text-white font-normal leading-relaxed mt-8">
      Explora mi último proyecto por ti mism@...
      </h3>
      <a 
        href="https://esclattrans.netlify.app/#/" 
        target="_blank" 
        rel="noopener noreferrer"
        class="flex w-full justify-center gap-2 px-6 py-6 border border-[#00FF00] hover:bg-[#00FF00]/10 text-xl  font-semibold font-kanit font-normal uppercase tracking-wider text-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,255,0,0.1)] hover:shadow-[0_0_25px_rgba(0,255,0,0.3)] rounded-md"
      >
        <span class="text-white">Visitar sitio</span>
  <span class="text-[#00FF00]">Web</span>
      </a>
    </div>

    <!-- O mira la grabación -->
    <div class="flex flex-col gap-4">
      <h3 class="text-2xl md:text-3xl text-white font-normal leading-relaxed">
        ... O mira la grabación
      </h3>
      <div class="w-full">
        <AspectRatio :ratio="16 / 9" class="bg-muted rounded-xl overflow-hidden shadow-2xl border border-white/10 relative">
          <!-- Skeleton que se muestra mientras el iframe carga -->
          <Skeleton 
            v-if="!isVideoLoaded" 
            class="absolute inset-0 z-20 w-full h-full bg-white/5 animate-pulse" 
          />
          <iframe 
            class="w-full h-full"
            src="https://www.youtube.com/embed/vQFdR9v2-SA" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            @load="handleVideoLoad"
          >
          </iframe>
        </AspectRatio>
      </div>
    </div>

    <!-- Además, también he diseñado y desarrollado esta página! -->
    <div class="flex justify-center items-center mt-6">
      <div class="border-[3px] border-[#00FF00] flex items-center justify-center p-6 md:p-8 text-center shadow-[0_0_30px_rgba(0,255,0,0.15)] bg-black/40 backdrop-blur-sm group relative overflow-hidden max-w-2xl w-full">
        <div class="absolute inset-0 bg-[#00FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <p class="text-xl md:text-2xl font-kanit font-normal text-white/90 tracking-tight leading-tight">
          Además, también he diseñado y desarrollado esta página!
        </p>
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>
