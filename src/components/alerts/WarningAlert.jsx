import Alert from "./Alert"

function WarningAlert  ({children,handleClose}) {
  return (
    <Alert 
      icon="AlertTriangle" 
      color="yellow" 
      handleClose={handleClose}
      title="Advertencia">
        {children}
    </Alert>
  )
}

export default WarningAlert