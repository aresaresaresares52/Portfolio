<script setup lang="ts">
import { GraduationCap, Briefcase, Globe, Mail, MapPin, Phone, Github, Linkedin, Award, Download, Home } from 'lucide-vue-next'

const handlePrint = () => {
  window.print()
}
</script>

<template>
  <div class="min-h-screen bg-black section-spacing animate-in fade-in duration-500">
    <div class="container max-w-4xl">
      <!-- Actions bar (Visible only on screen) -->
      <div class="flex flex-col sm:flex-row gap-4 justify-between mb-8 print:hidden">
        <router-link 
          to="/"
          class="flex items-center justify-center gap-2 bg-black border border-white/20 px-4 py-2 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-all shadow-sm"
        >
          <Home :size="16" />
          Volver a Inicio
        </router-link>
        <button 
          @click="handlePrint"
          class="flex items-center justify-center gap-2 bg-black border border-white/20 px-4 py-2 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-all shadow-sm"
        >
          <Download :size="16" />
          Descargar PDF / Imprimir
        </button>
      </div>

      <!-- CV Paper -->
      <div class="bg-[#0a0a0a] shadow-2xl rounded-[2.5rem] overflow-hidden border border-white/5 print:shadow-none print:border-none">
        
        <!-- Header / Banner -->
        <div class="bg-brand px-8 md:px-12 py-12 text-white">
          <div class="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <!-- Photo Placeholder -->
            <div class="w-40 h-40 rounded-3xl bg-black/20 border-2 border-white/10 overflow-hidden flex-shrink-0 relative group">
              <div class="absolute inset-0 flex items-center justify-center text-white/20 bg-black/20">
                <span class="text-xs uppercase font-bold tracking-widest">Foto</span>
              </div>
            </div>

            <div class="flex-grow">
              <h1 class="text-4xl md:text-5xl font-serif tracking-tight mb-2 uppercase text-black">ARES POLO</h1>
              <p class="text-black font-bold text-lg mb-6 uppercase tracking-[0.2em] opacity-80">Diseño & Tecnologías Creativas</p>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-white/70">
                <div class="flex items-center gap-2 justify-center md:justify-start">
                  <Mail :size="14" class="text-black" />
                  <span>dteccccares@gmail.com</span>
                </div>
                <div class="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin :size="14" class="text-black" />
                  <span>Valencia, España</span>
                </div>
                <div class="flex items-center gap-2 justify-center md:justify-start">
                  <Phone :size="14" class="text-black" />
                  <span>+34 000 000 000</span>
                </div>
                <div class="flex items-center gap-6 justify-center md:justify-start mt-2">
                  <a href="#" class="hover:text-black transition-colors"><Github :size="16" class="text-black" /></a>
                  <a href="#" class="hover:text-black transition-colors"><Linkedin :size="16" class="text-black" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="p-8 md:p-12 space-y-12 bg-[#0a0a0a]">
          <!-- Formación Académica -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 bg-brand/10 text-brand rounded-xl flex items-center justify-center">
                <GraduationCap :size="20" />
              </div>
              <h2 class="text-2xl font-serif text-white tracking-tight uppercase">Formación Académica</h2>
            </div>

            <div class="space-y-10 pl-4 border-l-2 border-white/5 ml-5">
              <!-- UPV -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-black border-4 border-brand"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-bold text-white">Grado en Diseño y Tecnologías Creativas</h3>
                    <span class="px-3 py-1 bg-brand/10 text-brand text-xs font-bold rounded-full">2023 - Presente</span>
                  </div>
                  <p class="text-white/60 font-semibold mb-3">Universidad Politécnica de Valencia (UPV)</p>
                  <p class="text-white/40 leading-relaxed italic">
                    Segundo año del grado. Explorando activamente la intersección entre la creatividad visual y la implementación técnica.
                  </p>
                </div>
              </div>


              <!-- Bachillerato -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-bold text-white">Bachillerato de Ciencias y Tecnología</h3>
                    <span class="px-3 py-1 bg-white/10 text-white/60 text-xs font-bold rounded-full">Finalizado</span>
                  </div>
                  <p class="text-white/60 leading-relaxed font-medium">Nota de acceso a la universidad de <span class="text-brand font-bold">12,98 / 14</span>.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Experiencia y Proyectos -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 bg-brand/10 text-brand rounded-xl flex items-center justify-center">
                <Briefcase :size="20" />
              </div>
              <h2 class="text-2xl font-serif text-white tracking-tight uppercase">Experiencia y Proyectos</h2>
            </div>

            <div class="space-y-10 pl-4 border-l-2 border-white/5 ml-5">
              <!-- Japón -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-bold text-white flex items-center gap-2">
                       <Globe :size="18" class="text-white/60" />
                       Experiencia Internacional: Osaka English House
                    </h3>
                    <span class="px-3 py-1 bg-white/10 text-white/60 text-xs font-bold rounded-full">Verano 2025</span>
                  </div>
                  <p class="text-white/60 font-semibold mb-3">Osaka, Japón</p>
                  <p class="text-white/40 leading-relaxed">
                    Estancia de más de un mes en un entorno multicultural como parte del equipo. Perfeccionando habilidades comunicativas y de resolución de problemas en un contexto global altamente dinámico.
                  </p>
                </div>
              </div>

              <!-- Sector Servicios -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-bold text-white">Sector Servicios: La Marcona</h3>
                    <span class="px-3 py-1 bg-white/10 text-white/60 text-xs font-bold rounded-full">Periodos festivos</span>
                  </div>
                  <p class="text-white/60 font-semibold mb-3">Titaguas, España</p>
                  <p class="text-white/40 leading-relaxed">
                    Colaboración recurrente durante periodos estivales y festivos. Desarrollo de alto sentido de la responsabilidad, atención al detalle y trabajo en equipo bajo presión.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Otras habilidades -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 bg-brand/10 text-brand rounded-xl flex items-center justify-center">
                <Award :size="20" />
              </div>
              <h2 class="text-2xl font-serif text-white tracking-tight uppercase">Cualidades Clave</h2>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-white/80">Responsabilidad</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-white/80">Resolución de Problemas</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-white/80">Comunicación</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-white/80">Adaptabilidad</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-white/80">Trabajo en equipo</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-white/80">Creatividad</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-white/80">Capacidad de aprendizaje</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-white/80">Versatilidad</span>
            </div>
          </section>

        </div>

        <!-- Footer Banner Print only -->
        <div class="hidden print:block border-t border-white/5 p-8 text-center text-sm text-white/40">
          Documento generado en arespolo-portfolio.web
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  @page {
    margin: 0;
  }
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
</style>
