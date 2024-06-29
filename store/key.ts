import { defineStore } from 'pinia'

import doSound from '@/assets/sounds/do.wav'
import reSound from '@/assets/sounds/re.wav'
import miSound from '@/assets/sounds/mi.wav'
import faSound from '@/assets/sounds/fa.wav'
import soSound from '@/assets/sounds/so.wav'
import laSound from '@/assets/sounds/la.wav'
import { keyEntry, keyState } from '~/types/key'

const sounds: Record<string, keyEntry> = {
  A: { name: 'Do', sound: doSound },
  S: { name: 'Re', sound: reSound },
  D: { name: 'Mi', sound: miSound },
  F: { name: 'Fa', sound: faSound },
  G: { name: 'So', sound: soSound },
  H: { name: 'La', sound: laSound },
}

export const useKeyStore = defineStore<'key', keyState>({
  id: 'key',
  state: () => ({
    keyMap: sounds,
  }),
})
