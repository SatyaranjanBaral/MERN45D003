

import { createContext ,Provider} from 'react';
import './App.css'
import ChildOne from './components/ChildOne';

let nameContext=createContext();

function App() {
  let a=10;

  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello, Everyone</h1>
      <nameContext.Provider value={"abc"}>
        <ChildOne/>
      </nameContext.Provider>
      


    </>
  )
}
export {nameContext}

export default App
