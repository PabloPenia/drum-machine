import { useEffect, useCallback } from 'react'
const DrumPad = ({ pad, bank, handler }) => {
  const key = pad.key
  const url = `sounds/bank${bank}/${pad.file}`

  const playSound = useCallback(
    e => {
      if (e.code && e.code !== `Key${key}`) return
      const audioEl = document.getElementById(key)
      audioEl.currentTime = 0
      audioEl.play()
      handler(pad.name.replace(/-/g, ' '))
      console.log('callback triggered')
    },
    [key, pad.name, handler]
  )

  useEffect(() => {
    window.addEventListener('keydown', playSound)
    return () =>
      window.removeEventListener('keydown', playSound)
  }, [playSound])

  return (
    <button
      className="drum-pad"
      data-playing={false}
      id={pad.name}
      onClick={playSound}
    >
      {key}
      <audio
        id={key}
        className="clip"
        src={url}
        preload="auto"
      />
    </button>
  )
}

export default DrumPad
