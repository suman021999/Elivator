import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
     <nav>
      <div className="nav-logo">Elivator</div>
      <ul className="nav-manu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>
      </nav> 
    </>
  )
}

export default Navbar
