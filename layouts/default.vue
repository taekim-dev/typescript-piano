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
  @apply p-4;
}
footer {
  @apply bg-gray-200 text-center p-4;
}
</style>
