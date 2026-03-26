<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import SectionTitle from '@/components/projects/SectionTitle.vue'

const photosBodegon = ["bodegon1.jpg", "bodegon2.jpg", "bodegon3.jpg", "bodegon4.jpg", "bodegon5.jpg"];
const photosRetrato = ["retrato1.jpg", "retrato2.jpg", "retrato3.jpg", "retrato4.jpg"];
const photosPortadas = ["Artboard 1.jpg", "Artboard 1 copy.jpg", "disco1.jpg", "embo.jpg"];

// Plugins con delay 4000 (doble de lento) y stopOnInteraction=true
const pluginBodegon = Autoplay({ delay: 4000, stopOnInteraction: true })
const pluginRetrato = Autoplay({ delay: 4000, stopOnInteraction: true })
const pluginPortadas = Autoplay({ delay: 4000, stopOnInteraction: true })

const stopAutoplayBodegon = () => {
  pluginBodegon.stop()
}

const stopAutoplayRetrato = () => {
  pluginRetrato.stop()
}

const stopAutoplayPortadas = () => {
  pluginPortadas.stop()
}

const getImageUrl = (name: string, folder: string) => {
  return new URL(`../../../assets/${folder}/${name}`, import.meta.url).href
}
</script>

<template>
  <div class="w-full flex flex-col items-center gap-24 py-16">
    
    <!-- Carrusel 1: Bodegones -->
    <section class="w-full max-w-[600px] px-12 md:px-0 flex flex-col translate-y-[-30px]">
      <SectionTitle title="Bodegón" />
      
      <Carousel 
        class="relative w-full translate-y-[-35px]"
        :opts="{ loop: true, dragFree: true }"
        :plugins="[pluginBodegon]"
      >
        <CarouselContent>
          <CarouselItem v-for="img in photosBodegon" :key="img" class="basis-auto">
            <div class="p-1">
              <Card class="border-none bg-transparent shadow-none">
                <CardContent class="p-0 overflow-visible">
                  <img 
                    :src="getImageUrl(img, 'fotografía')" 
                    :alt="`Photography ${img}`"
                    class="h-[250px] md:h-[400px] w-auto block object-contain"
                  >
                </CardContent>
              </Card>
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

    <!-- Carrusel 2: Retratos -->
    <section class="w-full max-w-[600px] px-12 md:px-0 flex flex-col translate-y-[-140px]">
      <SectionTitle title="Retrato" />
      
      <Carousel 
        class="relative w-full translate-y-[-35px]"
        :opts="{ loop: true, dragFree: true }"
        :plugins="[pluginRetrato]"
      >
        <CarouselContent>
          <CarouselItem v-for="img in photosRetrato" :key="img" class="basis-auto">
            <div class="p-1">
              <Card class="border-none bg-transparent shadow-none">
                <CardContent class="p-0 overflow-visible">
                  <img 
                    :src="getImageUrl(img, 'fotografía')" 
                    :alt="`Photography ${img}`"
                    class="h-[250px] md:h-[400px] w-auto block object-contain"
                  >
                </CardContent>
              </Card>
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

    <!-- Carrusel 3: Portadas de música -->
    <section class="w-full max-w-[600px] px-12 md:px-0 flex flex-col translate-y-[-200px]">
      <SectionTitle title="Diseño de Portadas de Música" />
      
      <Carousel 
        class="relative w-full translate-y-[-35px]"
        :opts="{ loop: true, dragFree: true }"
        :plugins="[pluginPortadas]"
      >
        <CarouselContent>
          <CarouselItem v-for="img in photosPortadas" :key="img" class="basis-full flex justify-center">
            <div class="p-1 w-full flex justify-center">
              <Card class="border-none bg-transparent shadow-none w-full max-w-[600px]">
                <CardContent class="p-0 overflow-visible flex justify-center">
                  <img 
                    :src="getImageUrl(img, 'portadas album')" 
                    :alt="`Album Cover ${img}`"
                    class="w-full h-auto aspect-square max-h-[300px] md:max-h-[600px] block object-cover"
                  >
                </CardContent>
              </Card>
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

  </div>

</template>
