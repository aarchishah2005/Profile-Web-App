import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';

// Import social media icons from react-icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {  // <-- Define the function here
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-content">
           
        
            <div className="social-icons">
              <a href="https://www.facebook.com/blissquants" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/falgunivahora/" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a> 
              <a href="https://www.linkedin.com/company/blissquants/" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="copyright">
              <span>© 2025 Aarchi Shah All rights reserved</span>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
