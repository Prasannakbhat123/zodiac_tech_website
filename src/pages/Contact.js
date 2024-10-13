import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, Phone } from 'lucide-react';

const Contact = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4 text-blue-400">Contact Us</h2>
      <div className="flex flex-col items-center space-y-4 mt-6">
        <motion.a
          href="mailto:info@company.com"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail /> <span>info@company.com</span>
        </motion.a>
        <motion.a
          href="tel:+1234567890"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone /> <span>+1 (234) 567-890</span>
        </motion.a>
        <motion.a
          href="https://www.company.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe /> <span>www.company.com</span>
        </motion.a>
      </div>
    </div>
  </div>
);

export default Contact;