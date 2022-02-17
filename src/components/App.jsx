import '../sass/App.sass'
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
      <Display text={display} />
      <section id="switcher">
        <h4>Select Bank</h4>
        <BankSwitcher bank={bank} handler={handleBank} />
      </section>
      <section className="board">
        <DrumBoard bank={bank} handler={handleDisplay} />
      </section>
      <footer>
        <p>
          <a href="https://linkedin.com/in/PabloPenia" target="_blank" rel="noreferrer">
            Pablo Peña
          </a>
          {'   '}
          &copy; 2022
        </p>
        <p>
          <a href="https://github.com/PabloPenia/drum-machine" target="_blank" rel="noreferrer">
            Source Code
          </a>
        </p>
      </footer>
    </main>
  )
}

export default App
