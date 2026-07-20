<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton } from '@/components/ui/skeleton'
import SectionTitle from '@/components/projects/SectionTitle.vue'

const isArtbookLoaded = ref(false)
const isRevistaLoaded = ref(false)

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
  <div class="pt-16 translate-y-[-50px] flex flex-col gap-16 max-w-6xl w-full">
    <!-- Artbook Section -->
    <div class="flex flex-col gap-6">
      <SectionTitle title="MAQUETACIÓN DE ARTBOOK PARA INÉS GIMÉNEZ" />
      <div class="relative w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-muted min-h-[400px] md:min-h-[500px]">
        <!-- Skeleton loader -->
        <Skeleton 
          v-if="!isArtbookLoaded" 
          class="absolute inset-0 z-20 w-full h-full bg-white/5 animate-pulse" 
        />
        
        <iframe 
          allow="autoplay; fullscreen; clipboard-write" 
          scrolling="no" 
          class="w-full h-[400px] md:h-[500px] border-0 relative z-10"
          src="https://heyzine.com/flip-book/87ded84b17.html#page/3"
          @load="isArtbookLoaded = true"
        >
        </iframe>
      </div>
    </div>

    <!-- Revista Section -->
    <div class="flex flex-col gap-6">
      <SectionTitle title="MAQUETACIÓN PARA REVISTA" />
      <div class="relative w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-muted min-h-[600px]">
        <!-- Skeleton loader -->
        <Skeleton 
          v-if="!isRevistaLoaded" 
          class="absolute inset-0 z-20 w-full h-full bg-white/5 animate-pulse" 
        />
        
        <iframe 
          allow="autoplay; fullscreen; clipboard-write" 
          allowfullscreen
          scrolling="no" 
          class="w-full h-[600px] border-0 relative z-10"
          style="border: 1px solid lightgray;"
          src="https://heyzine.com/flip-book/62d52e9827.html#page/2"
          @load="isRevistaLoaded = true"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
