import { useState } from "react";
import { createContext } from "react";


export const themeContext = createContext()

function ThemeContext({children}){
  const [isDark, setIsDark] = useState(false)  
  const style = {
    background: isDark ? "var(--black2)": "var(--white1)",
    color: isDark ? "var(--white1)": "var(--black2)"
  }

  document.body.style.background = style["background"]
  document.body.style.color = style["color"]

  const setColorTheme = () => setIsDark(!isDark)
  

  return (
    <themeContext.Provider value={{isDark, setColorTheme}}  >
      {children}
    </themeContext.Provider>
  )
}

export default ThemeContext