<script setup lang="ts">
import { Image, PenTool, BookOpen, Clapperboard, AudioLines, Code, Hexagon } from 'lucide-vue-next'

const topSkills = [
  { name: 'Photoshop', icon: Image },
  { name: 'Illustrator', icon: PenTool },
  { name: 'InDesign', icon: BookOpen }
]

const bottomSkills = [
  { name: 'Premiere', icon: Clapperboard },
  { name: 'Reaper', icon: AudioLines },
  { name: 'Processing', icon: Code },
  { name: 'Vue', icon: Hexagon }
]
</script>

<template>
  <div class="flex flex-col gap-4 mt-8 lg:w-max">
    <!-- Primera fila: 3 programas -->
    <div class="flex flex-wrap lg:flex-nowrap gap-4">
      <div 
        v-for="skill in topSkills" 
        :key="skill.name"
        class="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
      >
        <component :is="skill.icon" class="text-[rgb(255,0,0)] w-6 h-6" />
        <span class="font-light text-xl text-white">{{ skill.name }}</span>
      </div>
    </div>

    <!-- Segunda fila: 4 programas -->
    <div class="flex flex-wrap lg:flex-nowrap gap-4">
      <div 
        v-for="skill in bottomSkills" 
        :key="skill.name"
        class="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
      >
        <component :is="skill.icon" class="text-[rgb(255,0,0)] w-6 h-6" />
        <span class="font-light text-xl text-white">{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>
