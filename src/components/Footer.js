import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>About Zodiactech</h3>
        <p>Innovating digital solutions since 2017. We transform ideas into powerful, user-friendly realities.</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect With Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Zodiactech. All rights reserved.</p>
    </div>

    <style jsx>{`
      .footer {
        background-color: var(--footer-bg);
        color: #ffffff;
        padding: 3rem 2rem 1rem;
      }

      .footer-content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
      }

      .footer-section {
        flex: 1;
        margin-bottom: 2rem;
        min-width: 200px;
      }

      .footer-section h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      .footer-section p {
        font-size: 0.9rem;
        line-height: 1.6;
      }

      .footer-section ul {
        list-style-type: none;
        padding: 0;
      }

      .footer-section ul li {
        margin-bottom: 0.5rem;
      }

      .footer-section ul li a {
        color: #ffffff;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .footer-section ul li a:hover {
        color: var(--primary-color);
      }

      .social-icons {
        display: flex;
        gap: 1rem;
      }

      .social-icons a {
        color: #ffffff;
        transition: color 0.3s ease;
      }

      .social-icons a:hover {
        color: var(--primary-color);
      }

      .footer-bottom {
        text-align: center;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }

      .footer-bottom p {
        font-size: 0.8rem;
      }

      @media (max-width: 768px) {
        .footer-content {
          flex-direction: column;
        }

        .footer-section {
          margin-bottom: 1.5rem;
        }
      }
    `}</style>
  </footer>
);

export default Footer;