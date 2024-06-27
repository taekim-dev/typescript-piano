<template>
  <div>
    <main class="mt-16 font-sans antialiased text-center text-gray-800">
      <NuxtPage />
    </main>
    <footer class="p-4 text-center bg-gray-200">
      <p>&copy; 2024 TypeScript Piano</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
})
</script>

<style scoped></style>
