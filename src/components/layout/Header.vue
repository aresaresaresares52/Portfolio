<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, Home, Briefcase, User, Mail, FileText } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navItems = [
  { name: 'Inicio', path: '/', icon: Home },
  { name: 'Trabajos', path: '/projects', icon: Briefcase },
  { name: 'Sobre Mí', path: '/about', icon: User },
  { name: 'Contacto', path: '/contact', icon: Mail }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="text-xl font-bold tracking-tight text-gray-900" @click="closeMenu">
        ARES<span class="text-blue-600">POLO</span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <router-link 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path"
          class="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5"
          active-class="text-blue-600"
        >
          <component :is="item.icon" :size="16" />
          {{ item.name }}
        </router-link>
        
        <!-- CV Link -->
        <router-link 
          to="/cv" 
          class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-sm"
        >
          CV
        </router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        @click="toggleMenu"
      >
        <Menu v-if="!isMenuOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div 
      v-show="isMenuOpen" 
      class="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200"
    >
      <router-link 
        v-for="item in navItems" 
        :key="item.path" 
        :to="item.path"
        class="flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all font-medium"
        active-class="bg-blue-50 text-blue-600"
        @click="closeMenu"
      >
        <component :is="item.icon" :size="20" />
        {{ item.name }}
      </router-link>

      <!-- Mobile CV Link -->
      <router-link 
        to="/cv"
        class="flex items-center gap-3 p-3 rounded-xl text-blue-600 bg-blue-50 font-bold"
        @click="closeMenu"
      >
        <FileText :size="20" />
        Curriculum (CV)
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  position: relative;
}

@media (min-width: 768px) {
  .router-link-active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgb(37, 99, 235);
    border-radius: 2px;
  }
}
</style>
