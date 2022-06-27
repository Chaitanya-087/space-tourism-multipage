import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {
    const isMobile = useMediaQuery({ query: '(max-width:480px)' })
    // const isTablet = useMediaQuery('(max-width:720px)')

    return (
        <header className='navbar'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
            {/* <img src={Logo} alt="" /> */}

            {isMobile ? null : <nav className='primaryNavigation'>
                <ul className='navItems'>
                    <li className='navItem'>
                        <Link className='navLink' to='/'>
                            <span className='number'>00</span>
                            Home
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link className='navLink' to='/destination'>
                            <span className='number'>01</span>
                            Destination
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link className='navLink' to='/crew'>
                            <span className='number'>02</span>
                            Crew
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link className='navLink' to='/technology'>
                            <span className='number'>03</span>
                            Technology
                        </Link>
                    </li>
                </ul>
            </nav>}
        </header>
    )
}

export default Navbar;