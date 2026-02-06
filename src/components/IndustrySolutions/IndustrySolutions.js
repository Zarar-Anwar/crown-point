import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './IndustrySolutions.css';

const IndustrySolutions = () => {
  const industries = [
    {
      title: 'Liquor Stores',
      description: 'Specialized POS system for liquor stores with age verification, inventory tracking for spirits, wine, and beer, and compliance reporting.',
      features: [
        'Age Verification System',
        'Liquor Inventory Management',
        'Compliance Reporting',
        'Multi-bottle Discounts',
        'Case Pricing',
        'Loyalty Programs',
      ],
      icon: '🍷',
      color: 'from-purple-600 to-purple-800',
      stats: '2,500+ Liquor Stores',
    },
    {
      title: 'Retail Stores',
      description: 'Complete retail POS solution with inventory management, employee scheduling, customer analytics, and multi-location support.',
      features: [
        'Inventory Tracking',
        'Barcode Scanning',
        'Employee Management',
        'Customer Analytics',
        'Loyalty Programs',
        'Multi-location Sync',
      ],
      icon: '🛍️',
      color: 'from-blue-600 to-blue-800',
      stats: '15,000+ Retail Stores',
    },
    {
      title: 'Restaurants',
      description: 'Full-service restaurant POS with table management, kitchen display systems, menu customization, and order tracking.',
      features: [
        'Table Management',
        'Kitchen Display System',
        'Menu Customization',
        'Order Tracking',
        'Split Bills',
        'Reservation System',
      ],
      icon: '🍽️',
      color: 'from-orange-600 to-orange-800',
      stats: '8,000+ Restaurants',
    },
    {
      title: 'Quick Service',
      description: 'Fast and efficient POS for QSR operations with drive-thru integration, mobile ordering, and rapid transaction processing.',
      features: [
        'Drive-Thru Integration',
        'Mobile Ordering',
        'Rapid Transactions',
        'Order Modifiers',
        'Upsell Prompts',
        'Speed of Service Analytics',
      ],
      icon: '🍔',
      color: 'from-red-600 to-red-800',
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
    <section className="industry-solutions bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored POS systems designed for your industry. From liquor stores to restaurants, we have the perfect solution.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industry-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={`bg-gradient-to-r ${industry.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{industry.icon}</div>
                  <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">
                    {industry.stats}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                <p className="text-white text-opacity-90">{industry.description}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/solutions"
                  className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
