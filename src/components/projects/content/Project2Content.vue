<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const photosEstiloLibre = [
  "artistica1.webp",
  "artística2.webp",
  "artistica3.webp",
  "artistica4.webp",
  "artística5.webp",
  "artistica6.webp",
  "artistica7.webp",
  "artistica8.webp"
];
const photosBodegon = ["bodegon1.jpg", "bodegon2.jpg", "bodegon3.jpg", "bodegon4.jpg", "bodegon5.jpg"];
const photosRetrato = ["retrato1.jpg", "retrato2.jpg", "retrato3.jpg", "retrato4.jpg"];
const photosPortadas = ["Artboard 1.jpg", "Artboard 1 copy.jpg", "disco1.jpg", "embo.jpg"];

// Plugins con delay 4000 (doble de lento) y stopOnInteraction=true
const pluginEstiloLibre = Autoplay({ delay: 4000, stopOnInteraction: true })
const pluginBodegon = Autoplay({ delay: 4000, stopOnInteraction: true })
const pluginRetrato = Autoplay({ delay: 4000, stopOnInteraction: true })
const pluginPortadas = Autoplay({ delay: 4000, stopOnInteraction: true })

const stopAutoplayEstiloLibre = () => {
  pluginEstiloLibre.stop()
}

const stopAutoplayBodegon = () => {
  pluginBodegon.stop()
}

const stopAutoplayRetrato = () => {
  pluginRetrato.stop()
}

const stopAutoplayPortadas = () => {
  pluginPortadas.stop()
}

const getImageUrl = (name: string | undefined, folder: string) => {
  if (!name) return ''
  return new URL(`../../../assets/${folder}/${name}`, import.meta.url).href
}

// Fullscreen lightbox state
const isFullscreen = ref(false)
const fullscreenTitle = ref('')
const fullscreenImages = ref<string[]>([])
const fullscreenFolder = ref('fotografía')
const fullscreenIndex = ref(0)
const fullscreenOverlay = ref<HTMLElement | null>(null)

const openFullscreen = (images: string[], title: string, folder: string = 'fotografía') => {
  fullscreenImages.value = images
  fullscreenTitle.value = title
  fullscreenFolder.value = folder
  fullscreenIndex.value = 0
  isFullscreen.value = true
}

const closeFullscreen = () => {
  isFullscreen.value = false
}

const prevFullscreenImage = () => {
  if (fullscreenImages.value.length === 0) return
  fullscreenIndex.value = (fullscreenIndex.value - 1 + fullscreenImages.value.length) % fullscreenImages.value.length
}

const nextFullscreenImage = () => {
  if (fullscreenImages.value.length === 0) return
  fullscreenIndex.value = (fullscreenIndex.value + 1) % fullscreenImages.value.length
}

watch(isFullscreen, async (newVal) => {
  if (newVal) {
    await nextTick()
    fullscreenOverlay.value?.focus()
  }
})
</script>

