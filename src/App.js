import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Tickets from './components/Tickets.js';
import Livestream from './components/Livestream.js';
import Footer from './components/Footer.js';
import homeIcon from './images/raasrampagelogo.jpg';
import ticketsIcon from './images/ticket.png';
import livestreamIcon from './images/livestream.png';
import aboutIcon from './images/about.png';
import applyIcon from './images/apply.png';
import './App.css'; // For loading screen styles and transitions

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust time for fade-out

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {isLoading ? (
          <div className="loading-screen">
            <img src={homeIcon} alt="Logo" className="loading-logo" />
          </div>
        ) : (
          <>
            <Header />
            <PageRoutes />
            <Footer />
          </>
        )}

        {/* Mobile Bottom Navigation */}
        <div className="bottom-nav">
          <a href="/">
            <img src={homeIcon} alt="Home" />
            <span className="bottom-nav-text">Home</span>
          </a>
          <a href="/tickets">
            <img src={ticketsIcon} alt="Tickets" />
            <span className="bottom-nav-text">Tickets</span>
          </a>
          <a href="/livestream">
            <img src={livestreamIcon} alt="Livestream" />
            <span className="bottom-nav-text">Livestream</span>
          </a>
          <a href="/about">
            <img src={aboutIcon} alt="About Us" />
            <span className="bottom-nav-text">About</span>
          </a>
          <a href="/apply">
            <img src={applyIcon} alt="Apply" />
            <span className="bottom-nav-text">Apply</span>
          </a>
        </div>
      </div>
    </Router>
  );
}

const PageRoutes = () => {
  const location = useLocation(); // Get the current location (path)
  
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={500} classNames="slide">
        <Routes location={location}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/livestream" element={<Livestream />} />

          {/* Add other pages here */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
