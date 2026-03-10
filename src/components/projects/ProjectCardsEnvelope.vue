<script setup lang="ts">
import pixel1 from '@/assets/pixel1.png'
import pixel2 from '@/assets/pixel1.png'
import pixel3 from '@/assets/pixel1.png'
import pixel4 from '@/assets/pixel3.png'

import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'

// 1. Tipado estricto: Definimos la estructura de nuestras imágenes
interface PixelItem {
  id: number
  src: string
  top: string
  left: string
  alt: string
}

// 2. Clases de Tailwind extraídas para limpieza del template
const commonHoverClass = "transform scale-70 transition-all duration-500 ease-out hover:brightness-[1.5] hover:scale-80 cursor-pointer"

// ----------------------------------------------------------------------
// 🚨 AQUÍ PUEDES EDITAR LA POSICIÓN DE LAS IMÁGENES EN ESCRITORIO 🚨
// Modifica los valores "top" y "left" (acepta porcentajes o píxeles).
// Estas coordenadas solo afectan la vista de PC (pantallas grandes).
// En móviles y tablets la organización es automática en la cuadrícula.
// ----------------------------------------------------------------------
const pixelImages: (PixelItem & { project: typeof projects[0] })[] = [
  { id: 1, src: pixel1, top: '28%', left: '-11%', alt: 'Decoración pixel 1', project: projects[0]! },
  { id: 2, src: pixel2, top: '03%', left: '50%', alt: 'Decoración pixel 2', project: projects[1]! },
  { id: 3, src: pixel3, top: '47%', left: '59%', alt: 'Decoración pixel 3', project: projects[2]! },
  { id: 4, src: pixel4, top: '55%', left: '24%', alt: 'Decoración pixel 4', project: projects[3]! },
]
</script>

<template>
  <!-- Contenedor principal: 1 columna en móvil, 2 en tablet min-[740px], absoluto en escritorio lg -->
  <div class="relative w-full z-5 pointer-events-none grid grid-cols-1 min-[740px]:grid-cols-2 lg:block place-items-center" aria-hidden="true">
    <router-link 
      v-for="pixel in pixelImages" 
      :key="pixel.id"
      :to="`/projects/${pixel.project?.id}`"
      class="pixel-wrapper pointer-events-auto w-fit h-fit origin-center relative lg:absolute block"
      :class="commonHoverClass"
      :style="{ 
        '--desktop-top': pixel.top, 
        '--desktop-left': pixel.left,
      }"
    >
      <!-- Decoración en píxeles restaurada a su tamaño original -->
      <img 
        :src="pixel.src" 
        :alt="pixel.alt" 
        class="w-auto h-auto max-w-none select-none" 
      />
      
      <!-- La tarjeta de proyecto flotando encima, justo en el centro del dibujo -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none" v-if="pixel.project">
        <div class="w-[300px] md:w-[350px] 
        -translate-y-20 translate-x-35 
        pointer-events-auto shadow-[0_0_20px_rgba(0,255,0,0.2)]">
          <ProjectCard :project="pixel.project" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
/* En pantallas de escritorio (lg: >=1024px) aplicamos las posiciones exactas desordenadas */
@media (min-width: 1024px) {
  .pixel-wrapper {
    top: var(--desktop-top);
    left: var(--desktop-left);
  }
}
/* En tabletas y pantallas pequeñas (740px a 1023px), el grid las pondrá en 2 columnas */
@media (min-width: 740px) and (max-width: 1023px) {
  .pixel-wrapper {
    margin: 0px;
  }
  /* Bajar la primera fila 200px (elementos 1 y 2) */
  .pixel-wrapper:nth-child(-n+2) {
    margin-top: 200px;
  }
  /* Bajar la primera columna 100px (elementos impares: 1, 3, etc.) */
  .pixel-wrapper:nth-child(odd) {
    transform: translateY(100px);
  }
}
/* En teléfonos móviles extendidos (<740px), 1 columna con solapamiento elegante */
@media (max-width: 739px) {
  .pixel-wrapper {
    margin-top: -20px;
    margin-bottom: -20px;
  }
}
</style>

