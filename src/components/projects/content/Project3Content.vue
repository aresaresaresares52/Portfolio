<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'

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
  <div class="pt-16 translate-y-[50px]">
    <h2 class="text-2xl md:text-3xl font-kanit font-medium text-white uppercase mb-6">Minijuegos</h2>
    <div class="w-full max-w-6xl mt-12">
      <AspectRatio :ratio="16 / 9" class="bg-muted rounded-xl overflow-hidden shadow-2xl border border-white/10">
        <iframe 
          class="w-full h-full"
          src="https://www.youtube.com/embed/NAipI-Qs_V8" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </AspectRatio>
    </div>
  </div>
</template>
