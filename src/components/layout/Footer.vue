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
  <footer class="bg-gray-50 border-t border-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 class="text-xl font-bold text-gray-900 mb-2">ARES<span class="text-blue-600">POLO</span></h2>
          <p class="text-gray-500 text-sm">Diseño versatil e interdisciplinar</p>
        </div>

        <div class="flex items-center gap-6">
          <a 
            v-for="link in socialLinks" 
            :key="link.name" 
            :href="link.href"
            class="text-gray-400 hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.name"
          >
            <component :is="link.icon" :size="20" />
          </a>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
        &copy; {{ currentYear }} Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>
