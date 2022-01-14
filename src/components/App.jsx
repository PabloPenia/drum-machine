import { useState } from 'react'
import BankSwitcher from './BankSwitcher'
import Display from './Display'
import DrumBoard from './DrumBoard'

const App = () => {
  const [bank, setBank] = useState('0')
  const [display, setDisplay] = useState('Waiting...')
  const handleBank = e => setBank(e.target.value)
  const handleDisplay = padName => setDisplay(padName)
  return (
    <main id="drum-machine">
      <section className="board">
        <DrumBoard bank={bank} handler={handleDisplay} />
      </section>
      <section className="options">
        <Display text={display} />

        <BankSwitcher bank={bank} handler={handleBank} />
      </section>
    </main>
  )
}

export default App
