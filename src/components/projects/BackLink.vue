<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'

interface Props {
  to?: string
  label?: string
  class?: string
}

withDefaults(defineProps<Props>(), {
  to: '/#projects',
  label: 'Volver a la página principal',
  class: ''
})
</script>

<template>
  <router-link 
    :to="to"
    :class="['inline-flex items-center gap-2 text-sm font-serif font-normal text-white/50 hover:text-white transition-all group', $props.class]"
  >
    <ArrowLeft :size="16" class="group-hover:-translate-x-1 transition-transform" />
    {{ label }}
  </router-link>
</template>
