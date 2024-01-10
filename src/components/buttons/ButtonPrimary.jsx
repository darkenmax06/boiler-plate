import { useTheme } from "../../hooks/useTheme";
import { Button } from "./Button";

function ButtonPrimary ({
  color = "blue", 
  children = "boton primario", 
  handleClick,
  full,
  loading
}){
  const {isDark} = useTheme()

  const background = isDark
  ? `light-${color}`
  : `dark-${color}`

  const text = isDark
  ? `black1`
  : `white1`


  return (
    <Button 
      full={full} 
      background={background} 
      handleClick={handleClick} 
      text={text}
      loading={loading} >
        {children}
    </Button>
  )
}

export {ButtonPrimary}