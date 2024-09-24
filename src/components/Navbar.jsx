import React from 'react';
import {NavLink} from "react-router-dom";
import { Logo } from '../assets/images';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/">
        <img src={Logo} alt="" className='w-16 h-16 object-contain'/>
      </NavLink>
      <nav className='flex text-lg gap-9 text-medium'>
        <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-600" : "text-white"}>About</NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? "text-blue-600" : "text-white"}>Project</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
