<template>
  <div class="piano-ui__component">
    <div
      v-for="(note, index) in notes"
      :key="index"
      class="inline-block m-1.5 p-2.5 border border-black cursor-pointer hover:shadow-custom"
      @click="playKey(note)"
    >
      {{ note.name }} ( {{ note.key }} )
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useKeyStore } from '~/store/key'
import { Note } from '~/types'

export default {
  name: 'PianoUIComponent',
  setup() {
    const keyStore = useKeyStore()
    const keyMap = keyStore.keyMap
    const notes = computed<Note[]>(() => {
      return Object.entries(keyMap).map(([key, value]) => ({
        key,
        name: value.name,
        sound: value.sound,
      }))
    })

    const playKey = (note: Note) => {
      const audio = new Audio(note.sound)
      audio.play()
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase()
      if (keyMap[key]) {
        playKey({
          key,
          name: keyMap[key].name,
          sound: keyMap[key].sound,
        })
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
