import React from 'react';
import { motion } from 'framer-motion';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="loading-ring w-20 h-20 border-4 border-purple-200 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="loading-ring-2 absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-purple-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="loading-dot absolute top-1/2 left-1/2 w-3 h-3 bg-purple-600 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
