import React from 'react';
import './Apply.css';

const Apply = () => {
  return (
    <section className="apply">
      <div className="header">
        <h2>TEAM</h2>
        <h2>APPLICATIONS</h2>
        <h1>Now</h1>
        <h1>Open</h1>
      </div>

      <div className="application-types">
        <div className="application-column">
          <h3>EARLY</h3>
          <h3>APPLICATIONS</h3>
          <p>10.15.2022</p>
        </div>
        
        <div className="application-column">
          <h3>REGULAR</h3>
          <h3>APPLICATIONS</h3>
          <p>10.17.2022</p>
        </div>
        
        <div className="application-column">
          <h3>LATE</h3>
          <h3>APPLICATIONS</h3>
          <p>10.20.2022</p>
        </div>
      </div>

      <div className="buttons">
        <button>EKTA LOGIN</button>
        <button>APPLICATION PACKET</button>
        <button>HOW TO APPLY</button>
      </div>
    </section>
  );
};

export default Apply;
