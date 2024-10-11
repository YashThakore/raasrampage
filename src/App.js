import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Tickets from './components/Tickets.js';
import Livestream from './components/Livestream.js';
import Footer from './components/Footer.js';
import homeIcon from './images/raasrampagelogo.jpg'; // Import your logo
import ticketsIcon from './images/ticket.jpg';
import livestreamIcon from './images/livestream.jpg';
import aboutIcon from './images/about.jpg';
import applyIcon from './images/apply.jpg';
import './App.css'; // For loading screen styles

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust time for fade-out

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
{isLoading ? (
        <div className="loading-screen">
          <img src={homeIcon} alt="Logo" className="loading-logo" />
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Tickets />
          <Livestream />
          <Footer />
        </>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="bottom-nav">
        <a href="#hero">
          <img src={homeIcon} alt="Home" />
          <span className="bottom-nav-text">Home</span>
        </a>
        <a href="#tickets">
          <img src={ticketsIcon} alt="Tickets" />
          <span className="bottom-nav-text">Tickets</span>
        </a>
        <a href="#livestream">
          <img src={livestreamIcon} alt="Livestream" />
          <span className="bottom-nav-text">Livestream</span>
        </a>
        <a href="#about">
          <img src={aboutIcon} alt="About Us" />
          <span className="bottom-nav-text">About</span>
        </a>
        <a href="#apply">
          <img src={applyIcon} alt="Apply" />
          <span className="bottom-nav-text">Apply</span>
        </a>
      </div>
    </div>
  );
}

export default App;