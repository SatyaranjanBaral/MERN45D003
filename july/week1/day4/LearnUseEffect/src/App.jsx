import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <h1>Hello</h1>
      <Home/>
    </>
  )
}

export default App
