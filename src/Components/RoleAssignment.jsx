import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const RoleAssignment = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://upthinks.onrender.com/data")
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])

    console.log(data);
  return (
    <div>

        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Groups</td>
                </tr>
            </thead>
          <tbody>
           {data.map((e)=>
           <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <Link to="/Edit"><td><button>{e.groups}</button></td></Link>
           </tr>
           )}
         </tbody>
       </table>
    </div>
  )
}

export default RoleAssignment
