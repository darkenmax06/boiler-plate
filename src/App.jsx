import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense , lazy } from 'react'

const Index = lazy(()=> import ('./pages/Index'))
const Login = lazy(()=> import ('./pages/Login'))

function App() {
  
  return (
    <Suspense fallback={"cargando"}>
      <Routes>
        <Route path='/' element={ 
          <Navigate to="/login" /> 
        } />

        <Route path='/login' element={
          <Login/>
        } />


        <Route path='/index' element={
          <Index/>
        } />
      </Routes>
    </Suspense>
  )
}

export default App
