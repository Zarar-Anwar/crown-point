// Configuration file for API URLs
// Uses localhost in development and production domain in live environment.

const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
const isLocalNetwork =
  hostname === 'localhost' ||
  hostname === '127.0.0.1' ||
  hostname.startsWith('192.168.') ||
  hostname.startsWith('10.') ||
  hostname.startsWith('172.');

const API_BASE_URL_FROM_ENV = process.env.REACT_APP_API_BASE_URL;
const MEDIA_URL_FROM_ENV = process.env.REACT_APP_MEDIA_URL;

export const API_CONFIG = {
  // Backend API base URL
  API_BASE_URL: API_BASE_URL_FROM_ENV || (isLocalNetwork ? 'http://localhost:8000/api' : 'https://swypora.com/api'),

  // Media files URL (without trailing slash)
  MEDIA_URL: MEDIA_URL_FROM_ENV || (isLocalNetwork ? 'http://localhost:8000/media' : 'https://swypora.com/media'),
};

export default API_CONFIG;
