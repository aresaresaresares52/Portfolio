<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'

const photosBodegon = ["bodegon1.jpg", "bodegon2.jpg", "bodegon3.jpg", "bodegon4.webp", "bodegon5.jpg"];
const photosRetrato = ["retrato1.webp", "retrato2.webp", "retrato3.webp", "retrato4.webp"];

// Plugins con delay 4000 (doble de lento) y stopOnInteraction=true
const pluginBodegon = Autoplay({ delay: 4000, stopOnInteraction: true })
const pluginRetrato = Autoplay({ delay: 4000, stopOnInteraction: true })

const stopAutoplayBodegon = () => {
  pluginBodegon.stop()
}

const stopAutoplayRetrato = () => {
  pluginRetrato.stop()
}
</script>

<template>
  <div class="w-full flex flex-col items-center gap-24 py-16">
    
    <!-- Carrusel 1: Bodegones -->
    <section class="w-full max-w-[600px] flex flex-col translate-y-[0px]">
      <h2 class="font-kanit font-normal text-3xl md:text-4xl text-white mt-[50px] self-start w-full border-b border-white/30 pb-4 mb-8">Bodegón</h2>
      
      <Carousel 
        class="relative w-full"
        :opts="{ loop: true, dragFree: true }"
        :plugins="[pluginBodegon]"
      >
        <CarouselContent>
          <CarouselItem v-for="img in photosBodegon" :key="img" class="basis-auto">
            <div class="p-1">
              <Card class="border-none bg-transparent shadow-none">
                <CardContent class="p-0 overflow-visible">
                  <img 
                    :src="`/src/assets/fotografía/${img}`" 
                    :alt="`Photography ${img}`"
                    class="h-[400px] w-auto block object-contain"
                  >
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <!-- Flechas blancas que paran el autoplay al hacer clic -->
        <CarouselPrevious 
          class="border-white/20 text-white hover:bg-white hover:text-black hidden md:flex" 
          @click="stopAutoplayBodegon" 
        />
        <CarouselNext 
          class="border-white/20 text-white hover:bg-white hover:text-black hidden md:flex" 
          @click="stopAutoplayBodegon" 
        />
      </Carousel>
    </section>

    <!-- Carrusel 2: Retratos -->
    <section class="w-full max-w-[600px] flex flex-col translate-y-[0px]">
      <h2 class="font-kanit font-normal text-3xl md:text-4xl text-white mt-[50px] self-start w-full border-b border-white/30 pb-4 mb-8">Retrato</h2>
      
      <Carousel 
        class="relative w-full"
        :opts="{ loop: true, dragFree: true }"
        :plugins="[pluginRetrato]"
      >
        <CarouselContent>
          <CarouselItem v-for="img in photosRetrato" :key="img" class="basis-auto">
            <div class="p-1">
              <Card class="border-none bg-transparent shadow-none">
                <CardContent class="p-0 overflow-visible">
                  <img 
                    :src="`/src/assets/fotografía/${img}`" 
                    :alt="`Photography ${img}`"
                    class="h-[400px] w-auto block object-contain"
                  >
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <!-- Flechas blancas que paran el autoplay al hacer clic -->
        <CarouselPrevious 
          class="border-white/20 text-white hover:bg-white hover:text-black hidden md:flex" 
          @click="stopAutoplayRetrato" 
        />
        <CarouselNext 
          class="border-white/20 text-white hover:bg-white hover:text-black hidden md:flex" 
          @click="stopAutoplayRetrato" 
        />
      </Carousel>
    </section>

  </div>
</template>
