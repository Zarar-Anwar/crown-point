import React from 'react';
import { motion } from 'framer-motion';
import './Hardware.css';

const Hardware = () => {
  const hardware = [
    {
      name: 'CrownPoint Flex Terminal',
      description: 'All-in-one payment terminal with 7" touchscreen display, built-in receipt printer, and integrated card reader. Perfect for countertop use.',
      features: ['7" HD Touchscreen', 'Receipt Printer', 'Chip & Tap Reader', 'WiFi & Ethernet', 'Barcode Scanner Ready', 'Cash Drawer Support'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      popular: true,
    },
    {
      name: 'Mobile Card Reader',
      description: 'Portable Bluetooth card reader that connects to your smartphone or tablet. Perfect for mobile businesses, food trucks, and pop-up shops.',
      features: ['Bluetooth 5.0', 'Chip & Tap Support', 'Battery Powered (8hrs)', 'Compact Design', 'Works Offline', 'Receipt via Email/SMS'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      popular: false,
    },
    {
      name: 'CrownPoint Pro Terminal',
      description: 'Professional countertop terminal with 10" display, dual receipt printers, and advanced features for high-volume businesses.',
      features: ['10" Full HD Display', 'Dual Receipt Printers', 'Cash Drawer Support', 'Barcode Scanner', 'Customer Display', 'Multi-lane Support'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      popular: false,
    },
    {
      name: 'Kitchen Display System',
      description: 'Dedicated 15" display for kitchen staff to view and manage orders in real-time. Reduces errors and improves speed of service.',
      features: ['15" HD Display', 'Order Management', 'Status Updates', 'Multi-zone Support', 'Timer Integration', 'Printer Integration'],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      popular: false,
    },
  ];

  const bundles = [
    {
      name: 'Starter Bundle',
      description: 'Perfect for small businesses getting started',
      includes: [
        'CrownPoint Flex Terminal',
        'Mobile Card Reader',
        'Setup & Training',
        '1 Year Warranty',
      ],
    },
    {
      name: 'Professional Bundle',
      description: 'Complete solution for growing businesses',
      includes: [
        'CrownPoint Pro Terminal',
        'Kitchen Display System',
        'Mobile Card Reader (2x)',
        'Cash Drawer',
        'Setup & Training',
        '2 Year Warranty',
      ],
      popular: true,
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="hardware-page">
      <section className="hero-section bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hardware That Works
            </h1>
            <p className="text-xl text-purple-100">
              Choose from our range of payment terminals and hardware designed to fit your business needs. 
              All hardware comes with setup support and warranty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hardware Products */}
      <section className="hardware-list py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Individual Hardware
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {hardware.map((item, index) => (
              <motion.div
                key={index}
                className={`hardware-card bg-gray-900 border border-purple-900/30 p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 relative ${
                  item.popular ? 'ring-4 ring-purple-500' : ''
                }`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-purple-600 mb-4 text-center flex justify-center">{item.icon}</div>
                <h2 className="text-xl font-bold text-white mb-2 text-center">
                  {item.name}
                </h2>
                <p className="text-gray-300 mb-4 text-center text-sm">
                  {item.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Contact Sales
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hardware Bundles */}
      <section className="bundles-section py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hardware Bundles
          </motion.h2>
          <motion.p
            className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Save money with our hardware bundles. Everything you need to get started, all in one package.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {bundles.map((bundle, index) => (
              <motion.div
                key={index}
                className={`bundle-card bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 border-2 ${
                  bundle.popular ? 'border-purple-500 ring-4 ring-purple-900/30' : 'border-purple-900/30'
                }`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {bundle.popular && (
                  <div className="bg-purple-600 text-white text-center py-2 rounded-t-lg -mt-8 -mx-8 mb-4">
                    <span className="font-semibold">Best Value</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{bundle.name}</h3>
                <p className="text-gray-300 mb-4">{bundle.description}</p>
                <ul className="space-y-3 mb-6">
                  {bundle.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-purple-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    bundle.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50'
                  }`}
                >
                  Contact Sales
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hardware;
