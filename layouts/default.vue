<template>
  <div>
    <main class="mt-16 font-sans antialiased text-center text-gray-800">
      <NuxtPage />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
})
</script>
