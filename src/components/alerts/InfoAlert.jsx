import Alert from "./Alert"

function InfoAlert  ({children,handleClose}) {
  return (
    <Alert 
      icon="Info" 
      color="blue" 
      handleClose={handleClose}
      title="Informacion">
        {children}
    </Alert>
  )
}

export default InfoAlert