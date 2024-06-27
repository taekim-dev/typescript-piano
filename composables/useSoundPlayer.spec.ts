import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useSoundPlayer } from './useSoundPlayer'

interface KeyEntry {
  name: string
  sound: string
}

beforeEach(() => {
  vi.useFakeTimers()
  global.Audio = vi.fn().mockImplementation(() => {
    return {
      play: vi.fn(),
    }
  }) as any
})

afterEach(() => {
    vi.useRealTimers()
})

describe('useSoundPlayer', () => {
  const keyMap: Record<string, KeyEntry> = {
    A: { name: 'Do', sound: 'do.wav' },
    S: { name: 'Re', sound: 're.wav' },
    D: { name: 'Mi', sound: 'mi.wav' },
  }

  it('should play notes correctly', async () => {
    const { playNotes, playingAudios } = useSoundPlayer()

    playNotes('ASD', keyMap)

    // Fast-forward all timers
    vi.runAllTimers()

    expect(playingAudios.value.length).toBe(3)
    expect(playingAudios.value[0].audio.play).toHaveBeenCalledTimes(1)
    expect(playingAudios.value[1].audio.play).toHaveBeenCalledTimes(1)
    expect(playingAudios.value[2].audio.play).toHaveBeenCalledTimes(1)
  })
})
