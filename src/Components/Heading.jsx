import React from 'react';
import './Heading.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">Aarchi Shah</h1>
          <p className="hero-bio">Hi, I'm Aarchi Shah, Future Technologist </p>
          <div className="cta-buttons">
            <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/Profile-image.png" alt="Aarchi Shah" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
