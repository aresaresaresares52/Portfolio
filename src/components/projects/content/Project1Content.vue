<script setup lang="ts">
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
    <h2 class="text-2xl md:text-3xl font-kanit font-medium text-white uppercase mb-6">Detalles del Proyecto</h2>
    <div class="text-white/80 font-light prose prose-invert">
      <p>Contenido específico para el proyecto de Cartelería...</p>
      <!-- Aquí puedes añadir más imágenes estáticas o texto particular de este proyecto -->
    </div>
  </div>
</template>
