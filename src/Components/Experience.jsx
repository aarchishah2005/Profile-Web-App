import React from 'react';
import './Experience.css';

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2022 - Present',
      description: 'Led development of responsive web applications using React. Improved site performance by 40% through code optimization.',
    },
    {
      id: 2,
      role: 'Web Developer',
      company: 'Digital Creations',
      period: 'Mar 2019 - Dec 2021',
      description: 'Developed and maintained client websites. Collaborated with design team to implement UI/UX improvements.',
    },
    {
      id: 3,
      role: 'Junior Developer Intern',
      company: 'StartUp Ventures',
      period: 'Jun 2018 - Feb 2019',
      description: 'Assisted in frontend development tasks. Gained hands-on experience with React, JavaScript, and CSS.',
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2018',
      description: 'Specialized in Web Development and Software Engineering. GPA: 3.8/4.0',
    },
    {
      id: 2,
      degree: 'Full Stack Web Development Certification',
      institution: 'CodeAcademy',
      year: '2019',
      description: 'Intensive 6-month bootcamp focusing on modern web technologies.',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="timeline-container">
          <h3 className="subsection-title">Work Experience</h3>
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
        </div>
        
        <div className="timeline-container">
          <h3 className="subsection-title">Education</h3>
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
        </div>
      </div>
    </section>
  );
};

export default Experience;