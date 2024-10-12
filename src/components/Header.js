import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import logoImage from '../images/raasrampagelogo.jpg';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <Link to="/">
              <img 
                src={logoImage} 
                alt="Raas Rampage Logo" 
                className="logo-image"
              />
            </Link>
          </div>
          <div className="nav-wrapper">
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tickets">Tickets</Link>
              </li>
              <li>
                <Link to="/livestream">Livestream</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/sponsors">Sponsors</Link>
              </li>
              <li>
                <Link to="/apply">Apply</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
