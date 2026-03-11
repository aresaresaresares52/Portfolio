<script setup lang="ts">
import { ref } from 'vue'
import { Send } from 'lucide-vue-next'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { toast } from 'vue-sonner'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  if (isSubmitting.value) return
  
  const loadingToast = toast.loading('Enviando mensaje...')
  isSubmitting.value = true
  
  try {
    const response = await fetch('https://formspree.io/f/xaqpnzob', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })

    if (response.ok) {
      toast.success('¡Mensaje enviado!', {
        id: loadingToast,
        description: 'Te responderé lo antes posible.',
      })
      
      // Limpiamos los campos inmediatamente
      formData.value = { 
        name: '', 
        email: '', 
        message: '' 
      }
    } else {
      throw new Error('Error en el envío')
    }
  } catch (error) {
    toast.error('No se pudo enviar. Inténtalo de nuevo.', {
      id: loadingToast,
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-black text-white min-h-screen">
    <div class="container section-spacing">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-center lg:items-stretch">
        
        <!-- Contact Info -->
        <div class="flex flex-col justify-center gap-6 lg:gap-12 w-full lg:w-auto text-center lg:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">Hablemos.</h1>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[rgb(0,255,0)]">Contactame.</h1>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">Escribeme.</h1>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">Cuentame.</h1>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[rgb(0,255,0)]">Contact me.</h1>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">Hablemos.</h1>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[rgb(0,255,0)]">Hire me.</h1>
        </div>

        <!-- Contact Form Wrapper -->
        <div class="flex items-stretch gap-4 md:gap-8 xl:gap-16 w-full lg:w-auto flex-1 lg:justify-end">
          <div class="bg-[#0a0a0a] p-6 md:p-10 rounded-none border-[3px] border-[#00FF00] shadow-[0_0_30px_rgba(0,255,0,0.1)] w-full min-w-0 max-w-xl self-center relative">
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid gap-3 group">
                <Label 
                  for="name" 
                  class="text-[22px] font-kanit font-normal text-white ml-1 transition-opacity"
                  :class="isSubmitting ? 'opacity-50' : 'opacity-100'"
                >
                  Nombre o empresa
                </Label>
                <Input 
                  id="name"
                  v-model="formData.name" 
                  type="text" 
                  class="w-full bg-white/5 rounded-none h-14 p-4 focus-visible:ring-[#00FF00]/50 focus-visible:border-[#00FF00] text-white text-lg font-serif font-normal placeholder:text-white/20 placeholder:font-serif placeholder:text-[18px]" 
                  placeholder="Escribe tu nombre aquí"
                  required 
                  :disabled="isSubmitting"
                />
              </div>
              
              <div class="grid gap-3 group">
                <Label 
                  for="email" 
                  class="text-[22px] font-kanit font-normal text-white ml-1 transition-opacity"
                  :class="isSubmitting ? 'opacity-50' : 'opacity-100'"
                >
                  Email de contacto
                </Label>
                <Input 
                  id="email"
                  v-model="formData.email" 
                  type="email" 
                  class="w-full bg-white/5 rounded-none h-14 p-4 focus-visible:ring-[#00FF00]/50 focus-visible:border-[#00FF00] text-white text-lg font-serif font-normal placeholder:text-white/20 placeholder:font-serif placeholder:text-[18px]" 
                  placeholder="tu@correo.com"
                  required 
                  :disabled="isSubmitting"
                />
              </div>

              <div class="grid gap-3 group">
                <Label 
                  for="message" 
                  class="text-[22px] font-kanit font-normal text-white ml-1 transition-opacity"
                  :class="isSubmitting ? 'opacity-50' : 'opacity-100'"
                >
                  Mensaje
                </Label>
                <textarea 
                  id="message"
                  v-model="formData.message" 
                  class="w-full bg-white/5 border border-input rounded-none p-4 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#00FF00]/50 focus-visible:border-[#00FF00] transition-[color,box-shadow] h-40 resize-none text-white text-lg font-serif font-normal placeholder:text-white/20 placeholder:font-serif placeholder:text-[18px] disabled:opacity-50 disabled:cursor-not-allowed" 
                  placeholder="¿En qué puedo ayudarte?"
                  required
                  :disabled="isSubmitting"
                ></textarea>
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full bg-[#00FF00] text-black p-5 rounded-none text-lg font-medium hover:bg-white transition-all shadow-[0_5px_15px_rgba(0,255,0,0.1)] flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed uppercase"
              >
                <span>{{ isSubmitting ? 'Procesando...' : 'Enviar mensaje' }}</span>
                <Send v-if="!isSubmitting" :size="20" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          <!-- Vertical Text -->
          <div class="flex items-center justify-center shrink-0 hidden sm:flex">
            <h2 class="text-xl lg:text-4xl font-sans font-bold text-white whitespace-nowrap" style="writing-mode: vertical-rl; transform: rotate(180deg);">
              dteccccares@gmail.com
            </h2>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

