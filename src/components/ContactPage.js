import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

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
    <div className="contact-page">
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

      <style jsx>{`
        .contact-page {
          background: #ffffff;
          color: #333333;
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
          color: #555555;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.9);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
          width: 95% !important;
          padding: 0.75rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.8);
          color: #333333;
          border-radius: 5px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          border: 1px solid black !important;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--primary-color);
          outline: none;
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
      `}</style>
    </div>
  );
};

export default ContactPage;