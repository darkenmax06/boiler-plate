import { useContext, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import * as lucide from "lucide-react"
import { alertContext } from "../../context/AlertContext"
import "./alert.css"
import { useTheme } from "../../hooks/useTheme"

function Alert  ({children,icon, title = "alerta", color = "blue",handleClose = ()=>{}}) {
  const {addNewAlert} = useContext(alertContext)
  const {isDark} = useTheme()
  const ref = useRef()

  const Icon = lucide[icon] || lucide["Check"]

  // ESTO POR AHORA NO HACE NADA PERO EN UN FUTURO PUEDE SERVIR PARA ALGO
  useEffect(()=>{
    if(ref.current){
      addNewAlert(ref.current)
    }
  },[ref,addNewAlert])
  // ======================================

  const style = {
    "--tone": isDark ? "var(--black1)" :"var(--white2)",
    "--color": isDark ? `var(--light-${color})` : `var(--dark-${color})`,
    "--gray": isDark ? `var(--gray1)` : `var(--gray2)`

  }

  const element = (
    <div className="alert" style={style} ref={ref} >

      <i className="alert__icon alert__i">
        <Icon strokeWidth={3} />
      </i>

      <div className="alert__text-box">
        <h4 className="headline alert__title " >{title}</h4>
        <p className="body alert__body " >{children}</p>
      </div>

      <i onClick={handleClose} className="alert__icon alert__exit">
        <lucide.X size={20} />
      </i>
    </div>
  )

  const container = document.querySelector(".alerts__container")

  return createPortal(element,container)
}

export default Alert