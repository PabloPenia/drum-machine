import DrumPad from './DrumPad'
import bankStore from '../sounds'
const DrumBoard = ({ bank, handler }) => {
  const makePads = bankStore[bank].map(pad => {
    return (
      <DrumPad
        key={pad.key}
        bank={bank}
        pad={pad}
        handler={handler}
      />
    )
  })
  return <div>{makePads}</div>
}
export default DrumBoard
