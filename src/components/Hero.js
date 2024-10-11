import React from 'react';
import './Hero.css';
import dancerImage from '../images/homelogo.jpg';

const Hero = () => {
    const bubbles = Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bubble"></div>
    ));

    return (
        <section className="hero">
            <div className="bubbles-container">
                {bubbles}
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <h1>RAAS RAMPAGE</h1>
                    <p className="info">UCF'S PREMIER GARBA-RAAS COMPETITION</p>
                    <p className="info-secondary">01.25.2024</p>
                </div>
                <div className="hero-image">
                    <img src={dancerImage} alt="Dancer" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
