import React from 'react';
import './Livestream.css';
import rampage3Image from '../images/rampage3winner.jpg'; // Placeholder image for 2024
import rampage2Image from '../images/rampage2winner.jpg'; // Placeholder image for 2023
import rampage1Image from '../images/rampage1winner.jpg'; // Placeholder image for 2022

// YouTube URLs
const youtubeLinks = {
  2024: 'https://www.youtube.com/embed/SC7eDPSWeVA',
  2023: 'https://www.youtube.com/embed/EiscFy1XJdQ',
  2022: 'https://www.youtube.com/embed/7NuGs34uyhM',
};

const Livestream = () => {
  return (
    <section className="livestream-section">
      {/* 2025 Livestream */}
      <div className="upcoming-livestream">
        <h2>Raas Rampage 2025 Livestream</h2>
        <p className="coming-soon-text">Coming soon...</p>
        <button className="livestream-button">Watch Livestream</button>
      </div>


      {/* 2024 Livestream */}
      <div className="livestream-embed dark-bg">
        <h2>Raas Rampage 2024 Livestream</h2>
        <iframe
          className="livestream-video"
          width="100%"
          height="315"
          src={youtubeLinks[2024]}
          title="Raas Rampage 2024"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="show-order light-bg">
        <img src={rampage3Image} alt="Show Order 2024" className="show-order-img" />
        <div className="show-order-text">
          <h3>Show Order <span className="rampage-year">Rampage 3.0 (2024)</span></h3> {/* Add year inside the h3 */}
          <ol>
            <li><strong>uconn thunderaas</strong></li>
            <li>uf gatoraas</li>
            <li>northwestern raas</li>
            <li>ecu raas</li>
            <li><strong>steel city raas</strong></li>
            <li>stanford basmati raas</li>
            <li>unc taar heel raas</li>
          </ol>
          <p><i>*Bolded teams placed at Raas Rampage 3.0</i></p>
        </div>
      </div>

      {/* 2023 Livestream */}
      <div className="livestream-embed dark-bg">
        <h2>Raas Rampage 2023 Livestream</h2>
        <iframe
          className="livestream-video"
          width="100%"
          height="315"
          src={youtubeLinks[2023]}
          title="Raas Rampage 2023"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="show-order light-bg">
        <img src={rampage2Image} alt="Show Order 2023" className="show-order-img" />
        <div className="show-order-text">
          <h3>Show Order <span className="rampage-year">Rampage 2.0 (2023)</span></h3> {/* Add year inside the h3 */}
          <ol>
            <li><strong>utd taraas</strong></li>
            <li>ucsd raas ruckus</li>
            <li>steel city raas</li>
            <li><strong>uf gatoraas</strong></li>
            <li>uc raas</li>
            <li>stanford basmati raas</li>
            <li><strong>gt ramblin' raas</strong></li>
            <li>illini raas</li>
          </ol>
          <p><i>*Bolded teams placed at Raas Rampage 2.0</i></p>
        </div>
      </div>

      {/* 2022 Livestream */}
      <div className="livestream-embed dark-bg">
        <h2>Raas Rampage 2022 Livestream</h2>
        <iframe
          className="livestream-video"
          width="100%"
          height="315"
          src={youtubeLinks[2022]}
          title="Raas Rampage 2022"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="show-order light-bg">
        <img src={rampage1Image} alt="Show Order 2022" className="show-order-img" />
        <div className="show-order-text">
          <h3>Show Order <span className="rampage-year">Rampage 1.0 (2022)</span></h3> {/* Add year inside the h3 */}
          <ol>
            <li>ucf knightraas</li>
            <li><strong>cornell big red raas</strong></li>
            <li>vcu ricochet raas</li>
            <li><strong>ru raga</strong></li>
            <li><strong>umd entouraas</strong></li>
            <li>michigan wolveraas</li>
            <li>uh roarin' raas</li>
            <li>steel city raas</li>
          </ol>
          <p><i>*Bolded teams placed at Raas Rampage 1.0</i></p>
        </div>
      </div>
    </section>
  );
};

export default Livestream;
