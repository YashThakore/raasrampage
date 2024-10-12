import React from 'react';
import './Hero.css';
import dancerImage from '../images/homelogo.jpg';
import volunteerImage from '../images/groupboardphoto.jpg'; // Assuming you have a volunteer image

const Hero = () => {
    const bubbles = Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bubble"></div>
    ));

    return (
        <div>
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

            {/* Page Sections moved outside of the hero section */}
            <div className="page-sections">
                <div className="short-about">
                    <h2>About Raas Rampage</h2>
                    <p>Raas Rampage is a 4th-year intercollegiate bid competition that brings together college teams</p>
                    <p>to compete in Garba-Raas. Read more about it below.</p>

                    <a href="#about" className="about-btn">Read More</a>
                </div>

                <div class="volunteers-section">
                    <div class="volunteer-content">
                        <h2>VOLUNTEERS</h2>
                        <p class="coming-soon">applications coming soon!</p>
                        <p class="join-us">join the fampage</p>
                        <p>Applications to become a volunteer at our competition will open soon. Please be on the lookout for this!</p>
                        <a href="#apply" class="apply-btn">Apply Now!</a>
                    </div>
                    <img src={volunteerImage} alt="Volunteer Group" class="volunteer-img" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
