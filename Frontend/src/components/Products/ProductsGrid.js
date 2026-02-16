import React from 'react';
import { motion } from 'framer-motion';
import './ProductsGrid.css';

// We first try to load your local screenshots from /product_images.
// If they are missing (e.g. on Netlify), we gracefully fall back to
// similar online images so cards never look broken.
const products = [
  {
    name: 'CrownPoint Duo Station',
    segment: 'Liquor & Retail',
    image: '/product_images/Screenshot 2026-02-11 170909.png',
    fallback:
      'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1200', // POS terminal on counter
  },
  {
    name: 'CrownPoint Compact Terminal',
    segment: 'Countertop POS',
    image: '/product_images/Screenshot 2026-02-11 170940.png',
    fallback:
      'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1200', // Compact terminal
  },
  {
    name: 'CrownPoint Flex Mobile',
    segment: 'Mobile & Delivery',
    image: '/product_images/Screenshot 2026-02-11 170956.png',
    fallback:
      'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1200', // Handheld terminal
  },
  {
    name: 'CrownPoint Flex Tablet',
    segment: 'Table Service',
    image: '/product_images/Screenshot 2026-02-11 171026.png',
    fallback:
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1200', // Tablet POS
  },
  {
    name: 'CrownPoint Kitchen Display',
    segment: 'Kitchen Operations',
    image: '/product_images/Screenshot 2026-02-11 171038.png',
    fallback:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'CrownPoint Self-Checkout',
    segment: 'Self-Service',
    image: '/product_images/Screenshot 2026-02-11 171043.png',
    fallback:
      'https://images.pexels.com/photos/5632408/pexels-photo-5632408.jpeg?auto=compress&cs=tinysrgb&w=1200', // Self-checkout device
  },
  {
    name: 'CrownPoint Retail Bundle',
    segment: 'Retail Stores',
    image: '/product_images/Screenshot 2026-02-11 171049.png',
    fallback:
      'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'CrownPoint Liquor Bundle',
    segment: 'Liquor Stores',
    image: '/product_images/Screenshot 2026-02-11 171054.png',
    fallback:
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'CrownPoint Quick Service Kit',
    segment: 'QSR & Fast Casual',
    image: '/product_images/Screenshot 2026-02-11 171058.png',
    fallback:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'CrownPoint Restaurant Floor',
    segment: 'Full Service Restaurants',
    image: '/product_images/Screenshot 2026-02-11 171113.png',
    fallback:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'CrownPoint Multi-Store View',
    segment: 'Multi-location Management',
    image: '/product_images/Screenshot 2026-02-11 171118.png',
    fallback:
      'https://images.pexels.com/photos/705674/pexels-photo-705674.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'CrownPoint Reporting Suite',
    segment: 'Analytics & Reporting',
    image: '/product_images/Screenshot 2026-02-11 171125.png',
    fallback:
      'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ProductsGrid = () => {
  return (
    <section className="products-grid-section bg-black py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            CrownPoint Product Line
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Purpose-built hardware and software combinations for liquor stores, retail, restaurants,
            and quick service operations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="product-card bg-gray-900 border border-purple-900/30 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-900/30 transition-all duration-300 flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    if (product.fallback && e.target.src !== product.fallback) {
                      // Fallback to online image if local file is missing
                      e.target.onerror = null;
                      e.target.src = product.fallback;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">
                    {product.name}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-600 text-white">
                    {product.segment}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex items-center justify-between">
                <div className="text-xs text-gray-400">
                  Optimized for <span className="text-purple-400 font-medium">{product.segment}</span>
                </div>
                <div className="text-xs text-purple-400 font-semibold">
                  Contact sales for details
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsGrid;

