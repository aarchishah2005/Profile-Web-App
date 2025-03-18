import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    work: false,
    education: false
  });

  const toggleExperience = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const workExperience = [
    {
      id: 1,
      role: 'Social Media & Digital Marketing Executive',
      company: 'Bliss Quants Data Analytics',
      period: 'June 2023 - Present',
      description: 'Responsible for creating, managing, and optimizing social media content, digital marketing campaigns, and brand engagement to drive online growth.',
    },
    // {
    //   id: 2,
    //   role: 'Web Developer',
    //   company: 'Digital Creations',
    //   period: 'Mar 2019 - Dec 2021',
    //   description: 'Developed and maintained client websites. Collaborated with design team to implement UI/UX improvements.',
    // },
    // {
    //   id: 3,
    //   role: 'Junior Developer Intern',
    //   company: 'StartUp Ventures',
    //   period: 'Jun 2018 - Feb 2019',
    //   description: 'Assisted in frontend development tasks. Gained hands-on experience with React, JavaScript, and CSS.',
    // },
  ];

  const education = [
      {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Savitribai Phule Pune University',
      year: '2027',
      description: 'Specialized in Web Development and Software Engineering. CGPA: 9.32/10.0',
    },
    // {
    //   id: 2,
    //   degree: 'Full Stack Web Development Certification',
    //   institution: 'CodeAcademy',
    //   year: '2019',
    //   description: 'Intensive 6-month bootcamp focusing on modern web technologies.',
    // },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 
          className="section-title"
          onClick={toggleExperience}
          style={{ cursor: 'pointer' }}
        >
          Experience & Education
          <span className="toggle-icon">{isExpanded ? '▼' : '►'}</span>
        </h2>
        
        {isExpanded && (
          <>
            <div className="timeline-container">
              <h3 
                className="subsection-title"
                onClick={() => toggleSection('work')}
                style={{ cursor: 'pointer' }}
              >
                Work Experience
                <span className="toggle-icon">{expandedSections.work ? '▼' : '►'}</span>
              </h3>
              
              {expandedSections.work && (
                <div className="timeline">
                  {workExperience.map((job) => (
                    <div className="timeline-item" key={job.id}>
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h4>{job.role}</h4>
                        <h5>{job.company}</h5>
                        <p className="timeline-date">{job.period}</p>
                        <p className="timeline-description">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="timeline-container">
              <h3 
                className="subsection-title"
                onClick={() => toggleSection('education')}
                style={{ cursor: 'pointer' }}
              >
                Education
                <span className="toggle-icon">{expandedSections.education ? '▼' : '►'}</span>
              </h3>
              
              {expandedSections.education && (
                <div className="timeline">
                  {education.map((edu) => (
                    <div className="timeline-item" key={edu.id}>
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h4>{edu.degree}</h4>
                        <h5>{edu.institution}</h5>
                        <p className="timeline-date">{edu.year}</p>
                        <p className="timeline-description">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Experience;