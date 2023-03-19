import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Compress from './Compress'
import Employee from './Employee'
import RoleAssignment from './RoleAssignment'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<RoleAssignment/>}/>
            <Route path='/form' element={<Employee/>}/>
            <Route path='compress' element={<Compress/>}/>

        </Routes>
    </div>
  )
}

export default AllRoute
