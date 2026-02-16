// API Service for connecting to Django backend
import { API_CONFIG } from '../config';

// Helper function for fetch
const fetchAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_CONFIG.API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Helper function to get full media URL
// The backend returns full path like: /media/core/application/images/logo3.png
export const getMediaUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  
  // Backend returns path starting with /media/, so just use it directly
  // Combine with the base URL
  const baseUrl = API_CONFIG.MEDIA_URL.replace('/media', ''); // http://localhost:8000
  return `${baseUrl}${path}`;
};

// Application Settings
export const getApplication = () => fetchAPI('/application/');

// Hardware
export const getHardware = () => fetchAPI('/hardware/');
export const getHardwareCategories = () => fetchAPI('/hardware-categories/');
export const getHardwareBySlug = (slug) => fetchAPI(`/hardware/${slug}/`);

// Pricing
export const getPricing = () => fetchAPI('/pricing/');

// Solutions
export const getSolutions = () => fetchAPI('/solutions/');

// Contact & Forms
export const submitContactForm = (data) => 
  fetchAPI('/contact-us/', {
    method: 'POST',
    body: JSON.stringify(data),
  });

export const submitQuoteRequest = (data) => 
  fetchAPI('/quote-request/', {
    method: 'POST',
    body: JSON.stringify(data),
  });

export const subscribeNewsletter = (data) => 
  fetchAPI('/newsletter/subscribe/', {
    method: 'POST',
    body: JSON.stringify(data),
  });

// Get Started Form (new)
export const submitGetStarted = (data) => 
  fetchAPI('/get-started/', {
    method: 'POST',
    body: JSON.stringify(data),
  });

// Content
export const getTestimonials = () => fetchAPI('/testimonials/');
export const getFAQs = () => fetchAPI('/faqs/');

export default {
  getApplication,
  getHardware,
  getHardwareCategories,
  getPricing,
  getSolutions,
  submitContactForm,
  submitQuoteRequest,
  subscribeNewsletter,
  submitGetStarted,
  getTestimonials,
  getFAQs,
  getMediaUrl,
};
