import { ArrowLeft, ArrowRight, Home } from 'lucide-react'
import { ButtonPrimary } from '../components/buttons/ButtonPrimary'
import { ButtonSecondary } from '../components/buttons/ButtonSecondary'
import { useTheme } from '../hooks/useTheme'
import LeftMenuContext from '../components/menus/LeftMenuContext'
import BordedInput from '../components/inputs/BordedInput'
import NormalInput from '../components/inputs/NormalInput'
import "./Index.css"

function Index (){
  const {isDark} = useTheme()

  const style = {
    background: isDark ? "var(--black2)": "var(--white1)",
    color: isDark ? "var(--white1)": "var(--black2)"
  }
  
  return (
    <LeftMenuContext>
      <section >
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

          <div className='buttons' >
            <ButtonSecondary   >
              <ArrowLeft/>
              regresar
            </ButtonSecondary>
            <ButtonPrimary  >
              ir a ver 
              <ArrowRight/>
            </ButtonPrimary>
          </div>

          <div className="imputs">

            <NormalInput focus="red" placeholder="ingresa" >
              <Home></Home>
            </NormalInput>

            <BordedInput focus="green" placeholder="nombre *"  >
              <Home/>
            </BordedInput>
          </div>
        </div>
      </section>
    </LeftMenuContext>
  )
}

export default Index