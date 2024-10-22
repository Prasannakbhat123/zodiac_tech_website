import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCrnVg7L7ssR2TJ-48ETCJb7R9Vsr-vDS0",
  authDomain: "website-df5c8.firebaseapp.com",
  projectId: "website-df5c8",
  storageBucket: "website-df5c8.appspot.com",
  messagingSenderId: "550321217015",
  appId: "1:550321217015:web:526b067641da4bc91e62f2",
  measurementId: "G-6TDPCMLHBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const GalleryPage = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const q = query(collection(db, 'gallery'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setGalleryItems(items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching gallery items:", error);
      setLoading(false);
    }
  };

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.fileType === selectedFilter);

  return (
    <div className="page gallery-page">
      <div className="gallery-content">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="gallery-title">Our Gallery</h1>
          <p className="gallery-subtitle">Explore our creative journey through visuals</p>
        </motion.div>

        <motion.div
          className="filter-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button 
            className={`filter-button ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${selectedFilter === 'image' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('image')}
          >
            Images
          </button>
          <button 
            className={`filter-button ${selectedFilter === 'video' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('video')}
          >
            Videos
          </button>
        </motion.div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading gallery content...</p>
          </div>
        ) : (
          <motion.div 
            className="gallery-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="media-container">
                  {item.fileType === 'video' ? (
                    <video 
                      src={item.fileUrl} 
                      controls 
                      className="gallery-media"
                      poster="/images/video-placeholder.jpg"
                    />
                  ) : (
                    <img 
                      src={item.fileUrl} 
                      alt={item.title} 
                      className="gallery-media"
                    />
                  )}
                </div>
                <div className="item-info">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .gallery-page {
          min-height: 100vh;
          background-color: #f8f9fa;
          padding-top: 80px;
        }

        .gallery-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .gallery-title {
          font-size: 3rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
        }

        .gallery-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
        }

        .filter-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .filter-button {
          background: transparent;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .filter-button:hover {
          background: var(--primary-color);
          color: white;
        }

        .filter-button.active {
          background: var(--primary-color);
          color: white;
        }

        .loading-container {
          text-align: center;
          padding: 3rem;
          color: #666;
        }

        .loading-spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid var(--primary-color);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          padding: 1rem 0;
        }

        .gallery-item {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .media-container {
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .gallery-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-media {
          transform: scale(1.05);
        }

        .item-info {
          padding: 1.5rem;
        }

        .item-title {
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .item-description {
          color: #6c757d;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .gallery-content {
            padding: 1rem;
          }

          .gallery-title {
            font-size: 2rem;
          }

          .gallery-subtitle {
            font-size: 1rem;
          }

          .filter-container {
            flex-wrap: wrap;
          }

          .filter-button {
            width: calc(50% - 0.5rem);
            text-align: center;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .media-container {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;