import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <div class="page">
      <Home/>
       <h2>Welcome to React</h2>
       <p>Hlw everyone, this is most imp of react & is very diffcult</p>
    </div>
  )
}

export default App
