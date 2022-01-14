import DrumPad from './DrumPad'
import bankStore from '../data'
const DrumBoard = ({ bank, handler }) => {
  const makePads = bankStore[bank].map(pad => {
    return (
      <DrumPad key={pad.key} pad={pad} handler={handler} />
    )
  })
  return <div>{makePads}</div>
}
export default DrumBoard
