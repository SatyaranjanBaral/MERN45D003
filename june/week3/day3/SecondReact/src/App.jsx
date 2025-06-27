import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
let arr=[1,2,3,4,5]
let obj={
  name:'Satyaranjan',
  age:20,
  phoneno:'+91-9938384478'
  
}



function App() {
  const [count, setCount] = useState(0)
  // let arr=[2,3,4,5,6,7,8];

  return (
    <>
     <h1>Hello React</h1> 
     <Home arr={arr} li={obj}/>
         
    </>
  )
}

export default App
