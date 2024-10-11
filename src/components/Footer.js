import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h2>TEAM APPLICATIONS</h2>
        <h3>COMING SOON</h3>
        <div className="application-dates">
          <div>
            <p>Early Applications</p>
            <p>10.15.2022</p>
          </div>
          <div>
            <p>Regular Applications</p>
            <p>10.17.2022</p>
          </div>
          <div>
            <p>Late Applications</p>
            <p>10.20.2022</p>
          </div>
        </div>
        <div className="footer-links">
          <button>Ekta Login</button>
          <button>Application Packet</button>
          <button>How to Apply</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
