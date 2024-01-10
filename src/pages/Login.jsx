import "./login.css"
import NormalInput from "../components/inputs/NormalInput"
import { User, Lock, ArrowRight } from "lucide-react"
import { ButtonPrimary } from "../components/buttons/ButtonPrimary"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import InputSuccessAlert from "../components/inputAlerts/InputSuccessAlert"
import InputErrorAlert from "../components/inputAlerts/InputErrorAlert"
import InputWarningAlert from "../components/inputAlerts/InputWarningAlert"
import InputTipAlert from "../components/inputAlerts/InputTipAlert"
import InputInfoAlert from "../components/inputAlerts/InputInfoAlert"

function Login (){
  const navigate = useNavigate()
  const [user,setUser] = useState({
    gmail: "",
    password: ""
  })

  // esto esta hecho asi para no crear 2 handleChanges
  // Lo que hacemos es poner como propiedad el nombre del input
  // y asi le asignamos el valor del input
  const handleChange = e =>{
    setUser(prevUser => 
      ({
        ...prevUser,
        [e.target.name]: e.target.value
      })
    )
  }

  const handleSubmit = e => {
    e.preventDefault()
    navigate("/index")
  }

  return (
    <div className="center">
      <form action="" className="form" onSubmit={handleSubmit} >
        <h3 className=" header-secondary">
          INICIAR SESION
        </h3>

        <div className="form__inputs">
          <NormalInput 
            placeholder="gmail" 
            type="gmail" 
            name="gmail" 
            handleChange={handleChange}
            full={true} 
            value={user.gmail} >
              <User/>
          </NormalInput>
          <NormalInput 
            placeholder="password" 
            type="password" 
            full={true} 
            name="password"
            handleChange={handleChange} 
            value={user.password} >
              <Lock/>
          </NormalInput>
        </div>

        <div className="form__actions">
            <ButtonPrimary  >
              iniciar sesion
              <ArrowRight/>
            </ButtonPrimary>
        </div>
      </form>
    </div>
  )
}

export default Login