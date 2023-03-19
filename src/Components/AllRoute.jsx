import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Compress from './Compress'
import Edit from './Edit'
import Employee from './Employee'
import Home from './Home'
import RoleAssignment from './RoleAssignment'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/role' element={<RoleAssignment/>}/>
            <Route path='/form' element={<Employee/>}/>
            <Route path='/compress' element={<Compress/>}/>
            <Route path='/edit' element={<Edit/>}/>
            <Route path='/' element={<Home/>}/>

        </Routes>
    </div>
  )
}

export default AllRoute
