import { useState } from 'react'

const CoppyButton = ({ text = '', classNameText = '', widthImg = 22 }) => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }
  return (
    <div className="copy-container" onClick={handleCopy}>
      <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} width={widthImg} alt="copy" />
      <p className={`text-base text-gray_gradient text-white ${classNameText}`}>{text}</p>
    </div>
  )
}

export default CoppyButton
