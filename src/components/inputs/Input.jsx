import "./input.css"
import color from "../../utils/colors.json"

function Input ({
  type = "text",
  placeholder = "texto...",
  border,
  background, 
  text,
  borderRadius = "var(--xs)",
  focus = "light-blue",
  value,
  name = "",
  handleChange = () =>{},
  children}){

  const style = {
    color:  color[text] || "var(--gray2)",
    background:  color[background] || "none",
    "border-radius": borderRadius ,

    "--border": color[border],
    "--focus": color[focus]
  }

  const handleFocus = e => {
    const parent = e.target.parentNode
    parent.classList.add("focus")
  }

  const handleBlur = e => {
    const parent = e.target.parentNode
    parent.classList.remove("focus")
  }



  return (
    <div className="input body " style={style} >
      {children}
      <input 
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder} 
        name={name}
      />
    </div>
  )
}


export default Input