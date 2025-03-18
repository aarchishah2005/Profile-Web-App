import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
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

  const toggleProjects = () => {
    setIsExpanded(!isExpanded);
  };

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Personal Finance Dashboard",
      description: "A comprehensive dashboard for tracking personal finances, investments, and budgeting with interactive charts and expense categorization.",
      technologies: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/finance-dashboard",
      demo: "https://finance-dashboard.example.com",
      image: "/api/placeholder/600/400",
      color: "#6366F1"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce solution with product listings, cart functionality, user authentication, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/username/ecommerce-platform",
      demo: "https://ecommerce.example.com",
      image: "/api/placeholder/600/400",
      color: "#2DD4BF"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity tool for managing tasks, projects, and deadlines with drag-and-drop interfaces and collaborative features.",
      technologies: ["React", "Redux", "Firebase", "Material UI"],
      github: "https://github.com/username/task-management",
      demo: "https://tasks.example.com",
      image: "/api/placeholder/600/400",
      color: "#F472B6"
    }
  ];

  const handlePrevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setActiveProject(index);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 
          className="section-title" 
          onClick={toggleProjects}
          style={{ cursor: 'pointer' }}
        >
          My <span className="highlight">Projects</span>
          <span className="toggle-icon">{isExpanded ? '▼' : '►'}</span>
        </h2>
        
        {isExpanded && (
          <div className={`projects-showcase ${isVisible ? 'visible' : ''}`}>
            <div className="projects-carousel">
              {projects.map((project, index) => {
                const isActive = index === activeProject;
                const isPrev = index === (activeProject === 0 ? projects.length - 1 : activeProject - 1);
                const isNext = index === (activeProject === projects.length - 1 ? 0 : activeProject + 1);
                
                return (
                  <div 
                    key={project.id}
                    className={`project-card ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
                    style={{ 
                      '--project-color': project.color,
                      display: isActive || isPrev || isNext ? 'flex' : 'none'
                    }}
                  >
                    <div className="project-image-container">
                      <img src={project.image} alt={project.title} className="project-image" />
                      <div className="project-overlay">
                        <div className="project-buttons">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-button github">
                            <span className="button-icon">&#128187;</span>
                            GitHub
                          </a>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-button demo">
                            <span className="button-icon">&#127760;</span>
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="carousel-controls">
              <button className="carousel-button prev" onClick={handlePrevProject}>
                &#10094;
              </button>
              <div className="carousel-dots">
                {projects.map((_, index) => (
                  <button 
                    key={index} 
                    className={`carousel-dot ${index === activeProject ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                  ></button>
                ))}
              </div>
              <button className="carousel-button next" onClick={handleNextProject}>
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;