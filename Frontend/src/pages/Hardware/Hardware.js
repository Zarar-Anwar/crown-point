import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getHardware, getHardwareCategories, getMediaUrl } from '../../services/api';
import './Hardware.css';

const Hardware = () => {
  const [hardware, setHardware] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hardwareData, categoriesData] = await Promise.all([
          getHardware(),
          getHardwareCategories()
        ]);
        setHardware(hardwareData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching hardware:', error);
        setHardware([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredHardware = selectedCategory
    ? hardware.filter(h => h.category?.slug === selectedCategory)
    : hardware;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (loading) {
    return (
      <div className="hardware-page min-h-screen bg-black flex items-center justify-center">
        <div className="text-purple-500 text-xl">Loading hardware...</div>
      </div>
    );
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hardware That Works</h1>
            <p className="text-xl text-purple-100">
              Choose from our range of payment terminals and hardware designed to fit your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 bg-gray-900 border-b border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === null ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-purple-900'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === cat.slug ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-purple-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="hardware-list py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredHardware.length === 0 ? (
            <div className="text-center text-gray-400 py-20">
              <p>No hardware products available.</p>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {filteredHardware.map((item) => (
                <motion.div
                  key={item.id}
                  className="hardware-card bg-gray-900 border border-purple-900/30 p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 relative"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {item.is_featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  
                  <div className="h-48 mb-4 flex items-center justify-center bg-gray-800 rounded-lg overflow-hidden">
                    {item.image ? (
                      <img 
                        src={getMediaUrl(item.image)} 
                        alt={item.name}
                        className="w-full h-full object-contain p-4"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '';
                        }}
                      />
                    ) : (
                      <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    )}
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-2 text-center">{item.name}</h2>
                  <p className="text-gray-300 mb-4 text-center text-sm">{item.description}</p>
                  
                  {item.features && item.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {item.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Contact Sales
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Hardware;
