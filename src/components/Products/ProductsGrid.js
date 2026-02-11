import React from 'react';
import { motion } from 'framer-motion';
import './ProductsGrid.css';

// NOTE: Images are expected to be served from /product_images in the public folder.
// Example: public/product_images/Screenshot 2026-02-11 170909.png

const products = [
  {
    name: 'CrownPoint Duo Station',
    segment: 'Liquor & Retail',
    image: '/product_images/Screenshot 2026-02-11 170909.png',
  },
  {
    name: 'CrownPoint Compact Terminal',
    segment: 'Countertop POS',
    image: '/product_images/Screenshot 2026-02-11 170940.png',
  },
  {
    name: 'CrownPoint Flex Mobile',
    segment: 'Mobile & Delivery',
    image: '/product_images/Screenshot 2026-02-11 170956.png',
  },
  {
    name: 'CrownPoint Flex Tablet',
    segment: 'Table Service',
    image: '/product_images/Screenshot 2026-02-11 171026.png',
  },
  {
    name: 'CrownPoint Kitchen Display',
    segment: 'Kitchen Operations',
    image: '/product_images/Screenshot 2026-02-11 171038.png',
  },
  {
    name: 'CrownPoint Self-Checkout',
    segment: 'Self-Service',
    image: '/product_images/Screenshot 2026-02-11 171043.png',
  },
  {
    name: 'CrownPoint Retail Bundle',
    segment: 'Retail Stores',
    image: '/product_images/Screenshot 2026-02-11 171049.png',
  },
  {
    name: 'CrownPoint Liquor Bundle',
    segment: 'Liquor Stores',
    image: '/product_images/Screenshot 2026-02-11 171054.png',
  },
  {
    name: 'CrownPoint Quick Service Kit',
    segment: 'QSR & Fast Casual',
    image: '/product_images/Screenshot 2026-02-11 171058.png',
  },
  {
    name: 'CrownPoint Restaurant Floor',
    segment: 'Full Service Restaurants',
    image: '/product_images/Screenshot 2026-02-11 171113.png',
  },
  {
    name: 'CrownPoint Multi-Store View',
    segment: 'Multi-location Management',
    image: '/product_images/Screenshot 2026-02-11 171118.png',
  },
  {
    name: 'CrownPoint Reporting Suite',
    segment: 'Analytics & Reporting',
    image: '/product_images/Screenshot 2026-02-11 171125.png',
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

