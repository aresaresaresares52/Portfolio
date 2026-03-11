<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

interface Props {
  to?: string
  label?: string
  class?: string
}

withDefaults(defineProps<Props>(), {
  to: '/projectsvermas',
  label: 'Ver más proyectos',
  class: ''
})
</script>

<template>
  <router-link 
    :to="to"
    :class="['inline-flex items-center gap-2 text-sm font-serif font-normal text-white/50 hover:text-white transition-all group', $props.class]"
  >
    {{ label }}
    <ArrowRight :size="16" class="group-hover:translate-x-1 transition-transform" />
  </router-link>
</template>
