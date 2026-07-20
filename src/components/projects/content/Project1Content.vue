<script setup lang="ts">
const posters = [
  "Descartado1_Molinero.Teo_Polo.Ares-01.jpg",
  "Final_Molinero.Teo_Polo.Ares.jpg",
   "cartel4.jpg"

 
];

const getImageUrl = (name: string) => {
  return new URL(`../../../assets/carteles/${name}`, import.meta.url).href
}

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
  <div class="pt-16 translate-y-[10px] flex flex-col gap-10">
    <p class="text-[rgb(198,0,0)] font-medium text-[23px] text-left">
      Estos son algunos de mis mejores trabajos:
    </p>
    
    <div class="flex flex-wrap gap-6 w-full max-w-6xl">
      <div 
        v-for="poster in posters" 
        :key="poster"
        class="flex-[1_1_calc(33.333%-1rem)] min-w-[250px]"
      >
        <img 
          :src="getImageUrl(poster)" 
          :alt="poster"
          class="w-full h-auto"
        />
      </div>
    </div>
  </div>
</template>
