import React from 'react'
import Nav from '../constants'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo.jpg"

const NavBar = () => {
  return (
    <nav className='flex justify-between fixed w-full px-20 py-10 z-50 bg-black/65 h-4'>
      {/* <img src={Logo} alt="logo" className='h-12 w-auto'/> */}
<ul className="nav-links">
                {Nav.NAVLINKS.map(link => (
                    <li key={link.path}>
                      
                      {link.newWindow ? (
              <a href={link.path} target="_blank" rel="noopener noreferrer" className="nav-link">{link.name}</a>
            ) : (
              <a href={`#${link.path}`} className="nav-link">{link.name}</a>
            )}
                    </li>
                ))}
            </ul>
      
   
    </nav>
  )
}

export default NavBar