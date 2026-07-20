<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjects } from '@/composables/useProjects'
import BackLink from '@/components/projects/BackLink.vue'
import VerMasLink from '@/components/projects/VerMasLink.vue'
import ProjectDetailCard from '@/components/projects/ProjectDetailCard.vue'

// Importamos los contenidos dinámicos de cada proyecto
import Project1Content from '@/components/projects/content/Project1Content.vue'
import Project2Content from '@/components/projects/content/Project2Content.vue'
import Project3Content from '@/components/projects/content/Project3Content.vue'
import Project4Content from '@/components/projects/content/Project4Content.vue'
import Project5Content from '@/components/projects/content/Project5Content.vue'
import Project6Content from '@/components/projects/content/Project6Content.vue'
import Project7Content from '@/components/projects/content/Project7Content.vue'

const route = useRoute()
const { getProjectById } = useProjects()

const project = computed(() => {
  return getProjectById(route.params.id as string | string[])
})

// Mapeamos el ID del proyecto con su componente correspondiente
const projectComponents: Record<string, any> = {
  '1': Project1Content,
  '2': Project2Content,
  '3': Project3Content,
  '4': Project4Content,
  '5': Project5Content,
  '6': Project6Content,
  '7': Project7Content
}

const currentProjectComponent = computed(() => {
  if (!project.value) return null
  return projectComponents[String(project.value.id)] || null
})
</script>

<template>
  <article v-if="project" class="relative bg-black text-white min-h-screen">
    <div class="container relative z-10 py-24">
      <nav class="flex justify-between items-center mb-8 -translate-y-[50px]">
        <BackLink />
        <VerMasLink />
      </nav>

      <div class="flex flex-col gap-12">
        <!-- Main Info -->
        <section class="space-y-12">
          
          <!-- Cabecera de una sola línea, sin caja ni padding extra -->
          <header class="flex justify-start">
            <ProjectDetailCard :project="project" />
          </header>

          <div class="text-left font-light text-xl text-white/90 leading-normal max-w-none translate-y-[70px] flex flex-col gap-10">
            <p class="whitespace-pre-line">{{ project.description }}</p>
          </div>

          <!-- Contenido dinámico específico del proyecto -->
          <component 
            v-if="currentProjectComponent" 
            :is="currentProjectComponent" 
            :project="project" 
          />

        </section>

      </div>
    </div>
  </article>
  
  <div v-else class="bg-black text-white min-h-screen flex items-center justify-center text-center p-4">
    <div>
      <h1 class="text-2xl font-bold mb-4">Proyecto no encontrado</h1>
      <router-link to="/" class="text-brand hover:underline">Volver al inicio</router-link>
    </div>
  </div>
</template>

<style scoped>
/* Ocultar barra de scroll para el carrusel de fotos, pero mantener la funcionalidad */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
