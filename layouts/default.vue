<template>
  <div>
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
  name: 'DefaultLayout',
})
</script>

<style scoped>
main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  @apply bg-gray-200 text-center p-4;
}
</style>
