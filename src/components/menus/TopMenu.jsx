import "./topMenu.css"
import { ListEnd, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "../../hooks/useTheme"
import { NavLink } from "react-router-dom"
import viteLogo from "../../../public/vite.svg"
import { useState, useRef } from "react"

function TopMenu ({children}){
  const {isDark,setColorTheme} =  useTheme() 
  const [isToggle,setIsToggle] = useState(false)
  const listRef = useRef()

  const changeToggle = () => {
    setIsToggle(!isToggle)
    if (listRef.current){
      const list = listRef.current
      list.classList.toggle("active")
    }
  }

  const style = {
    background: isDark ? "var(--black1)": "var(--white2)",
    color: isDark ? "var(--white1)": "var(--black2)"
  }

  const ToggleStyle = {
    "--background": isDark ? "var(--gray2)": "var(--gray1)"
  }


  // El menu__container es para poder animar la lista
  // para que baje por detras

  return (
    <div className="menu__container">
      <header className="menu" style={style} >
        <div className="margin">
          <a href="" className="menu__logo-container">
            <img src={viteLogo} alt="" className="menu__logo" />
          </a>

          <ul className="menu__list" style={ToggleStyle} ref={listRef} >
            {children}
          </ul>

          <div className="menu__actions">
            <button className="menu__mode" onClick={setColorTheme} >
              {
                isDark
                ? <Sun color={ style["color"] } />
                : <Moon color={ style["color"] } />
              }
            </button>

            <button className="menu__toggle" onClick={changeToggle} >
              {
                isToggle
                ? <X color={ style["color"] } />
                : <Menu color={ style["color"] } />
              }
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

function TopMenuItem ({goTo = "/", children}){
  return (
    <li className="menuItem">
      <NavLink to={goTo} className="headline" >
        {children}
      </NavLink>
    </li>
  )
}

export default TopMenu
export {TopMenuItem}