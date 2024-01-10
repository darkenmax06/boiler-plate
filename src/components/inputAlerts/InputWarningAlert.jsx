import { InputAlert } from "./InputAlert"


function InputWarningAlert  ({message,handleClose,full}) {
  return (
    <InputAlert
      color="yellow" 
      icon="AlertTriangle" 
      handleClose={handleClose} 
      message={message} 
      full={full} />
  )
}

export default InputWarningAlert