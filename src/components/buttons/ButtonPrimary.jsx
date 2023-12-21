import { useTheme } from "../../hooks/useTheme";
import { Button } from "./Button";

function ButtonPrimary ({color = "blue",children, handleClick}){
  const {isDark} = useTheme()

  const background = isDark
  ? `light-${color}`
  : `dark-${color}`


  return (
    <Button background={background} handleClick={handleClick} >
      {children}
    </Button>
  )
}

export {ButtonPrimary}