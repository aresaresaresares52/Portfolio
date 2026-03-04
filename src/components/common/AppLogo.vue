<script setup lang="ts">
interface Props {
  size?: number | string
  className?: string
}

withDefaults(defineProps<Props>(), {
  size: 40,
  className: ''
})
</script>

<template>
  <div :class="['flex items-center justify-center overflow-hidden', className]">
    <img 
      src="@/assets/logo.png" 
      alt="Logo" 
      :style="{ width: typeof size === 'number' ? `${size}px` : size, height: 'auto' }"
      class="object-contain"
    />
  </div>
</template>
