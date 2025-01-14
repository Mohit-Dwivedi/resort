import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
   const [state, setstate] = useState(false)
 
   const handleToggle = () => {
    setstate(!state)
   }

  return ( 
    <nav className='navbar'>
        <div className="nav-center">
            <div className="nav-header">
                <Link to='/'>
                    <img src={logo} alt="Beach Resort" />
                </Link>
                <button type='button' className='nav-btn' onClick={handleToggle}>
                    <FaAlignRight className='nav-icon'/>
                </button>
            </div>
            <ul className={state? 'nav-links show-nav' : 'nav-links'}>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='rooms'>Rooms</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
