import Alert from "./Alert"

function TipAlert  ({children,handleClose}) {
  return (
    <Alert 
      icon="Lightbulb" 
      color="purple" 
      handleClose={handleClose}
      title="Consejo">
        {children}
    </Alert>
  )
}

export default TipAlert