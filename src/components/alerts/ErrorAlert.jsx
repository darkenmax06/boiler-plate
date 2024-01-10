import Alert from "./Alert"

function ErrorAlert  ({children,handleClose}) {
  return (
    <Alert 
      icon="X" 
      color="red" 
      handleClose={handleClose}
      title="Error">
        {children}
    </Alert>
  )
}

export default ErrorAlert