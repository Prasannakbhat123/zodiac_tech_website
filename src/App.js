import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <Header />
      <AnimatePresence mode='wait'>
        <AnimatedRoutes />
      </AnimatePresence>
      {location.pathname !== '/portfolio' && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        
        :root {
          --primary-color: #3b82f6;
          --secondary-color: #1e40af;
          --background-color: #ffffff;
          --text-color: #333333;
          --header-bg: #edf2f4;
          --footer-bg: #111827;
        }
        
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          background-color: var(--background-color);
          color: var(--text-color);
        }
        
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </Router>
  );
};

export default App;