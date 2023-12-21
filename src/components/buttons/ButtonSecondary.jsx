import { useTheme } from "../../hooks/useTheme";
import { Button } from "./Button";

function ButtonSecondary ({color = "blue",children, handleClick}){
  const {isDark} = useTheme()

  const colors = isDark
  ? `light-${color}`
  : `dark-${color}`

  const background = isDark
  ? `transparent-${color}`
  : `transparent-${color}`


  return (
    <Button text={colors} border={colors} background={background} handleClick={handleClick} >
      {children}
    </Button>
  )
}

export {ButtonSecondary}