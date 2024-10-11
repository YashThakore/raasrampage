import React from 'react';
import './Header.css';
import logoImage from '../images/raasrampagelogo.jpg';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <img 
              src={logoImage} 
              alt="Raas Rampage Logo" 
              className="logo-image"
            />
          </div>
          <div className="nav-wrapper">
            <ul className="nav-links">
              <li>Home</li>
              <li>Tickets</li>
              <li>Livestream</li>
              <li>About Us</li>
              <li>Sponsors</li>
              <li>Apply</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
