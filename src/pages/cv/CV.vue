<script setup lang="ts">
import { GraduationCap, Briefcase, Globe, Mail, MapPin, Phone, Github, Linkedin, Award, Download } from 'lucide-vue-next'

const handlePrint = () => {
  window.print()
}
</script>

<template>
  <div class="min-h-screen bg-gray-50/50 py-12 md:py-24 animate-in fade-in duration-500">
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- Actions bar (Visible only on screen) -->
      <div class="flex justify-end mb-8 print:hidden">
        <button 
          @click="handlePrint"
          class="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
        >
          <Download :size="16" />
          Descargar PDF / Imprimir
        </button>
      </div>

      <!-- CV Paper -->
      <div class="bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100 print:shadow-none print:border-none">
        
        <!-- Header / Banner -->
        <div class="bg-gray-900 px-8 md:px-12 py-12 text-white">
          <div class="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <!-- Photo Placeholder -->
            <div class="w-40 h-40 rounded-3xl bg-gray-800 border-2 border-gray-700 overflow-hidden flex-shrink-0 relative group">
              <div class="absolute inset-0 flex items-center justify-center text-gray-600 bg-gray-800">
                <span class="text-xs uppercase font-bold tracking-widest">Foto</span>
              </div>
              <!-- <img src="/tu-foto.jpg" alt="Ares Polo" class="w-full h-full object-cover relative z-10" /> -->
            </div>

            <div class="flex-grow">
              <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-2">ARES POLO</h1>
              <p class="text-blue-400 font-bold text-lg mb-6 uppercase tracking-[0.2em]">Diseño & Tecnologías Creativas</p>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-400">
                <div class="flex items-center gap-2 justify-center md:justify-start">
                  <Mail :size="14" class="text-blue-400" />
                  <span>dteccccares@gmail.com</span>
                </div>
                <div class="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin :size="14" class="text-blue-400" />
                  <span>Valencia, España</span>
                </div>
                <div class="flex items-center gap-2 justify-center md:justify-start">
                  <Phone :size="14" class="text-blue-400" />
                  <span>+34 000 000 000</span>
                </div>
                <div class="flex items-center gap-6 justify-center md:justify-start mt-2">
                  <a href="#" class="hover:text-white transition-colors"><Github :size="16" /></a>
                  <a href="#" class="hover:text-white transition-colors"><Linkedin :size="16" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="p-8 md:p-12 space-y-12 bg-white">
          <!-- Formación Académica -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <GraduationCap :size="20" />
              </div>
              <h2 class="text-2xl font-black text-gray-900 tracking-tight uppercase">Formación Académica</h2>
            </div>

            <div class="space-y-10 pl-4 border-l-2 border-gray-100 ml-5">
              <!-- UPV -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white border-4 border-blue-600"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-bold text-gray-900">Grado en Diseño y Tecnologías Creativas</h3>
                    <span class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">2023 - Presente</span>
                  </div>
                  <p class="text-gray-600 font-semibold mb-3">Universidad Politécnica de Valencia (UPV)</p>
                  <p class="text-gray-500 leading-relaxed italic">
                    Segundo año del grado. Explorando activamente la intersección entre la creatividad visual y la implementación técnica.
                  </p>
                </div>
              </div>

              <!-- Bachillerato -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-bold text-gray-900">Bachillerato de Ciencias y Tecnología</h3>
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">Finalizado</span>
                  </div>
                  <p class="text-gray-500 leading-relaxed font-medium">Nota de acceso a la universidad de <span class="text-blue-600 font-bold">12,98 / 14</span>.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Experiencia y Proyectos -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                <Briefcase :size="20" />
              </div>
              <h2 class="text-2xl font-black text-gray-900 tracking-tight uppercase">Experiencia y Proyectos</h2>
            </div>

            <div class="space-y-10 pl-4 border-l-2 border-gray-100 ml-5">
              <!-- Japón -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white border-4 border-purple-600"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-bold text-gray-900 flex items-center gap-2">
                       <Globe :size="18" class="text-purple-600" />
                       Experiencia Internacional: Osaka English House
                    </h3>
                    <span class="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full">Verano 2025</span>
                  </div>
                  <p class="text-gray-600 font-semibold mb-3">Osaka, Japón</p>
                  <p class="text-gray-500 leading-relaxed">
                    Estancia de más de un mes en un entorno multicultural como parte del equipo. Perfeccionando habilidades comunicativas y de resolución de problemas en un contexto global altamente dinámico.
                  </p>
                </div>
              </div>

              <!-- Sector Servicios -->
              <div class="relative">
                <div class="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-300"></div>
                <div>
                  <div class="flex flex-col md:flex-row md:justify-between items-start mb-2 gap-1">
                    <h3 class="text-xl font-bold text-gray-900">Sector Servicios: La Marcona</h3>
                    <span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">Periodos festivos</span>
                  </div>
                  <p class="text-gray-600 font-semibold mb-3">Titaguas, España</p>
                  <p class="text-gray-500 leading-relaxed">
                    Colaboración recurrente durante periodos estivales y festivos. Desarrollo de alto sentido de la responsabilidad, atención al detalle y trabajo en equipo bajo presión.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Otras habilidades -->
          <section>
            <div class="flex items-center gap-4 mb-8">
              <div class="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                <Award :size="20" />
              </div>
              <h2 class="text-2xl font-black text-gray-900 tracking-tight uppercase">Cualidades Clave</h2>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-700">Responsabilidad</span>
              <span class="px-4 py-2 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-700">Resolución de Problemas</span>
              <span class="px-4 py-2 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-700">Comunicación Global</span>
              <span class="px-4 py-2 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-700">Adaptabilidad</span>
              <span class="px-4 py-2 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-700">Atención al Detalle</span>
            </div>
          </section>

        </div>

        <!-- Footer Banner Print only -->
        <div class="hidden print:block border-t border-gray-100 p-8 text-center text-sm text-gray-400">
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
  }
}
</style>
