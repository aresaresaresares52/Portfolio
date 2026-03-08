<script setup lang="ts">
import bgImage from '@/assets/about.fondo.jpg'
import TechSkills from '@/components/about/TechSkills.vue'

</script>

<template>
  <article 
    class="relative min-h-screen bg-black text-white w-full bg-auto bg-center bg-no-repeat" 
    :style="{ backgroundImage: `linear-gradient(
    to bottom, 
    rgba(0,0,0,1) 0%,      /* Negro total arriba */
    rgba(0,0,0,0.5) 8%,
    rgba(0,0,0,0.15) 15%,  
    rgba(0,0,0,0) 40%,     /* A partir de aquí la foto está limpia */
    rgba(0,0,0,0.2) 80%,     /* Sigue limpia casi hasta el final */
    rgba(0,0,0,0.6) 90%,
    rgba(0,0,0,1) 100%   /* Solo un sombreado suave al cerrar */
  ), url(${bgImage})` }"
  >
    <div class="container section-spacing">

        <!-- Columna de Contenido a la Izquierda (Mitad de pantalla en PC) -->
        <div class="w-full lg:w-1/2 md:w-2/3 space-y-16">
          
          <!-- Intro Section -->
          <section class="text-left">
            <h1 class="text-4xl md:text-5xl font-serif font-bold text-[rgb(255,0,0)] mb-6">Quien Soy</h1>
            <div class="font-light text-xl text-white leading-normal max-w-2xl space-y-4">
              <p>Hola! Me llamo Ares de verdad. Soy un diseñador versátil y polifacético que experimenta con una gran variedad de estilos y se adapta siempre a lo que pide el cliente. Actualmente estudio Diseño y Tecnologías Creativas en la UPV</p>
              <p>Entre mis ámbitos de trabajo preferidos, se encuentran la cartelería, la fotografía y la programación artñistica, pero puedo abarcar mucho más.</p>
              <p>Desde técnico de sonido hasta diseñador web, mi formación académica me ha permitido trabajar y adquirir conocimientos en muchos y diversos ámbitos, asegurandome una vision global para cada proyecto en el que trabajo.</p>
            </div>
          </section>

          <!-- Tech Skills Section -->
          <section class="text-left mt-16">
            <h2 class="text-3xl font-serif font-bold text-[rgb(255,0,0)] mb-6">Qué tecnologías domino</h2>
            <TechSkills />
          </section>

      </div>
    </div>
  </article>
</template>

