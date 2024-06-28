<template>
  <div class="flex flex-col min-h-screen">
    <PianoUIComponent />
    <InputComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PianoUIComponent from '~/components/PianoUIComponent.vue'
import InputComponent from '~/components/InputComponent.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    PianoUIComponent,
    InputComponent,
  },
})
</script>
