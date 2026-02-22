import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ThreeDCard from '../3DCard/3DCard';
import './Features.css';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px'});

  const features = [
    {
      title: 'Secure Payments',
      description: 'Bank-level encryption and PCI DSS Level 1 compliance ensure your transactions are always protected. 256-bit SSL encryption for all data transmission.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Multiple Payment Methods',
      description: 'Accept credit cards, debit cards, digital wallets (Apple Pay, Google Pay, Samsung Pay), contactless payments, and ACH transfers all in one place.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Real-Time Analytics',
      description: 'Track sales, monitor transactions, analyze customer behavior, and gain actionable insights with our comprehensive dashboard and reporting tools.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Mobile POS',
      description: 'Turn any smartphone or tablet into a point of sale system. Accept payments on-the-go with our iOS and Android mobile app. Works offline too.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Advanced Inventory Management',
      description: 'Keep track of your products with real-time inventory updates, manage stock levels, automate reordering with smart alerts, and track product performance.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Easy Integration',
      description: 'Simple REST APIs, webhooks, and plugins make it easy to integrate Swypora with your existing systems, e-commerce platforms, and accounting software.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section ref={ref} className="features bg-black py-20 relative overflow-hidden">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything You Need to Accept Payments
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Powerful features designed to help your business grow and succeed in today's digital economy.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.03, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <ThreeDCard>
                <div className="feature-card bg-gray-900 border border-purple-900/30 p-8 rounded-xl shadow-md hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 h-full">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold text-white mb-3"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  />
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
