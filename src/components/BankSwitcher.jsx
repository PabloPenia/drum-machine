const BankSwitcher = ({ bank, handler }) => {
  return (
    <fieldset>
      <legend>Choose a bank</legend>
      <input
        type="radio"
        value={0}
        checked={bank === 0}
        onChange={handler}
      />{' '}
      1
      <input
        type="radio"
        value={1}
        checked={bank === 1}
        onChange={handler}
      />{' '}
      2
    </fieldset>
  )
}

export default BankSwitcher
