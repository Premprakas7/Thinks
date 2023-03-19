import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    
      <Link to="/role"><button>RoleAssignment</button></Link>
      <Link to="/form"><button>Employee</button></Link>
      <Link to="/compress"><button>Compress</button></Link>
      <Link to="/edit"><button>Edit</button></Link>
    </div>
  )
}

export default Home
