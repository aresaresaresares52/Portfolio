<script setup lang="ts">
import { Github, Twitter, Linkedin, Instagram } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' }
]
</script>

<template>
  <footer class="bg-black border-t border-white/5 py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 class="text-xl font-bold text-white mb-2">ARES<span class="text-brand">POLO</span></h2>
          <p class="text-white/40 text-sm font-light">Diseño versátil e interdisciplinar</p>
        </div>

        <div class="flex items-center gap-6">
          <a 
            v-for="link in socialLinks" 
            :key="link.name" 
            :href="link.href"
            class="text-white/40 hover:text-brand transition-all hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.name"
          >
            <component :is="link.icon" :size="20" />
          </a>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-white/5 text-center text-xs text-white/20 tracking-widest uppercase">
        &copy; {{ currentYear }} Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>
