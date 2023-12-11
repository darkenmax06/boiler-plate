import { useTheme } from "../../hooks/useTheme";
import { Button } from "./Button";

function ButtonSecondary ({color,children}){
  const {isDark} = useTheme()

  const colors = isDark
  ? `light-${color}`
  : `dark-${color}`

  const background = isDark
  ? `transparent-${color}`
  : `transparent-${color}`


  return (
    <Button text={colors} border={colors} background={background} >
      {children}
    </Button>
  )
}

export {ButtonSecondary}