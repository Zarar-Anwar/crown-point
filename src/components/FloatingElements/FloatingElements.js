import React from 'react';
import { motion } from 'framer-motion';
import './FloatingElements.css';

const FloatingElements = () => {
  const elements = [
    { size: 60, x: 10, y: 20, duration: 15, delay: 0 },
    { size: 80, x: 80, y: 60, duration: 20, delay: 2 },
    { size: 100, x: 50, y: 80, duration: 25, delay: 4 },
    { size: 70, x: 20, y: 70, duration: 18, delay: 1 },
    { size: 90, x: 70, y: 30, duration: 22, delay: 3 },
  ];

  return (
    <div className="floating-elements fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="floating-element absolute rounded-full bg-gradient-to-br from-purple-500/30 to-purple-700/30 blur-3xl"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
