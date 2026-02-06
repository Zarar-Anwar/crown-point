import React from 'react';
import { motion } from 'framer-motion';
import './Hardware.css';

const Hardware = () => {
  const hardware = [
    {
      name: 'CrownPoint Flex Terminal',
      description: 'All-in-one payment terminal with 7" touchscreen display, built-in receipt printer, and integrated card reader. Perfect for countertop use.',
      price: '$299',
      originalPrice: '$399',
      features: ['7" HD Touchscreen', 'Receipt Printer', 'Chip & Tap Reader', 'WiFi & Ethernet', 'Barcode Scanner Ready', 'Cash Drawer Support'],
      image: '💳',
      popular: true,
    },
    {
      name: 'Mobile Card Reader',
      description: 'Portable Bluetooth card reader that connects to your smartphone or tablet. Perfect for mobile businesses, food trucks, and pop-up shops.',
      price: '$49',
      originalPrice: '$79',
      features: ['Bluetooth 5.0', 'Chip & Tap Support', 'Battery Powered (8hrs)', 'Compact Design', 'Works Offline', 'Receipt via Email/SMS'],
      image: '📱',
      popular: false,
    },
    {
      name: 'CrownPoint Pro Terminal',
      description: 'Professional countertop terminal with 10" display, dual receipt printers, and advanced features for high-volume businesses.',
      price: '$599',
      originalPrice: '$799',
      features: ['10" Full HD Display', 'Dual Receipt Printers', 'Cash Drawer Support', 'Barcode Scanner', 'Customer Display', 'Multi-lane Support'],
      image: '🖥️',
      popular: false,
    },
    {
      name: 'Kitchen Display System',
      description: 'Dedicated 15" display for kitchen staff to view and manage orders in real-time. Reduces errors and improves speed of service.',
      price: '$249',
      originalPrice: '$349',
      features: ['15" HD Display', 'Order Management', 'Status Updates', 'Multi-zone Support', 'Timer Integration', 'Printer Integration'],
      image: '📺',
      popular: false,
    },
  ];

  const bundles = [
    {
      name: 'Starter Bundle',
      description: 'Perfect for small businesses getting started',
      price: '$349',
      savings: 'Save $99',
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
      price: '$899',
      savings: 'Save $249',
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
      <section className="hero-section bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
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
      <section className="hardware-list py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
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
                className={`hardware-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative ${
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
                <div className="text-6xl mb-4 text-center">{item.image}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {item.name}
                </h2>
                <p className="text-gray-600 mb-4 text-center text-sm">
                  {item.description}
                </p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="text-3xl font-bold text-purple-600">
                    {item.price}
                  </div>
                  {item.originalPrice && (
                    <div className="text-lg text-gray-400 line-through">
                      {item.originalPrice}
                    </div>
                  )}
                </div>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Order Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hardware Bundles */}
      <section className="bundles-section py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hardware Bundles
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
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
                className={`bundle-card bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  bundle.popular ? 'border-purple-500 ring-4 ring-purple-200' : 'border-purple-100'
                }`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {bundle.popular && (
                  <div className="bg-purple-600 text-white text-center py-2 rounded-t-lg -mt-8 -mx-8 mb-4">
                    <span className="font-semibold">Best Value</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{bundle.name}</h3>
                <p className="text-gray-600 mb-4">{bundle.description}</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <div className="text-4xl font-bold text-purple-600">{bundle.price}</div>
                  <div className="text-purple-600 font-semibold">{bundle.savings}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {bundle.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
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
                  Order Bundle
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
