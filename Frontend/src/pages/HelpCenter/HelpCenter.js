import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Getting Started',
    points: [
      'Set up your Swypora account and location profile.',
      'Configure product catalog, tax rules, and receipt templates.',
      'Invite staff and assign role-based permissions.',
    ],
  },
  {
    title: 'Inventory & Product Management',
    points: [
      'Enable low-stock alerts and reorder thresholds.',
      'Track product performance with real-time reporting.',
      'Manage vendor relationships and purchase workflows.',
    ],
  },
  {
    title: 'Payments & Checkout',
    points: [
      'Accept card, mobile, contactless, and split payments.',
      'Use promotions, discounts, and bundled offers.',
      'Monitor transaction history and refund operations securely.',
    ],
  },
  {
    title: 'Multi-Location Operations',
    points: [
      'Control multiple stores from one centralized back office.',
      'Review performance by location, team, and category.',
      'Standardize menus, pricing, and employee policies.',
    ],
  },
];

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-gray-300 text-lg">
            Find quick answers and practical guidance to run Swypora smoothly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-purple-900/30 rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold mb-4 text-purple-300">{section.title}</h2>
              <ul className="space-y-3 text-gray-300 text-sm">
                {section.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-gray-900 border border-purple-900/30 rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold mb-3">Still need help?</h3>
          <p className="text-gray-300 mb-6">
            Our support team is available to assist with onboarding, troubleshooting, and optimization.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;

