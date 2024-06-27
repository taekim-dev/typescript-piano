<template>
  <div>
    <PianoUIComponent />
    <InputComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAudioStore } from '~/store/audio'
import { useKeyStore } from '~/store/key'
import PianoUIComponent from '~/components/PianoUIComponent.vue'
import InputComponent from '~/components/InputComponent.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    PianoUIComponent,
    InputComponent,
  },
  setup() {
    const audioStore = useAudioStore()
    const keyStore = useKeyStore()

    console.log(audioStore, keyStore)
    return {
      audioStore,
      keyStore,
    }
  },
})
</script>

<style scoped>
div {
  text-align: center;
  margin-top: 60px;
}
</style>
