import React, { useState, useEffect } from 'react';
import { submitContactForm, getApplication } from '../../services/api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', message: '', subject: 'General Inquiry'
  });
  const [appData, setAppData] = useState({
    contact_email: 'support@swypora.com',
    contact_phone: '+1 (555) 123-4567',
    address: '123 Business St, Suite 100, San Francisco, CA 94105'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppData = async () => {
      try {
        const data = await getApplication();
        if (data) {
          setAppData({
            contact_email: data.contact_email || 'support@swypora.com',
            contact_phone: data.contact_phone || '+1 (555) 123-4567',
            address: data.address || '123 Business St, Suite 100, San Francisco, CA 94105'
          });
        }
      } catch (err) {
        console.log('Using default contact info');
      }
    };
    fetchAppData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    try {
      await submitContactForm(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '', subject: 'General Inquiry' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="hero-section bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-purple-100">Have questions? We'd love to hear from you.</p>
          </div>
        </div>
      </section>

      <section className="contact-content py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gray-900 border border-purple-900/30 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              {success && <div className="bg-green-900/30 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-6">Thank you! Your message has been sent successfully.</div>}
              {error && <div className="bg-red-900/30 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">{error}</div>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-purple-900/30 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-purple-900/30 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-purple-900/30 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="Your company name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-gray-800 border border-purple-900/30 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-3 bg-gray-800 border border-purple-900/30 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none" placeholder="Tell us about your needs..." />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg shadow-purple-900/50 disabled:opacity-50">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8">Reach out to us through any of these channels.</p>
              </div>
              <div className="space-y-4">
                <a href={`mailto:${appData.contact_email}`} className="contact-info-card bg-gray-900 border border-purple-900/30 p-6 rounded-xl flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white mr-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                  <div><h3 className="font-semibold text-white mb-1">Email</h3><p className="text-gray-300">{appData.contact_email}</p></div>
                </a>
                {/* <a href={`tel:${appData.contact_phone}`} className="contact-info-card bg-gray-900 border border-purple-900/30 p-6 rounded-xl flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white mr-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                  <div><h3 className="font-semibold text-white mb-1">Phone</h3><p className="text-gray-300">{appData.contact_phone}</p></div>
                </a>
                <div className="bg-gray-900 border border-purple-900/30 p-6 rounded-xl flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white mr-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                  <div><h3 className="font-semibold text-white mb-1">Address</h3><p className="text-gray-300">{appData.address}</p></div>
                </div> */}
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-purple-900/30">
                <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                <p className="text-gray-300 text-sm">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p className="text-purple-400 text-sm mt-4 font-semibold">Support available 24/7 via email</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
