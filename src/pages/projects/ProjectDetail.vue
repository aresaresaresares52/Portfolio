<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjects } from '@/composables/useProjects'
import { ArrowLeft, Calendar, Tag, ChevronRight } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const { getProjectById } = useProjects()

const project = computed(() => {
  return getProjectById(route.params.id as string | string[])
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <article v-if="project" class="bg-black text-white min-h-screen">
    <div class="container py-24">
      <!-- Navigation Breadcrumb -->
      <nav>
        <button 
          @click="goBack"
          class="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft :size="16" class="group-hover:-translate-x-1 transition-transform" />
          Volver
        </button>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Left Column: Image & Main Info -->
        <section class="lg:col-span-2 space-y-8">
          <div class="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover"
            />
          </div>

          <header class="prose prose-invert prose-lg max-w-none">
            <h1 class="text-4xl font-black text-white tracking-tight">{{ project.title }}</h1>
            <p class="text-xl text-white/60 leading-relaxed">{{ project.longDescription }}</p>
          </header>
        </section>

        <!-- Right Column: Sidebar Stats -->
        <aside class="space-y-8">
          <div class="bg-[#0a0a0a] rounded-[2rem] p-8 border border-white/5">
            <h2 class="text-lg font-bold text-white mb-6">Detalles del Proyecto</h2>
            
            <div class="space-y-6">
              <div class="flex items-start gap-3">
                <Tag :size="18" class="text-brand mt-1" />
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-white/30">Categoría</p>
                  <p class="text-white font-medium">{{ project.category }}</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <Calendar :size="18" class="text-brand mt-1" />
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-white/30">Fecha</p>
                  <p class="text-white font-medium">{{ project.date }}</p>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-8 border-t border-white/5">
              <p class="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Tecnologías</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white/70 shadow-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <button class="w-full bg-brand text-white p-5 rounded-2xl font-bold hover:bg-brand/80 transition-all shadow-lg hover:shadow-brand/20 flex items-center justify-center gap-2 group">
            Ver proyecto en vivo
            <ChevronRight :size="18" class="group-hover:translate-x-1 transition-transform" />
          </button>
        </aside>
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
