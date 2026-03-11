<script setup lang="ts">
import BackLink from '@/components/projects/BackLink.vue'
</script>

<template>
  <div class="bg-black text-white min-h-screen flex flex-col p-6 md:p-12">
    <!-- Botón volver -->
    <nav class="mb-4">
      <BackLink />
    </nav>
    
    <!-- Recuadro principal -->
    <div class="flex-1 flex items-center justify-center p-4">
      <main class="border-[3px] border-[#00FF00] flex items-center justify-center p-3 md:p-6 text-center shadow-[0_0_30px_rgba(0,255,0,0.1)] group relative overflow-hidden max-w-2xl w-full">
        <div class="absolute inset-0 bg-[#00FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <h1 class="text-xl md:text-2xl lg:text-3xl font-kanit font-normal text-white/70 tracking-tight leading-tight px-2">
          Lo siento, ahora mismo no tengo más proyectos que mostrarte. Seguiré trabajando duro y mejorando mis habilidades en el proceso. ¡Vuelve a visitarme! :D
        </h1>
      </main>
    </div>
  </div>
</template>
