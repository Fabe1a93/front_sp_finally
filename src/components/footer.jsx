import React from 'react';
import settings from '../assets/img/settings_button.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Link to="/">
      <button>
        <img src={settings} alt="Settings" style={{position: "fixed",
        bottom: 3,
        right: 3,
        width: "3rem",
        height: "3rem",
        padding: "4px"}}/>
      </button>
    </Link>
  )
}

export default Footer
