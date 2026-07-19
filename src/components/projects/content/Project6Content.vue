<script setup lang="ts">
import lodosaImg from '@/assets/lodosa.jpg'
import donsiImg from '@/assets/donsi.jpg'

defineProps<{
  project: {
    id: string | number
    title: string
    category: string
    description: string
    highlight?: string
    longDescription?: string
    image: string
    technologies: string[]
    date: string
  }
}>()
</script>

<template>
  <div class="pt-12 w-full max-w-6xl mx-auto mb-12">
    <!-- Vista de selección de dos columnas -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      
      <!-- Columna Izquierda: Lodosa -->
      <div class="flex flex-col items-center justify-between border-2 border-[#cb16e3]/90 hover:border-[#00FF00]/40 bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 group">
        <div class="w-full text-center flex flex-col gap-4 flex-grow justify-start">
          <h3 class="text-xl md:text-2xl font-kanit font-normal text-white group-hover:text-[#00FF00] transition-colors leading-tight">
            Rediseño logotipo Ayuntamiento de Lodosa
          </h3>
          

           <div class="w-full h-[2px] bg-[#cb16e3] my-2 transition-opacity duration-300 group-hover:opacity-0"></div>
          <!-- Enlace en la imagen para ver el proyecto completo -->
          <a 
            href="https://www.behance.net/gallery/248708453/Redeseno-logotipo-Ayuntamiento-de-Lodosa" 
            target="_blank" 
            rel="noopener noreferrer"
            class="block overflow-hidden border border-white/10 rounded-lg shadow-md aspect-[4/3] bg-white flex items-center justify-center p-4 cursor-pointer"
          >
            <img 
              :src="lodosaImg" 
              alt="Rediseño logotipo Lodosa" 
              class="w-full h-full object-contain transition-transform duration-500"
            />
          </a>
        </div>
        
        <p class="mt-6 text-white/70 text-sm font-kanit font-light uppercase">
          Pincha para ver el proyecto completo
        </p>
      </div>

      <!-- Columna Derecha: Titaguas / Don Simon -->
      <div class="flex flex-col items-center justify-between border-2 border-[#cb16e3]/90 hover:border-[#00FF00]/40 bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 group">
        <div class="w-full text-center flex flex-col gap-4 flex-grow justify-start">
          <h3 class="text-xl md:text-2xl font-kanit font-normal text-white group-hover:text-[#00FF00] transition-colors leading-tight">
            Diseño logotipo 250 Aniversario de Simón de Rojas para el Ayuntamiento de Titaguas
          </h3>
          
          <div class="w-full h-[2px] bg-[#cb16e3] my-2 transition-opacity duration-300 group-hover:opacity-0"></div>
          <!-- Enlace en la imagen para ver el proyecto completo -->
          <a 
            href="https://www.behance.net/gallery/252938959/Logo-250-Aniversario-Simon-de-Rojas-Ayto-Titaguas" 
            target="_blank" 
            rel="noopener noreferrer"
            class="block overflow-hidden border border-white/10 rounded-lg shadow-md aspect-[4/3] bg-white flex items-center justify-center p-4 cursor-pointer"
          >
            <img 
              :src="donsiImg" 
              alt="Logotipo 250 Aniversario Simón de Rojas" 
              class="w-full h-full object-contain transition-transform duration-500"
            />
          </a>
        </div>
        
        <p class="mt-6 text-white/70 text-sm font-kanit font-light uppercase">
          Pincha para ver el proyecto completo
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>
