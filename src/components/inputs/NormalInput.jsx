import { useTheme } from "../../hooks/useTheme"
import Input from "./Input"

function NormalInput ({children, value , handleChange,placeholder, focus = "blue", type = "text", name}){
  const {isDark} = useTheme()

  const text = isDark ? "white1" : "black1"
  const background = isDark ? "gray2" : "gray1"
  const f = isDark ? `light-${focus}` : `dark-${focus}`

  return (
    <Input  
      text={text} 
      background={background}
      type={type} 
      focus={f}
      value={value}
      name={name}
      handleChange={handleChange}
      placeholder={placeholder} >
      {children}
   </Input>
  )
}

export default NormalInput