import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../components/Home'
import Moives from '../components/Moives'
import Moive from '../components/Moive'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
             <Route path='/moives' element={<Moives/>}></Route>
              <Route path='/moive/:id' element={<Moive/>}></Route>
        </Routes>
      
    </div>
  )
}

export default AllRoutes