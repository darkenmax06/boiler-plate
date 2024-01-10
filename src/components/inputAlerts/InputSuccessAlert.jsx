import { InputAlert } from "./InputAlert"


function InputSuccessAlert  ({message,handleClose,full}) {
  return (
    <InputAlert 
      color="green" 
      icon="Check" 
      handleClose={handleClose} 
      message={message}
      full={full} />
  )
}

export default InputSuccessAlert