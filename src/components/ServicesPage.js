import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Film, Video, Smartphone, Globe, Megaphone, Palette,  Camera, Monitor, Building, Play, Briefcase, Tv, Box, GameController } from 'lucide-react';

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
    },
    {
      icon: Box,
      title: "Virtual Reality",
      description: "Immersive VR experiences for various industries and applications."
    },
    {
      icon: Camera,
      title: "FPV Shoots",
      description: "Dynamic first-person view cinematography for unique perspectives."
    },
    {
      icon: Monitor,
      title: "3D Modelling",
      description: "Creating detailed 3D models for various uses, from product design to animation."
    },
    {
      icon: Play,
      title: "3D Animation",
      description: "Bringing 3D models to life with fluid and engaging animations."
    },
    {
      icon: Monitor,
      title: "Medical Visualization",
      description: "Advanced 3D visualizations for medical education and research."
    },
    {
      icon: Building,
      title: "Project Mapping",
      description: "Transforming spaces with large-scale projected visuals."
    },
    {
      icon: Film,
      title: "Corporate Films",
      description: "High-quality video production for corporate communications and marketing."
    },
    {
      icon: Building,
      title: "Architectural Visualization",
      description: "Photorealistic 3D renderings of architectural designs and concepts."
    },
    {
      icon: Tv,
      title: "TVC Production",
      description: "Creating impactful television commercials to promote your brand."
    },
    {
      icon: Play,
      title: "Logo Animation",
      description: "Dynamic animated logos to enhance brand recognition."
    },
    {
      icon: Briefcase,
      title: "Branding and Identity",
      description: "Comprehensive branding solutions to establish a strong market presence."
    },
    {
      icon: Monitor,
      title: "Infographic Design",
      description: "Creating visually appealing and informative infographics."
    },
    {
      icon: Box,
      title: "3D Hologram",
      description: "Cutting-edge holographic displays for events and exhibitions."
    },
    {
      icon: Building,
      title: "Statue Mapping",
      description: "Projecting dynamic visuals onto statues and monuments."
    },
    
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

      <style jsx>{`
        .services-page {
          padding: 4rem 2rem;
          background-color: #f8f9fa;
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
          color: #6c757d;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background-color: #ffffff;
          border-radius: 10px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .service-icon {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .service-title {
          font-size: 1.5rem;
          color: #343a40;
          margin-bottom: 1rem;
        }

        .service-description {
          font-size: 1rem;
          color: #6c757d;
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
      `}</style>
    </div>
  );
};

export default ServicesPage;