<script setup lang="ts">
interface Props {
  image: string
}
defineProps<Props>()
</script>

<template>
  <div 
    class="absolute inset-0 z-0 bg-fixed bg-center bg-no-repeat bg-[length:100%_auto] transition-all duration-700 ease-out pointer-events-none group-hover/projects:brightness-[1.5] group-hover/projects:[background-position:calc(50%-20px)_center]"
    :style="{ backgroundImage: `url(${image})` }"
  ></div>
</template>
