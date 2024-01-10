import "./buttons.css"
import colors from "../../utils/colors.json"

function Button ({
  children = "boton", 
  background , 
  border,
  text, 
  full = false,
  loading = false,
  handleClick}){

  const style = {
    background: colors[background] || "transparent",
    border: colors[border] ? `2px solid ${colors[border]}` : "none",
    color: colors[text] || colors["black1"],
    width: full ? "100%" : "auto"
  }

  const handleLoading = e =>{
    if (loading) return null
    handleClick(e)
  }

  return (
    <button 
      style={style} 
      className="button headline" 
      onClick={handleLoading} >
        {children}
    </button>
  )
}

export {Button}