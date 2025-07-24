import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <nav>
       
        <h2>MyApp</h2>
        
       
            <ul>
                <Link to="/">Home</Link>
               {/* <Link to="">Logout</Link> */}
               
                
            </ul>
        
    </nav>
  )
}

export default Navbar