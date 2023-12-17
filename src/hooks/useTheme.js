import { useContext } from "react";
import { themeContext } from "../context/themeContext";


function useTheme (){
  const {isDark,setColorTheme} = useContext(themeContext)

  return {isDark,setColorTheme}
}

export {useTheme}