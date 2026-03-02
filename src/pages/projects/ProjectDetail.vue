<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/data/projects'
import { ArrowLeft, Calendar, Tag, ChevronRight } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  return projects.find(p => p.id === route.params.id)
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div v-if="project" class="container mx-auto px-4 py-24">
    <!-- Navigation Breadcrumb -->
    <button 
      @click="goBack"
      class="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-8 group"
    >
      <ArrowLeft :size="16" class="group-hover:-translate-x-1 transition-transform" />
      Volver a proyectos
    </button>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Left Column: Image & Main Info -->
      <div class="lg:col-span-2 space-y-8">
        <div class="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="prose prose-lg max-w-none">
          <h1 class="text-4xl font-black text-gray-900 tracking-tight">{{ project.title }}</h1>
          <p class="text-xl text-gray-600 leading-relaxed">{{ project.longDescription }}</p>
        </div>
      </div>

      <!-- Right Column: Sidebar Stats -->
      <div class="space-y-8">
        <div class="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
          <h2 class="text-lg font-bold text-gray-900 mb-6">Detalles del Proyecto</h2>
          
          <div class="space-y-6">
            <div class="flex items-start gap-3">
              <Tag :size="18" class="text-blue-600 mt-1" />
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400">Categoría</p>
                <p class="text-gray-900 font-medium">{{ project.category }}</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <Calendar :size="18" class="text-blue-600 mt-1" />
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400">Fecha</p>
                <p class="text-gray-900 font-medium">{{ project.date }}</p>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-8 border-t border-gray-200">
            <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Tecnologías</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 shadow-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <button class="w-full bg-blue-600 text-white p-5 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
          Ver proyecto en vivo
          <ChevronRight :size="18" />
        </button>
      </div>
    </div>
  </div>
  
  <div v-else class="container mx-auto px-4 py-24 text-center">
    <h1 class="text-2xl font-bold">Proyecto no encontrado</h1>
    <router-link to="/projects" class="text-blue-600 hover:underline mt-4 inline-block">Volver al inicio</router-link>
  </div>
</template>
