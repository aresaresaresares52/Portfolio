<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProjects } from '@/composables/useProjects'
import { ArrowLeft } from 'lucide-vue-next'
import ProjectDetailCard from '@/components/projects/ProjectDetailcard.vue'

// Importamos los contenidos dinámicos de cada proyecto
import Project1Content from '@/components/projects/content/Project1Content.vue'
import Project2Content from '@/components/projects/content/Project2Content.vue'
import Project3Content from '@/components/projects/content/Project3Content.vue'

const route = useRoute()
const { getProjectById } = useProjects()

const project = computed(() => {
  return getProjectById(route.params.id as string | string[])
})

// Mapeamos el ID del proyecto con su componente correspondiente
const projectComponents: Record<string, any> = {
  '1': Project1Content,
  '2': Project2Content,
  '3': Project3Content
}

const currentProjectComponent = computed(() => {
  if (!project.value) return null
  return projectComponents[String(project.value.id)] || null
})
</script>

<template>
  <article v-if="project" class="relative bg-black text-white min-h-screen">
    <div class="container relative z-10 py-24">
      <nav>
        <router-link 
          to="/#projects"
          class="inline-flex items-center gap-2 text-sm font-serif font-normal text-white/50 hover:text-white transition-all mb-8 group -translate-y-[50px]"
        >
          <ArrowLeft :size="16" class="group-hover:-translate-x-1 transition-transform" />
          Volver a proyectos
        </router-link>
      </nav>

      <div class="flex flex-col gap-12">
        <!-- Main Info -->
        <section class="space-y-12">
          
          <!-- Cabecera de una sola línea, sin caja ni padding extra -->
          <header class="flex justify-start">
            <ProjectDetailCard :project="project" />
          </header>

          <div class="text-left font-light text-xl text-white leading-normal max-w-none translate-y-[70px] flex flex-col gap-10">
            <p>{{ project.description }}</p>
            <p v-if="project.highlight" class="text-[rgb(0,255,0)] font-normal text-[23px]">
              {{ project.highlight }}
            </p>
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
