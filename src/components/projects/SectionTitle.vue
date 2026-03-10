<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="w-full mb-8 mt-[70px] self-start">
    <h2 class="font-kanit font-normal text-3xl md:text-4xl text-white pb-4">
      {{ title }}
    </h2>
    <!-- La línea en un elemento independiente para mayor control -->
    <div class="w-full h-[1px] bg-white/30 truncate"></div>
  </div>
</template>
