import { useState, useEffect, useCallback } from 'react'
const DrumPad = ({ pad: { key, name, file }, handler }) => {
  const [isActive, setIsActive] = useState('')
  const playSound = useCallback(
    e => {
      if (e.code && e.code !== `Key${key}`) return
      const audioEl = document.getElementById(key)
      audioEl.currentTime = 0
      audioEl.play()
      handler(name.replace(/-/g, ' '))
      setIsActive('active')
      setTimeout(() => setIsActive(''), 1000)
    },
    [key, name, handler]
  )

  useEffect(() => {
    window.addEventListener('keydown', playSound)
    return () =>
      window.removeEventListener('keydown', playSound)
  }, [playSound])

  return (
    <button
      className={`drum-pad ${isActive}`}
      data-playing={false}
      id={name}
      onClick={playSound}
    >
      {key}
      <audio
        id={key}
        className="clip"
        src={file}
        preload="auto"
      />
    </button>
  )
}

export default DrumPad
