import React from 'react';
import './Tickets.css';
import dancer1 from '../images/dancer1.jpg';  // Add appropriate dancer images
import dancer2 from '../images/dancer2.jpg';

const Tickets = () => {
  return (
    <section className="tickets-section">
      {/* Show Section with dancers */}
      <div className="show-section">
        <div className="dancers">
          <img src={dancer1} alt="Dancer 1" className="dancer-img dancer-img-left" />
          <div className="show-text">
            <h1>
              Enjoy the <span className="highlight-text">SHOW</span>
            </h1>
          </div>
          <img src={dancer2} alt="Dancer 2" className="dancer-img dancer-img-right" />
        </div>
      </div>

      {/* Tickets Section */}
      <div className="tickets-container">
        <div className="tickets-title-section">
          <h1 className="tickets-title">TICKETS</h1>
        </div>
        <div className="purchase-container">
          <div className="purchase-content">
            <h2 className="purchase-heading">Purchase your Tickets!</h2>
            <p className="purchase-description">
              Join us for the fourth annual Raas Rampage competition hosted in Orlando! 
              Purchase tickets using the link below:
            </p>
            <button className="purchase-button">Purchase Today</button>
          </div>
        </div>
      </div>

      {/* Livestream Section */}
      <div className="livestream-container">
        <h2 className="livestream-heading">Can't Make it to the Show?</h2>
        <p className="livestream-description">No problem! Check out our livestream options!</p>
        <a href="livestream" class="livestream-button">Livestream</a>
      </div>
    </section>
  );
};

export default Tickets;
