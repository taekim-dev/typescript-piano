export interface Audio {
  title: string
  input: string
  keys: string[]
}

export interface AudioState {
  savedAudios: Audio[]
  playingAudios: HTMLAudioElement[]
  SAVE_LIMIT: number
}
