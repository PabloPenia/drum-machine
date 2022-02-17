const BankSwitcher = ({ bank, handler }) => {
  return (
    <>
      <label>
        <input type="radio" value="0" checked={bank === '0'} onChange={handler} />
        <span>1</span>
      </label>
      <label>
        <input type="radio" value="1" checked={bank === '1'} onChange={handler} />
        <span>2</span>
      </label>
    </>
  )
}

export default BankSwitcher
