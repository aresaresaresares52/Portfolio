<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { 
  Menu,
  X
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import AppLogo from '@/components/common/AppLogo.vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const activeSection = ref('top')

interface NavLink {
  name: string
  path: string
  id: string
}

const navLinks: NavLink[] = [
  { name: 'Inicio', path: '/#top', id: 'top' },
  { name: 'Proyectos', path: '/#projects', id: 'projects' },
  { name: 'Quien soy', path: '/#about', id: 'about' },
  { name: 'Contacto', path: '/#contact', id: 'contact' },
  { name: 'CV', path: '/cv', id: 'cv' },
]

const handleScroll = () => {
  if (route.path !== '/') return

  const sections = navLinks.map(link => document.getElementById(link.id))
  // Detección mejorada usando el centro de la pantalla o un offset consistente
  const scrollPosition = window.scrollY + 200

  sections.forEach((section) => {
    if (section) {
      const offsetTop = section.offsetTop
      const offsetHeight = section.offsetHeight
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
      }
    }
  })
}

watch(() => route.fullPath, () => {
  if (route.path === '/cv') {
    activeSection.value = 'cv'
  } else if (route.path !== '/') {
    activeSection.value = ''
  } else {
    if (route.hash) {
      activeSection.value = route.hash.replace('#', '')
    } else {
      activeSection.value = 'top'
    }
    setTimeout(handleScroll, 300)
  }
}, { immediate: true })

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 h-[54px] bg-black z-50 border-b border-white/10">
    <div class="container mx-auto h-full flex items-center justify-between px-4 md:px-6">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/" class="flex items-center gap-1.5 font-bold transition-transform hover:scale-105 -ml-[4px]">
          <AppLogo :size="50" />
          <span class="tracking-tight uppercase text-[17px]"><span class="text-[#00FF00]">ARES</span>POLO</span>
        </router-link>
      </div>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:flex items-center gap-0 h-full">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path" 
          :to="link.path"
          class="h-full flex items-center justify-center px-6 text-[14px] font-bold uppercase transition-all duration-300 ease-in-out border-x border-white/5 -ml-[1px]"
          :class="activeSection === link.id 
            ? 'bg-[#00FF00] text-black' 
            : 'bg-black text-white hover:bg-brand/10 hover:text-brand'"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <!-- Mobile Menu Trigger -->
      <div class="lg:hidden flex items-center">
        <Button
          variant="ghost"
          size="icon"
          @click="toggleMobileMenu"
          class="text-white hover:bg-brand/20 hover:text-brand"
        >
          <Menu v-if="!isMobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </Button>
      </div>
    </div>

    <!-- Mobile Navigation Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden fixed inset-0 bg-black z-[60] flex flex-col pt-24 px-8"
      >
        <button @click="isMobileMenuOpen = false" class="absolute top-5 right-5 text-white p-2">
            <X :size="32" />
        </button>
        <div class="flex flex-col gap-2">
            <router-link 
              v-for="link in navLinks" 
              :key="link.path" 
              :to="link.path"
              @click="isMobileMenuOpen = false"
              class="flex items-center px-8 py-6 text-[24px] font-serif uppercase transition-all duration-300"
              :class="activeSection === link.id 
                ? 'bg-[#00FF00] text-black' 
                : 'bg-black text-white hover:bg-brand/10 hover:text-brand'"
            >
              {{ link.name }}
            </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>
