import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioData = [
  {
    date: "Interactive Projecton Mapping At Dholera Stall",
    title: "Interactive Projecton Mapping At Dholera Stall",
    description: "Cutting-edge interactive projection mapping experience showcasing the Dholera Smart City project; transforms a standard exhibition stall into a dynamic, immersive environment that allows visitors to explore and interact with the city's planned features and infrastructure; utilizes advanced motion tracking and gesture recognition technology to create responsive projections that react to visitors' movements and touches; custom-designed 3D visuals depict the city's innovative urban planning, sustainable architecture, and state-of-the-art facilities; interactive elements enable users to virtually navigate through different zones of the smart city, access detailed information about specific developments, and visualize future growth scenarios; incorporates real-time data visualization to demonstrate smart city technologies such as traffic management, energy efficiency, and waste management systems; overcomes technical challenges of projecting onto irregular booth surfaces and compensating for ambient light conditions in varied exhibition environments; implements a user-friendly interface suitable for visitors of all ages and technical backgrounds; includes multilingual support to cater to a diverse audience; features a content management system allowing for easy updates to reflect the latest developments in the Dholera project; resulted in a highly engaging and informative exhibit that effectively communicates the vision and potential of the Dholera Smart City, significantly increasing visitor engagement and investment interest at trade shows and public events.",
    video: "/images/Project_Mapping_5.mp4"
  },
  {
    date: "Light And Sound Show At Gandhi SMruti Bhavan",
    title: "Light And Sound Show At Gandhi SMruti Bhavan",
    description: "As part of the 78th edition of the Know India Programme organized by the Ministry of External Affairs, Government of India, 40 young participants from the Indian diaspora, hailing from countries such as Trinidad and Tobago, Fiji, Guyana, Suriname, South Africa, Mauritius and Myanmar, visited Gandhi Smriti on Monday, August 19, 2024. They were given an insightful guided tour of the Gandhi Smriti Museum. Dr. Saurav Kr. Rai, Research Officer, and Shri Rajdeep Pathak, Programme Executive at GSDS, warmly welcomed the group to Gandhi Smriti. Museum guides Mr. Deepak and Mr. Harinder were also present on this special occasion, ensuring an enriching experience for all. Ms. Shalini Sharma accompanied the delegation.",
    video: "/images/Project_Mapping_4.mp4"
  },
  {
    date: "3D Projection Mapping at Dinosaur Museum",
    title: "3D Projection Mapping at Dinosaur Museum",
    description: "We are proud to be a part of India’s first dinosaur museum and fossil park at Balasinor Gujarat. Immersive 3D projection mapping experience at the Dinosaur Museum, bringing prehistoric creatures to life through cutting-edge visual technology; meticulously crafted animations transform static fossils and exhibits into dynamic, moving dinosaurs, creating a captivating journey through time; custom-designed soundscapes and narration enhance the educational value, while precisely mapped projections respect the integrity of delicate specimens; overcome challenges of projecting onto irregular surfaces and fossilized textures to achieve seamless integration of digital content with physical artifacts; implemented an adaptable system allowing for easy updates to content, ensuring the exhibit remains fresh and aligned with the latest paleontological discoveries; resulted in a transformative visitor experience that blends entertainment with education, dramatically increasing museum engagement and repeat visits.",
    video: "/images/Project_Mapping_2.mp4"
  },
  {
    date: "Light And Sound Show At Mahatma Gandhi Museum",
    title: "Light And Sound Show At Mahatma Gandhi Museum",
    description: "This immersive audiovisual experience was designed to bring the life and teachings of Mahatma Gandhi to a contemporary audience at the Gandhi Museum. The project seamlessly blended cutting-edge technology with historical narrative to create a powerful and educational spectacle. Key features: Custom-designed lighting effects to highlight architectural features and exhibits Synchronized sound system delivering a compelling narrative of Gandhi's life Projection mapping used to animate static displays and bring historical photographs to life Interactive elements allowing visitors to engage with key moments in Gandhi's journey Carefully curated soundtrack featuring traditional Indian music and important speeches The show guided visitors through Gandhi's transformative experiences, his philosophy of non-violence, and his pivotal role in India's independence movement. By harmonizing light, sound, and storytelling, we created an emotionally resonant experience that deepened visitors' understanding of Gandhi's enduring legacy. Technical challenges included preserving the integrity of historical artifacts while incorporating modern technology, and designing a system that could be easily operated by museum staff. The result was a tasteful yet impactful presentation that respected the solemnity of the subject matter while captivating audiences of all ages.",
    video: "/images/Project_Mapping.mp4"
  },
  {
    date: "Projection Mapping on Adiyogi Statue",
    title: "Projection Mapping on Adiyogi Statue",
    description: "This ambitious project involved creating a dynamic visual experience on the iconic Adiyogi Statue in Coimbatore, India. Using advanced projection mapping techniques, we transformed the statue's surface into a canvas for storytelling and artistic expression.Key aspects: Utilized multiple high-powered projectors to cover the statue's impressive scale Developed custom 3D-mapped content that accentuated the statue's unique contoursIncorporated themes of yoga, meditation, and Indian spirituality in the visual narrative Synchronized audio elements to enhance the immersive experience Overcame technical challenges like ambient light interference and surface reflectivity The result was a breathtaking display that brought the Adiyogi Statue to life, captivating audiences and showcasing the intersection of ancient spirituality and modern technology.",
    video: "/images/Project_Mapping_3.mp4"
  },
  {
    date: "Projection Mapping At Dandi Kutir",
    title: "Projection Mapping At Dandi Kutir",
    description: "Innovative projection mapping installation at Dandi Kutir, bringing to life the story of Mahatma Gandhi's Salt March and India's struggle for independence; meticulously designed 3D visuals transform the museum's unique conch shell architecture into a dynamic canvas, seamlessly blending historical imagery with contemporary digital art; custom animations highlight key moments of the Salt Satyagraha, creating an immersive narrative experience for visitors; sophisticated multi-projector setup overcomes challenges posed by the building's curved surfaces, ensuring crisp, high-resolution imagery from every angle; synchronized audio elements, including period music and voice recordings, enhance the emotional impact of the visual storytelling; interactive features allow visitors to engage with the exhibit, deepening their understanding of Gandhi's philosophy and the independence movement; careful color grading and content design respect the solemnity of the subject matter while captivating audiences of all ages; scalable content management system enables easy updates, ensuring the exhibit remains relevant and fresh for repeat visitors; resulted in a powerful, educational experience that brings history to life, significantly boosting museum attendance and engagement.",
    video: "/images/Project_Mapping_6.mp4"
  },
  {
    date: "Project Mapping For Election Campaign",
    title: "Project Mapping For Election Campaign",
    description: "Innovative projection mapping campaign revolutionizing political outreach in India's diverse electoral landscape; transforms buildings, monuments, and public spaces into massive, attention-grabbing canvases for political messaging and voter engagement; custom-designed visuals blend traditional Indian motifs with modern graphics to create culturally resonant content; incorporates multilingual projections to effectively communicate with voters across different linguistic regions; utilizes data visualization techniques to present complex policy information and achievements in easily digestible formats; features dynamic content updates to respond rapidly to evolving campaign narratives and opponent strategies; implements remote operation capabilities, allowing for simultaneous projections across multiple locations nationwide; overcomes challenges of varied architectural surfaces and unpredictable outdoor conditions through adaptive projection technologies; integrates social media interactivity, enabling real-time display of public opinions and hashtag campaigns; employs eco-friendly practices by reducing reliance on physical banners and posters; includes crowd-simulation software to optimize content visibility in high-traffic areas; adheres strictly to Election Commission guidelines while pushing creative boundaries; resulted in unprecedented voter engagement, increased political awareness, and a significant boost in voter turnout across projected areas, setting a new standard for tech-driven political campaigns in India's vibrant democracy.",
    video: "/images/Project_Mapping_1.mp4"
  },
];

const PortfolioPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

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

  const debouncedIndexChange = useCallback(debounce(handleIndexChange, 300), [handleIndexChange]);

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
    };
  }, [activeIndex, debouncedIndexChange]);

  return (
    <div className="portfolio-page" ref={containerRef}>
      <div className="timeline">
        {portfolioData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index === activeIndex ? 'active' : ''}`}
            initial={{ opacity: 0.5, y: 20 }}
            animate={{ 
              opacity: index === activeIndex ? 1 : 0.5, 
              y: index === activeIndex ? 0 : 20 
            }}
            transition={{ duration: 0.5 }}
            onClick={() => handleIndexChange(index)}
          >
            <span>{item.date}</span>
          </motion.div>
        ))}
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
            <div className="video-container">
              <video 
                src={portfolioData[activeIndex].video} 
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            </div>
            <div className="text-content">
              <h2>{portfolioData[activeIndex].title}</h2>
              <p>{portfolioData[activeIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>




      <style jsx>{`
        .portfolio-page {
          display: flex;
          height: 100vh;
          background-color: #f8f9fa;
          overflow: hidden;
        }

        .timeline {
          width: 200px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          // justify-content: center;
          background-color: #ffffff;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
          margin-top:5%;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          color: #333;
          margin-bottom: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .timeline-item.active {
          color: var(--primary-color);
          font-weight: bold;
        }

        .timeline-item span {
          margin-left: 10px;
        }

        .content-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .content {
          display: flex;
          // align-items: center;
          // justify-content: center;
          width: 100%;
          height: 100%;
          padding: 40px;
          margin-top:10%;
          max-height:80vh;
          overflow-y: scroll;
          margin-bottom:100px;
        }

        .video-container {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-container video {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .text-content {
          flex: 1;
          padding: 0 40px;
        }

        h2 {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #555;
        }

        @media (max-width: 768px) {
          .portfolio-page {
            flex-direction: column;
          }

          .timeline {
            width: 100%;
            flex-direction: row;
            overflow-x: auto;
            padding: 10px;
            margin-top:20%;
          }

          .timeline-item {
            margin-right: 20px;
            margin-bottom: 0;
            min-width:50%;
            padding:30px 0;
          }

          .content {
            flex-direction: column;
            padding: 20px;
            margin-top: 150px;
          }

          .video-container {
            width: 100%;
            margin-bottom: 20px;
          }

          .text-content {
            padding: 0;
          }

          .text-content p,.text-content h2{
          text-align:center;}

          h2 {
            font-size: 2rem;
          }

          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;