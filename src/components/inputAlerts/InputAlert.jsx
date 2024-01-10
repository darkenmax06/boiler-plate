import { X } from "lucide-react"
import * as lucide from "lucide-react"
import "./inputAlert.css"

function InputAlert  ({
  icon,
  message,
  color = "blue", 
  handleClose = ()=>{},
  full=false
}) {

  const IconName = lucide[icon] || lucide['Check']
  const style = {
    "--color": `var(--transparent-${color})`,
    width: full ? "100%" : "300px"
  }

  return (
    <div className="input-alert" style={style}  >
      <i className="input-alert__icon input-alert__icons">
        <IconName/>
      </i>
      <span className="input-alert__content body">
          {message}
      </span>
      <i onClick={handleClose} className="input-alert__exit input-alert__icons" >
        <X/>
      </i>  
    </div>
  )
}

export {InputAlert}