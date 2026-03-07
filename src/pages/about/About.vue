<script setup lang="ts">
import bgImage from '@/assets/about.fondo.jpg'

</script>

<template>
  <article 
    class="relative bg-black text-white w-full bg-auto bg-center bg-no-repeat" 
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
    <div class="container py-32"> 
      <div class="max-w-5xl mx-auto">

        <!-- Columna de Contenido a la Izquierda (Mitad de pantalla en PC) -->
        <div class="w-full lg:w-1/2 md:w-2/3 space-y-16">
          
          <!-- Intro Section -->
          <section class="text-left">
            <h1 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Quien Soy</h1>
            <p class="text-lg text-white/60 leading-relaxed max-w-2xl">
              Sí, me llamo Ares de verdad. Estoy en segundo año del Grado en Diseño y Tecnologías Creativas en la UPV. Quien quiera saber más sobre mi trayectoria y experiencia, puede echar un ojo a mi curriculum. Breve adelanto: he trabajado en Japón.<br/><br/>
              Quien vea mis proyectos se dará cuenta facilmente de que soy muy versátil.<br/>
              Conocimientos en el ámbito de la comunicación, experiencia como técnico de sonido y actor en varios cortometrajes, modelo amateur, poeta y saxofonista vocacional, diseñador web en formación.
            </p>
          </section>

        </div>
      </div>
    </div>
  </article>
</template>

