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
    vi.runAllTimers()

    expect(playingAudios.value.length).toBe(3)
    expect(playingAudios.value[0].audio.play).toHaveBeenCalledTimes(1)
    expect(playingAudios.value[1].audio.play).toHaveBeenCalledTimes(1)
    expect(playingAudios.value[2].audio.play).toHaveBeenCalledTimes(1)
  })

  it('should handle spaces in the sequence', async () => {
    const { playNotes, playingAudios } = useSoundPlayer()

    playNotes('AS D', keyMap)
    vi.runAllTimers()

    expect(playingAudios.value.length).toBe(3)
    expect(playingAudios.value[0].audio.play).toHaveBeenCalledTimes(1)
    expect(playingAudios.value[1].audio.play).toHaveBeenCalledTimes(1)
    expect(playingAudios.value[2].audio.play).toHaveBeenCalledTimes(1)
  })

  it('should handle invalid notes', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const { playNotes, playingAudios } = useSoundPlayer()

    playNotes('ASZ', keyMap)
    vi.runAllTimers()

    expect(playingAudios.value.length).toBe(2)
    expect(playingAudios.value[0].audio.play).toHaveBeenCalledTimes(1)
    expect(playingAudios.value[1].audio.play).toHaveBeenCalledTimes(1)
    expect(warnSpy).toHaveBeenCalledWith('Invalid key: Z')

    warnSpy.mockRestore()
  })

  it('should add delay for spaces in the sequence', async () => {
    const { playNotes } = useSoundPlayer()

    let currentTime = 0
    const nowSpy = vi.spyOn(Date, 'now').mockImplementation(() => currentTime)

    playNotes('A S D', keyMap)

    currentTime += 0
    vi.advanceTimersByTime(0)
    expect(global.Audio).toHaveBeenCalledTimes(1)

    currentTime += 800 // 500ms for the note + 300ms for the space
    vi.advanceTimersByTime(800)
    expect(global.Audio).toHaveBeenCalledTimes(2)

    currentTime += 500
    vi.advanceTimersByTime(500)
    expect(global.Audio).toHaveBeenCalledTimes(2)

    currentTime += 300
    vi.advanceTimersByTime(300)
    expect(global.Audio).toHaveBeenCalledTimes(3)

    nowSpy.mockRestore()
  })
})
