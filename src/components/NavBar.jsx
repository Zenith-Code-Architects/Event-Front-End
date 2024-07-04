import React from 'react'
import Nav from '../constants'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo.jpg"

const NavBar = () => {
  return (
    <div className='flex justify-between fixed w-full px-20 py-10 bg-amber-900'>
      <img src={Logo} alt="logo" className='h-12 w-auto'/>
<ul className="nav-links">
                {Nav.NAVLINKS.map(link => (
                    <li key={link.name}>
                        <a href={link.path} className="nav-link">{link.name}</a>
                    </li>
                ))}
            </ul>
      
   
    </div>
  )
}

export default NavBar