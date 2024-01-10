import { InputAlert } from "./InputAlert"


function InputErrorAlert  ({message,handleClose,full}) {
  return (
    <InputAlert 
      color="red" 
      icon="XCircle" 
      handleClose={handleClose} 
      message={message} 
      full={full} />

  )
}

export default InputErrorAlert