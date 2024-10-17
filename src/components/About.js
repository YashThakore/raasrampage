import React from 'react';
import './About.css';
import boardMembers from '../board/boardMembers.js';
import raasRampageImage from '../images/rampagelogo.jpg'; // Update with correct path
import raasAllStarsImage from '../images/raasallstars.jpg';   // Update with correct path

const About = () => {
  return (
    <div className="about-page">
      {/* About Raas Rampage Section */}
      <section className="about-section rampage-section">
        <img src={raasRampageImage} alt="Raas Rampage Team" className="about-image" />
        <div className="about-content">
          <h2>ABOUT RAMPAGE</h2>
          <p>
            Raas Rampage in its fourth year is an intercollegiate garba-raas dance competition that hosts eight teams in Orlando, FL. Garba and Raas—a traditional dance form rooted in the South Asian community—is characterized by rhythmic circular movements typically associated with the Navratri festival. This cultural competition lets students showcase their cultural pride, creativity, and teamwork, helping to preserve the cultural identity of South Asia.
          </p>
          <p className="highlight-text">BE ON THE LOOKOUT TO BE A PART OF THE RAMPAGE!!</p>
        </div>
      </section>

      <section className="about-section allstars-section">
  <div className="about-content">
    <h2>ABOUT RAAS-ALL-STARS</h2>
    <p>
      Raas All-Stars (RAS) began in 2009 as an initiative to support philanthropic causes
      vital to the South Asian community while also partaking in the rich cultural heritage
      of the Raas-Garba tradition. For the past sixteen years, RAS has expanded and grown
      into one of the largest intercollegiate dance communities through its expansive network,
      team managers, competition board members, and alumni across the country.
    </p>
    <a href="https://www.raasallstars.com/" className="learn-more-btn">LEARN MORE</a>
  </div>
  <img src={raasAllStarsImage} alt="Raas All-Stars" className="about-image" />
</section>

      {/* Executive Board Section */}
      <section className="executive-board">
        <h2>Raas Rampage 4.0 Executive Board</h2>
        <div className="board-members-grid">
          {boardMembers.map((member) => (
            <div className="board-member-card" key={member.name}>
              <img src={member.image} alt={member.name} className="board-member-img" />
              <div className="board-member-info">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;