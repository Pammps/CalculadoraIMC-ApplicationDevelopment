import './Button.css'

const Button = ({ id, text, action, type = 'button' }) => {
  const handleAction = (e) => {
    action(e)
  }

  return (
    <button id={id} type={type} onClick={handleAction}>
      {text}
    </button>
  )
}

export default Button
