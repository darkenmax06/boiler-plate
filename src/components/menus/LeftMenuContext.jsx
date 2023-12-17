import LeftMenu, { LeftMenuItem } from "./LeftMenu"
import {  Home, Settings, User } from 'lucide-react'
import "./leftMenuContext.css"

// ESTE ES UN EJEMPLO
// de un menu basico
function LeftMenuContext ({children}){
  return (
    <section className="left-menu-context" >
      <LeftMenu>
        <LeftMenuItem>
          <Home/>
          inicio
        </LeftMenuItem>
        <LeftMenuItem>
          <User/>
          sobre nosotros
        </LeftMenuItem>
        <LeftMenuItem>
          <Settings/>
          ajustes
        </LeftMenuItem>
      </LeftMenu>
      { children }
    </section>
  )
}

      {/* <TopMenu>
        <TopMenuItem>
          <Home/>
          inicio
        </TopMenuItem>


        <TopMenuItem>
          <Home/>
          inicio
        </TopMenuItem>


        <TopMenuItem>
          <Home/>
          inicio
        </TopMenuItem>


        <TopMenuItem>
          <Home/>
          inicio
        </TopMenuItem>
      </TopMenu> */}

export default LeftMenuContext