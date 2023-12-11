import { useState } from "react";
import { createContext } from "react";


export const themeContext = createContext()

function ThemeContext({children}){
  const [isDark, setIsDark] = useState(false)

  const setColorTheme = () => setIsDark(!isDark)

  return (
    <themeContext.Provider value={{isDark, setColorTheme}}  >
      {children}
    </themeContext.Provider>
  )
}

export default ThemeContext