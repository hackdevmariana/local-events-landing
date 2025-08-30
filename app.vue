<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center mb-8 text-gray-800">
        Verificación de Módulos Nuxt
      </h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Nuxt UI -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-blue-600">Nuxt UI</h2>
          <UButton>Botón de Nuxt UI</UButton>
        </div>

        <!-- Tailwind CSS -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-green-600">Tailwind CSS</h2>
          <div class="btn-primary">Botón Personalizado</div>
        </div>

        <!-- Pinia Store -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-purple-600">Pinia</h2>
          <p>Contador: {{ counter }}</p>
          <button @click="increment" class="btn-secondary mt-2">
            Incrementar
          </button>
        </div>

        <!-- Icons -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-orange-600">Nuxt Icon</h2>
          <Icon name="heroicons:home" class="w-8 h-8 text-blue-500" />
        </div>

        <!-- PWA -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-red-600">PWA</h2>
          <p class="text-sm text-gray-600">
            Verifica la pestaña de aplicaciones en las herramientas de desarrollador
          </p>
        </div>

        <!-- Content -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-indigo-600">Content</h2>
          <p class="text-sm text-gray-600">
            Sistema de contenido configurado
          </p>
        </div>
      </div>

      <!-- Auth Status -->
      <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4 text-teal-600">Auth Status</h2>
        <p class="text-sm text-gray-600">
          Sistema de autenticación configurado con @sidebase/nuxt-auth
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pinia store
const counter = ref(0)
const increment = () => {
  counter.value++
}

// Head management
useHead({
  title: 'Verificación de Módulos - Local Events Landing',
  meta: [
    { name: 'description', content: 'Página de verificación de módulos Nuxt' }
  ]
})
</script>

