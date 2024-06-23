<template>
  <div>
    <h1>Welcome to TypeScript Piano</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const message = ref('Hello from TypeScript Piano!')
    return {
      message,
    }
  },
})
</script>

<style scoped>
h1 {
  @apply text-4xl font-bold;
}
p {
  @apply text-lg;
}
</style>
