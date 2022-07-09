import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const Navbar = ({ isClose,toggle }) => {
    const isMobile = useMediaQuery({ query: '(max-width:640px)' })

    const [activeLink, setActiveLink] = useState(1)
    const changeNav = (index) => {
        setActiveLink(index)
    }

    return (
        <header className='navbar'>
            <div>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
                </Link>
            </div>
            {isMobile ?
                <div className={`hamburger ${isClose?'vanish':''}`} onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                        <g fill="#D0D6F9" fillRule="evenodd">
                            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                        </g>
                    </svg>
                </div>
                :
                <nav className='primary-navigation'>
                    <ul className='nav-items'>
                        <li className='nav-item'>
                            <Link className={`nav-link ${activeLink === 1 ? 'active' : ''}`} onClick={() => changeNav(1)} to='/'>
                                <span className='number'>00</span>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className={`nav-link ${activeLink === 2 ? 'active' : ''}`} onClick={() => changeNav(2)} to='/destination'>
                                <span className='number'>01</span>
                                Destination
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className={`nav-link ${activeLink === 3 ? 'active' : ''}`} onClick={() => changeNav(3)} to='/crew'>
                                <span className='number'>02</span>
                                Crew
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className={`nav-link ${activeLink === 4 ? 'active' : ''}`} onClick={() => changeNav(4)} to='/technology'>
                                <span className='number'>03</span>
                                Technology
                            </Link>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    )
}

export default Navbar;