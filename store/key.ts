import { defineStore } from 'pinia'

export const useKeyStore = defineStore('key', {
  state: () => ({
    keyMap: {
      A: { name: 'Do', sound: require('@/assets/sounds/do.wav') },
      S: { name: 'Re', sound: require('@/assets/sounds/re.wav') },
      D: { name: 'Mi', sound: require('@/assets/sounds/mi.wav') },
      F: { name: 'Fa', sound: require('@/assets/sounds/fa.wav') },
      G: { name: 'So', sound: require('@/assets/sounds/so.wav') },
      H: { name: 'La', sound: require('@/assets/sounds/la.wav') },
    },
  }),
})
