<script setup lang="ts">
import { ref } from 'vue'
import { Send, Mail, MapPin, Phone, MessageSquare } from 'lucide-vue-next'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSuccess.value = true
  
  // Reset form
  formData.value = { name: '', email: '', message: '' }
  
  // Reset success message after 5 seconds
  setTimeout(() => { isSuccess.value = false }, 5000)
}
</script>

<template>
  <div class="bg-black text-white min-h-screen">
    <div class="container mx-auto px-4 py-24">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Info -->
          <div>
            <h1 class="text-4xl font-black text-white mb-6 tracking-tight">Hablemos.</h1>
            <p class="text-xl text-white/50 mb-12">¿Tienes un proyecto en mente o simplemente quieres decir hola? No dudes en contactarme.</p>
            
            <div class="space-y-8">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-brand/10 text-brand rounded-xl">
                  <Mail :size="24" />
                </div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-white/30">Email</p>
                  <p class="text-white font-medium text-lg">dteccccares@gmail.com</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="p-3 bg-brand/10 text-brand rounded-xl">
                  <MapPin :size="24" />
                </div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-white/30">Ubicación</p>
                  <p class="text-white font-medium text-lg">Valencia, España</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="p-3 bg-brand/10 text-brand rounded-xl">
                  <Phone :size="24" />
                </div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-white/30">Teléfono</p>
                  <p class="text-white font-medium text-lg">+34 000 000 000</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-[#0a0a0a] p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <form v-if="!isSuccess" @submit.prevent="handleSubmit" class="space-y-6">
              <div class="space-y-2">
                <label class="text-sm font-bold text-white/50 ml-1">Nombre Completo</label>
                <input 
                  v-model="formData.name" 
                  type="text" 
                  class="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand transition-all outline-none text-white placeholder:text-white/20" 
                  placeholder="Tu nombre"
                  required 
                />
              </div>
              
              <div class="space-y-2">
                <label class="text-sm font-bold text-white/50 ml-1">Email</label>
                <input 
                  v-model="formData.email" 
                  type="email" 
                  class="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand transition-all outline-none text-white placeholder:text-white/20" 
                  placeholder="tu@email.com"
                  required 
                />
              </div>

              <div class="space-y-2">
                <label class="text-sm font-bold text-white/50 ml-1">Mensaje</label>
                <textarea 
                  v-model="formData.message" 
                  class="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand transition-all outline-none h-40 resize-none text-white placeholder:text-white/20" 
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full bg-brand text-white p-5 rounded-2xl font-bold hover:bg-brand/80 transition-all shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                <span>{{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}</span>
                <Send v-if="!isSubmitting" :size="20" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            <!-- Success Message -->
            <div v-else class="text-center py-12 animate-in zoom-in duration-300">
              <div class="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare :size="40" />
              </div>
              <h3 class="text-2xl font-black text-white mb-2">¡Gracias por escribir!</h3>
              <p class="text-white/50">He recibido tu mensaje y te responderé lo antes posible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
