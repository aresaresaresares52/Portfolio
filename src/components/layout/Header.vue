<script setup lang="ts">
import { ref } from 'vue'
import { 
  Home, 
  Briefcase,
  User, 
  Mail, 
  FileText,
  Menu,
  X
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import AppLogo from '@/components/common/AppLogo.vue'


const isMobileMenuOpen = ref(false)

interface NavLink {
  name: string
  path: string
  icon: any
}

const navLinks: NavLink[] = [
  { name: 'Inicio', path: '/#top', icon: Home },
  { name: 'Proyectos', path: '/#projects', icon: Briefcase },
  { name: 'Quien soy', path: '/#about', icon: User },
  { name: 'Contacto', path: '/#contact', icon: Mail },
  { name: 'CV', path: '/#cv', icon: FileText },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 h-16 bg-black/95 text-white z-50 border-b border-white/10">
    <div class="container mx-auto h-full flex items-center justify-between px-4 md:px-6">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/" class="flex items-center gap-2 font-bold transition-transform hover:scale-105">
          <AppLogo :size="32" />
          <span class="tracking-tight uppercase">ARESPOLO</span>
        </router-link>
      </div>

      <!-- Desktop Navigation Links -->
      <nav class="hidden lg:flex items-center gap-1">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path" 
          :to="link.path"
          class="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase transition-all hover:bg-brand/10 hover:text-brand"
        >
          <component 
            :is="link.icon" 
            :size="14" 
          />
          {{ link.name }}
        </router-link>
      </nav>

      <!-- Mobile Menu Trigger -->
      <Button 
        variant="ghost" 
        size="icon" 
        @click="toggleMobileMenu" 
        class="lg:hidden text-white hover:bg-brand/20 hover:text-brand"
      >
        <Menu v-if="!isMobileMenuOpen" :size="24" />
        <X v-else :size="24" />
      </Button>
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
        class="lg:hidden fixed inset-0 top-0 bg-black z-[60] flex flex-col py-20 px-8"
      >
        <button @click="isMobileMenuOpen = false" class="absolute top-5 right-5 text-white p-2">
            <X :size="32" />
        </button>
        <div class="flex flex-col gap-6">
            <router-link 
              v-for="link in navLinks" 
              :key="link.path" 
              :to="link.path"
              @click="isMobileMenuOpen = false"
              class="flex items-center gap-4 text-3xl font-bold transition-colors text-white/50 hover:text-brand"
              active-class="!text-brand"
            >
              <component :is="link.icon" :size="32" class="text-brand" />
              {{ link.name }}
            </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>
