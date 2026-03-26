<script setup lang="ts">
import cartelpam from '@/assets/PAM!/cartelpam.jpg'
import cabecerapam from '@/assets/PAM!/cabecerapam.jpg'
import mockupfacebookpam from '@/assets/PAM!/mockupfacebookpam.png'
import mockuptriptico from '@/assets/PAM!/mockuptriptico.png'
import mochupvinilopam from '@/assets/PAM!/mochupvinilopam.jpg'
import vinilopam from '@/assets/PAM!/vinilopam.jpg'
import shortpam from '@/assets/PAM!/shortpam.jpg'
import totebagpam from '@/assets/PAM!/totebagpam.png'
import post1pam from '@/assets/PAM!/post1pam.jpg'
import post2pam from '@/assets/PAM!/post2pam.jpg'
import post3pam from '@/assets/PAM!/post3pam.jpg'
import post4pam from '@/assets/PAM!/post4pam.jpg'
import camipam from '@/assets/PAM!/camipam.png' // <-- Ajusta la extensión si es .jpg

interface Project {
  id: string | number
  title: string
  category: string
  description: string
  highlight?: string
  longDescription?: string
  image: string
  technologies: string[]
  date: string
}

defineProps<{
  project: Project
}>()
const openImage = (src: string) => {
  window.open(src, '_blank')
}
</script>

