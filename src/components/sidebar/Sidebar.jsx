import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
const Sidebar = ({isOpen,toggle}) => {
  
  const [activeLink, setActiveLink] = useState(1)

  const changeNav = (index) => {
    setActiveLink(index)
  }

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className='close-sidebar' onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg>
      </div>
      <ul className='side-items'>
        <li className='side-item'>
          <Link className={`side-link ${activeLink === 1 ? 'active' : ''}`} onClick={() => changeNav(1)} to='/'>
            <span className='number'>00</span>
            Home
          </Link>
        </li>
        <li className='side-item'>
          <Link className={`side-link ${activeLink === 2 ? 'active' : ''}`} onClick={() => changeNav(2)} to='/destination'>
            <span className='number'>01</span>
            Destination
          </Link>
        </li>
        <li className='side-item'>
          <Link className={`side-link ${activeLink === 3 ? 'active' : ''}`} onClick={() => changeNav(3)} to='/crew'>
            <span className='number'>02</span>
            Crew
          </Link>
        </li>
        <li className='side-item'>
          <Link className={`side-link ${activeLink === 4 ? 'active' : ''}`} onClick={() => changeNav(4)} to='/technology'>
            <span className='number'>03</span>
            Technology
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar