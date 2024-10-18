import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Zap } from 'lucide-react';

const AboutPage = () => (
  <div className="about-page">
    <div className="about-content">
      <div className="about-header-container">
        <div className="about-text">
          <motion.h1
            className="about-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Zodiactech
          </motion.h1>
          <motion.p
            className="about-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Zodiactech Software and IT Services Pvt Ltd, based in Pathanpura, Chandrapur, is a beacon of innovation in the digital landscape. Since our inception in February 2017, we've been on a relentless pursuit of excellence, crafting digital solutions that not only meet but exceed our clients' expectations. Our journey is marked by a commitment to quality, customer-centricity, and cutting-edge technology.
          </motion.p>
        </div>
        <motion.div
          className="about-gif"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/management.gif"
            alt="Zodiactech Innovation"
            className="gif"
          />
        </motion.div>
      </div>

      <h2 className="timeline_maintitle">Our Timeline</h2>
      <motion.div
        className="timeline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">February 2017</div>
            <div className="timeline-title">The Beginning of a Digital Revolution</div>
            <div className="timeline-description">Zodiactech was founded with a vision to transform the IT landscape in Chandrapur and beyond.</div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">2019</div>
            <div className="timeline-title">Expanding Horizons</div>
            <div className="timeline-description">We broadened our service portfolio, venturing into cutting-edge technologies and expanding our client base.</div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">2021</div>
            <div className="timeline-title">Recognition and Growth</div>
            <div className="timeline-description">Earned the JD Verified and JD Pay stamps, validating our commitment to excellence and customer satisfaction.</div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-date">Today</div>
            <div className="timeline-title">Shaping the Future</div>
            <div className="timeline-description">Continuing to innovate and lead in software development and IT services, setting new industry standards.</div>
          </div>
        </div>
      </motion.div>

      <motion.h1
        className="about_sec_title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Core Values
      </motion.h1>
      <motion.div 
        className="features-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="feature-card">
          <Users className="feature-icon icon1" />
          <h3 className="feature-title">Customer-Centric Approach</h3>
          <p className="feature-description">Building long-term relationships through exceptional service and support.</p>
        </div>
        <div className="feature-card">
          <Award className="feature-icon icon2" />
          <h3 className="feature-title">Quality Assurance</h3>
          <p className="feature-description">Committed to delivering top-notch products and services that exceed expectations.</p>
        </div>
        <div className="feature-card">
          <Target className="feature-icon icon3" />
          <h3 className="feature-title">Innovative Solutions</h3>
          <p className="feature-description">Crafting bespoke software and IT solutions tailored to unique business needs.</p>
        </div>
        <div className="feature-card">
          <Zap className="feature-icon icon4" />
          <h3 className="feature-title">Cutting-Edge Technology</h3>
          <p className="feature-description">Leveraging the latest tech to keep our clients ahead of the curve.</p>
        </div>
      </motion.div>

      <motion.div
        className="innovation-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="motion-content">
          <img src="/images/chart.gif" alt="Innovation GIF" className="motion-gif" />
          <div className="motion-text">
            <h2 className="motion-heading">Innovating for the Future</h2>
            <p className="motion-paragraph">
              Located at Jai Bhavan, Samadhi Ward, Pathanpura Road, Zodiactech has become synonymous with digital innovation in Chandrapur. Our presence on India's leading B2B marketplace, JD Mart, showcases our commitment to reaching a wider audience and facilitating seamless business interactions for enterprises of all sizes.
              <br /><br />
              At Zodiactech, we don't just build software; we craft digital experiences that drive businesses forward. Join us in our journey to reshape the digital landscape, one innovation at a time.
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    <style jsx>{`
      .about-page {
        color: #ffffff;
        padding: 4rem 0 0 0;
        width: 100%;
        background-color: white;
      }

      .about-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      .about-header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        min-height: 90vh;
        width: 100%;
      }

      .about-text {
        flex: 1;
        margin-right: 20px;
      }

      .about-title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 20px;
        color: var(--primary-color);
      }

      .about-description {
        font-size: 18px;
        line-height: 1.6;
        color: #6c757d;
      }

      .about-gif {
        flex: 1;
        display: flex;
        justify-content: center;
      }

      .gif {
        max-width: 100%;
        height: auto;
      }

      .timeline_maintitle {
        color: #343a40;
        text-align: center;
        font-size: 3rem;
        margin: 60px 0;
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
        width: 4px;
        height: 100%;
        background: var(--primary-color);
        transform: translateX(-50%);
      }

      .timeline-item {
        position: relative;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        margin-bottom: 2rem;
        width: calc(50% - 40px);
        box-sizing: border-box;
      }

      .timeline-item:nth-child(even) {
        margin-left: calc(50% + 40px);
      }

      .timeline-date {
        font-size: 0.85rem;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
      }

      .timeline-title {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 0.25rem;
        color: #343a40;
      }

      .timeline-description {
        font-size: 0.9rem;
        line-height: 1.4;
        color: #6c757d;
      }

      .about_sec_title {
        text-align: center;
        color: #212529;
        font-size: 3rem;
        margin: 60px 0 30px 0;
      }

      .features-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        padding: 1rem 4rem;
      }

      .feature-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 2.5rem 1.5rem 1.5rem;
        text-align: center;
        position: relative;
        transition: all 0.3s ease;
        width: calc(25% - 2rem);
        box-sizing: border-box;
        margin-top: 40px;
      }

      .feature-icon {
        font-size: 1rem;
        border-radius: 50%;
        color: #fff;
        padding: 1.3rem;
        width: 40px;
        height: 40px;
        position: absolute;
        top: -35px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--primary-color);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .feature-title {
        margin-top: 30px;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--primary-color);
      }

      .feature-description {
        font-size: 0.9rem;
        color: #6c757d;
      }

      .innovation-section {
        display: flex;
        align-items: flex-start;
        gap: 2rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        margin-top: 3rem;
        transition: all 0.3s ease;
      }

      .motion-content {
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: #edf2f4;
        padding: 2rem 0;
      }

      .motion-gif {
        flex: 0 0 40%;
        max-width: 40%;
        height: auto;
      }

      .motion-text {
        flex: 1;
        padding: 0 2rem;
      }

      .motion-heading {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      .motion-paragraph {
        font-size: 1rem;
        color: #6c757d;
        line-height: 1.5;
      }

      @media (max-width: 768px) {
        .about-header-container {
          flex-direction: column-reverse;
        }

        .about-text {
          text-align: center;
          padding: 20px;
          margin-right: 0;
        }

        .timeline::before {
          left: 0;
        }

        .timeline-item {
          width: 100%;
          margin-left: 0;
        }

        .timeline_maintitle {
          font-size: 2.5rem;
        }

        .timeline-item:nth-child(even) {
          margin-left: 0;
        }

        .feature-card {
          width: 100%;
        }

        .motion-content {
          flex-direction: column;
        }

        .motion-gif {
          width: 100%;
          max-width: 100%;
        }
      }
    `}</style>
  </div>
);

export default AboutPage;