import React from 'react'
import Nav from '../constants'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo.jpg"

const NavBar = () => {
  return (
    <nav className='flex justify-between fixed w-full px-20 py-10 bg-amber-900'>
      <img src={Logo} alt="logo" className='h-12 w-auto'/>
<ul className="nav-links">
                {Nav.NAVLINKS.map(link => (
                    <li key={link.name}>
                        <Link to={link.path} className="nav-link">{link.name}</Link>
                    </li>
                ))}
            </ul>
      
   
    </nav>
  )
}

export default NavBar