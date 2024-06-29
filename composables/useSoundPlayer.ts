import { ref } from 'vue'

interface KeyEntry {
  name: string
  sound: string
}

interface PlayingAudio {
  audio: HTMLAudioElement
  timeout: ReturnType<typeof setTimeout>
}

export const useSoundPlayer = () => {
  const playingAudios = ref<PlayingAudio[]>([])

  const playNotes = (notes: string, keyMap: Record<string, KeyEntry>) => {
    let delay = 0
    notes.split('').forEach((char) => {
      if (char === ' ') {
        delay += 300
      } else if (keyMap[char]) {
        const timeout = setTimeout(() => {
          const audio = new Audio(keyMap[char].sound)
          audio.play()
          playingAudios.value.push({ audio, timeout })
        }, delay)
        delay += 500
      } else {
        console.warn(`Invalid key: ${char}`)
      }
    })
  }

  return {
    playNotes,
    playingAudios,
  }
}