<template>
  <div class="flex flex-col gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 w-full mb-12">
    
    <!-- ============================================== -->
    <!-- ESCRIBE AQUÍ EL SUBTÍTULO O TEXTO DESCRIPTIVO  -->
    <!-- ============================================== -->
    <div class="flex flex-col items-start gap-4 px-4 w-full">
      <p class="text-white/80 font-light leading-relaxed text-left text-lg md:text-xl">
      </p>
      
      <!-- RECUADRO INFORMATIVO DOBLE CLICK -->
      <div class="border border-white/20 bg-white/5 px-4 py-2 mt-5 self-start md:self-end">
        <p class="text-white/60 text-xs font-serif uppercase tracking-wider text-left md:text-right">
          Doble click para ver las imágenes a tamaño completo
        </p>
      </div>
    </div>

    <!-- IMAGEN PRINCIPAL Y CABECERAS SECUNDARIAS -->
    <div class="flex flex-col md:flex-row gap-4 lg:gap-11 w-full items-start px-0">
      <!-- Izquierda: Cartel Principal (Ancho natural según su alto) -->
      <div class="flex-none h-auto md:h-[85vh] flex justify-start">
        <img :src="cartelpam" @dblclick="openImage(cartelpam)" alt="Cartel Principal PAM!26" class="w-full md:w-auto h-auto md:h-full object-contain object-left-top cursor-zoom-in hover:opacity-95 transition-opacity" />
      </div>

      <!-- Derecha: Cabecera y Facebook (Ocupa el resto del espacio) -->
      <div class="flex-1 flex flex-col gap-4 w-full">
        <img :src="cabecerapam" @dblclick="openImage(cabecerapam)" alt="Cabecera PAM!26" class="w-full h-auto max-h-[85vh] object-contain object-right-top cursor-zoom-in hover:opacity-95 transition-opacity" />
        
        <img :src="mockupfacebookpam" @dblclick="openImage(mockupfacebookpam)" alt="Mockup Facebook" class="w-full h-auto max-h-[85vh] object-contain object-right-top cursor-zoom-in hover:opacity-95 transition-opacity mt-2 lg:mt-7" />
      </div>
    </div>

    <!-- ENVOLTORIO PARA SUBIR TODO 20px -->
    <div class="-mt-[40px] flex flex-col gap-8 md:gap-12 w-full">
      <!-- ============================================== -->
      <!-- ESCRIBE AQUÍ EL SUBTÍTULO O TEXTO DESCRIPTIVO  -->
      <!-- ============================================== -->
      <p class="text-white/80 font-light leading-relaxed text-left px-4 mt-8">
        Publicaciones para Instagram (u otras redes sociales).
      </p>

      <!-- LOS 4 POSTS -->
      <div class="flex flex-col md:flex-row gap-4 w-full">
        <div class="flex-col md:flex-row flex flex-1 gap-4">
          <div class="flex-1 flex">
            <img :src="post1pam" @dblclick="openImage(post1pam)" alt="Post 1" class="w-full max-h-[85vh] object-contain cursor-zoom-in hover:opacity-95 transition-opacity" />
          </div>
          <div class="flex-1 flex">
            <img :src="post2pam" @dblclick="openImage(post2pam)" alt="Post 2" class="w-full max-h-[85vh] object-contain cursor-zoom-in hover:opacity-95 transition-opacity" />
          </div>
        </div>
        <div class="flex-col md:flex-row flex flex-1 gap-4">
          <div class="flex-1 flex">
            <img :src="post3pam" @dblclick="openImage(post3pam)" alt="Post 3" class="w-full max-h-[85vh] object-contain cursor-zoom-in hover:opacity-95 transition-opacity" />
          </div>
          <div class="flex-1 flex">
            <img :src="post4pam" @dblclick="openImage(post4pam)" alt="Post 4" class="w-full max-h-[85vh] object-contain cursor-zoom-in hover:opacity-95 transition-opacity" />
          </div>
        </div>
      </div>

      <!-- ============================================== -->
      <!-- ESCRIBE AQUÍ EL SUBTÍTULO O TEXTO DESCRIPTIVO  -->
      <!-- ============================================== -->
      <p class="text-white/80 font-light leading-relaxed text-left px-4">
        Otros formatos diseñados.
      </p>

      <!-- TRÍPTICO Y SHORT -->
      <div class="flex flex-col md:flex-row gap-4 w-full">
        <div class="flex-1 flex">
          <img :src="mockuptriptico" @dblclick="openImage(mockuptriptico)" alt="Mockup Tríptico" class="w-full max-h-[85vh] object-contain object-left-top cursor-zoom-in hover:opacity-95 transition-opacity" />
        </div>
        <div class="flex-1 flex">
          <img :src="shortpam" @dblclick="openImage(shortpam)" alt="Pantalón Short" class="w-full max-h-[85vh] object-contain cursor-zoom-in hover:opacity-95 transition-opacity" />
        </div>
      </div>

      <!-- VINILOS -->
      <div class="flex flex-col md:flex-row gap-4 w-full">
        <div class="flex-1 flex md:-mt-[180px] justify-center">
          <img :src="vinilopam" @dblclick="openImage(vinilopam)" alt="Vinilo" class="w-full h-auto max-h-[85vh] object-contain object-center cursor-zoom-in hover:opacity-95 transition-opacity" />
        </div>
        <div class="flex-1 flex">
          <img :src="mochupvinilopam" @dblclick="openImage(mochupvinilopam)" alt="Mockup Vinilo" class="w-full h-auto max-h-[85vh] object-contain cursor-zoom-in hover:opacity-95 transition-opacity" />
        </div>
      </div>

      <!-- ============================================== -->
      <!-- ESCRIBE AQUÍ EL SUBTÍTULO O TEXTO DESCRIPTIVO  -->
      <!-- ============================================== -->
      <p class="text-white/80 font-light leading-relaxed text-left px-4">
        Merchandising: tote bags y camisetas
      </p>

      <!-- TOTE BAG Y CAMISETA -->
      <div class="flex flex-col md:flex-row gap-4 md:gap-11 w-full items-start">
        <!-- Totebag -->
        <div class="flex-1 flex w-full md:justify-start">
          <img :src="totebagpam" @dblclick="openImage(totebagpam)" alt="Tote Bag" class="w-full max-h-[85vh] object-contain md:object-left-top cursor-zoom-in hover:opacity-95 transition-opacity" />
        </div>
        <!-- Camiseta -->
        <div class="flex-1 flex w-full md:justify-end">
          <img :src="camipam" @dblclick="openImage(camipam)" alt="Camiseta" class="w-full max-h-[85vh] object-contain md:object-right-top cursor-zoom-in hover:opacity-95 transition-opacity" />
        </div>
      </div>
    </div>

  </div>
</template>
