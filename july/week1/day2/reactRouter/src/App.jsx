import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route ,Routes } from "react-router"
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello EveryOne</h1>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route></Route>
      </Routes>
      
    </>
  )
}

export default App
