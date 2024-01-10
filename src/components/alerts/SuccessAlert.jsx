import Alert from "./Alert"

function SuccessAlert  ({children,handleClose}) {
  return (
    <Alert 
      icon="Check" 
      color="green" 
      handleClose={handleClose}
      title="Correcto">
        {children}
    </Alert>
  )
}

export default SuccessAlert