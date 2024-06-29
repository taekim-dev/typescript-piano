export interface keyEntry {
    name: string
    sound: string
  }

  export interface keyState {
    keyMap: Record<string, keyEntry>
  }