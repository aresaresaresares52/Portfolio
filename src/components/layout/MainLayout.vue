<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
import Sonner from '@/components/ui/sonner/Sonner.vue'
import { TooltipProvider } from '@/components/ui/tooltip'
</script>

<template>
  <TooltipProvider>
    <div class="min-h-screen flex flex-col bg-background text-foreground">
      <!-- Toaster para notificaciones globales -->
      <Sonner position="top-center" theme="dark" />

      <!-- Header -->
      <Header />

      <!-- Main Content Area: No fixed container to allow Hero/Portada to be full-width -->
      <main class="flex-1 mt-16">
        <router-view v-slot="{ Component }">
          <transition 
            name="fade" 
            mode="out-in"
          >
            <div class="w-full h-full">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </main>

      <!-- Footer -->
      <Footer />
    </div>
  </TooltipProvider>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
