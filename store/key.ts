import { defineStore } from 'pinia'

interface keyEntry {
  name: string
  sound: string
}

interface keyState {
  keyMap: Record<string, keyEntry>
}

import doSound from '@/assets/sounds/do.wav'
import reSound from '@/assets/sounds/re.wav'
import miSound from '@/assets/sounds/mi.wav'
import faSound from '@/assets/sounds/fa.wav'
import soSound from '@/assets/sounds/so.wav'
import laSound from '@/assets/sounds/la.wav'

export const useKeyStore = defineStore<'key', keyState>({
  id: 'key',
  state: () => ({
    keyMap: {
      A: { name: 'Do', sound: doSound },
      S: { name: 'Re', sound: reSound },
      D: { name: 'Mi', sound: miSound },
      F: { name: 'Fa', sound: faSound },
      G: { name: 'So', sound: soSound },
      H: { name: 'La', sound: laSound },
    },
  }),
})
