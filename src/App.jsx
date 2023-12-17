import {  Home, MoveRight, Settings, User } from 'lucide-react'
import './App.css'
import { ButtonPrimary } from './components/buttons/ButtonPrimary'
import { ButtonSecondary } from './components/buttons/ButtonSecondary'
import { useTheme } from './hooks/useTheme'
import LeftMenuContext from './components/menus/LeftMenuContext'

function App() {
  const {isDark} = useTheme()

  const style = {
    background: isDark ? "var(--black2)": "var(--white1)",
    color: isDark ? "var(--white1)": "var(--black2)"
  }

  return (
    <LeftMenuContext>
          <section style={style} >
     <div className="content">
      <h1 className='header'>
        BOILER PLATE
      </h1>

      <h2 className='header-secondary' >
        REACT
      </h2>

      <h3 className='title' >title</h3>
      <h4 className='subtitle' >subtitle</h4>
      <p className='body'>
        Esta es una plantilla base modificable para crear tus futuras aplicaciones de react sin necesidad de tener que preocuparte por el diseño.
      </p>

      <div>
        <ButtonPrimary handleClick={()=> console.log("hola")} color="red" >botonClickeable <MoveRight/> </ButtonPrimary>
        <ButtonSecondary color="red" >red</ButtonSecondary>
        <ButtonPrimary color="yellow" >amarillo</ButtonPrimary>
        <ButtonSecondary color="yellow" >amarillo</ButtonSecondary>
        <ButtonPrimary color="violet" >violeta</ButtonPrimary>
        <ButtonSecondary color="violet" >violeta</ButtonSecondary>
        <ButtonPrimary color="orange" >naranja</ButtonPrimary>
        <ButtonSecondary color="orange" >naranja</ButtonSecondary>
      </div>
     </div>
    </section>
    </LeftMenuContext>
  )
}

export default App
