import { useTheme } from "../../hooks/useTheme";
import { Button } from "./Button";

function ButtonSecondary ({
  color = "blue",
  children,
  full,
  loading,
  handleClick}){
  const {isDark} = useTheme()

  const colors = isDark
  ? `light-${color}`
  : `dark-${color}`

  const background = isDark
  ? `transparent-${color}`
  : `transparent-${color}`


  return (
    <Button
      full={full} 
      text={colors} 
      border={colors} 
      background={background} 
      handleClick={handleClick}
      loading={loading} >
        {children}
    </Button>
  )
}

export {ButtonSecondary}