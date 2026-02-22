import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-300">Effective date: February 2026</p>
        </motion.div>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Acceptance of Terms</h2>
            <p>
              By accessing or using Swypora services, you agree to these Terms of Service and all
              applicable laws and regulations.
            </p>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Use of Services</h2>
            <p>
              You agree to use Swypora services only for lawful business purposes and in accordance
              with platform policies, documentation, and operational guidelines.
            </p>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Account Responsibility</h2>
            <p>
              You are responsible for maintaining account security, managing credentials, and ensuring
              authorized use by your team members and representatives.
            </p>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Billing and Subscriptions</h2>
            <p>
              Fees, billing cycles, and subscription terms are defined by your selected plan and
              applicable service agreement. Late or unpaid balances may affect access to services.
            </p>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Limitation of Liability</h2>
            <p>
              Swypora is provided on an as-available basis. To the maximum extent permitted by law,
              Swypora is not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the platform after updates
              constitutes acceptance of the revised terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

