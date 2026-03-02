<script setup lang="ts">
import { projects } from '@/data/projects'
import { ExternalLink, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <div class="container mx-auto px-4 py-24">
    <div class="max-w-2xl mb-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Proyectos Seleccionados</h1>
      <p class="text-lg text-gray-500">Una selección de mis trabajos más recientes en diseño gráfico, desarrollo web y branding.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="group bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1"
      >
        <!-- Project Image -->
        <div class="aspect-[4/3] overflow-hidden relative">
          <img 
            :src="project.image" 
            :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <router-link 
              :to="`/projects/${project.id}`"
              class="bg-white text-gray-900 p-4 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ExternalLink :size="20" />
            </router-link>
          </div>
        </div>

        <!-- Project Info -->
        <div class="p-6">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              {{ project.category }}
            </span>
            <span class="text-xs text-gray-400 font-medium">{{ project.date }}</span>
          </div>
          <h2 class="text-xl font-bold text-gray-900 mb-2 truncate group-hover:text-blue-600 transition-colors">
            {{ project.title }}
          </h2>
          <p class="text-gray-500 text-sm line-clamp-2 mb-6">
            {{ project.description }}
          </p>
          
          <router-link 
            :to="`/projects/${project.id}`"
            class="flex items-center justify-between text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Saber más
            <ArrowRight :size="16" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
