<template>
  <div>
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

<style scoped>
div {
  text-align: center;
  margin-top: 60px;
}
</style>
