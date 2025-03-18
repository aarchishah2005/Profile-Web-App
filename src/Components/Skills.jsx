import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSkills = () => {
    setIsExpanded(!isExpanded);
  };

  const frontendSkills = [
    { name: 'React.js', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'Tailwind', level: 80 }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 50 },
    { name: 'Express.js', level: 50 }
  ];

  const softSkills = [
    { name: 'Communication', level: 80 },
    { name: 'Problem-Solving', level: 88 },
    { name: 'Teamwork', level: 90 }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 
          className="section-title" 
          onClick={toggleSkills}
          style={{ cursor: 'pointer' }}
        >
          My <span className="highlight">Skills</span>
          <span className="toggle-icon">{isExpanded ? '▼' : '►'}</span>
        </h2>
        
        {isExpanded && (
          <div className={`skills-content ${isVisible ? 'visible' : ''}`}>
            <div className="skills-category">
              <h3 className="category-title">
                <span className="category-icon">💻</span> Frontend
              </h3>
              <div className="skills-grid">
                {frontendSkills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${isVisible ? skill.level : 0}%`,
                          transitionDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="skills-category">
              <h3 className="category-title">
                <span className="category-icon">⚙️</span> Backend
              </h3>
              <div className="skills-grid">
                {backendSkills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${isVisible ? skill.level : 0}%`,
                          transitionDelay: `${(index + frontendSkills.length) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="skills-category">
              <h3 className="category-title">
                <span className="category-icon">🤝</span> Soft Skills
              </h3>
              <div className="skills-grid">
                {softSkills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress soft-skill" 
                        style={{ 
                          width: `${isVisible ? skill.level : 0}%`,
                          transitionDelay: `${(index + frontendSkills.length + backendSkills.length) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;