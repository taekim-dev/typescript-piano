import { defineStore } from 'pinia'
import { AudioState } from '~/types/audio'

export const useAudioStore = defineStore<
  'audio',
  AudioState,
  {},
  {
    saveAudio(title: string, input: string, keys: string[]): void
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
    saveAudio(title: string, input: string, keys: string[]): void {
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
