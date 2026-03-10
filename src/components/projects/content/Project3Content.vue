<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
import SectionTitle from '@/components/projects/SectionTitle.vue'

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
    <SectionTitle title="MINIJUEGOS" />
    <div class="w-full max-w-6xl">
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

    <!-- Nueva sección: Animaciones -->
    <div class="mt-24">
      <SectionTitle title="ANIMACIONES" />
      <div class="w-full max-w-[600px] aspect-square bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group hover:border-[#00FF00]/30 transition-colors">
        <span class="font-kanit text-2xl text-white/40 group-hover:text-[#00FF00]/50 transition-colors uppercase tracking-widest">
          Coming Soon
        </span>
      </div>
    </div>
  </div>
</template>
