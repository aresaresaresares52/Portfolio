<script setup lang="ts">
import { ref } from 'vue'
import { Send, MessageSquare } from 'lucide-vue-next'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    const response = await fetch('https://formspree.io/f/xaqpnzob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message
      })
    })

    if (response.ok) {
      isSuccess.value = true
      formData.value = { name: '', email: '', message: '' }
      setTimeout(() => { isSuccess.value = false }, 5000)
    } else {
      console.error('Error al enviar el formulario')
    }
  } catch (error) {
    console.error('Error de red:', error)
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

          <!-- Contact Form & Vertical Text Wrapper -->
          <div class="flex items-stretch gap-4 md:gap-8 xl:gap-16 w-full lg:w-auto flex-1 lg:justify-end">
            <!-- Contact Form -->
            <div class="bg-[#0a0a0a] p-6 md:p-10 rounded-none border-[3px] border-[#00FF00] shadow-2xl w-full min-w-0 max-w-xl">
            <form v-if="!isSuccess" @submit.prevent="handleSubmit" class="space-y-6 font-serif">
              <div>
                <label class="block mb-3 text-lg font-normal text-white ml-1">Nombre o empresa</label>
                <input 
                  v-model="formData.name" 
                  type="text" 
                  class="w-full bg-white/5 border border-white/10 rounded-none p-4 focus:ring-2 focus:ring-[#00FF00] transition-all outline-none text-white placeholder:text-white/20" 
                  placeholder="Nombre o empresa"
                  required 
                />
              </div>
              
              <div>
                <label class="block mb-3 text-lg font-normal text-white ml-1">Email</label>
                <input 
                  v-model="formData.email" 
                  type="email" 
                  class="w-full bg-white/5 border border-white/10 rounded-none p-4 focus:ring-2 focus:ring-[#00FF00] transition-all outline-none text-white placeholder:text-white/20" 
                  placeholder="tu@email.com"
                  required 
                />
              </div>

              <div>
                <label class="block mb-3 text-lg font-normal text-white ml-1">Mensaje</label>
                <textarea 
                  v-model="formData.message" 
                  class="w-full bg-white/5 border border-white/10 rounded-none p-4 focus:ring-2 focus:ring-[#00FF00] transition-all outline-none h-40 resize-none text-white placeholder:text-white/20" 
                  placeholder="¿Qué se te ofrece?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full bg-[#00FF00] text-black p-5 rounded-none text-lg font-medium hover:bg-[#00FF00]/80 transition-all shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                <span>{{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}</span>
                <Send v-if="!isSubmitting" :size="20" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            <!-- Success Message -->
            <div v-else class="text-center py-12 animate-in zoom-in duration-300 font-serif">
              <div class="w-20 h-20 bg-[#00FF00]/10 text-[#00FF00] rounded-none flex items-center justify-center mx-auto mb-6">
                <MessageSquare :size="40" />
              </div>
              <h3 class="text-2xl font-serif text-white mb-2">¡Gracias por escribir!</h3>
              <p class="text-white/50">He recibido tu mensaje y te responderé lo antes posible.</p>
            </div>
          </div>

          <!-- Vertical Text (All screens) -->
          <div class="flex items-center justify-center shrink-0">
            <h2 class="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-sans font-bold text-white tracking-[0.2em] lg:tracking-wider whitespace-nowrap" style="writing-mode: vertical-rl; transform: rotate(180deg);">
              dteccccares@gmail.com
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
