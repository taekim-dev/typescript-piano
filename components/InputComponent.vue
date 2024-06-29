<template>
  <!-- py-2.5 px-5 text-lg text-white bg-custom-gray border-none rounded-md cursor-pointer mt-1.5 -->
  <div class="flex flex-col items-center m-5">
    <input
      v-model="userInput"
      type="text"
      class="mb-2.5 p-1.5 w-72 text-lg border-2 border-custom-gray rounded-md uppercase"
      placeholder="Enter keys (e.g., ASD)"
      @input="convertToUpperCase"
    />
    <div class="flex flex-row gap-2.5">
      <button
        class="py-2.5 px-5 text-lg text-white bg-custom-gray border-none rounded-md cursor-pointer mt-1.5"
        @click="playInput(userInput)"
      >
        Play
      </button>
      <button
        class="py-2.5 px-5 text-lg text-white bg-custom-gray border-none rounded-md cursor-pointer mt-1.5"
        @click="saveSounds"
      >
        Save
      </button>
    </div>
  </div>
  <div class="save-component">
    <div
      v-for="(item, index) in audioStore.savedAudios"
      :key="index"
      class="save-component__item"
    >
      <div class="save-component__title">{{ item.title }}</div>
      <div class="save-component__audio">{{ item.keys }}</div>
      <button
        class="save-component__button save-component__button--play"
        @click="playSavedSound(index)"
      >
        ▶️
      </button>
    </div>
    <div v-if="hasSavedAudios">
      <button
        class="save-component__button save-component__button--clear"
        @click="audioStore.clearAudios"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useSoundPlayer } from '~/composables/useSoundPlayer'
import { useKeyStore } from '~/store/key'
import { useAudioStore } from '~/store/audio'

interface KeyEntry {
  name: string
  sound: string
}

export default {
  name: 'InputComponent',
  setup() {
    const keyStore = useKeyStore()
    const audioStore = useAudioStore()
    const { playNotes } = useSoundPlayer()

    const userInput = ref<string>('')
    const keyMap = keyStore.keyMap as Record<string, KeyEntry>

    const convertToUpperCase = (event: Event) => {
      const input = (event.target as HTMLInputElement).value.toUpperCase()
      const validKeys = Object.keys(keyMap)
      let filteredInput = ''

      for (let char of input) {
        if (validKeys.includes(char) || char === ' ') {
          filteredInput += char
        }
      }
      userInput.value = filteredInput
    }

    const playInput = (input: string) => {
      playNotes(input, keyMap)
    }

    const playSavedSound = (index: number) => {
      const savedAudioInput = audioStore.savedAudios[index]
      playNotes(savedAudioInput.input, keyMap)
    }

    const saveSounds = () => {
      const title = prompt('Name the Song')
      if (title) {
        const input = userInput.value
        const keys = extractKeys(input, keyMap)
        audioStore.saveAudio(title, input, keys)
        userInput.value = ''
      }
    }

    const extractKeys = (input: string, keyMap: Record<string, KeyEntry>) => {
      if (!input || typeof input !== 'string') {
        throw new Error('Invalid input')
      }
      return input
        .split('')
        .map((char) => (keyMap[char] ? keyMap[char].name : ''))
        .join(' ')
    }

    const hasSavedAudios = computed(() => audioStore.savedAudios.length > 0)

    onMounted(() => {
      audioStore.loadSavedAudios()
    })

    return {
      userInput,
      convertToUpperCase,
      playInput,
      playSavedSound,
      saveSounds,
      audioStore,
      hasSavedAudios,
    }
  },
}
</script>