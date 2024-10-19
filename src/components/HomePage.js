import React, { useEffect, useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const ProfileCards = () => (
  <div className="profile_cards_section">
    <h3 className="section_title">Meet Our Team</h3>
    <div className="profile_cards_container">
      <div className="profile_card">
        <div className="profile_image_container">
          <img src="/images/sameer.jpeg" alt="Profile 1" className="profile_image" />
        </div>
        <div className="profile_info">
          <div className="profile_name">Sameer Andankar</div>
  <div className="profile_description">
      <p>Managing Director</p>
      <p>Contact: 9325695631</p>
    </div>
        </div>
      </div>
      <div className="profile_card">
        <div className="profile_image_container">
          <img src="/images/Sharvari_deshkar.jpeg" alt="Profile 2" className="profile_image" />
        </div>
        <div className="profile_info">
          <div className="profile_name">Sharvari Deshkar</div>
            <div className="profile_description">
            <p>Director Partner</p>
              <p>qualification : MBA</p>
              <p>Contact: 8329905448</p>
            </div>
        </div>
      </div>
      <div className="profile_card">
        <div className="profile_image_container">
          <img src="/images/Roshan_masaram.jpg" alt="Profile 3" className="profile_image" />
        </div>
        <div className="profile_info">
          <div className="profile_name">Roshan Masram</div>
            <div className="profile_description">
            <p>Director Partner</p>
              <p>qualification : BSC</p>
              <p>Contact: 9405661777</p>
            </div> 
                   </div>
      </div>
      <div className="profile_card">
        <div className="profile_image_container">
          <img src="/images/Vaibhav_thote.jpeg" alt="Profile 3" className="profile_image" />
        </div>
        <div className="profile_info">
          <div className="profile_name">Vaibhav Dhote</div>
 <div className="profile_description">
            <p>Director Partner</p>
              <p>qualification : MBA</p>
              <p>Contact: 9960250852</p>
            </div>         
            </div>
      </div>
      <div className="profile_card">
        <div className="profile_image_container">
          <img src="/images/Pooja_sarkar.jpeg" alt="Profile 3" className="profile_image" />
        </div>
        <div className="profile_info">
          <div className="profile_name">Pooja Sarkar</div>
            <div className="profile_description">
              <p>Sr. Dereloper</p>
              <p>qualification : MCA</p>
              <p>Contact: 9960250852</p>
            </div>   
          </div>
      </div>
      <div className="profile_card">
        <div className="profile_image_container">
          <img src="/images/Loksh_soni.jpeg" alt="Profile 3" className="profile_image" />
        </div>
        <div className="profile_info">
          <div className="profile_name">Lokesh Soni</div>
            <div className="profile_description">
              <p>Jr. Developerr</p>
              <p>qualification : BBA</p>
              <p>Contact: 9420142798</p>
            </div>          
          </div>
      </div>
      
    </div>
  </div>
);

const HomePage = () => {
 

  return (
    <div className="page home-page">
      <div className="home-content">
        <div className="home_view">
          <div className="home-text-and-image">
            <div className="home-text-content">
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
            </div>

            <motion.div
              className="home-image-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.1 }}
            >
              <img src="/images/img2.png" alt="Zodiactech Logo" className="home-image" />
            </motion.div>
          </div>
        </div>

        <h3 className="section_title">Our Services</h3>

        <motion.div
          className="features-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.4 }}
        >
          <div className="feature-card">
            <h3 className="feature-title">Cutting-edge Development</h3>
            <img src="/images/consulting.gif" alt="Cutting-edge Development" className="service_img" />
            <p className="feature-description">We use the latest technologies to build robust and scalable solutions.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Stunning Design</h3>
            <img src="/images/management.gif" alt="Stunning Design" className="service_img" />
            <p className="feature-description">Our designs are not just beautiful, they're intuitive and user-focused.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Lightning-Fast Performance</h3>
            <img src="/images/software.gif" alt="Lightning-Fast Performance" className="service_img" />
            <p className="feature-description">We optimize every aspect to ensure your digital presence is blazingly fast.</p>
          </div>
        </motion.div>

        <h3 className="section_title">Technologies We Use</h3>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            320: { // For mobile screens (320px and above)
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: { // For tablets (768px and above)
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: { // For desktops (1024px and above)
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: { // For larger desktops (1440px and above)
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="tech-carousel"
        >
          <SwiperSlide><img src="/images/nodejs.png" alt="Node.js" className="tech-logo" /></SwiperSlide>
          <SwiperSlide><img src="/images/react.png" alt="React.js" className="tech-logo" /></SwiperSlide>
          <SwiperSlide><img src="/images/html.png" alt="HTML" className="tech-logo" /></SwiperSlide>
          <SwiperSlide><img src="/images/css.png" alt="CSS" className="tech-logo" /></SwiperSlide>
          <SwiperSlide><img src="/images/js.png" alt="JavaScript" className="tech-logo" /></SwiperSlide>
          <SwiperSlide><img src="/images/python.png" alt="Python" className="tech-logo" /></SwiperSlide>
          <SwiperSlide><img src="/images/nextjs.png" alt="Next.js" className="tech-logo" /></SwiperSlide>
          <SwiperSlide><img src="/images/typescript.png" alt="TypeScript" className="tech-logo" /></SwiperSlide>
          <SwiperSlide><img src="/images/tailwind.png" alt="Tailwind CSS" className="tech-logo" /></SwiperSlide>
          <SwiperSlide><img src="/images/angular.png" alt="Angular" className="tech-logo" /></SwiperSlide>
        </Swiper>

        <motion.div
          className="contact_section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.6 }}
        >
          <div className="contact_content">
            <div className="contact_text">
              <h2 className="contact_heading">Have a Project in Mind?</h2>
              <p className="contact_description">
                Get in touch with Zodiactech to turn your ideas into reality. Our team is dedicated to providing innovative solutions tailored to your business needs. Experience the difference with our expertise and commitment to quality.
              </p>
              <Link to="/contact" className="contact_button">Contact Us</Link>
            </div>

            <motion.div className="contact_image_container">
              <img src="/images/idea.png" alt="Get in Touch" className="contact_image" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="client_carousel_section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8 }}
        >
          <h3 className="section_title">Our Clients</h3>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              320: { // For mobile screens (320px and above)
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: { // For tablets (768px and above)
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: { // For desktops (1024px and above)
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="client_carousel"
          >
            <SwiperSlide><img src="/images/Picture1.png" alt="Client 1" className="client_logo" /></SwiperSlide>
            <SwiperSlide><img src="/images/Picture2.png" alt="Client 2" className="client_logo" /></SwiperSlide>
            <SwiperSlide><img src="/images/Picture5.png" alt="Client 3" className="client_logo" /></SwiperSlide>
            <SwiperSlide><img src="/images/Picture4.png" alt="Client 4" className="client_logo" /></SwiperSlide>
            <SwiperSlide><img src="/images/Picture6.png" alt="Client 5" className="client_logo" /></SwiperSlide>
            <SwiperSlide><img src="/images/Picture7.png" alt="Client 6" className="client_logo" /></SwiperSlide>
          </Swiper>
        </motion.div>

        <ProfileCards />
      </div>

<style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 0;
          overflow-x: hidden;
        }

        .intro-video-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .intro-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
          color: #e2fdff;
          text-align: center;
        }

        .video-overlay h1 {
          font-size: 4.5rem;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .video-overlay p {
          font-size: 2rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .home-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem 2rem;
        }

        .home-page {
          background-color: white;
          color: var(--text-color);
          font-family: 'Poppins', sans-serif;
        }

        .home-text-and-image {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4rem;
        }

        .home-text-content {
          width: 60%;
          margin-right: 60px;
        }

        .home-company-name {
          font-size: 4.5rem;
          margin-bottom: 1rem;
          color: var(--primary-color);
          font-family: 'Playfair Display', serif;
        }

        .home-tagline {
          font-size: 1.5rem !important;
          color: #212529 !important;
          max-width: 800px;
          margin: 0 auto 2rem;
          font-weight: bold;
        }

        .home-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: black;
        }

        .cta-container {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .cta-button {
          display: inline-block;
          background-color: var(--primary-color);
          color: white;
          padding: 0.5rem 1rem;
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

        .home-image-container {
          max-width: 40%;
        }

        .home-image {
          max-width: 100%;
          height: auto;
        }

        .section_title {
          color: var(--primary-color);
          font-size: 2.5rem;
          text-align: center;
          margin: 4rem 0 2rem;
        }

        .features-grid {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .feature-card {
          background: #e2fdff !important;
          border-radius: 10px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
          flex: 1;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .feature-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: var(--primary-color);
        }

        .services_grid {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem;
  overflow: visible; /* Ensure content outside the cards is visible */
}

.service-card {
  position: relative;
  flex: 1 1 280px;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: visible; /* Make sure the icon outside the card is visible */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 65%;
  margin: 2rem 0 2rem 0;
  max-height: 500px;
}

.service-icon {
  font-size: 3rem;
  background-color: var(--primary-color); /* Blue color for the circle */
  color: white; /* White icon */
  border-radius: 50%; /* Makes the icon container circular */
  padding: 1.8rem;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -50px; /* Moves half of the circle outside the card */
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  border:5px solid white !important;  
 box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 4px 3px rgba(0, 0, 0, 0.08);

}

.service-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  margin-top:3.5rem;
  color: black;
}

.service-description {
  font-size: 1rem;
  color: #b0b0b0;
  position: relative;
  z-index: 2;
  flex-grow: 1; /* Allows the description to grow and fill available space */
}

.service_img {
  height: 300px;
  object-fit: cover; /* Ensures images maintain aspect ratio and cover the space */
}

.services-title, .services-subtitle{
text-align:center;
}

.services-title{
margin-top:1rem;
}

.services-subtitle{
margin-bottom: 2.5rem !important;
}

.service-content{
margin-top:100px}

@media (max-width: 768px) {

.services_grid{
margin-bottom:100px;
}
  .services-title {
    font-size: 2.5rem;
  }
  .services-subtitle {
    font-size: 1.2rem;
  }
  .service-card {
    padding: 1.5rem;
    height:65%;
    margin-top:5rem;
  }

  .service-icon {
    width:30px;
    height:30px;
    padding:1.6rem;
  }

  .service_img {
    height: 200px;
  }
}

        .feature-description {
          font-size: 0.9rem;
          color: #333;
        }

        .tech-carousel,
        .client_carousel {
          margin: 20px auto 4rem;
          width: 90%;
        }

        .tech-logo,
        .client_logo {
          max-width: 100px;
          height: auto;
          margin: 0 auto;
          transition: filter 0.3s ease-in-out;
        }

        .tech-logo:hover,
        .client_logo:hover {
          filter: grayscale(0%);
        }

        .contact_section {
          margin: 4rem 0;
          background-color: #f8f9fa;
          padding: 3rem;
          border-radius: 10px;
        }

        .contact_content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .contact_text {
          flex: 1;
        }

        .contact_heading {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .contact_description {
          font-size: 1rem;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .contact_button {
          display: inline-block;
          background-color: var(--primary-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .contact_button:hover {
          background-color: var(--secondary-color);
        }

        .contact_image_container {
          flex: 1;
          max-width: 50%;
        }

        .contact_image {
          max-width: 100%;
          height: auto;
        }

        .profile_cards_section {
          margin: 4rem 0;
          padding-top: 1rem;
        }

        .profile_cards_container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 4rem;
        }

        .profile_card {
        margin-top:50px;
          width: 300px;
          border: 1px solid #ccc;
          border-radius: 15px;
          padding: 70px 20px 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: visible;
          background-color: white;
        }

        .profile_image_container {
          width: 125px;
          height: 125px;
          position: absolute;
          top: -62.5px;
          left: calc(50% - 62.5px);
          overflow: hidden;
          border-radius: 50%;
          border: 5px solid white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .profile_image {
         width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .profile_info {
          margin-top: 10px;
          text-align: center;
        }

        .profile_name {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .profile_description {
          font-size: 0.9rem;
          color: #666;
        }

        @media (max-width: 768px) {
          .home-text-and-image {
            flex-direction: column-reverse;
            text-align: center;
          }

          .home-text-content {
            width: 100%;
            margin-right: 0;
            margin-top: 2rem;
          }

          .home-image-container {
            max-width: 80%;
          }

          .home-company-name {
            font-size: 3rem;
          }

          .home-tagline {
            font-size: 1.2rem !important;
          }

          .features-grid {
            flex-direction: column;
            width:85%;
            margin: 10px auto;
          }

          .contact_content {
            flex-direction: column;
          }

          .contact_image_container {
            max-width: 80%;
          }

          .tech-logo,
          .client_logo {
            max-width: 60px;
          }

          .profile_cards_container {
            flex-direction: column;
            align-items: center;
            margin-top: 3rem;
          }

          .profile_card {
            width: 85%;
            max-width: 300px;
            padding: 60px 20px 20px;
          }

          .profile_image_container {
            top: -20%;
          }

          .section_title {
            font-size: 2rem;
          }

          .video-overlay h1 {
            font-size: 2.5rem;
          }

          .video-overlay p {
            font-size: 1.2rem;
            margin-right:10px;
            margin-left:10px;
          }

        @media (max-width: 768px) {

.features-grid{
padding:0 !important;
}

.tech-carousel{
max-width:90%}
  .tech-logo {
    max-width: 80px;
  }
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
  
  /* Centering the buttons vertically */
    .cta-container {
      flex-direction: column;
      width:80%;
      justify-content: center;
      margin:auto;
    }

  /* Stack the text and image vertically */
  .home-text-and-image {
    flex-direction: column-reverse;
    text-align: center;
    align-items: center; /* Ensures both text and image are centered */
    justify-content: center;
  }

  /* Adjust text width and padding */
  .home-text-content {
    width: 90%;
    padding: 0 15px;
    margin-right:0 !important;
  }

  /* Center content and remove side padding */
  .home-content {
  max-width:100%;
    padding-left: 0;
    padding-right: 0;
    margin: auto;
    text-align: center;
  }

  /* Ensure the image is centered */
  .home-image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px; /* Adds space below the image */
  }

  .home-image {
    max-width: 300px; /* Adjust the size of the image for mobile */
    width: 100%;
    height: auto;
  }
  
  /* Feature grid adjusts to a single column on mobile */
  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    text-align: center; /* Center-align text for features */
  }
}
      `}</style>
    </div>
  );
};

export default HomePage;