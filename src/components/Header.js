import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <button className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </button>
        <Link to="/" className="logo-container">
          <img 
            src="images/company_logo.png" 
            alt="Zodiactech Logo" 
            className="company-logo"
          />
        </Link>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
         <style jsx>{`
        .header {
          background-color: var(--header-bg);
          padding: 1rem 2rem;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0rem 0;
        }
        .company-logo {
          height: 60px;
          width: auto;
          object-fit: contain;
        }
        .nav-links {
          display: flex;
          align-items: center;
        }
        .nav-link {
          color: #343a40;
          text-decoration: none;
          margin-left: 2rem;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: var(--primary-color);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--primary-color);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .hamburger {
          font-size: 2rem;
          background: none;
          border: none;
          cursor: pointer;
          display: none;
          color: #343a40;
        }
        @media screen and (max-width: 768px) {
          .header {
            padding-left: 10px;
          }
          .company-logo {
            height: 45px;
            margin-right: 30px;
          }
          .hamburger {
            display: block;
          }
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--header-bg);
            flex-direction: column;
            align-items: center;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: transform 0.3s ease, opacity 0.3s ease;
            z-index: 999;
          }
          .nav-links.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          .nav-link {
            margin-left: 0 !important;
            padding: 1rem;
            width: 100%;
            text-align: center;
            margin-right: 5%;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;