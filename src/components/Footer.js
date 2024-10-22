import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (to) => {
    navigate(to);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
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
          align-items: center;
        }
        .footer-section h3 {
          text-align: center;
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
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        .footer-section ul li a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        .footer-section ul li a:hover {
          color: var(--primary-color);
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          justify-content: center;
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
          .footer-section p {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;