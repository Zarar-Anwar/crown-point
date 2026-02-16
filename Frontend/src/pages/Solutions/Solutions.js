import React from 'react';
import { motion } from 'framer-motion';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      title: 'Retail Solutions',
      description: 'Complete POS system for retail stores with advanced inventory management, employee scheduling, customer analytics, and comprehensive loyalty programs. Perfect for clothing stores, electronics, and general merchandise.',
      features: [
        'Real-time Inventory Tracking',
        'Employee Management & Scheduling',
        'Customer Analytics & Insights',
        'Loyalty Programs & Rewards',
        'Barcode Scanning',
        'Multi-location Support',
        'Purchase Orders',
        'Vendor Management',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      stats: '15,000+ Retail Stores',
    },
    {
      title: 'Liquor Store Solutions',
      description: 'Specialized POS system designed specifically for liquor stores with age verification, compliance reporting, case pricing, and inventory management for spirits, wine, and beer. Includes state-specific compliance features.',
      features: [
        'Age Verification System',
        'Liquor Inventory Management',
        'Compliance Reporting',
        'Multi-bottle Discounts',
        'Case Pricing & Bundles',
        'Loyalty Programs',
        'State Tax Calculations',
        'Vendor Compliance Tracking',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      stats: '2,500+ Liquor Stores',
    },
    {
      title: 'Restaurant Solutions',
      description: 'Full-service restaurant POS with table management, kitchen display systems, menu customization, order tracking, and staff management. Streamline operations from order to payment.',
      features: [
        'Table Management & Floor Plans',
        'Kitchen Display System (KDS)',
        'Menu Customization & Modifiers',
        'Order Tracking & Status',
        'Split Bills & Tips',
        'Reservation System',
        'Staff Management',
        'Inventory & Recipe Management',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      stats: '8,000+ Restaurants',
    },
    {
      title: 'E-Commerce Integration',
      description: 'Seamlessly integrate CrownPoint with your online store. Accept payments, manage orders, sync inventory, and handle shipping all from one unified platform. Supports all major e-commerce platforms.',
      features: [
        'Online Payment Processing',
        'Order Management System',
        'Shipping Integration',
        'Multi-channel Inventory Sync',
        'Customer Portal',
        'Subscription Management',
        'Digital Receipts',
        'API Integration',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      stats: '5,000+ Online Stores',
    },
    {
      title: 'Mobile Payments',
      description: 'Accept payments on-the-go with our mobile POS solution. Perfect for food trucks, farmers markets, pop-up shops, delivery services, and any business that needs mobility.',
      features: [
        'iOS & Android Mobile App',
        'Bluetooth Card Reader',
        'Digital Receipts (Email/SMS)',
        'Offline Mode Support',
        'GPS Location Tracking',
        'Photo Receipts',
        'Tip Management',
        'Inventory on-the-go',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      stats: '10,000+ Mobile Users',
    },
    {
      title: 'Quick Service (QSR)',
      description: 'Fast and efficient POS for quick service restaurants with drive-thru integration, mobile ordering, rapid transaction processing, and speed of service analytics.',
      features: [
        'Drive-Thru Integration',
        'Mobile Ordering & Pickup',
        'Rapid Transaction Processing',
        'Order Modifiers & Upsells',
        'Speed of Service Analytics',
        'Kitchen Timers',
        'Loyalty & Rewards',
        'Multi-lane Support',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stats: '5,000+ QSR Locations',
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
    <div className="solutions-page">
      <section className="hero-section bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions for Every Business
            </h1>
            <p className="text-xl text-purple-100">
              Whether you run a retail store, restaurant, liquor store, or online business, we have the perfect payment solution tailored for your industry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="solutions-list py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="solution-card bg-gray-900 border border-purple-900/30 p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-purple-600">{solution.icon}</div>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {solution.stats}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="mt-6 text-purple-400 font-semibold hover:text-purple-300 transition-colors inline-flex items-center"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
