import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card email-card">
              <div className="icon-wrapper">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Me</h3>
              <p>aarchi.shah2005@gmail.com</p>
            </div>
            
            <div className="info-card phone-card">
              <div className="icon-wrapper">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Me</h3>
              <p>+91 98245 49229</p>
            </div>
            
            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${formStatus === 'sending' ? 'sending' : ''} ${formStatus === 'success' ? 'success' : ''}`}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="contact-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="square"></div>
        <div className="triangle"></div>
      </div>
    </section>
  );
};

export default Contact;