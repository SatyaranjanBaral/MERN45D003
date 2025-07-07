import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Count, setCount] = useState(0)
  const [theme,setTheme]= useState("light");
  
  function handleClick(){
    setCount(Count +1)
  }
  function handleTheme(){
    if(theme=="light"){
      setTheme=="dark";
      document.body.style.backgroundColor="black";
      
    }
   else{
    setTheme=="light";
      document.body.style.backgroundColor="white";
   }
  }

  return (
    <>
      <h1>hello</h1>
      <h1>value is :{Count}</h1> <br />
      <button onclick={handleClick}>inc</button>

      <button onClick={handleTheme}>Theme</button>
    </>
  )
}

export default App
