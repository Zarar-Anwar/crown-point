import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedGradient from '../AnimatedGradient/AnimatedGradient';
import ThreeDCard from '../3DCard/3DCard';
import ParallaxSection from '../ParallaxSection/ParallaxSection';
import './Hero.css';

const Hero = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20, z: -100 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    hover: {
      rotateY: 5,
      scale: 1.05,
      z: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatedGradient>
      <section
        ref={containerRef}
        className="hero bg-gradient-to-br from-black via-gray-900 to-black py-20 lg:py-32 overflow-hidden relative"
      >
        <motion.div
          style={{ y, opacity }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <motion.div className="text-center lg:text-left" variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  variants={itemVariants}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Payment Solutions
                  </motion.span>
                  <motion.span
                    className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mt-2"
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, type: 'spring', stiffness: 200 }}
                  >
                    That Grow Your Business
                  </motion.span>
                </motion.h1>
              </motion.div>
              <motion.p
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Accept payments anywhere, anytime with Swypora's secure and reliable payment gateway. 
                Built for modern businesses ready to scale. Trusted by 50,000+ merchants nationwide.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <Link
                    to="/contact"
                    className="btn-primary bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-2xl block relative overflow-hidden group"
                  >
                    <motion.span
                      className="relative z-10"
                      initial={false}
                      animate={{ x: 0 }}
                    >
                      Get Started Free
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <Link
                    to="/solutions"
                    className="btn-secondary bg-transparent text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-purple-600 hover:bg-purple-900/30 transition-all duration-200 block relative overflow-hidden group"
                  >
                    <motion.span
                      className="relative z-10"
                      initial={false}
                    >
                      Learn More
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-purple-50"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, staggerChildren: 0.1 }}
              >
                {['No Setup Fees', '24/7 Support', 'Secure Payments'].map((text, index) => (
                  <motion.div
                    key={text}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.7 + index * 0.1, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <motion.svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1.8 + index * 0.1, type: 'spring', stiffness: 200 }}
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </motion.svg>
                    <span>{text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Visual with 3D Card */}
            <motion.div
              className="relative"
              variants={cardVariants}
              whileHover="hover"
            >
              <ThreeDCard>
                <div className="relative bg-gray-900 border border-purple-900/50 rounded-2xl shadow-2xl shadow-purple-900/20 p-8 transform-gpu">
                  <motion.div
                    className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-white mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
<p className="text-purple-200 text-sm">Swypora</p>
                        <p className="text-2xl font-bold">Payment Terminal</p>
                      </div>
                      <motion.div
                        className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-200">Amount</span>
                        <motion.span
                          className="text-3xl font-bold"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
                        >
                          127.50
                        </motion.span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-purple-400 border-opacity-30">
                        <span className="text-purple-200">Status</span>
                        <motion.span
                          className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold"
                          initial={{ opacity: 0, scale: 0, rotate: 180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: 1.6, type: 'spring', stiffness: 200 }}
                        >
                          Approved
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="grid grid-cols-3 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    {[
                      { value: '99.9%', label: 'Uptime' },
                      { value: '2.5s', label: 'Avg Speed' },
                      { value: '256', label: 'Encryption' },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 text-center border border-purple-900/30"
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 2 + index * 0.1, type: 'spring', stiffness: 200 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                      >
                        <motion.div
                          className="text-2xl font-bold text-purple-600"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 2.2 + index * 0.1, type: 'spring', stiffness: 300 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </ThreeDCard>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </AnimatedGradient>
  );
};

export default Hero;
