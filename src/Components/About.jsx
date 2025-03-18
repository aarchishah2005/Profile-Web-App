import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">
          <span className="highlight">About</span> Me
        </h2>
        
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-intro">
            <div className="intro-icon">
              <span role="img" aria-label="sparkles">✨</span>
            </div>
            <p className="intro-text">
              I am a passionate frontend developer with expertise in React.js and an interest in financial coaching. 
              I love creating user-friendly applications and helping individuals with financial planning.
            </p>
          </div>
          
          <div className="education-timeline">
            <h3 className="timeline-title">Education Journey</h3>
            <div className="timeline-item">
              <div className="timeline-marker">📌</div>
              <div className="timeline-content">
                <h4>Computer Engineering</h4>
                <p className="timeline-institution">[Your College Name]</p>
                <p className="timeline-years">(Year - Year)</p>
              </div>
            </div>
          </div>
          
          <div className="hobbies-section">
            <h3 className="hobbies-title">What Defines Me</h3>
            <div className="hobbies-grid">
              <div className="hobby-card">
                <div className="hobby-icon">💻</div>
                <h4>Code Explorer</h4>
                <p>I love coding and problem-solving. Always seeking new challenges to conquer!</p>
              </div>
              
              <div className="hobby-card">
                <div className="hobby-icon">🌍</div>
                <h4>Global Wanderer</h4>
                <p>Traveling and exploring new cultures excite me. Every journey is a new lesson.</p>
              </div>
              
              <div className="hobby-card">
                <div className="hobby-icon">💃</div>
                <h4>Dance Enthusiast</h4>
                <p>Passionate about dance - it's my creative outlet and joy!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;