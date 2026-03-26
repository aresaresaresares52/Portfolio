<script setup lang="ts">
import BackLink from '@/components/projects/BackLink.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import { projects } from '@/data/projects'

// Seleccionamos "Cartelería e identidad visual" (primer proyecto en data)
const extraProject = projects[0]!
</script>

<template>
  <div class="bg-black text-white min-h-screen flex flex-col p-6 md:p-12 items-center">
    <!-- Botón volver -->
    <nav class="mb-12 w-full max-w-6xl">
      <BackLink />
    </nav>
    
    <!-- Proyectos Extra -->
    <div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 place-items-start">
      <!-- Envuelto en router-link para navegación y hover interactivo -->
      <router-link :to="`/projects/${extraProject.id}`" class="block w-full max-w-[400px]">
        <div class="pointer-events-auto transform hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,0,0.1)]">
          <ProjectCard :project="extraProject" />
        </div>
      </router-link>
    </div>

    <!-- Recuadro principal que el usuario mantendrá para futuros textos -->
    <div class="flex-1 flex w-full max-w-6xl p-4 justify-center items-start mt-8">
      <main class="border-[3px] border-[#00FF00] flex items-center justify-center p-3 md:p-6 text-center shadow-[0_0_30px_rgba(0,255,0,0.1)] group relative overflow-hidden max-w-2xl w-full">
        <div class="absolute inset-0 bg-[#00FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <h1 class="text-xl md:text-2xl lg:text-3xl font-kanit font-normal text-white/70 tracking-tight leading-tight px-2">
          Hmmm que poquita cosa... Pero tengo 20 años y me queda mucho por delante. Seguiré trabajando duro y mejorando mis habilidades en el proceso. ¡Vuelve a visitarme! :D
        </h1>
      </main>
    </div>
  </div>
</template>
