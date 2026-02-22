import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Effective date: February 2026</p>
        </motion.div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Information We Collect</h2>
            <p>
              Swypora may collect account details, business information, transaction metadata,
              support communications, and usage analytics necessary to provide and improve services.
            </p>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">How We Use Information</h2>
            <p>
              We use collected data to operate the platform, process requests, improve performance,
              provide customer support, and maintain service security and reliability.
            </p>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Data Security</h2>
            <p>
              We implement administrative, technical, and organizational safeguards designed to
              protect personal and business data against unauthorized access or misuse.
            </p>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Data Sharing</h2>
            <p>
              Swypora does not sell personal data. We may share limited data with trusted service
              providers when necessary for payment processing, analytics, support, or legal compliance.
            </p>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Your Rights</h2>
            <p>
              You may request access, correction, or deletion of eligible personal data by contacting
              our support team via the Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

