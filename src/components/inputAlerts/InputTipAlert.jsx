import { InputAlert } from "./InputAlert"


function InputTipAlert  ({message,handleClose,full}) {
  return (
    <InputAlert 
      color="purple"  
      handleClose={handleClose} 
      icon="Lightbulb" 
      message={message} 
      full={full} />

  )
}

export default InputTipAlert