import { useTheme } from "../../hooks/useTheme";
import { Button } from "./Button";

function ButtonPrimary ({color,children}){
  const {isDark} = useTheme()

  const background = isDark
  ? `light-${color}`
  : `dark-${color}`


  return (
    <Button background={background} >
      {children}
    </Button>
  )
}

export {ButtonPrimary}