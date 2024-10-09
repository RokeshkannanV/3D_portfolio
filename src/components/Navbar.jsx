import React from 'react';
import {NavLink} from "react-router-dom";
import { Logo } from '../assets/images';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/">
        <img src={Logo} alt="" className='w-16 h-16 object-contain'/>
      </NavLink>
      <div className='btn flex'>
  <NavLink 
    to="/about" 
    className={({ isActive }) => isActive ? "text-blue-600 mr-4" : "text-white mr-4"} // Add right margin here
  >
    About
  </NavLink>
  <NavLink 
    to="/projects" 
    className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}
  >
    Project
  </NavLink>
</div>





    </header>
  )
}

export default Navbar

{/* <nav className='flex text-lg gap-9 text-medium'> */}

{/* </nav> */}