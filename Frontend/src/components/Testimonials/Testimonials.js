import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTestimonials, getMediaUrl } from '../../services/api';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        // Fallback data if API fails
        setTestimonials([
          {
            client_name: 'Sarah Johnson',
            client_position: 'Owner',
            client_company: 'Bloom Boutique',
            rating: 5,
            testimonial: 'CrownPoint has transformed how we handle payments. The setup was incredibly easy, and our customers love the seamless checkout experience. Sales have increased by 30% since switching.'
          },
          {
            client_name: 'Michael Chen',
            client_position: 'CEO',
            client_company: 'TechStart Solutions',
            rating: 5,
            testimonial: 'The analytics dashboard gives us insights we never had before. We can see exactly what\'s working and make data-driven decisions.'
          },
          {
            client_name: 'Emily Rodriguez',
            client_position: 'Manager',
            client_company: 'Café Delight',
            rating: 5,
            testimonial: 'Mobile POS has been a game-changer for our food truck. We can accept payments anywhere, and the transaction speed is impressive.'
          },
          {
            client_name: 'David Martinez',
            client_position: 'Director',
            client_company: 'QuickBite Restaurant',
            rating: 5,
            testimonial: 'The kitchen display system has streamlined our operations. Orders go directly to the kitchen, reducing errors and wait times.'
          },
          {
            client_name: 'Jennifer Lee',
            client_position: 'Store Manager',
            client_company: 'Fashion Forward',
            rating: 5,
            testimonial: 'Inventory management has never been easier. We can track stock in real-time and never miss a sale.'
          },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // Auto-advance slider
  useEffect(() => {
    if (testimonials.length <= 3) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  if (loading) {
    return (
      <section className="testimonials bg-black py-20">
        <div className="container mx-auto px-4 text-center text-white">
          Loading testimonials...
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials bg-black py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Thousands of Businesses
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our customers have to say about Swypora
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Testimonial Cards */}
          <div className="flex gap-6 justify-center items-stretch">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="testimonial-card flex-1 bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-purple-900/30 shadow-md hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 min-w-[300px]"
                >
                  <div className="flex items-center mb-6">
                    {testimonial.client_photo ? (
                      <img 
                        src={getMediaUrl(testimonial.client_photo)} 
                        alt={testimonial.client_name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                    ) : (
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {testimonial.client_name?.charAt(0) || '?'}
                      </motion.div>
                    )}
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.client_name}</h4>
                      <p className="text-sm text-gray-300">
                        {testimonial.client_position}{testimonial.client_company && `, ${testimonial.client_company}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {testimonials.length > 3 && (
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-purple-600 w-8' : 'bg-gray-600 hover:bg-purple-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
