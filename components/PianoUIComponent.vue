<template>
  <div class="piano-ui__component">
    <div v-for="(note, index) in notes" :key="index" @click="playKey(note)">
      {{ note.name }} ( {{ note.key }} )
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted } from 'vue'
import { useKeyStore } from '~/store/key'

export default {
  name: 'PianoUIComponent',
  setup() {
    const keyStore = useKeyStore()
    const notes = computed(() => {
      return Object.entries(keyStore.keyMap).map(([key, value]) => ({
        key,
        name: value.name,
        sound: value.sound,
      }))
    })

    const playKey = (key) => {
      const audio = new Audio(key.sound)
      audio.play()
    }

    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase()
      if (keyStore.keyMap[key]) {
        playKey(keyStore.keyMap[key])
      }
    }

    onMounted(() => {
      window.addEventListener('keydown', handleKeyPress)
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeyPress)
    })

    return {
      notes,
      playKey,
      handleKeyPress,
    }
  },
}
</script>
<style scoped></style>
<!-- <style lang="scss" scoped>
.piano-ui__component div {
  display: inline-block;
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px #2c3e50;
  }
}
</style> -->
