import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Schedule from './components/Schedule.js';
import Sponsors from './components/Sponsorship.js';
import Tickets from './components/Tickets.js';
import Livestream from './components/Livestream.js';
// import Apply from './components/Apply.js';
import homeIcon from './images/raasrampagelogo.jpg';
import ticketsIcon from './images/ticket.png';
import livestreamIcon from './images/livestream.png';
import aboutIcon from './images/about.png';
// import applyIcon from './images/apply.png';
import scheduleIcon from './images/apply.png';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
      setIsLoading(true); 
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasVisited', 'true'); 
      }, 1500); 

      return () => clearTimeout(timer); 
    }
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
          </>
        )}

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
          <a href="/schedule">
            <img src={scheduleIcon} alt="Schedule" />
            <span className="bottom-nav-text">Schedule</span>
          </a>
        </div>
      </div>
    </Router>
  );
}

const PageRoutes = () => {
  const location = useLocation();
  
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={500} classNames="slide">
        <Routes location={location}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/livestream" element={<Livestream />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
