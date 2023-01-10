import React from 'react';
import logo from '../assets/static/logo-header.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar justify-content-between px-2 py-3'>
      <div className="col-sm">
        <Link to="/">
          <img src={logo} alt="Lenovo logo" style={{"width": "20rem", "height": "3.7rem"}}/>
        </Link>
      </div>
      <p className='h3 text-white text-uppercase' style={{"weight": "300", "size": "56px"}}>Supply Management</p>
    </nav>
  )
}

export default Header
