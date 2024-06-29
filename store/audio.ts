import { defineStore } from 'pinia'

interface Audio {
  title: string
  input: any
  keys: any
}

interface AudioState {
  savedAudios: Audio[]
  playingAudios: any[]
  SAVE_LIMIT: number
}

export const useAudioStore = defineStore<
  'audio',
  AudioState,
  {},
  {
    saveAudio(title: string, input: any, keys: any): void
    clearAudios(): void
    loadSavedAudios(): void
  }
>({
  id: 'audio',
  state: (): AudioState => ({
    savedAudios: [],
    playingAudios: [],
    SAVE_LIMIT: 10,
  }),

  actions: {
    saveAudio(title: string, input: any, keys: any): void {
      if (this.savedAudios.length >= this.SAVE_LIMIT) {
        this.savedAudios.shift()
      }
      this.savedAudios.push({ title, input, keys })
      localStorage.setItem('savedAudios', JSON.stringify(this.savedAudios))
    },
    clearAudios(): void {
      this.savedAudios = []
      localStorage.removeItem('savedAudios')
    },
    loadSavedAudios(): void {
      const savedAudiosFromStorage = localStorage.getItem('savedAudios')
      if (savedAudiosFromStorage) {
        this.savedAudios = JSON.parse(savedAudiosFromStorage)
      }
    },
  },
})