<template>
  <div class="w-full flex flex-col items-center gap-24 py-16">
    
    <!-- Carrusel 1: Estilo libre -->
    <section class="w-full max-w-[600px] px-12 md:px-0 flex flex-col translate-y-[-30px]">
      <div class="flex items-center justify-between mt-[70px] mb-4">
        <h2 class="font-kanit font-normal text-3xl md:text-4xl text-white">
          Estilo libre
        </h2>
        <button 
          @click="openFullscreen(photosEstiloLibre, 'Estilo libre')" 
          class="p-2 hover:bg-white/20 text-white rounded-md transition-all flex items-center gap-2 text-xs"
          title="Ver en pantalla completa"
        >
          <Maximize2 :size="16" />
        </button>
      </div>
      <div class="w-full h-[1px] bg-white/30 mb-8"></div>
      
      <Carousel 
        class="relative w-full translate-y-[-35px]"
        :opts="{ loop: true, dragFree: true }"
        :plugins="[pluginEstiloLibre]"
      >
        <CarouselContent>
          <CarouselItem v-for="img in photosEstiloLibre" :key="img" class="basis-full">
            <div class="p-1">
              <div class="border-none bg-transparent shadow-none">
                <div class="p-0 overflow-hidden flex items-center justify-center bg-black h-[250px] md:h-[400px] w-full rounded-md">
                  <img 
                    :src="getImageUrl(img, 'fotografía')" 
                    :alt="`Photography ${img}`"
                    class="h-full w-auto object-contain"
                  >
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <!-- Flechas visibles siempre con posición ajustada -->
        <CarouselPrevious 
          class="border-white/20 text-white hover:bg-white hover:text-black -left-10 md:-left-12 flex" 
          @click="stopAutoplayEstiloLibre" 
        />
        <CarouselNext 
          class="border-white/20 text-white hover:bg-white hover:text-black -right-10 md:-right-12 flex" 
          @click="stopAutoplayEstiloLibre" 
        />
      </Carousel>
    </section>

    <!-- Carrusel 2: Bodegones -->
    <section class="w-full max-w-[600px] px-12 md:px-0 flex flex-col translate-y-[-90px]">
      <div class="flex items-center justify-between mt-[70px] mb-4">
        <h2 class="font-kanit font-normal text-3xl md:text-4xl text-white">
          Bodegón
        </h2>
        <button 
          @click="openFullscreen(photosBodegon, 'Bodegón')" 
          class="p-2 hover:bg-white/20 text-white rounded-md transition-all flex items-center gap-2 text-xs"
          title="Ver en pantalla completa"
        >
          <Maximize2 :size="16" />
        </button>
      </div>
      <div class="w-full h-[1px] bg-white/30 mb-8"></div>
      
      <Carousel 
        class="relative w-full translate-y-[-35px]"
        :opts="{ loop: true, dragFree: true }"
        :plugins="[pluginBodegon]"
      >
        <CarouselContent>
          <CarouselItem v-for="img in photosBodegon" :key="img" class="basis-full">
            <div class="p-1">
              <div class="border-none bg-transparent shadow-none">
                <div class="p-0 overflow-hidden flex items-center justify-center bg-black h-[250px] md:h-[400px] w-full rounded-md">
                  <img 
                    :src="getImageUrl(img, 'fotografía')" 
                    :alt="`Photography ${img}`"
                    class="h-full w-auto object-contain"
                  >
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <!-- Flechas visibles siempre con posición ajustada -->
        <CarouselPrevious 
          class="border-white/20 text-white hover:bg-white hover:text-black -left-10 md:-left-12 flex" 
          @click="stopAutoplayBodegon" 
        />
        <CarouselNext 
          class="border-white/20 text-white hover:bg-white hover:text-black -right-10 md:-right-12 flex" 
          @click="stopAutoplayBodegon" 
        />
      </Carousel>
    </section>

    <!-- Carrusel 3: Retratos -->
    <section class="w-full max-w-[600px] px-12 md:px-0 flex flex-col translate-y-[-150px]">
      <div class="flex items-center justify-between mt-[70px] mb-4">
        <h2 class="font-kanit font-normal text-3xl md:text-4xl text-white">
          Retrato
        </h2>
        <button 
          @click="openFullscreen(photosRetrato, 'Retrato')" 
          class="p-2 hover:bg-white/20 text-white rounded-md transition-all flex items-center gap-2 text-xs"
          title="Ver en pantalla completa"
        >
          <Maximize2 :size="16" />
        </button>
      </div>
      <div class="w-full h-[1px] bg-white/30 mb-8"></div>
      
      <Carousel 
        class="relative w-full translate-y-[-35px]"
        :opts="{ loop: true, dragFree: true }"
        :plugins="[pluginRetrato]"
      >
        <CarouselContent>
          <CarouselItem v-for="img in photosRetrato" :key="img" class="basis-full">
            <div class="p-1">
              <div class="border-none bg-transparent shadow-none">
                <div class="p-0 overflow-hidden flex items-center justify-center bg-black h-[250px] md:h-[400px] w-full rounded-md">
                  <img 
                    :src="getImageUrl(img, 'fotografía')" 
                    :alt="`Photography ${img}`"
                    class="h-full w-auto object-contain"
                  >
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <!-- Flechas visibles siempre con posición ajustada -->
        <CarouselPrevious 
          class="border-white/20 text-white hover:bg-white hover:text-black -left-10 md:-left-12 flex" 
          @click="stopAutoplayRetrato" 
        />
        <CarouselNext 
          class="border-white/20 text-white hover:bg-white hover:text-black -right-10 md:-right-12 flex" 
          @click="stopAutoplayRetrato" 
        />
      </Carousel>
    </section>

    <!-- Carrusel 4: Portadas de música -->
    <section class="w-full max-w-[600px] px-12 md:px-0 flex flex-col translate-y-[-210px]">
      <div class="flex items-center justify-between mt-[70px] mb-4">
        <h2 class="font-kanit font-normal text-3xl md:text-4xl text-white">
          Diseño de Portadas de Música
        </h2>
        <button 
          @click="openFullscreen(photosPortadas, 'Diseño de Portadas de Música', 'portadas album')" 
          class="p-2 hover:bg-white/20 text-white rounded-md transition-all flex items-center gap-2 text-xs"
          title="Ver en pantalla completa"
        >
          <Maximize2 :size="16" />
        </button>
      </div>
      <div class="w-full h-[1px] bg-white/30 mb-8"></div>
      
      <Carousel 
        class="relative w-full translate-y-[-35px]"
        :opts="{ loop: true, dragFree: true }"
        :plugins="[pluginPortadas]"
      >
        <CarouselContent>
          <CarouselItem v-for="img in photosPortadas" :key="img" class="basis-full">
            <div class="p-1">
              <div class="border-none bg-transparent shadow-none">
                <div class="p-0 overflow-hidden flex items-center justify-center bg-black h-[250px] md:h-[400px] w-full rounded-md">
                  <img 
                    :src="getImageUrl(img, 'portadas album')" 
                    :alt="`Album Cover ${img}`"
                    class="h-full w-auto object-contain"
                  >
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <CarouselPrevious 
          class="border-white/20 text-white hover:bg-white hover:text-black -left-10 md:-left-12 flex" 
          @click="stopAutoplayPortadas" 
        />
        <CarouselNext 
          class="border-white/20 text-white hover:bg-white hover:text-black -right-10 md:-right-12 flex" 
          @click="stopAutoplayPortadas" 
        />
      </Carousel>
    </section>

    <!-- Fullscreen Overlay Lightbox -->
    <div 
      v-if="isFullscreen" 
      ref="fullscreenOverlay"
      class="fixed top-[54px] bottom-0 left-0 right-0 z-40 bg-black/97 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-8 select-none focus:outline-none"
      @keydown.esc="closeFullscreen"
      @keydown.left="prevFullscreenImage"
      @keydown.right="nextFullscreenImage"
      tabindex="0"
    >
      <!-- Top header -->
      <div class="w-full max-w-7xl flex justify-between items-center text-white border-b border-white/10 pb-4">
        <h3 class="text-xl md:text-2xl font-kanit font-normal uppercase tracking-wider">
          {{ fullscreenTitle }} ({{ fullscreenIndex + 1 }} / {{ fullscreenImages.length }})
        </h3>
        <button 
          @click="closeFullscreen" 
          class="p-2 hover:bg-white/10 text-white/85 hover:text-white rounded-full transition-all"
        >
          <X :size="28" />
        </button>
      </div>

      <!-- Main image container with prev/next buttons -->
      <div class="flex-1 w-full flex items-center justify-between gap-4 max-h-[75vh]">
        <button 
          @click="prevFullscreenImage" 
          class="p-4 hover:bg-white/10 text-white/60 hover:text-white rounded-full transition-all shrink-0"
        >
          <ChevronLeft :size="48" />
        </button>

        <div class="flex-grow h-full flex items-center justify-center bg-black/40 rounded-xl overflow-hidden p-2">
          <img 
            :src="getImageUrl(fullscreenImages[fullscreenIndex], fullscreenFolder)" 
            :alt="`Fullscreen image ${fullscreenIndex + 1}`" 
            class="max-w-full max-h-full object-contain shadow-2xl transition-all duration-300"
          />
        </div>

        <button 
          @click="nextFullscreenImage" 
          class="p-4 hover:bg-white/10 text-white/60 hover:text-white rounded-full transition-all shrink-0"
        >
          <ChevronRight :size="48" />
        </button>
      </div>

      <!-- Bottom controls (keyboard navigation hint) -->
      <div class="text-white/40 text-xs font-light font-serif">
        Usa las flechas del teclado ← → para navegar o Esc para salir
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>
