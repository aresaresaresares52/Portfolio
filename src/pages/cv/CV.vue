<script setup lang="ts">
import { GraduationCap, Briefcase, Globe, Mail, MapPin, Award, Download, Home } from 'lucide-vue-next'
import AppLogo from '@/components/common/AppLogo.vue'
import certificateC1 from '@/assets/C1.jpg'

const handlePrint = () => {
  window.print()
}
</script>

<template>
  <div class="min-h-screen bg-black section-spacing animate-in fade-in duration-500 max-md:translate-y-[50px] relative z-10">
    <div class="container max-w-4xl">
      <!-- Actions bar (Visible only on screen) -->
      <div class="flex flex-col sm:flex-row gap-4 justify-between mb-8 print:hidden">
        <router-link 
          to="/"
          class="flex items-center justify-center gap-2 bg-black border border-white/20 px-4 py-2 rounded-none text-sm font-serif font-normal text-white hover:bg-white/10 transition-all shadow-sm"
        >
          <Home :size="16" />
          Volver a Inicio
        </router-link>
        <button 
          @click="handlePrint"
          class="flex items-center justify-center gap-2 bg-black border border-white/20 px-4 py-2 rounded-none text-sm font-serif font-normal text-white hover:bg-white/10 transition-all shadow-sm"
        >
          <Download :size="16" />
          Descargar PDF / Imprimir
        </button>
      </div>

      <!-- CV Paper -->
      <div class="bg-[#0a0a0a] shadow-2xl rounded-none overflow-hidden border border-white/5 print:shadow-none print:border-none">
        
        <!-- Header / Banner -->
        <div class="bg-[rgb(255,0,0)] px-8 md:px-12 py-12 text-white">
          <div class="flex flex-col md:flex-row gap-8 items-start md:items-start text-left md:text-left">
            <!-- Photo Placeholder -->
            <div class="w-40 h-40 rounded-none bg-black/20 border-2 border-white/10 overflow-hidden flex-shrink-0 relative group">
              <img src="@/assets/fotocv.JPG" alt="Ares Polo" class="w-full h-full object-cover" />
            </div>

            <div class="flex-grow font-serif font-normal">
              <h1 class="text-4xl md:text-5xl font-serif tracking-tight mb-2 uppercase text-black">ARES POLO</h1>
              <p class="text-black text-lg mb-6 uppercase opacity-80">Diseñador gráfico y multimedia</p>
              
              <div class="flex flex-col gap-y-3 text-sm text-white/70 items-start">
                <div class="flex items-center gap-2 justify-start md:justify-start">
                  <Mail :size="14" class="text-black" />
                  <span>dteccccares@gmail.com</span>
                </div>
                <div class="flex items-center gap-2 justify-start md:justify-start">
                  <MapPin :size="14" class="text-black" />
                  <span>Valencia, España</span>
                </div>
              </div>
            </div>

            <!-- Custom Logo -->
            <div class="hidden md:flex flex-shrink-0 items-center justify-center ml-auto -mt-[-10px]">
              <AppLogo :size="128" />
            </div>
          </div>
        </div>

        <div class="p-8 md:p-12 space-y-12 bg-[#0a0a0a]">
          <!-- Formación Académica -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 bg-[rgb(255,0,0)]/10 text-[rgb(255,0,0)] rounded-none flex items-center justify-center">
                <GraduationCap :size="20" />
              </div>
              <h2 class="text-2xl font-serif font-medium text-white tracking-tight uppercase">Formación Académica</h2>
            </div>

            <div class="space-y-10 pl-4 border-l-2 border-white/5 ml-5">
              <!-- UPV -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-none bg-black border-4 border-[rgb(255,0,0)]"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-normal text-white">Grado en Diseño y Tecnologías Creativas</h3>
                    <span class="hidden md:inline-block px-3 py-1 bg-[rgb(255,0,0)]/10 text-[rgb(255,0,0)] text-xs font-serif font-normal rounded-none">2023 - Presente</span>
                  </div>
                  <p class="text-white/75 font-normal mb-3">Universidad Politécnica de Valencia (UPV)</p>
                  <p class="text-white/40 leading-relaxed font-light">
                    Segundo año del grado. Trabajando duro para alcanzar mis metas.
                  </p>
                </div>
              </div>


              <!-- Bachillerato -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-none bg-white border-2 border-gray-300"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-normal text-white">Bachillerato de Ciencias y Tecnología</h3>
                    <span class="hidden md:inline-block px-3 py-1 bg-white/10 text-white/75 text-xs font-serif font-normal rounded-none">Finalizado</span>
                  </div>
                  <p class="text-white/40 leading-relaxed font-light">Nota de acceso a la universidad de 12,98 / 14.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Idiomas -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 bg-[rgb(255,0,0)]/10 text-[rgb(255,0,0)] rounded-none flex items-center justify-center">
                <Globe :size="20" />
              </div>
              <h2 class="text-2xl font-serif font-medium text-white tracking-tight uppercase">Idiomas</h2>
            </div>

            <div class="space-y-10 pl-4 border-l-2 border-white/5 ml-5">
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-none bg-white border-2 border-gray-300"></div>
                <div>
                  <div class="flex flex-row justify-between items-center mb-2 gap-1 w-full">
                    <h3 class="text-xl font-normal text-white">Inglés: Nivel C1</h3>
                    <a 
                      :href="certificateC1" 
                      target="_blank"
                      class="px-3 py-1 bg-white/10 text-white/75 text-xs font-serif font-normal rounded-none hover:bg-white/20 transition-colors cursor-pointer border border-[rgb(255,0,0)]/30 max-md:border-white/10 max-md:bg-white/5"
                    >
                      Certificado Oficial
                    </a>
                  </div>
                  <p class="text-white/75 font-normal mb-3">Escuela Oficial de Idiomas (EOI)</p>
                  <p class="text-white/40 leading-relaxed font-light">
                    Capacidad para comprender y producir textos complejos, así como expresarme de forma fluida y espontánea.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Experiencia y Proyectos -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 bg-[rgb(255,0,0)]/10 text-[rgb(255,0,0)] rounded-none flex items-center justify-center">
                <Briefcase :size="20" />
              </div>
              <h2 class="text-2xl font-serif font-medium text-white tracking-tight uppercase">Experiencia y Proyectos</h2>
            </div>

            <div class="space-y-10 pl-4 border-l-2 border-white/5 ml-5">
              <!-- Japón -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-none bg-white border-2 border-gray-300"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-normal text-white flex items-center gap-2">
                       <Globe :size="18" class="text-white/75 hidden md:block" />
                       Experiencia Internacional: Osaka English House
                    </h3>
                    <span class="hidden md:inline-block px-3 py-1 bg-white/10 text-white/75 text-xs font-serif font-normal rounded-none">Verano 2025</span>
                  </div>
                  <p class="text-white/75 font-normal mb-3">Osaka, Japón</p>
                  <p class="text-white/40 leading-relaxed font-light">
                    Estancia de más de un mes en un entorno multicultural como parte del equipo. Perfeccionando habilidades comunicativas y de resolución de problemas en un contexto global altamente dinámico.
                  </p>
                </div>
              </div>

              <!-- Sector Servicios -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-none bg-white border-2 border-gray-300"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-normal text-white">Sector Servicios: La Marcona</h3>
                    <span class="hidden md:inline-block px-3 py-1 bg-white/10 text-white/75 text-xs font-serif font-normal rounded-none">Periodos festivos</span>
                  </div>
                  <p class="text-white/75 font-normal mb-3">Titaguas, España</p>
                  <p class="text-white/40 leading-relaxed font-light">
                    Colaboración recurrente durante periodos estivales y festivos. Desarrollo de alto sentido de la responsabilidad, atención al detalle y trabajo en equipo bajo presión.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Otras habilidades -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 bg-[rgb(255,0,0)]/10 text-[rgb(255,0,0)] rounded-none flex items-center justify-center">
                <Award :size="20" />
              </div>
              <h2 class="text-2xl font-serif font-medium text-white tracking-tight uppercase">Cualidades Clave</h2>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-none text-sm font-serif font-normal text-white/80">Responsabilidad</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-none text-sm font-serif font-normal text-white/80">Resolución de Problemas</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-none text-sm font-serif font-normal text-white/80">Comunicación</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-none text-sm font-serif font-normal text-white/80">Adaptabilidad</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-none text-sm font-serif font-normal text-white/80">Trabajo en equipo</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-none text-sm font-serif font-normal text-white/80">Creatividad</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-none text-sm font-serif font-normal text-white/80">Capacidad de aprendizaje</span>
              <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-none text-sm font-serif font-normal text-white/80">Versatilidad</span>
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
