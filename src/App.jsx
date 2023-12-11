import {  MoveRight } from 'lucide-react'
import './App.css'
import { Button } from './components/buttons/Button'
import { ButtonPrimary } from './components/buttons/ButtonPrimary'
import { ButtonSecondary } from './components/buttons/ButtonSecondary'

function App() {

  return (
    <section >
      <h1 className='header'>hola</h1>
      <h2 className='header-secondary' >hola 2</h2>
      <h3 className='title' >title</h3>
      <h4 className='subtitle' >subtitle</h4>
      <p className='body' >Lorem ipsum dolor sit amet <span className='headline' >consectetur</span> adipisicing elit. Sit perspiciatis pariatur error corporis rerum perferendis et quidem iure suscipit quo labore, quas earum at ipsa consectetur? Velit vero quam fugit.</p>

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

      <div style={{background: "#222"}} >
        <Button border="light-red" background="transparent-red" text="light-red" >asd</Button>
        <Button border="light-orange" background="transparent-orange" text="light-orange" >asd</Button>
        <Button border="light-yellow" background="transparent-yellow" text="light-yellow" >asd</Button>
        <Button border="light-lime" background="transparent-lime" text="light-lime" >asd</Button>

      <Button border="light-green" background="transparent-green" text="light-green" >asd</Button>
      <Button border="light-violet" background="transparent-violet" text="light-violet" >asd</Button>
      <Button border="light-purple" background="transparent-purple" text="light-purple" >asd</Button>

      <Button border="light-aqua" background="transparent-aqua" text="light-aqua" >asd</Button>
      <Button border="light-cian" background="transparent-cian" text="light-cian" >asd</Button>
      <Button border="light-blue" background="transparent-blue" text="light-blue" >asd</Button>
      </div>
    </section>
  )
}

export default App
