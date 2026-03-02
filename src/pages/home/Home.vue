<script setup lang="ts">
import { Sparkles, ChevronDown, ExternalLink, ArrowRight } from 'lucide-vue-next'
import { projects } from '@/data/projects'
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <div class="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      <!-- Subtle Background Pattern -->
      <div class="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <!-- Background Orbs -->
      <div class="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6 animate-bounce">
          <Sparkles :size="14" />
          <span>by Ares Polo</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Diseño <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Creativo</span> & <br />
          Desarrollo Web.
        </h1>
        
        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Especializado en crear experiencias digitales interactivas que combinan estética premium con tecnología de vanguardia.
        </p>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-pulse">
        <span class="text-xs font-medium uppercase tracking-widest text-gray-600">Ver mis trabajos</span>
        <ChevronDown :size="20" />
      </div>
    </div>

    <!-- Projects Section -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div class="max-w-2xl">
            <h2 class="text-4xl font-black text-gray-900 mb-4 tracking-tight">Proyectos Seleccionados</h2>
            <p class="text-lg text-gray-500">Una selección de mis trabajos más recientes en diseño gráfico, fotografía y branding.</p>
          </div>
          <router-link 
            to="/projects" 
            class="group flex items-center gap-2 text-blue-600 font-bold hover:underline"
          >
            Ver todos los proyectos
            <ArrowRight :size="18" class="group-hover:translate-x-1 transition-transform" />
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in projects.slice(0, 3)" 
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
    </section>
  </div>
</template>

<style scoped>
</style>