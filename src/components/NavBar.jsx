import React from 'react'
import Nav from '../constants'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo.jpg"

const NavBar = () => {
  return (
    <nav className='flex justify-between fixed w-full px-20 py-10 z-50 bg-black/65 h-4'>
       <h3 className='text-white text-[20px]'>ZCA <strong className='text-[#FFBE30]'>EVENTS</strong></h3>
<ul className="nav-links">
                {Nav.NAVLINKS.map(link => (
                    <li key={link.path}>
                      
                      {link.newWindow ? (
              <Link to ={link.path} target="_blank" rel="noopener noreferrer" className="nav-link">{link.name}</Link>
            ) : (
              <Link to={`#${link.path}`} className="nav-link">{link.name}</Link>
            )}
                    </li>
                ))}
            </ul>
      
   
    </nav>
  )
}

export default NavBar