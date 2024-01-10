import { InputAlert } from "./InputAlert"


function InputInfoAlert  ({message,handleClose,full}) {
  return (
    <InputAlert 
      color="blue" 
      icon="Info" 
      message={message} 
      handleClose={handleClose}
      full={full} />
  )
}

export default InputInfoAlert