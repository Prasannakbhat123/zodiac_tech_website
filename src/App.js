import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence,} from 'framer-motion';
import { Globe, Mail, Phone, Code, Palette, Calendar, Users, Award, Target, Zap,Mic, Film, Video, Smartphone, Megaphone,MapPin, Send, Linkedin, Twitter, Facebook ,Briefcase } from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

  :root {
    --primary-color: #3b82f6;
    --secondary-color: #1e40af;
    --background-color: #000000;
    --text-color: #ffffff;
    --header-bg: rgba(17, 24, 39, 0.8);
    --footer-bg: #111827;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

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

  .company-name {
    font-family: 'Playfair Display', serif;
    background: linear-gradient(45deg, var(--primary-color), #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    align-items: center;
  }

  .nav-link {
    color: var(--text-color);
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

  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem 2rem 2rem;
    text-align: center;
  }

  .page-content {
    max-width: 800px;
  }

  .page h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
    font-family: 'Playfair Display', serif;
  }

  .page p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

 .home-page {
    background: linear-gradient(135deg, #000000, #1a1a1a);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .home-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://source.unsplash.com/random/1920x1080?technology') no-repeat center center;
    background-size: cover;
    opacity: 0.2;
    z-index: 1;
  }

  .home-company-name {
    font-family: 'Playfair Display', serif;
    font-size: 6rem;
    background: linear-gradient(45deg, var(--primary-color), #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .home-tagline {
    font-size: 1.8rem;
    color: #ffffff;
    max-width: 800px;
    margin: 0 auto 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .home-description {
    font-size: 1.2rem;
    color: #e0e0e0;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }
   .cta-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .cta-button {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    background-color: var(--secondary-color);
  }
  .cta-button.secondary {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
  }

  .cta-button.secondary:hover {
    background-color: var(--primary-color);
    color: white;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  .feature-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .feature-description {
    font-size: 0.9rem;
    color: #b0b0b0;
  }

  @media (max-width: 768px) {
    .home-company-name {
      font-size: 4rem;
    }
    .home-tagline {
      font-size: 1.4rem;
    }
    .home-description {
      font-size: 1rem;
    }
    .cta-container {
      flex-direction: column;
    }
    .features-grid {
      grid-template-columns: 1fr;
    }
  }

  .contact-link {
    display: flex;
    align-items: center;
    color: var(--primary-color);
    text-decoration: none;
    margin: 1rem 0;
    transition: transform 0.3s ease;
  }

  .contact-link:hover {
    transform: translateY(-2px);
  }

  .contact-link svg {
    margin-right: 0.5rem;
  }

  .footer {
    background-color: var(--footer-bg);
    padding: 1rem;
    text-align: center;
    margin-top: auto;
  }

  @media (max-width: 768px) {
    .header {
      padding: 1rem;
    }
    .company-name {
      font-size: 1.5rem;
    }
    .nav-link {
      font-size: 0.8rem;
      margin-left: 1rem;
    }
    .page h1 {
      font-size: 2.5rem;
    }
    .page p {
      font-size: 1rem;
    }
    .home-company-name {
      font-size: 4rem;
    }
    .home-tagline {
      font-size: 1.4rem;
    }
  }
    .about-page {
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    color: #ffffff;
    padding: 4rem 2rem;
  }

  .about-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .about-title {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .about-subtitle {
    font-size: 1.5rem;
    color: #b0b0b0;
  }

  .about-description {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 3rem;
  }

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: var(--primary-color);
    transform: translateX(-50%);
  }

  .timeline-item {
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    margin-bottom: 1.5rem;
    position: relative;
    width: calc(50% - 30px);
    box-sizing: border-box;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -36px;
    width: 12px;
    height: 12px;
    background: var(--primary-color);
    border-radius: 50%;
    transform: translateY(-50%);
  }

  .timeline-item:nth-child(even) {
    margin-left: calc(50% + 30px);
  }

  .timeline-item:nth-child(even)::before {
    left: -42px;
    right: auto;
  }

  .timeline-date {
    font-size: 0.85rem;
    color: var(--primary-color);
    margin-bottom: 0.25rem;
  }

  .timeline-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  .timeline-description {
    font-size: 0.9rem;
    white-space: pre-line;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    .timeline::before {
      left: 0;
    }
    .timeline-item {
      width: calc(100% - 30px);
      margin-left: 30px;
    }
    .timeline-item:nth-child(even) {
      margin-left: 30px;
    }
    .timeline-item::before {
      left: -36px;
      right: auto;
    }
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  .feature-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .feature-description {
    font-size: 0.9rem;
    color: #b0b0b0;
  }

  @media (max-width: 768px) {
    .timeline::before {
      left: 0;
    }
    .timeline-item {
      margin-left: 20px;
    }
    .timeline-item:nth-child(even) {
      margin-left: 20px;
    }
    .timeline-item::before {
      left: -30px;
    }
  }
  .services-page {
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    color: #ffffff;
    padding: 4rem 2rem;
    min-height: 100vh;
  }

  .services-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .services-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .services-title {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .services-subtitle {
    font-size: 1.5rem;
    color: #b0b0b0;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .service-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }

  .service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  .service-card:hover::before {
    opacity: 0.1;
  }

  .service-icon {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
  }

  .service-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
  }

  .service-description {
    font-size: 1rem;
    color: #b0b0b0;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    .services-title {
      font-size: 2.5rem;
    }
    .services-subtitle {
      font-size: 1.2rem;
    }
    .service-card {
      padding: 1.5rem;
    }
  }
  .contact-page {
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    color: #ffffff;
    padding: 4rem 2rem;
    min-height: 100vh;
  }

  .contact-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .contact-header {
    grid-column: 1 / -1;
    text-align: center;
    margin-bottom: 2rem;
  }

  .contact-title {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .contact-subtitle {
    font-size: 1.5rem;
    color: #b0b0b0;
  }

  .contact-form {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 15px;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
  }

  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;
    border-radius: 5px;
    font-size: 1rem;
  }

  .form-textarea {
    min-height: 150px;
    resize: vertical;
  }

  .submit-button {
    background-color: var(--primary-color);
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .submit-button:hover {
    background-color: var(--secondary-color);
  }

  .submit-button svg {
    margin-left: 0.5rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .info-item svg {
    margin-right: 1rem;
    color: var(--primary-color);
  }

  .location-link {
    color: var(--primary-color);
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .location-link:hover {
    color: var(--secondary-color);
  }

  .social-links {
    display: flex;
    justify-content: flex-start;
    margin-top: 2rem;
  }

  .social-link {
    color: var(--primary-color);
    margin-right: 1rem;
    transition: color 0.3s ease;
  }

  .social-link:hover {
    color: var(--secondary-color);
  }

  @media (max-width: 768px) {
    .contact-content {
      grid-template-columns: 1fr;
    }
    .contact-title {
      font-size: 2.5rem;
    }
    .contact-subtitle {
      font-size: 1.2rem;
    }
  }
 .portfolio-page {
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    color: #ffffff;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .portfolio-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .portfolio-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .portfolio-title {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .portfolio-subtitle {
    font-size: 1.5rem;
    color: #b0b0b0;
  }

  .timeline-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 15px;
    max-width: 600px;
    width: 100%;
    text-align: center;
    position: relative;
  }

  .timeline-date {
    font-size: 1.2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .timeline-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .timeline-description {
    font-size: 1.1rem;
    color: #b0b0b0;
    line-height: 1.6;
  }

  .timeline-icon {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    background: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .scroll-indicator svg {
    margin-top: 0.5rem;
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @media (max-width: 768px) {
    .portfolio-title {
      font-size: 2.5rem;
    }
    .portfolio-subtitle {
      font-size: 1.2rem;
    }
    .timeline-title {
      font-size: 1.5rem;
    }
    .timeline-description {
      font-size: 1rem;
    }
  }
`;

const Header = () => (
  <header className="header">
    <nav className="nav-container">
      <Link to="/" className="company-name">Zodiactech</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Innovate. All rights reserved.</p>
  </footer>
);

const HomePage = () => (
  <div className="page home-page">
    <div className="home-bg"></div>
    <div className="home-content">
      <motion.h1 
        className="home-company-name"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Zodiactech
      </motion.h1>
      <motion.p 
        className="home-tagline"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Transforming ideas into digital reality
      </motion.p>
      <motion.p
        className="home-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        At Innovate, we blend creativity with cutting-edge technology to deliver exceptional digital solutions. Our team of experts is passionate about turning your vision into a powerful, user-friendly reality that drives your business forward.
      </motion.p>
      <motion.div
        className="cta-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.1 }}
      >
        <Link to="/contact" className="cta-button">Get Started</Link>
        <Link to="/portfolio" className="cta-button secondary">View Our Work</Link>
      </motion.div>
      <motion.div
        className="features-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.4 }}
      >
        <div className="feature-card">
          <Code className="feature-icon" />
          <h3 className="feature-title">Cutting-edge Development</h3>
          <p className="feature-description">We use the latest technologies to build robust and scalable solutions.</p>
        </div>
        <div className="feature-card">
          <Palette className="feature-icon" />
          <h3 className="feature-title">Stunning Design</h3>
          <p className="feature-description">Our designs are not just beautiful, they're intuitive and user-focused.</p>
        </div>
        <div className="feature-card">
          <Zap className="feature-icon" />
          <h3 className="feature-title">Lightning-Fast Performance</h3>
          <p className="feature-description">We optimize every aspect to ensure your digital presence is blazingly fast.</p>
        </div>
      </motion.div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="page about-page">
    <div className="about-content">
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="about-title">About Zodiactech</h1>
        <p className="about-subtitle">Transforming Ideas into Digital Excellence</p>
      </motion.div>

      <motion.p 
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Zodiactech Software and IT Services Pvt Ltd, based in Pathanpura, Chandrapur, is a beacon of innovation in the digital landscape. Since our inception in February 2017, we've been on a relentless pursuit of excellence, crafting digital solutions that not only meet but exceed our clients' expectations. Our journey is marked by a commitment to quality, customer-centricity, and cutting-edge technology.
      </motion.p>

      <motion.div 
        className="timeline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="timeline-item">
          <div className="timeline-date">February 2017</div>
          <div className="timeline-title">The Beginning of a Digital Revolution</div>
          <div className="timeline-description">Zodiactech was founded with a vision to transform the IT landscape in Chandrapur and beyond.</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2019</div>
          <div className="timeline-title">Expanding Horizons</div>
          <div className="timeline-description">We broadened our service portfolio, venturing into cutting-edge technologies and expanding our client base.</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2021</div>
          <div className="timeline-title">Recognition and Growth</div>
          <div className="timeline-description">
            {`Earned the JD Verified and JD Pay stamps,
              validating our commitment to excellence and customer satisfaction`}
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">Today</div>
          <div className="timeline-title">Shaping the Future</div>
          <div className="timeline-description">Continuing to innovate and lead in software development and IT services, setting new industry standards.</div>
        </div>
      </motion.div>

      <motion.div 
        className="features-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="feature-card">
          <Users className="feature-icon" />
          <h3 className="feature-title">Customer-Centric Approach</h3>
          <p className="feature-description">Building long-term relationships through exceptional service and support.</p>
        </div>
        <div className="feature-card">
          <Award className="feature-icon" />
          <h3 className="feature-title">Quality Assurance</h3>
          <p className="feature-description">Committed to delivering top-notch products and services that exceed expectations.</p>
        </div>
        <div className="feature-card">
          <Target className="feature-icon" />
          <h3 className="feature-title">Innovative Solutions</h3>
          <p className="feature-description">Crafting bespoke software and IT solutions tailored to unique business needs.</p>
        </div>
        <div className="feature-card">
          <Zap className="feature-icon" />
          <h3 className="feature-title">Cutting-Edge Technology</h3>
          <p className="feature-description">Leveraging the latest tech to keep our clients ahead of the curve.</p>
        </div>
      </motion.div>

      <motion.p 
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Located at Jai Bhavan, Samadhi Ward, Pathanpura Road, Zodiactech has become synonymous with digital innovation in Chandrapur. Our presence on India's leading B2B marketplace, JD Mart, showcases our commitment to reaching a wider audience and facilitating seamless business interactions for enterprises of all sizes.
      </motion.p>

      <motion.p 
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        At Zodiactech, we don't just build software; we craft digital experiences that drive businesses forward. Join us in our journey to reshape the digital landscape, one innovation at a time.
      </motion.p>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="service-card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="service-icon" size={48} />
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </motion.div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: Mic,
      title: "Podcast Production",
      description: "Create engaging audio content with our professional podcast production services."
    },
    {
      icon: Film,
      title: "Film Production",
      description: "Bring your stories to life with our expert film production team."
    },
    {
      icon: Video,
      title: "Livestream Services",
      description: "Connect with your audience in real-time through high-quality livestreaming."
    },
    {
      icon: Smartphone,
      title: "Mobile App Creation",
      description: "Develop cutting-edge mobile applications for iOS and Android platforms."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build responsive and user-friendly websites that drive your business forward."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create intuitive and visually appealing user interfaces for seamless user experiences."
    }
  ];

  return (
    <div className="page services-page">
      <div className="services-content">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">Empowering Your Digital Journey</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const timelineData = [
  {
    date: "February 2017",
    title: "Company Founded",
    description: "Zodiactech Software and IT Services Pvt Ltd was established in Pathanpura, Chandrapur, with a vision to transform the local IT landscape.",
    icon: Calendar
  },
  {
    date: "2018",
    title: "First Major Project",
    description: "Successfully completed our first large-scale software development project, marking a significant milestone in our growth journey.",
    icon: Briefcase
  },
  {
    date: "2019",
    title: "Expansion of Services",
    description: "Broadened our horizons by introducing cutting-edge mobile app development and digital marketing services to meet evolving client needs.",
    icon: Zap
  },
  {
    date: "2020",
    title: "Team Growth",
    description: "Doubled our talented team to keep pace with increasing demand, bringing fresh perspectives and expanded capabilities to our projects.",
    icon: Users
  },
  {
    date: "2021",
    title: "JD Verified Status",
    description: "Earned the prestigious JD Verified and JD Pay stamps, a testament to our unwavering commitment to excellence and customer satisfaction.",
    icon: Award
  },
  {
    date: "2023",
    title: "Global Reach",
    description: "Expanded our client base internationally, showcasing our expertise on a global stage and bringing innovative solutions to businesses worldwide.",
    icon: Globe
  }
];

const PortfolioPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const scrollTimeout = useRef(null);

  const handleScroll = useCallback((e) => {
    e.preventDefault();
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      if (e.deltaY > 0 && currentIndex < timelineData.length - 1) {
        setDirection(1);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setDirection(-1);
        setCurrentIndex(prevIndex => prevIndex - 1);
      }
    }, 200);
  }, [currentIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, [handleScroll]);

  const currentItem = timelineData[currentIndex];
  const Icon = currentItem.icon;

  return (
    <div 
      className="page portfolio-page" 
      ref={containerRef}
    >
      <div className="portfolio-content">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="portfolio-title">Our Journey</h1>
          <p className="portfolio-subtitle">Scroll to explore Zodiactech's milestones</p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="timeline-item"
            initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-icon">
              <Icon size={30} color="#ffffff" />
            </div>
            <div className="timeline-date">{currentItem.date}</div>
            <h3 className="timeline-title">{currentItem.title}</h3>
            <p className="timeline-description">{currentItem.description}</p>
          </motion.div>
        </AnimatePresence>

        <div className="scroll-indicator">
          {currentIndex < timelineData.length - 1 ? "Scroll to explore" : "You've reached the end"}
          {currentIndex < timelineData.length - 1 && (
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const openInMaps = () => {
    const address = "Jai Bhavan, Samadhi Ward, Pathanpura Road, Chandrapur";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="page contact-page">
      <div className="contact-content">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">We'd love to hear from you</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="info-item">
            <Mail size={24} />
            <span>info@zodiactech.com</span>
          </div>
          <div className="info-item">
            <Phone size={24} />
            <span>+1 (234) 567-890</span>
          </div>
          <div className="info-item">
            <MapPin size={24} />
            <span className="location-link" onClick={openInMaps}>
              Jai Bhavan, Samadhi Ward, Pathanpura Road, Chandrapur
            </span>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Twitter size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Facebook size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <HomePage />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <AboutPage />
          </motion.div>
        } />
        <Route path="/services" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ServicesPage />
          </motion.div>
        } />
        <Route path="/portfolio" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <PortfolioPage />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ContactPage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const RefinedMultiPagePortfolio = () => {
  return (
    <Router>
      <style>{styles}</style>
      <div className="portfolio-container">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default RefinedMultiPagePortfolio;