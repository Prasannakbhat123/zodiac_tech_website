import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioData = [
  {
    title: "Interactive Projection Mapping At Dholera Stall",
    description: "Innovative interactive projection mapping showcase for Dholera Smart City project. Features gesture recognition, 3D visualizations of urban planning, and real-time data visualization. Enables visitors to explore city zones and access detailed development information through an intuitive multilingual interface.",
    video: "/images/Project_Mapping_5.mp4"
  },
  {
    title: "Light And Sound Show At Gandhi SMruti Bhavan",
    description: "Commemorative light and sound installation for the 78th Know India Programme. Created an immersive experience for international diaspora visitors from Trinidad and Tobago, Fiji, Guyana, and other nations. Features guided historical narratives and interactive educational elements.",
    video: "/images/Project_Mapping_4.mp4"
  },
  {
    title: "3D Projection Mapping at Dinosaur Museum",
    description: "India's first dinosaur museum projection mapping experience at Balasinor, Gujarat. Brings prehistoric exhibits to life through dynamic 3D animations and custom soundscapes. Features precise mapping on fossil surfaces and regularly updated paleontological content.",
    video: "/images/Project_Mapping_2.mp4"
  },
  {
    title: "Light And Sound Show At Mahatma Gandhi Museum",
    description: "Immersive audiovisual experience celebrating Gandhi's life and philosophy. Combines projection mapping, interactive displays, and traditional Indian music to create an engaging historical narrative. Features carefully preserved artifacts enhanced by modern technology.",
    video: "/images/Project_Mapping.mp4"
  },
  {
    title: "Projection Mapping on Adiyogi Statue",
    description: "Dynamic visual experience on the Adiyogi Statue in Coimbatore. Uses multiple high-powered projectors to create 3D-mapped content celebrating yoga and Indian spirituality. Features synchronized audio and stunning visual effects that complement the statue's architectural features.",
    video: "/images/Project_Mapping_3.mp4"
  },
  {
    title: "Projection Mapping At Dandi Kutir",
    description: "Interactive installation bringing the Salt March story to life. Features 3D visuals mapped onto the museum's conch shell architecture, historical imagery, and period audio. Includes interactive elements that engage visitors with Gandhi's philosophy and the independence movement.",
    video: "/images/Project_Mapping_6.mp4"
  },
  {
    title: "Project Mapping For Election Campaign",
    description: "Revolutionary political outreach using projection mapping across India. Transforms public spaces into dynamic canvases for voter engagement. Features multilingual content, real-time social media integration, and data visualization of policy information.",
    video: "/images/Project_Mapping_1.mp4"
  }
];

const PortfolioPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);

  const debounce = (func, delay) => {
    return (...args) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => func(...args), delay);
    };
  };

  const handleIndexChange = useCallback((newIndex) => {
    if (newIndex >= 0 && newIndex < portfolioData.length) {
      setDirection(newIndex > activeIndex ? 1 : -1);
      setActiveIndex(newIndex);
    }
  }, [activeIndex]);

  const debouncedIndexChange = useCallback(
    debounce(handleIndexChange, 300),
    [handleIndexChange]
  );

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      if (e.deltaY > 0 && activeIndex < portfolioData.length - 1) {
        debouncedIndexChange(activeIndex + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        debouncedIndexChange(activeIndex - 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, debouncedIndexChange]);

  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => console.error("Autoplay was prevented:", error));
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(playVideo, 1000);
    return () => clearTimeout(timer);
  }, [activeIndex, playVideo]);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="portfolio-page" ref={containerRef}>
        <div className="sidebar">
          <div className="timeline">
            <div className="timeline-spacer"></div>
            {portfolioData.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index === activeIndex ? 'active' : ''}`}
                initial={{ opacity: 0.5, x: -20 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0.5, 
                  x: 0 
                }}
                transition={{ duration: 0.5 }}
                onClick={() => handleIndexChange(index)}
              >
                <div className="bullet-point"></div>
                <span>{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="content-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="content"
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-content">
                <h2>{portfolioData[activeIndex].title}</h2>
                <p>{portfolioData[activeIndex].description}</p>
              </div>
              <div className="video-container">
                <video 
                  ref={videoRef}
                  key={portfolioData[activeIndex].video}
                  src={portfolioData[activeIndex].video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        :root {
          --primary-color: #0070f3;
        }
        
        .portfolio-page {
          display: flex;
          height: 100vh;
          background-color: #f8f9fa;
          overflow: hidden;
        }

        .sidebar {
          width: 300px;
          background-color: #ffffff;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
          z-index: 10;
          display: flex;
          flex-direction: column;
        }

        .timeline {
          height: 100%;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          overflow-y: auto;
          margin-top: 60px;
        }

        .timeline-spacer {
          height: 20px;
          min-height: 20px;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          color: #333;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 15px;
          border-radius: 8px;
          gap: 15px;
        }

        .bullet-point {
          min-width: 12px;
          width: 12px;
          height: 12px;
          background-color: #ccc;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .timeline-item.active {
          color: var(--primary-color);
          background-color: rgba(0, 0, 0, 0.05);
        }

        .timeline-item.active .bullet-point {
          background-color: var(--primary-color);
          transform: scale(1.2);
        }

        .timeline-item span {
          font-size: 1rem;
          line-height: 1.4;
          flex: 1;
        }

        .content-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 20px;
        }

        .content {
          display: flex;
          width: 100%;
          height: 100%;
          padding: 20px;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .video-container {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-container video {
          width: 100%;
          max-height: 70vh;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .text-content {
          width: 45%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        h2 {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        p {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #555;
          text-align: justify;
        }

        @media (max-width: 768px) {
          .portfolio-page {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            height: auto;
          }

          .timeline {
            flex-direction: row;
            padding: 10px;
            overflow-x: auto;
            gap: 10px;
            margin-top: 0;
          }

          .timeline-spacer {
            display: none;
          }

          .timeline-item {
            min-width: 200px;
            white-space: nowrap;
          }

          .content {
            flex-direction: column-reverse;
            padding: 20px;
            gap: 20px;
          }

          .video-container {
            width: 100%;
          }

          .video-container video {
            max-height: 50vh;
          }

          .text-content {
            width: 100%;
            padding: 0;
          }

          h2 {
            font-size: 1.8rem;
            text-align: center;
          }

          p {
            font-size: 1rem;
            text-align: center;
          }
        }

        /* Scrollbar Styling */
        .timeline::-webkit-scrollbar {
          width: 6px;
        }

        .timeline::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .timeline::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 3px;
        }

        .timeline::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;