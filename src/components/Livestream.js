import React from 'react';
import './Livestream.css';
import rampage3Image from '../images/rampage3winner.jpg'; // Assuming you have a volunteer image
import rampage2Image from '../images/rampage2winner.jpg'; // Assuming you have a volunteer image
import rampage1Image from '../images/rampage1winner.jpg'; // Assuming you have a volunteer image

// Correct YouTube Embed URLs
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
        <p>Coming soon...</p>
        <button className="livestream-button">Watch Livestream</button>
      </div>

      {/* 2024 Livestream */}
      <div className="past-livestream">
        <h2>Raas Rampage 2024 Livestream</h2>
        <iframe
          className="livestream-video"
          width="560"
          height="315"
          src={youtubeLinks[2024]}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="show-order">
          <img src={rampage3Image} alt="Show Order 2024" className="show-order-img" />
          <div className="show-order-text">
            <h3>Show Order</h3>
            <ol>
              <li><strong>uconn thunderaas</strong></li>
              <li>uf gatora</li>
              <li>northwestern raas</li>
              <li>ecu raas</li>
              <li><strong>steel city raas</strong></li>
              <li>stanford basmati raas</li>
              <li>unc taar heel raas</li>
            </ol>
            <p><i>*Bolded teams placed at Raas Rampage 3.0</i></p>
          </div>
        </div>
      </div>

      {/* 2023 Livestream */}
      <div className="past-livestream">
        <h2>Raas Rampage 2023 Livestream</h2>
        <iframe
          className="livestream-video"
          width="560"
          height="315"
          src={youtubeLinks[2023]}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="show-order">
          <img src={rampage2Image} alt="Show Order 2023" className="show-order-img" />
          <div className="show-order-text">
            <h3>Show Order</h3>
            <ol>
              <li>Team 1</li>
              <li>Team 2</li>
              <li>Team 3</li>
              <li>Team 4</li>
              <li>Team 5</li>
            </ol>
          </div>
        </div>
      </div>

      {/* 2022 Livestream */}
      <div className="past-livestream">
        <h2>Raas Rampage 2022 Livestream</h2>
        <iframe
          className="livestream-video"
          width="560"
          height="315"
          src={youtubeLinks[2022]}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="show-order">
          <img src={rampage1Image} alt="Show Order 2022" className="show-order-img" />
          <div className="show-order-text">
            <h3>Show Order</h3>
            <ol>
              <li>Team 1</li>
              <li>Team 2</li>
              <li>Team 3</li>
              <li>Team 4</li>
              <li>Team 5</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Livestream;
