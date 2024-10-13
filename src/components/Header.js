import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <header className="bg-gray-900 shadow-md py-4">
      <nav className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2 sm:mb-0">
            Company Name
          </Link>
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
            {navItems.map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`capitalize text-sm sm:text-base px-2 py-1 ${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-300'
                  }`}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;