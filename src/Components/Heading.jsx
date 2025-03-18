import React, { useState, useEffect } from 'react';
import './Heading.css';

const Heading = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-container">
      <div className={`hero-backdrop ${isVisible ? 'visible' : ''}`}>
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-text">
          <div className="title-container">
            <h1 className="hero-heading">Aarchi Shah</h1>
            <div className="accent-line"></div>
          </div>
          
          <div className="bio-container">
            <p className="hero-bio">
              Hi, I'm Aarchi Shah, Future Technologist
            </p>
            <p className="hero-tagline">Creating tomorrow's solutions with today's technology</p>
          </div>
          
          <div className="social-links">
            <a href="https://github.com" className="social-icon" aria-label="GitHub">
              <div className="icon github-icon"></div>
            </a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
              <div className="icon linkedin-icon"></div>
            </a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
              <div className="icon twitter-icon"></div>
            </a>
          </div>
          
          <div className="cta-buttons">
            <a href="/resume.pdf" download className="btn btn-primary">
              <span className="btn-text">Download Resume</span>
              <span className="btn-icon">↓</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span className="btn-text">Contact Me</span>
              <span className="btn-icon">→</span>
            </a>
          </div>
        </div>
        
        <div className="tech-decoration">
          <div className="tech-circle"></div>
          <div className="tech-grid">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="grid-dot"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;