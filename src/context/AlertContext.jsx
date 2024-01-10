import { createContext } from "react";
import { createPortal } from "react-dom";
import "./alert.css"

export const alertContext = createContext()

function AlertContext ({children}){
  const element = (
    <div className="alerts__box">
        <div className="alerts__container">
      
      </div>
    </div>
  )
  const portal = createPortal(element, document.body)

  const addNewAlert = (element) =>{
    const parent = document.querySelector(".alerts__box")
    //const parent = document.querySelector(".alerts__container")
    // const childrens = Array.from(parent.children)
    // console.log(childrens)

    // const floatingElements = childrens.filter(res => res !== element)
    // floatingElements.forEach(res =>{
    //   console.log(res.textContent)
    // })
    const heigth = parent.scrollHeight
    parent.scroll(0,heigth)
  }

  const value = {
    addNewAlert
  }

  return (
    <alertContext.Provider value={value} >
      {children}
      {portal}
    </alertContext.Provider>
  )
}


export default AlertContext