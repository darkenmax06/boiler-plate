import { useContext } from "react";
import { themeContext } from "../context/themeContext";


function useTheme (){
  const {isDark,setIsDark} = useContext(themeContext)

  return {isDark,setIsDark}
}

export {useTheme}