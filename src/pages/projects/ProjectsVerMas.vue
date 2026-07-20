<script setup lang="ts">
import BackLink from '@/components/projects/BackLink.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import { projects } from '@/data/projects'

// Seleccionamos los proyectos que van en la sección "ver más"
const extraProjects = projects.filter(p => p.id === '1' || p.id === '2' || p.id === '3' || p.id === '7')
</script>

<template>
  <div class="bg-black text-white min-h-screen flex flex-col p-6 md:p-12 items-center">
    <!-- Botón volver -->
    <nav class="mb-12 w-full max-w-6xl">
      <BackLink />
    </nav>
    
    <!-- Proyectos Extra -->
    <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 place-items-start">
      <!-- Proyectos reales -->
      <router-link 
        v-for="project in extraProjects" 
        :key="project.id" 
        :to="`/projects/${project.id}`" 
        class="block w-full max-w-[400px]"
      >
        <div class="pointer-events-auto transform hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,0,0.1)]">
          <ProjectCard :project="project" />
        </div>
      </router-link>

      <!-- Coming Soon 1 -->
      <div 
        class="relative flex flex-col justify-end bg-black border-[3px] border-[#00FF00]/40 aspect-[5/4] overflow-hidden p-5 md:p-8 w-full max-w-[400px] select-none opacity-50"
      >
        <div class="relative z-10">
          <h3 class="max-md:text-[50px] text-4xl md:text-5xl font-kanit font-normal text-white/60 mb-4 md:mb-8 leading-[1.05]">
            Coming soon
          </h3>
        </div>
      </div>

      <!-- Coming Soon 2 -->
      <div 
        class="relative flex flex-col justify-end bg-black border-[3px] border-[#00FF00]/40 aspect-[5/4] overflow-hidden p-5 md:p-8 w-full max-w-[400px] select-none opacity-50"
      >
        <div class="relative z-10">
          <h3 class="max-md:text-[50px] text-4xl md:text-5xl font-kanit font-normal text-white/60 mb-4 md:mb-8 leading-[1.05]">
            Coming soon
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
