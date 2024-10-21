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
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const openInMaps = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const addresses = [
    "SAMADHI WARD NEAR GOVIND SWAMI TEMPLE CHANDREAPUR",
    "NEAR TITAN WATCH SHOWROOM, OPP. BANK OF INDIA, SHANKAR NAGAR, NAGPUR - 440010",
    "Near SHRINIVAS APARTMENTS, BHUSARI COLONY, KOTHRUD, PUNE - 411038.",
    "209, BALAJI HALL COMPLEX, NR. MAHAPUJA DHAM CHOWK, 150-FT RING ROAD, RAJKOT-360004"
  ];

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
          <h2 className="contact-heading">Contact Information</h2>

          <div className="info-item">
            <Mail size={24} />
            <span>sam.andnkar1990@gmail.com</span>
          </div>
          <div className="info-item">
            <Phone size={24} />
            <span>9325695631,</span>
            <span>9923593929</span>
          </div>
          
          {addresses.map((address, index) => (
            <div key={index} className="info-item">
              <MapPin size={24} />
              <span className="location-link" onClick={() => openInMaps(address)}>
                {address}
              </span>
            </div>
          ))}

          <div className="social-links">
           
            <a href="https://www.facebook.com/ZodiacTechsoft?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-link">
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

        .contact-heading {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
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
          margin-bottom: 0rem;
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
          margin-bottom: 0rem;
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
          padding-top: 40px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .info-item svg {
          margin-right: 1rem;
          color: var(--primary-color);
          flex-shrink: 0;
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
          margin-top: 1.2rem;
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