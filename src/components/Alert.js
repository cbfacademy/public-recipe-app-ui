const Alert = ({ alertMessage, setIsError }) => {
  return (
    <div className='alert'>
      <div className='message'>{alertMessage}</div>
      <button className='message-button' onClick={() => setIsError(false)}>X</button>
    </div>
  )
}

export default Alert;