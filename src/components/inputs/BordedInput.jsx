import { useTheme } from "../../hooks/useTheme"
import Input from "./Input"


function BordedInput ({children, value,handleChange, focus = "blue", placeholder, type= "text"}){
  const {isDark} = useTheme()

  const text = isDark ? "gray1" :"gray2"
  const border = isDark ? "gray1" :"gray2"
  const f = isDark ? `light-${focus}` : `dark-${focus}`


  return (
    <Input 
      borderRadius='var(--m)'  
      border={border} 
      text={text} 
      type={type}
      placeholder={placeholder}
      focus={f}
      handleChange={handleChange}
      value={value} >
      {children}
  </Input>
  )
}

export default BordedInput