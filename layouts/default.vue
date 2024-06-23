<template>
    <div>
      <header>
        <h1>TypeScript Piano</h1>
      </header>
      <main>
        <NuxtPage />
      </main>
      <footer>
        <p>&copy; 2024 TypeScript Piano</p>
      </footer>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'DefaultLayout'
  })
  </script>
  
  <style scoped>
  header {
    @apply bg-blue-500 text-white p-4;
  }
  main {
    @apply p-4;
  }
  footer {
    @apply bg-gray-200 text-center p-4;
  }
  </style>
  