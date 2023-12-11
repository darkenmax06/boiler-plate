import "./buttons.css"

function Button ({children, background, border,text, handleClick}){
  const color = {
    "light-red": "var(--light-red)",
    "dark-red": "var(--dark-red)",
    "transparent-red": "var(--transparent-red)",

    "light-blue": "var(--light-blue)",
    "dark-blue": "var(--dark-blue)",
    "transparent-blue": "var(--transparent-blue)",

    "light-yellow": "var(--light-yellow)",
    "dark-yellow": "var(--dark-yellow)",
    "transparent-yellow": "var(--transparent-yellow)",

    "light-green": "var(--light-green)",
    "dark-green": "var(--dark-green)",
    "transparent-green": "var(--transparent-green)",

    "light-lime": "var(--light-lime)",
    "dark-lime": "var(--dark-lime)",
    "transparent-lime": "var(--transparent-lime)",

    "light-orange": "var(--light-orange)",
    "dark-orange": "var(--dark-orange)",
    "transparent-orange": "var(--transparent-orange)",

    "light-purple": "var(--light-purple)",
    "dark-purple": "var(--dark-purple)",
    "transparent-purple": "var(--transparent-purple)",

    "light-violet": "var(--light-violet)",
    "dark-violet": "var(--dark-violet)",
    "transparent-violet": "var(--transparent-violet)",

    "light-aqua": "var(--light-aqua)",
    "dark-aqua": "var(--dark-aqua)",
    "transparent-aqua": "var(--transparent-aqua)",

    "light-cian": "var(--light-cian)",
    "dark-cian": "var(--dark-cian)",
    "transparent-cian": "var(--transparent-cian)",

    "white": "#fff"
  }

  const style = {
    background: color[background] || "transparent",
    border: color[border] ? `2px solid ${color[border]}` : "none",
    color: color[text] || "white"
  }

  return <button style={style} className="button headline" onClick={handleClick} >
    {children}
  </button>
}

export {Button}