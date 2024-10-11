import React from 'react';
import './Tickets.css';

const Tickets = () => {
  return (
    <section className="tickets-section">
      <h2>Tickets</h2>
      <div className="tickets-info">
        <div className="ticket-text">
          <h3>Purchase your Tickets!</h3>
          <p>Join us for the fourth annual Raas Rampage competition hosted in Orlando!</p>
          <button className="purchase-button">Purchase Today</button>
        </div>
        <div className="livestream-text">
          <h3>Can't Make it to the Show?</h3>
          <p>No problem! Check out our livestream options!</p>
          <button className="livestream-button">Livestream</button>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
