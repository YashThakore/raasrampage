import React from 'react';
import './Sponsorship.css';
import sponsorshipPdf from '../images/SponsorshipPacket.pdf' // You'll need to add this PDF
import shakthiLogo from '../images/SHAKTI.jpg'; // Add your logo image

const Sponsorship = () => {
  return (
    <div className="sponsorship-page">
      {/* About Partnership Section */}
      <section className="partnership-section">
        <div className="partnership-content">
          <h1 className="partnership-title">About Partnership</h1>
          <div className="text-content">
            <p>
              Join us in celebrating tradition, culture, and community by partnering with Raas Rampage. Now
              in its 4th year, Raas Rampage has grown into an event that draws talented college teams from
              the East Coast, all eager to showcase their passion and dedication to these vibrant South Asian
              dance forms and try to earn points to go to nationals.
            </p>

            <p>
              Garba and Raas are more than just dances; they are expressions of cultural identity, unity, and
              the joyous spirit of celebration, deeply rooted in the heritage of Gujarat, India. Each year, Raas
              Rampage provides a platform for students to embrace their cultural roots, demonstrate their
              creativity, and engage in a spirited display of teamwork and talent. The event is a spectacle of
              color, music, and energy, making it a unique and memorable experience for participants and
              spectators alike.
            </p>

            <p>
              We invite you to be part of this vibrant celebration and help us continue growing Raas Rampage
              into an even more impactful event. Together, we can create an unforgettable experience that
              resonates with the spirit of community and cultural heritage, leaving a lasting impression on
              everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Packet Button */}
      <section className="packet-section">
        <a
          href={sponsorshipPdf}
          className="sponsorship-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          SPONSORSHIP PACKET
        </a>
      </section>

      {/* Philanthropy Section */}
      <section className="philanthropy-section">
        <div className="philanthropy-content">
          <div className="philanthropy-container">
            <div className="philanthropy-left">
              <div className="philanthropy-headers">
                <h2 className="main-header">PARTNERING</h2>
                <h2 className="main-header">PHILANTHROPY</h2>
                <h3 className="sub-header">S H A K T H I &nbsp; U S</h3>
              </div>
              
              <div className="philanthropy-text">
                <p>
                  The mission of Shakthi US is to provide a place where victims of
                  domestic violence from the South Asian community can come to
                  receive help, resources and support to breakout of this cycle, and
                  begin a new life. Shakthi US educates and empowers girls and
                  young women to become strong and independent leaders so that
                  they do not become another statistic of domestic violence. Funds
                  raised for Shakthi will go towards building a shelter where
                  domestic violence victims of South Asian descent can come for
                  guidance, safety, and housing as they hopefully transition from an
                  abusive relationship.
                </p>
              </div>
            </div>
            
            <div className="philanthropy-right">
              <img src={shakthiLogo} alt="Shakthi US Logo" className="shakthi-logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;
