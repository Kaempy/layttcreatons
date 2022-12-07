import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
          <h1>Layttcreations</h1>
          <div className="links">
           <Link to="/">HOME</Link>
         <Link to="About">ABOUT US</Link>
          <Link to="Contact">CONTACT US</Link> 

          {/* <Link to="/" className={({ isActive }) => (isActive ? "active" : "" )}></Link> */}
        
      </div>
        
    
  </nav>
    </div>
      
  )
}

export default Navbar