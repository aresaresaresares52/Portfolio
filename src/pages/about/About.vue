<script setup lang="ts">
import { GraduationCap, Award, Palette, Camera, Code2, Users } from 'lucide-vue-next'

const skills = [
  { name: 'Cartelería', icon: Palette, color: 'text-brand' },
  { name: 'Fotografía', icon: Camera, color: 'text-brand' },
  { name: 'Processing', icon: Code2, color: 'text-brand' },
  { name: 'Atención al público', icon: Users, color: 'text-brand' }
]

const education = [
  { 
    institution: 'Universitat Politècnica de València', 
    degree: 'Grado en Diseño y Tecnologías Creativas', 
    period: '2023 - Presente' 
  },
  { 
    institution: 'Bachillerato de Ciencias y Tecnología', 
    degree: '12,98 / 14 (Nota de acceso)', 
    period: '2023' 
  }
]
</script>

<template>
  <div class="bg-black text-white w-full">
    <div class="container mx-auto px-6 py-32">
      <div class="max-w-5xl mx-auto">

        <!-- Intro Section -->
        <section class="mb-20 text-center">
          <h1 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Sobre Mí</h1>
          <p class="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            Soy un creador digital apasionado por la intersección entre el diseño visual y la tecnología. 
            Mi objetivo es construir productos que no solo funcionen perfectamente, sino que también deleiten a los usuarios.
            Que mas se hacer: Concimientos en el ámbito de la comunicación, exoeriencia como tecnico de sonido y actor en varios cortometrajes, modelo amateur, poeta y saxofonista vocacional, diseñador web en formacion.
          </p>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Education -->
          <section>
            <div class="flex items-center gap-3 mb-8">
              <div class="p-2 bg-brand/10 text-brand rounded-lg">
                <GraduationCap :size="24" />
              </div>
              <h2 class="text-2xl font-bold text-white">Estudios</h2>
            </div>
            
            <div class="space-y-8 border-l-2 border-white/5 pl-6 ml-4">
              <div 
                v-for="item in education" 
                :key="item.degree"
                class="relative"
              >
                <div class="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-black border-4 border-brand"></div>
                <p class="text-sm font-bold text-brand mb-1">{{ item.period }}</p>
                <h3 class="text-lg font-bold text-white">{{ item.degree }}</h3>
                <p class="text-white/40">{{ item.institution }}</p>
              </div>
            </div>
          </section>

          <!-- Skills -->
          <section>
            <div class="flex items-center gap-3 mb-8">
              <div class="p-2 bg-brand/10 text-brand rounded-lg">
                <Award :size="24" />
              </div>
              <h2 class="text-2xl font-bold text-white">Habilidades</h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                v-for="skill in skills" 
                :key="skill.name"
                class="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl shadow-sm hover:shadow-brand/10 transition-shadow group flex flex-col items-center text-center"
              >
                <component 
                  :is="skill.icon" 
                  :size="32" 
                  :class="['mb-4 transition-transform group-hover:scale-110', skill.name === 'Processing' ? 'text-brand' : skill.color]" 
                />
                <h3 class="font-bold text-white">{{ skill.name }}</h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
