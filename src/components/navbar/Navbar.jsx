import React from 'react'
import {Logo} from '../../assets/shared/logo.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <header>
      <img src={Logo} alt="logo" className='logo' />
      <nav className='primaryNavigation'>
        <ul className='Links'>
            <li>
                
            </li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;